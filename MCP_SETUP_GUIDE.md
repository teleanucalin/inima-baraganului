# 🛠️ GHID COMPLET SETUP MCP-URI PE MACOS

> Pentru aplicația Inima Bărăganului
> Data: 2025-12-03

---

## 📋 CE AI INSTALAT DEJA ✅

Am instalat deja în proiect:
- ✅ **Playwright** + toate browserele (Chrome, Firefox, Safari)
- ✅ Configurație Playwright (`playwright.config.ts`)
- ✅ Teste E2E exemple (`tests/e2e/homepage.spec.ts`, `tests/e2e/contact.spec.ts`)
- ✅ Scripts npm pentru testing

**Poți rula teste acum:**
```bash
npm test              # Rulează toate testele
npm run test:ui       # UI mode pentru development
npm run test:headed   # Vezi browserul în timp real
npm run test:debug    # Debug mode
npm run test:report   # Vezi raportul HTML
```

---

## 🎯 CE TREBUIE SĂ FACI TU: SETUP MCP-URI

MCP-urile (Model Context Protocol) trebuie configurate în **Claude Code settings**, nu prin npm install. Urmează pașii de mai jos.

---

## 📦 PRIORITY 1 MCP-URI - INSTALEAZĂ ACUM

### 1. 🗂️ FILESYSTEM MCP

**Ce face:**
- Operații avansate pe fișiere (bulk operations, watch, backup)
- Foarte util pentru refactoring și reorganizare

**Setup:**

#### Pas 1: Instalează serverul MCP global
```bash
npm install -g @modelcontextprotocol/server-filesystem
```

#### Pas 2: Găsește path-ul de instalare
```bash
which mcp-server-filesystem
# Output: /usr/local/bin/mcp-server-filesystem (sau similar)
```

#### Pas 3: Configurează în Claude Code

1. Deschide **Claude Code Settings**:
   - Apasă `Cmd + Shift + P`
   - Scrie "Claude Code: Open Settings"
   - SAU folosește comanda: `claude code settings`

2. Adaugă configurația în secțiunea `mcpServers`:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/calinteleanu/repos/inima-baraganului"
      ]
    }
  }
}
```

---

### 2. 🐙 GITHUB MCP

**Ce face:**
- Git operations avansate
- PR creation și review
- Issue tracking

**Setup:**

#### Pas 1: Instalează serverul
```bash
npm install -g @modelcontextprotocol/server-github
```

#### Pas 2: Creează GitHub Personal Access Token

1. Mergi la: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Selectează scope-uri:
   - `repo` (full control)
   - `workflow`
   - `admin:org` (dacă lucrezi cu organizații)
4. Copiază token-ul (salvează-l undeva safe!)

#### Pas 3: Setează token-ul ca environment variable
```bash
# Adaugă în ~/.zshrc (sau ~/.bash_profile dacă folosești bash)
echo 'export GITHUB_TOKEN="ghp_YOUR_TOKEN_HERE"' >> ~/.zshrc
source ~/.zshrc

# Verifică că e setat
echo $GITHUB_TOKEN
```

#### Pas 4: Configurează în Claude Code
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

---

### 3. 🧠 MEMORY MCP

**Ce face:**
- Persistent context între sesiuni Claude
- Reține decisions, patterns, coding conventions

**Setup:**

#### Pas 1: Instalează serverul
```bash
npm install -g @modelcontextprotocol/server-memory
```

#### Pas 2: Configurează în Claude Code
```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

---

### 4. 🌐 FETCH MCP

**Ce face:**
- Test API-uri externe (Google Maps, etc.)
- Validate external links (ANPC, SOL)

**Setup:**

#### Pas 1: Instalează serverul
```bash
npm install -g @modelcontextprotocol/server-fetch
```

