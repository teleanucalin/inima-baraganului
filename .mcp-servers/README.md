# 🔌 CUSTOM MCP SERVERS - INIMA BĂRĂGANULUI

Custom Model Context Protocol servers pentru Claude Code

---

## 📦 MCP-URI DISPONIBILE

### 1. 🐙 GitHub MCP (`github-mcp.js`)

**Funcționalități:**
- Git operations: status, diff, log
- GitHub operations: PR list/create/view, issues, repo info
- Wrapper peste GitHub CLI (gh)

**Metode disponibile:**
- `git/status` - Git status
- `git/diff` - Git diff
- `git/log` - Git log (params: limit)
- `pr/list` - List pull requests
- `pr/create` - Create PR (params: title, body)
- `pr/view` - View PR (params: number)
- `issue/list` - List issues
- `repo/view` - View repo info

---

### 2. 🗂️ Filesystem MCP (`filesystem-mcp.js`)

**Funcționalități:**
- Safe filesystem operations în basePath
- Search și pattern matching
- Bulk operations
- File watching

**Metode disponibile:**
- `fs/list` - List files (params: pattern, directory)
- `fs/search` - Search in files (params: pattern, filePattern, directory)
- `fs/stats` - Get file stats (params: path)
- `fs/listdir` - List directory (params: path)
- `fs/bulk-rename` - Bulk rename (params: pattern, replacement, directory)

**Security:**
- Toate operațiile sunt limitate la basePath
- Path traversal protection

---

### 3. 🧠 Memory MCP (`memory-mcp.js`)

**Funcționalități:**
- Persistent context storage
- Decision tracking
- Pattern library
- Notes și search

**Metode disponibile:**
- `memory/store-context` - Store context (params: key, value, tags)
- `memory/get-context` - Get context (params: key)
- `memory/list-context` - List context (params: tag)
- `memory/store-decision` - Store decision (params: title, description, rationale, tags)
- `memory/get-decisions` - Get decisions (params: tag, limit)
- `memory/store-pattern` - Store pattern (params: name, description, example, tags)
- `memory/get-patterns` - Get patterns (params: tag)
- `memory/store-note` - Store note (params: content, tags)
- `memory/search` - Search memory (params: query)
- `memory/clear` - Clear memory (params: type)
- `memory/export` - Export memory
- `memory/import` - Import memory (params: data)

**Storage:**
- Stocare în `.mcp-memory/memory.json`
- Format JSON human-readable
- Backup-friendly

---

## 🚀 INSTALARE ÎN CLAUDE CODE

### Pas 1: Verifică că toate scripturile sunt executable

```bash
chmod +x .mcp-servers/*.js
```

### Pas 2: Testează MCP-urile local

```bash
# Test GitHub MCP
echo '{"method":"git/status","params":{}}' | node .mcp-servers/github-mcp.js

# Test Filesystem MCP
echo '{"method":"fs/listdir","params":{"path":"."}}' | node .mcp-servers/filesystem-mcp.js

# Test Memory MCP
echo '{"method":"memory/store-context","params":{"key":"project","value":"Inima Baraganului","tags":["meta"]}}' | node .mcp-servers/memory-mcp.js
```

### Pas 3: Configurează în Claude Code Settings

**Locație settings:** `~/.config/claude-code/settings.json`

**Copiază configurația din:** `.mcp-servers/claude-code-settings.json`

```json
{
  "mcpServers": {
    "github": {
      "command": "node",
      "args": [
        "/Users/calinteleanu/repos/inima-baraganului/.mcp-servers/github-mcp.js"
      ],
      "env": {
        "GH_VERSION": "2.83.1"
      }
    },
    "filesystem": {
      "command": "node",
      "args": [
        "/Users/calinteleanu/repos/inima-baraganului/.mcp-servers/filesystem-mcp.js"
      ],
      "env": {
        "MCP_BASE_PATH": "/Users/calinteleanu/repos/inima-baraganului"
      }
    },
    "memory": {
      "command": "node",
      "args": [
        "/Users/calinteleanu/repos/inima-baraganului/.mcp-servers/memory-mcp.js"
      ],
      "env": {
        "MCP_STORAGE_PATH": "/Users/calinteleanu/repos/inima-baraganului/.mcp-memory"
      }
    }
  }
}
```

### Pas 4: Restart Claude Code

```bash
# Închide complet Claude Code
# Redeschide Claude Code
```

### Pas 5: Verifică conexiunile

În Claude Code chat, întreabă:
```
Care MCP-uri sunt conectate?
```

Ar trebui să vezi toate cele 3 MCP-uri active.

---

## 🧪 TESTARE MCP-URI

### Test Script Automated

```bash
# Rulează toate testele
./test-mcps.sh
```

### Test Manual

**GitHub MCP:**
```bash
# Git status
echo '{"method":"git/status","params":{}}' | node .mcp-servers/github-mcp.js

# Git log
echo '{"method":"git/log","params":{"limit":5}}' | node .mcp-servers/github-mcp.js

# PR list
echo '{"method":"pr/list","params":{}}' | node .mcp-servers/github-mcp.js
```

**Filesystem MCP:**
```bash
# List TypeScript files
echo '{"method":"fs/list","params":{"pattern":"*.ts","directory":"."}}' | node .mcp-servers/filesystem-mcp.js

# Search for "export"
echo '{"method":"fs/search","params":{"pattern":"export","filePattern":"*.ts"}}' | node .mcp-servers/filesystem-mcp.js

# List app directory
echo '{"method":"fs/listdir","params":{"path":"app"}}' | node .mcp-servers/filesystem-mcp.js
```

