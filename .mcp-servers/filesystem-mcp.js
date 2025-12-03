#!/usr/bin/env node

/**
 * Filesystem MCP Server
 *
 * Safe filesystem operations pentru Claude Code
 * Implementează Model Context Protocol
 */

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

class FilesystemMCP {
  constructor(basePath) {
    this.basePath = basePath || process.cwd();
    this.name = 'filesystem-mcp';
    this.version = '1.0.0';
  }

  // Validează că path-ul e în basePath (security)
  validatePath(filePath) {
    const absolute = path.resolve(this.basePath, filePath);
    if (!absolute.startsWith(this.basePath)) {
      throw new Error('Path outside of allowed directory');
    }
    return absolute;
  }

  // List files cu pattern
  async listFiles(pattern = '*', directory = '.') {
    const dir = this.validatePath(directory);
    try {
      const { stdout } = await execAsync(`find "${dir}" -name "${pattern}" -type f`);
      return {
        success: true,
        files: stdout.trim().split('\n').filter(Boolean)
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Search în fișiere
  async searchInFiles(pattern, filePattern = '*', directory = '.') {
    const dir = this.validatePath(directory);
    try {
      const { stdout } = await execAsync(
        `grep -r "${pattern}" "${dir}" --include="${filePattern}" || true`
      );
      return {
        success: true,
        matches: stdout.trim().split('\n').filter(Boolean)
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get file stats
  async getStats(filePath) {
    try {
      const absolute = this.validatePath(filePath);
      const stats = await fs.stat(absolute);
      return {
        success: true,
        stats: {
          size: stats.size,
          modified: stats.mtime,
          created: stats.birthtime,
          isDirectory: stats.isDirectory(),
          isFile: stats.isFile()
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // List directory
  async listDirectory(dirPath = '.') {
    try {
      const absolute = this.validatePath(dirPath);
      const entries = await fs.readdir(absolute, { withFileTypes: true });

      const items = await Promise.all(
        entries.map(async (entry) => {
          const fullPath = path.join(absolute, entry.name);
          const stats = await fs.stat(fullPath);
          return {
            name: entry.name,
            type: entry.isDirectory() ? 'directory' : 'file',
            size: stats.size,
            modified: stats.mtime
          };
        })
      );

      return {
        success: true,
        items
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Watch for changes (simple implementation)
  async watchFiles(pattern, callback) {
    const dir = this.validatePath('.');
    try {
      const watcher = await fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (filename && filename.match(new RegExp(pattern))) {
          callback({
            event: eventType,
            file: filename,
            timestamp: new Date()
          });
        }
      });

      return {
        success: true,
        watcher
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Bulk operations
  async bulkRename(pattern, replacement, directory = '.') {
    const dir = this.validatePath(directory);
    try {
      // Using string concatenation to avoid template literal conflicts
      const cmd = 'find "' + dir + '" -name "' + pattern + '" -type f -exec bash -c \'mv "$0" "${0/' + pattern + '/' + replacement + '}"\' {} \\;';
      const { stdout } = await execAsync(cmd);
      return {
        success: true,
        message: 'Files renamed successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// MCP Protocol handler
async function handleRequest(request) {
  const basePath = process.env.MCP_BASE_PATH || process.cwd();
  const mcp = new FilesystemMCP(basePath);

  switch (request.method) {
    case 'fs/list':
      return await mcp.listFiles(
        request.params?.pattern,
        request.params?.directory
      );

    case 'fs/search':
      return await mcp.searchInFiles(
        request.params.pattern,
        request.params?.filePattern,
        request.params?.directory
      );

    case 'fs/stats':
      return await mcp.getStats(request.params.path);

    case 'fs/listdir':
      return await mcp.listDirectory(request.params?.path);

    case 'fs/bulk-rename':
      return await mcp.bulkRename(
        request.params.pattern,
        request.params.replacement,
        request.params?.directory
      );

    default:
      return {
        success: false,
        error: `Unknown method: ${request.method}`
      };
  }
}

// Start server
if (require.main === module) {
  console.log('Filesystem MCP Server started');
  console.log('Base path:', process.env.MCP_BASE_PATH || process.cwd());

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
}

module.exports = FilesystemMCP;
