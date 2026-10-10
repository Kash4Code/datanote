#!/usr/bin/env bash
set -e

echo "🚀 Initializing DataNote project structure..."

# Create core directories
mkdir -p src/components
mkdir -p src/engines
mkdir -p src/styles

# Create empty configuration and source files
touch package.json
touch vite.config.ts
touch index.html
touch README.md
touch .gitignore

# Create source files
touch src/main.tsx
touch src/App.tsx

# Create component files
touch src/components/Sidebar.tsx
touch src/components/Editor.tsx
touch src/components/Preview.tsx
touch src/components/DevToolsModal.tsx

# Create engine & style files
touch src/engines/duckdbWorker.ts
touch src/styles/globals.css

echo "✨ Project structure created successfully!"