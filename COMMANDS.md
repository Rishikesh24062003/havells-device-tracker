# 📋 Havells Device Tracker - Command Reference

Complete list of all available commands and their usage.

---

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
- Starts Vite development server
- Opens on http://localhost:5173
- Hot Module Replacement (HMR) enabled
- Watch mode for file changes

### Start on Different Port
```bash
npm run dev -- --port 3000
```
- Useful if 5173 is busy
- Can use any available port

### Start with Host Exposed
```bash
npm run dev -- --host
```
- Allows access from other devices on network
- Useful for testing on mobile

---

## 🏗️ Build Commands

### Production Build
```bash
npm run build
```
- Creates optimized production bundle
- Output in `dist/` folder
- Minifies code
- Tree shakes unused code

### Force Build (Clean)
```bash
npm run build -- --force
```
- Clears cache before building
- Useful if build seems stale

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Test before deployment
- Opens on http://localhost:4173

---

## 📦 Package Management

### Install All Dependencies
```bash
npm install
```
- Installs from package.json
- Creates node_modules/
- Generates package-lock.json

### Install Specific Package
```bash
npm install package-name
```
- Adds to dependencies
- Updates package.json

### Install Dev Dependency
```bash
npm install -D package-name
```
- Adds to devDependencies
- Only used in development

### Uninstall Package
```bash
npm uninstall package-name
```
- Removes from node_modules
- Updates package.json

### Update Packages
```bash
npm update
```
- Updates all packages to latest compatible versions

### Check Outdated Packages
```bash
npm outdated
```
- Shows packages with newer versions available

### List Installed Packages
```bash
npm list --depth=0
```
- Shows top-level dependencies only

### View Dependency Tree
```bash
npm list
```
- Shows all dependencies recursively

---

## 🔍 Linting & Code Quality

### Run ESLint
```bash
npm run lint
```
- Checks code for errors
- Enforces code style

### Fix ESLint Issues
```bash
npm run lint -- --fix
```
- Auto-fixes fixable issues

---

## 🧪 Testing Commands

### Run Tests (if configured)
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

---

## 🧹 Cleanup Commands

### Clear Node Modules
```bash
rm -rf node_modules
```
- Deletes all installed packages
- Run `npm install` after

### Clear NPM Cache
```bash
npm cache clean --force
```
- Clears npm's cache
- Useful if installations fail

### Clear Vite Cache
```bash
rm -rf node_modules/.vite
```
- Clears Vite's build cache
- Forces fresh build

### Clear Build Output
```bash
rm -rf dist
```
- Removes production build
- Run `npm run build` to recreate

### Complete Clean
```bash
rm -rf node_modules package-lock.json dist node_modules/.vite
npm install
```
- Nuclear option - starts fresh
- Fixes most dependency issues

---

## 🔧 Tailwind CSS Commands

### Initialize Tailwind
```bash
npx tailwindcss init
```
- Creates tailwind.config.js
- Basic configuration

### Initialize with PostCSS
```bash
npx tailwindcss init -p
```
- Creates tailwind.config.js
- Creates postcss.config.js

### Build Tailwind CSS
```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css
```
- Manual CSS build (rarely needed with Vite)

### Watch Tailwind Changes
```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```
- Watch mode for CSS changes

---

## 🌐 Deployment Commands

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify CLI Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🔐 Git Commands

### Initialize Repository
```bash
git init
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Your message"
```

### Add Remote
```bash
git remote add origin YOUR_REPO_URL
```

### Push to Remote
```bash
git push -u origin main
```

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

### Create Branch
```bash
git checkout -b feature-name
```

### Switch Branch
```bash
git checkout branch-name
```

### Merge Branch
```bash
git merge branch-name
```

---

## 📊 Diagnostic Commands

### Check Node Version
```bash
node -v
```

### Check NPM Version
```bash
npm -v
```

### Check Git Version
```bash
git --version
```

### View Environment Info
```bash
npm version
```

### Check Port Usage
```bash
# macOS/Linux
lsof -i :5173

# Windows
netstat -ano | findstr :5173
```

### Kill Process on Port
```bash
# macOS/Linux
lsof -ti:5173 | xargs kill -9

# Windows
# Find PID from netstat, then:
taskkill /PID <pid> /F
```

---

## 🔒 Security Commands

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

### Force Fix (may break things)
```bash
npm audit fix --force
```

### View Security Report
```bash
npm audit --json
```

---

## 📈 Performance Commands

### Analyze Bundle Size
```bash
npm run build -- --mode=production
npx vite-bundle-visualizer
```

### Check Build Time
```bash
time npm run build
```

### Profile Build
```bash
npm run build -- --profile
```

---

## 🎯 Project-Specific Commands

### Run Setup Script
```bash
chmod +x setup.sh
./setup.sh
```

### Quick Test All Devices
```bash
# Open in browser and test:
# HVL-LIGHT-001
# HVL-FAN-002
# HVL-THERM-003
```

### Generate Component
```bash
# Create new component file
touch src/components/NewComponent.jsx
```

### Create New Device Entry
```bash
# Edit deviceDatabase.js and add:
# 'HVL-NEW-004': { ... }
```

---

## 🎨 Styling Commands

### View Tailwind Config
```bash
cat tailwind.config.js
```

### Generate Tailwind CSS
```bash
npm run dev
# Tailwind auto-generates during dev
```

### Purge Unused CSS
```bash
npm run build
# Automatically purges in production
```

---

## 📱 Mobile Testing

### Start with Network Access
```bash
npm run dev -- --host
```
Then access from mobile: `http://YOUR_IP:5173`

### Find Your IP
```bash
# macOS/Linux
ifconfig | grep inet
# Look for 192.168.x.x

# Windows
ipconfig
# Look for IPv4 Address
```

---

## 🔄 Update Commands

### Update Vite
```bash
npm install vite@latest -D
```

### Update React
```bash
npm install react@latest react-dom@latest
```

### Update Tailwind
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Update All Dependencies
```bash
npm update --save
npm update --save-dev
```

---

## 💾 Backup Commands

### Backup Source Code
```bash
tar -czf havells-backup-$(date +%Y%m%d).tar.gz src/ public/ package.json
```

### Restore from Backup
```bash
tar -xzf havells-backup-YYYYMMDD.tar.gz
```

### Export Device Database
```bash
cp src/data/deviceDatabase.js ~/Desktop/deviceDatabase-backup.js
```

---

## 🎯 Quick Reference

**Most Used Commands:**
```bash
npm run dev          # Start development
npm run build        # Build production
npm install          # Install dependencies
npm run preview      # Preview build
git add . && git commit -m "Update"  # Quick commit
```

**Troubleshooting Commands:**
```bash
rm -rf node_modules && npm install   # Fix dependencies
npm cache clean --force              # Clear cache
rm -rf node_modules/.vite            # Clear Vite cache
```

**Deployment Commands:**
```bash
npm run build        # Build first
vercel              # Deploy to Vercel
netlify deploy      # Deploy to Netlify
```

---

## 📖 Help Commands

### NPM Help
```bash
npm help
npm help install
npm help run-script
```

### Vite Help
```bash
npx vite --help
```

### Git Help
```bash
git help
git help commit
git help push
```

---

**💡 Tip**: Add custom scripts to package.json for frequently used commands!

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "clean": "rm -rf node_modules dist",
  "fresh": "npm run clean && npm install",
  "deploy": "npm run build && vercel"
}
```
