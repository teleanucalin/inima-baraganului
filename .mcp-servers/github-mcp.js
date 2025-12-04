#!/usr/bin/env node

/**
 * GitHub MCP Server
 *
 * Wrapper peste GitHub CLI (gh) pentru operații Git și GitHub
 * Implementează Model Context Protocol pentru Claude Code
 */

const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// MCP Server implementation
class GitHubMCP {
  constructor() {
    this.name = 'github-mcp';
    this.version = '1.0.0';
  }

  async execute(command, args = []) {
    const cmd = `gh ${command} ${args.join(' ')}`;
    try {
      const { stdout, stderr } = await execAsync(cmd);
      return {
        success: true,
        stdout: stdout.trim(),
        stderr: stderr.trim()
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        stderr: error.stderr
      };
    }
  }

  // Git operations
  async gitStatus() {
    try {
      const { stdout, stderr } = await execAsync('git status --porcelain');
      return {
        success: true,
        stdout: stdout.trim(),
        stderr: stderr.trim()
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  async gitDiff() {
    try {
      const { stdout, stderr } = await execAsync('git diff');
      return {
        success: true,
        stdout: stdout.trim(),
        stderr: stderr.trim()
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  async gitLog(limit = 10) {
    try {
      const { stdout, stderr } = await execAsync(`git log --oneline -n ${limit}`);
      return {
        success: true,
        stdout: stdout.trim(),
        stderr: stderr.trim()
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // GitHub operations
  async prList() {
    return this.execute('pr', ['list']);
  }

  async prCreate(title, body) {
    return this.execute('pr', ['create', '--title', `"${title}"`, '--body', `"${body}"`]);
  }

  async prView(number) {
    return this.execute('pr', ['view', number]);
  }

  async issueList() {
    return this.execute('issue', ['list']);
  }

  async repoView() {
    return this.execute('repo', ['view']);
  }
}

// MCP Protocol handler
async function handleRequest(request) {
  const mcp = new GitHubMCP();

  switch (request.method) {
    case 'git/status':
      return await mcp.gitStatus();

    case 'git/diff':
      return await mcp.gitDiff();

    case 'git/log':
      return await mcp.gitLog(request.params?.limit);

    case 'pr/list':
      return await mcp.prList();

    case 'pr/create':
      return await mcp.prCreate(request.params.title, request.params.body);

    case 'pr/view':
      return await mcp.prView(request.params.number);

    case 'issue/list':
      return await mcp.issueList();

    case 'repo/view':
      return await mcp.repoView();

    default:
      return {
        success: false,
        error: `Unknown method: ${request.method}`
      };
  }
}

// Start server
if (require.main === module) {
  console.log('GitHub MCP Server started');
  console.log('GitHub CLI version:', process.env.GH_VERSION || 'unknown');

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

module.exports = GitHubMCP;
