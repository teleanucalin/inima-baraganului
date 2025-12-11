#!/usr/bin/env node

/**
 * Memory/Context MCP Server
 *
 * Persistent memory și context management pentru Claude Code
 * Stochează decisions, patterns, și context între sesiuni
 */

const fs = require('fs').promises;
const path = require('path');

class MemoryMCP {
  constructor(storagePath) {
    this.storagePath = storagePath || path.join(process.cwd(), '.mcp-memory');
    this.name = 'memory-mcp';
    this.version = '1.0.0';
    this.memoryFile = path.join(this.storagePath, 'memory.json');
  }

  async init() {
    try {
      await fs.mkdir(this.storagePath, { recursive: true });

      try {
        await fs.access(this.memoryFile);
      } catch {
        await fs.writeFile(this.memoryFile, JSON.stringify({
          context: {},
          decisions: [],
          patterns: [],
          notes: [],
          metadata: {
            created: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
          }
        }, null, 2));
      }
    } catch (error) {
      console.error('Failed to initialize memory storage:', error);
    }
  }

  async readMemory() {
    try {
      const data = await fs.readFile(this.memoryFile, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return {
        context: {},
        decisions: [],
        patterns: [],
        notes: [],
        metadata: {}
      };
    }
  }

  async writeMemory(memory) {
    memory.metadata.lastUpdated = new Date().toISOString();
    await fs.writeFile(this.memoryFile, JSON.stringify(memory, null, 2));
  }

  // Store context
  async storeContext(key, value, tags = []) {
    const memory = await this.readMemory();

    memory.context[key] = {
      value,
      tags,
      timestamp: new Date().toISOString()
    };

    await this.writeMemory(memory);

    return {
      success: true,
      message: `Context '${key}' stored`
    };
  }

  // Get context
  async getContext(key) {
    const memory = await this.readMemory();

    if (!memory.context[key]) {
      return {
        success: false,
        error: `Context '${key}' not found`
      };
    }

    return {
      success: true,
      data: memory.context[key]
    };
  }

  // List all context
  async listContext(tag = null) {
    const memory = await this.readMemory();

    let contexts = Object.entries(memory.context);

    if (tag) {
      contexts = contexts.filter(([_, ctx]) => ctx.tags.includes(tag));
    }

    return {
      success: true,
      contexts: contexts.map(([key, ctx]) => ({
        key,
        value: ctx.value,
        tags: ctx.tags,
        timestamp: ctx.timestamp
      }))
    };
  }

  // Store decision
  async storeDecision(title, description, rationale, tags = []) {
    const memory = await this.readMemory();

    memory.decisions.push({
      id: Date.now().toString(),
      title,
      description,
      rationale,
      tags,
      timestamp: new Date().toISOString()
    });

    await this.writeMemory(memory);

    return {
      success: true,
      message: 'Decision recorded'
    };
  }

  // Get decisions
  async getDecisions(tag = null, limit = 10) {
    const memory = await this.readMemory();

    let decisions = memory.decisions;

    if (tag) {
      decisions = decisions.filter(d => d.tags.includes(tag));
    }

    // Most recent first
    decisions = decisions.slice(-limit).reverse();

    return {
      success: true,
      decisions
    };
  }

  // Store pattern
  async storePattern(name, description, example, tags = []) {
    const memory = await this.readMemory();

    memory.patterns.push({
      id: Date.now().toString(),
      name,
      description,
      example,
      tags,
      timestamp: new Date().toISOString()
    });

    await this.writeMemory(memory);

    return {
      success: true,
      message: 'Pattern stored'
    };
  }

  // Get patterns
  async getPatterns(tag = null) {
    const memory = await this.readMemory();

    let patterns = memory.patterns;

    if (tag) {
      patterns = patterns.filter(p => p.tags.includes(tag));
    }

    return {
      success: true,
      patterns
    };
  }

  // Store note
  async storeNote(content, tags = []) {
    const memory = await this.readMemory();

    memory.notes.push({
      id: Date.now().toString(),
      content,
      tags,
      timestamp: new Date().toISOString()
    });

    await this.writeMemory(memory);

    return {
      success: true,
      message: 'Note saved'
    };
  }

  // Search memory
  async search(query) {
    const memory = await this.readMemory();
    const results = {
      context: [],
      decisions: [],
      patterns: [],
      notes: []
    };

    const queryLower = query.toLowerCase();

    // Search context
    for (const [key, ctx] of Object.entries(memory.context)) {
      if (
        key.toLowerCase().includes(queryLower) ||
        JSON.stringify(ctx.value).toLowerCase().includes(queryLower)
      ) {
        results.context.push({ key, ...ctx });
      }
    }

    // Search decisions
    results.decisions = memory.decisions.filter(d =>
      d.title.toLowerCase().includes(queryLower) ||
      d.description.toLowerCase().includes(queryLower) ||
      d.rationale.toLowerCase().includes(queryLower)
    );

    // Search patterns
    results.patterns = memory.patterns.filter(p =>
      p.name.toLowerCase().includes(queryLower) ||
      p.description.toLowerCase().includes(queryLower)
    );

    // Search notes
    results.notes = memory.notes.filter(n =>
      n.content.toLowerCase().includes(queryLower)
    );

    return {
      success: true,
      results
    };
  }

  // Clear memory
  async clear(type = null) {
    const memory = await this.readMemory();

    if (!type) {
      // Clear all
      memory.context = {};
      memory.decisions = [];
      memory.patterns = [];
      memory.notes = [];
    } else {
      // Clear specific type
      if (memory[type]) {
        memory[type] = Array.isArray(memory[type]) ? [] : {};
      }
    }

    await this.writeMemory(memory);

    return {
      success: true,
      message: type ? `${type} cleared` : 'All memory cleared'
    };
  }

  // Export memory
  async export() {
    const memory = await this.readMemory();
    return {
      success: true,
      data: memory
    };
  }

  // Import memory
  async import(data) {
    await this.writeMemory(data);
    return {
      success: true,
      message: 'Memory imported'
    };
  }
}

// MCP Protocol handler
async function handleRequest(request) {
  const storagePath = process.env.MCP_STORAGE_PATH || path.join(process.cwd(), '.mcp-memory');
  const mcp = new MemoryMCP(storagePath);
  await mcp.init();

  const { method, params = {} } = request;

  switch (method) {
    case 'memory/store-context':
      return await mcp.storeContext(params.key, params.value, params.tags);

    case 'memory/get-context':
      return await mcp.getContext(params.key);

    case 'memory/list-context':
      return await mcp.listContext(params.tag);

    case 'memory/store-decision':
      return await mcp.storeDecision(
        params.title,
        params.description,
        params.rationale,
        params.tags
      );

    case 'memory/get-decisions':
      return await mcp.getDecisions(params.tag, params.limit);

    case 'memory/store-pattern':
      return await mcp.storePattern(
        params.name,
        params.description,
        params.example,
        params.tags
      );

    case 'memory/get-patterns':
      return await mcp.getPatterns(params.tag);

    case 'memory/store-note':
      return await mcp.storeNote(params.content, params.tags);

    case 'memory/search':
      return await mcp.search(params.query);

    case 'memory/clear':
      return await mcp.clear(params.type);

    case 'memory/export':
      return await mcp.export();

    case 'memory/import':
      return await mcp.import(params.data);

    default:
      return {
        success: false,
        error: `Unknown method: ${method}`
      };
  }
}

// Start server
if (require.main === module) {
  console.log('Memory MCP Server started');
  console.log('Storage path:', process.env.MCP_STORAGE_PATH || path.join(process.cwd(), '.mcp-memory'));

  // Initialize
  const storagePath = process.env.MCP_STORAGE_PATH || path.join(process.cwd(), '.mcp-memory');
  const mcp = new MemoryMCP(storagePath);
  mcp.init().then(() => {
    console.log('Memory storage initialized');

    // Simple STDIO-based MCP server
    process.stdin.on('data', async (data) => {
      try {
        const request = JSON.parse(data.toString());
        const response = await handleRequest(request);
        process.stdout.write(JSON.stringify(response) + '\n');
      } catch (error) {
        process.stdout.write(JSON.stringify({
          success: false,
          error: error.message
        }) + '\n');
      }
    });
  });
}

module.exports = MemoryMCP;
