#!/bin/bash

##
# Test script pentru MCP servers
# Testează toate cele 3 MCP-uri custom
##

set -e

echo "🧪 Testing Custom MCP Servers"
echo "=============================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Helper function pentru test
test_mcp() {
    local name=$1
    local script=$2
    local request=$3
    local description=$4

    echo -n "Testing $name: $description... "

    # Run test
    response=$(echo "$request" | node "$script" 2>/dev/null | tail -n 1)

    # Check if response contains "success"
    if echo "$response" | grep -q '"success":true'; then
        echo -e "${GREEN}✓ PASS${NC}"
        ((TESTS_PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAIL${NC}"
        echo "Response: $response"
        ((TESTS_FAILED++))
        return 1
    fi
}

##
# GitHub MCP Tests
##
echo -e "${YELLOW}1. GitHub MCP${NC}"
echo "-------------"

test_mcp "GitHub MCP" \
    ".mcp-servers/github-mcp.js" \
    '{"method":"git/status","params":{}}' \
    "git status"

test_mcp "GitHub MCP" \
    ".mcp-servers/github-mcp.js" \
    '{"method":"git/log","params":{"limit":5}}' \
    "git log"

echo ""

##
# Filesystem MCP Tests
##
echo -e "${YELLOW}2. Filesystem MCP${NC}"
echo "----------------"

test_mcp "Filesystem MCP" \
    ".mcp-servers/filesystem-mcp.js" \
    '{"method":"fs/listdir","params":{"path":"."}}' \
    "list directory"

test_mcp "Filesystem MCP" \
    ".mcp-servers/filesystem-mcp.js" \
    '{"method":"fs/list","params":{"pattern":"*.md","directory":"."}}' \
    "list markdown files"

test_mcp "Filesystem MCP" \
    ".mcp-servers/filesystem-mcp.js" \
    '{"method":"fs/stats","params":{"path":"README.md"}}' \
    "file stats"

echo ""

##
# Memory MCP Tests
##
echo -e "${YELLOW}3. Memory MCP${NC}"
echo "------------"

# Initialize memory storage
export MCP_STORAGE_PATH="/tmp/mcp-memory-test-$$"
mkdir -p "$MCP_STORAGE_PATH"

test_mcp "Memory MCP" \
    ".mcp-servers/memory-mcp.js" \
    '{"method":"memory/store-context","params":{"key":"test-project","value":"Inima Baraganului","tags":["test"]}}' \
    "store context"

test_mcp "Memory MCP" \
    ".mcp-servers/memory-mcp.js" \
    '{"method":"memory/get-context","params":{"key":"test-project"}}' \
    "get context"

test_mcp "Memory MCP" \
    ".mcp-servers/memory-mcp.js" \
    '{"method":"memory/store-decision","params":{"title":"Test Decision","description":"Test description","rationale":"Test rationale","tags":["test"]}}' \
    "store decision"

test_mcp "Memory MCP" \
    ".mcp-servers/memory-mcp.js" \
    '{"method":"memory/get-decisions","params":{"limit":10}}' \
    "get decisions"

test_mcp "Memory MCP" \
    ".mcp-servers/memory-mcp.js" \
    '{"method":"memory/search","params":{"query":"Test"}}' \
    "search memory"

# Cleanup test storage
rm -rf "$MCP_STORAGE_PATH"

echo ""

##
# Results Summary
##
echo "=============================="
echo -e "Results: ${GREEN}$TESTS_PASSED passed${NC}, ${RED}$TESTS_FAILED failed${NC}"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ All MCP servers are working correctly!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Configure MCP servers in Claude Code settings"
    echo "2. Copy configuration from .mcp-servers/claude-code-settings.json"
    echo "3. Restart Claude Code"
    echo "4. Verify MCP connections in Claude Code"
    exit 0
else
    echo -e "${RED}✗ Some tests failed. Please check the MCP servers.${NC}"
    exit 1
fi