**Memory MCP:**
```bash
# Store context
echo '{"method":"memory/store-context","params":{"key":"design-system","value":"Tailwind CSS with custom theme","tags":["architecture"]}}' | node .mcp-servers/memory-mcp.js

# Get context
echo '{"method":"memory/get-context","params":{"key":"design-system"}}' | node .mcp-servers/memory-mcp.js

# Store decision
echo '{"method":"memory/store-decision","params":{"title":"Use Next.js 15","description":"Chose Next.js 15 for SSR and App Router","rationale":"Modern features and performance","tags":["architecture"]}}' | node .mcp-servers/memory-mcp.js

# Search
echo '{"method":"memory/search","params":{"query":"Next.js"}}' | node .mcp-servers/memory-mcp.js
```

---

## 📊 EXEMPLE DE UTILIZARE ÎN CLAUDE CODE

### GitHub MCP

```
Claude: Arată-mi statusul git
→ GitHub MCP: git/status
← Response: lista fișiere modificate

Claude: Creează un PR pentru feature-ul curent
→ GitHub MCP: pr/create
← Response: PR #123 creat cu succes
```

### Filesystem MCP

```
Claude: Caută toate fișierele TypeScript care conțin "Button"
→ Filesystem MCP: fs/search
← Response: lista fișiere cu matches

Claude: Redenumește toate fișierele .jsx în .tsx
→ Filesystem MCP: fs/bulk-rename
← Response: X fișiere redenumite
```

### Memory MCP

```
Claude: Reține că folosim Tailwind pentru styling
→ Memory MCP: memory/store-context
← Response: context stored

Claude: Ce framework folosim?
→ Memory MCP: memory/search
← Response: Next.js 15, Tailwind CSS, etc.

Claude: Stochează decizia: "Am ales Playwright peste Cypress pentru testing"
→ Memory MCP: memory/store-decision
← Response: decision recorded
```

---

## 🔧 CONFIGURARE AVANSATĂ

### Environment Variables

**GitHub MCP:**
- `GH_VERSION` - GitHub CLI version (optional)

**Filesystem MCP:**
- `MCP_BASE_PATH` - Base directory pentru operații (IMPORTANT pentru security)

**Memory MCP:**
- `MCP_STORAGE_PATH` - Directory pentru stocare memory

### Logging

Toate MCP-urile loggează la stdout. Pentru debugging:

```bash
# Redirect logs
node .mcp-servers/github-mcp.js > github-mcp.log 2>&1
```

---

## 🆘 TROUBLESHOOTING

### "Cannot find module"
```bash
# MCP-urile folosesc doar module Node.js built-in
# Verifică versiunea Node.js
node --version  # Trebuie >= 14
```

### "Permission denied"
```bash
# Asigură-te că scripturile sunt executable
chmod +x .mcp-servers/*.js
```

### "Path outside of allowed directory"
```bash
# Filesystem MCP blochează operații outside basePath
# Verifică MCP_BASE_PATH în settings
```

### GitHub CLI nu funcționează
```bash
# Verifică că gh CLI este instalat și autentificat
which gh
gh auth status
```

### Memory storage corrupt
```bash
# Șterge și re-inițializează
rm -rf .mcp-memory
# Memory MCP va crea automat la primul request
```

---

## 📈 WORKFLOW CU MCP-URI

### Feature Development

```
1. Memory MCP: Load project context
   ↓
2. GitHub MCP: Create feature branch
   ↓
3. Code development (Claude + file tools)
   ↓
4. Filesystem MCP: Organize și refactor
   ↓
5. Memory MCP: Store decisions și patterns
   ↓
6. GitHub MCP: Create PR
```

### Refactoring

```
1. Filesystem MCP: Search pentru pattern vechi
   ↓
2. Edit fișiere (Claude tools)
   ↓
3. Filesystem MCP: Bulk rename dacă e necesar
   ↓
4. Memory MCP: Document refactoring rationale
   ↓
5. GitHub MCP: Commit și PR
```

### Knowledge Management

```
1. Memory MCP: Store toate deciziile importante
2. Memory MCP: Pattern library pentru code patterns
3. Memory MCP: Search pentru quick reference
4. Memory MCP: Export pentru backup
```

---

## 🔐 SECURITATE

### Filesystem MCP
- ✅ Path traversal protection
- ✅ Operations limitate la basePath
- ✅ No arbitrary command execution

### GitHub MCP
- ✅ Folosește gh CLI autentificat
- ✅ No token exposure în logs
- ✅ Permissions controlate de gh auth

### Memory MCP
- ✅ Local storage only
- ✅ No network calls
- ✅ Human-readable JSON format

---

## 📚 NEXT STEPS

1. **Testează toate MCP-urile** cu comenzile de test
2. **Configurează în Claude Code** settings
3. **Restart Claude Code** pentru a încărca MCP-urile
4. **Test în conversație** - întreabă Claude să folosească MCP-urile
5. **Build habits** - folosește Memory MCP pentru toate deciziile

---

## 💡 PRO TIPS

1. **Memory MCP** - Folosește-l des! Stochează toate deciziile arhitecturale
2. **Tagging** - Folosește tags consistente în Memory MCP (ex: "architecture", "design", "performance")
3. **Filesystem MCP** - Perfect pentru bulk operations și refactoring
4. **GitHub MCP** - Automatizează PR creation cu context din Memory

---

**MCP-urile sunt gata de utilizare! 🎉**

Configurează-le în Claude Code și începe să le folosești pentru productivitate maximă!