#### Pas 2: Configurează în Claude Code
```json
{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

---

## 📝 CONFIGURAȚIA COMPLETĂ CLAUDE CODE SETTINGS

După ce ai urmărit pașii de mai sus, fișierul tău de settings ar trebui să arate așa:

### Locația fișierului settings:
```
~/.config/claude-code/settings.json
```

### Conținut complet:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/calinteleanu/repos/inima-baraganului"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

---

## ✅ VERIFICARE INSTALARE

### 1. Verifică că npm packages sunt instalate global:
```bash
npm list -g --depth=0 | grep mcp
```

Ar trebui să vezi:
```
@modelcontextprotocol/server-filesystem@x.x.x
@modelcontextprotocol/server-github@x.x.x
@modelcontextprotocol/server-memory@x.x.x
@modelcontextprotocol/server-fetch@x.x.x
```

### 2. Restart Claude Code
```bash
# Închide complet Claude Code
# Redeschide Claude Code
```

### 3. Verifică conexiunile MCP în Claude Code

În chat, întreabă:
```
Care MCP-uri sunt conectate?
```

Ar trebui să vezi toate cele 4 MCP-uri active.

---

## 🚀 COMENZI RAPIDE - ALL-IN-ONE INSTALL

Copiază și rulează în Terminal:

```bash
# 1. Instalează toate MCP-urile
npm install -g @modelcontextprotocol/server-filesystem \
               @modelcontextprotocol/server-github \
               @modelcontextprotocol/server-memory \
               @modelcontextprotocol/server-fetch

# 2. Verifică instalarea
npm list -g --depth=0 | grep mcp

# 3. Setup GitHub token (înlocuiește YOUR_TOKEN cu token-ul tău)
echo 'export GITHUB_TOKEN="ghp_YOUR_TOKEN_HERE"' >> ~/.zshrc
source ~/.zshrc

# 4. Verifică token
echo $GITHUB_TOKEN
```

Apoi configurează în Claude Code settings (pasul manual).

---

## 🎯 NEXT STEPS DUPĂ SETUP

1. **Restart Claude Code**
2. **Verifică conexiunile** (întreabă în chat care MCP-uri sunt conectate)
3. **Test Playwright**:
   ```bash
   npm run test:ui
   ```
4. **Rulează Auditul Complet** folosind `AUDIT_PROMPT.md`

---

## 🆘 TROUBLESHOOTING

### Problemă: "MCP server not found"
**Soluție:**
```bash
# Verifică că path-ul este corect
which mcp-server-filesystem
# Folosește path-ul complet în settings
```

### Problemă: "GitHub authentication failed"
**Soluție:**
```bash
# Verifică token-ul
echo $GITHUB_TOKEN
# Re-generează token dacă e expirat
# Restart terminal după setare
```

### Problemă: "Permission denied"
**Soluție:**
```bash
# Fix permissions pentru npm global
sudo chown -R $USER /usr/local/lib/node_modules
```

### Problemă: "Cannot find module"
**Soluție:**
```bash
# Re-instalează MCP-ul specific
npm uninstall -g @modelcontextprotocol/server-NUME
npm install -g @modelcontextprotocol/server-NUME
```

---

## 📚 RESURSE UTILE

- **MCP Documentation**: https://modelcontextprotocol.io
- **Claude Code Docs**: https://docs.claude.com/en/docs/claude-code
- **Playwright Docs**: https://playwright.dev
- **GitHub Token Guide**: https://docs.github.com/en/authentication

---

## ✨ DUPĂ SETUP, WORKFLOW-UL TĂU VA FI:

```
1. 🧠 Memory MCP: Load project context automat
2. 💬 Chat cu Claude Code despre feature nou
3. 📝 Claude Code scrie cod cu context complet
4. 🧪 Playwright: Run E2E tests automat
5. 🗂️ Filesystem MCP: Organizare fișiere
6. 🐙 GitHub MCP: Create PR automat
7. 🌐 Fetch MCP: Validate external links
8. ✅ Deploy cu încredere!
```

---

**GATA! 🎉 Setup-ul e complet. Acum poți rula auditul!**

---

## 📊 STATUS FINAL

| Component | Status | Action |
|-----------|--------|--------|
| **Playwright** | ✅ Instalat | `npm test` |
| **Filesystem MCP** | ⏳ Config manual | Follow guide |
| **GitHub MCP** | ⏳ Config manual | Follow guide |
| **Memory MCP** | ⏳ Config manual | Follow guide |
| **Fetch MCP** | ⏳ Config manual | Follow guide |

**Next**: Urmează ghidul de mai sus pentru a configura MCP-urile în Claude Code settings!
