# 🔧 Havells Device Tracker - Troubleshooting Guide

## 🚨 Common Issues & Solutions

### 1. Port Already in Use

**Problem**: `Error: Port 5173 is already in use`

**Solution**:
```bash
# Option A: Use different port
npm run dev -- --port 3000

# Option B: Kill the process
lsof -ti:5173 | xargs kill -9
npm run dev
```

---

### 2. Dependencies Installation Failed

**Problem**: `npm install` errors or package conflicts

**Solution**:
```bash
# Clear everything and reinstall
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
```

---

### 3. Tailwind Styles Not Working

**Problem**: Classes applied but no styling visible

**Solutions**:

**A. Check tailwind.config.js content paths:**
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

**B. Verify index.css has Tailwind directives:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**C. Restart development server:**
```bash
# Press Ctrl + C to stop
npm run dev
```

---

### 4. Icons Not Displaying (Lucide React)

**Problem**: Icon components showing blank or error

**Solution**:
```bash
# Check installation
npm list lucide-react

# If not found, install
npm install lucide-react

# Verify import statement
import { Camera, Shield } from 'lucide-react';
```

---

### 5. "Cannot find module" Errors

**Problem**: Import errors for components or data files

**Solution**:
```bash
# Verify file structure
ls -R src/

# Expected structure:
# src/components/HavellsDeviceTracker.jsx
# src/data/deviceDatabase.js
# src/App.jsx
# src/main.jsx
# src/index.css

# If missing, create files in correct locations
```

---

### 6. Build Fails in Production

**Problem**: `npm run build` throws errors

**Solutions**:

**A. Check for unused variables:**
```bash
# Remove or use all imported variables
# ESLint will show warnings
npm run lint
```

**B. Force build:**
```bash
npm run build -- --force
```

**C. Clear cache:**
```bash
rm -rf node_modules/.vite
rm -rf dist
npm run build
```

---

### 7. White Screen / App Not Loading

**Problem**: Browser shows blank page

**Solutions**:

**A. Check browser console (F12):**
- Look for red errors
- Common: Missing imports or syntax errors

**B. Verify main.jsx:**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**C. Check index.html:**
```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

---

### 8. Slow Performance / Lag

**Problem**: App feels slow or unresponsive

**Solutions**:

**A. Clear browser cache:**
- Chrome: Ctrl + Shift + Delete
- Select "Cached images and files"

**B. Reduce animation:**
```javascript
// In HavellsDeviceTracker.jsx
// Change animate-pulse to nothing
className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center"
```

**C. Optimize images:**
- Use compressed images
- Use WebP format
- Lazy load images

---

### 9. ESLint Errors

**Problem**: Linting errors preventing build

**Solution**:
```bash
# Disable ESLint temporarily (not recommended)
# Add to vite.config.js:
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        warn(warning)
      }
    }
  }
})

# Or fix actual issues
npm run lint
```

---

### 10. Device Data Not Showing

**Problem**: Demo devices don't appear after scan

**Solution**:

**A. Verify deviceDatabase.js:**
```javascript
// Must export as named export
export const deviceDatabase = {
  'HVL-LIGHT-001': { ... }
}
```

**B. Check import in HavellsDeviceTracker.jsx:**
```javascript
import { deviceDatabase } from '../data/deviceDatabase';
```

**C. Console.log to debug:**
```javascript
console.log('Database:', deviceDatabase);
console.log('Device:', deviceDatabase['HVL-LIGHT-001']);
```

---

### 11. Git Issues

**Problem**: Git commands failing

**Solutions**:

**A. Initialize git:**
```bash
git init
git add .
git commit -m "Initial commit"
```

**B. Fix remote URL:**
```bash
git remote -v
git remote remove origin
git remote add origin YOUR_REPO_URL
```

**C. Force push (if needed):**
```bash
git push -f origin main
```

---

### 12. Node Version Issues

**Problem**: Compatibility errors with Node.js

**Solution**:
```bash
# Check current version
node -v

# Update Node.js (macOS):
brew update
brew upgrade node

# Or use nvm:
nvm install 18
nvm use 18
```

---

### 13. CSS Not Updating

**Problem**: Style changes not reflecting

**Solutions**:

**A. Hard refresh browser:**
- Chrome: Ctrl + Shift + R (or Cmd + Shift + R)

**B. Clear Vite cache:**
```bash
rm -rf node_modules/.vite
npm run dev
```

**C. Check file watcher:**
```bash
# Restart dev server
# Press Ctrl + C
npm run dev
```

---

### 14. Deployment Issues

#### Vercel:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Common error: Build fails
# Solution: Check vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

#### Netlify:
```bash
# Build locally first
npm run build

# Check dist folder exists
ls dist/

# Upload dist folder to Netlify
```

---

### 15. TypeScript Errors (If Converted)

**Problem**: TS errors after adding types

**Solution**:
```bash
# Install types
npm install -D @types/react @types/react-dom

# Create tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx"
  }
}
```

---

## 🔍 Debugging Tips

### Browser Console
```javascript
// Add in HavellsDeviceTracker.jsx
console.log('Device:', device);
console.log('Scanning:', scanning);
console.log('Selected Tab:', selectedTab);
```

### React DevTools
1. Install React DevTools extension
2. Inspect component state
3. Check props passing

### Network Tab
1. Open browser DevTools (F12)
2. Go to Network tab
3. Check for failed requests

---

## 📞 Still Stuck?

### Check These First:
1. ✅ Node.js version (18+)
2. ✅ All dependencies installed
3. ✅ Correct file structure
4. ✅ No syntax errors
5. ✅ Browser console errors

### Create Minimal Reproduction:
1. Comment out sections of code
2. Find which part causes error
3. Fix that specific section

### Search for Errors:
```bash
# Google the exact error message
# Check Stack Overflow
# Check GitHub issues for packages
```

---

## 🆘 Emergency Reset

If nothing works, start fresh:

```bash
# Backup your custom changes
cp src/data/deviceDatabase.js ~/backup-deviceDatabase.js

# Delete everything except source files
rm -rf node_modules
rm -rf dist
rm -rf node_modules/.vite
rm package-lock.json

# Reinstall
npm install
npm run dev

# Restore your changes
cp ~/backup-deviceDatabase.js src/data/deviceDatabase.js
```

---

## ✅ Health Check Commands

Run these to verify everything is working:

```bash
# 1. Check Node.js
node -v
# Should be 18+

# 2. Check npm
npm -v
# Should be 9+

# 3. List dependencies
npm list --depth=0
# All should be installed

# 4. Check for vulnerabilities
npm audit
# Fix if needed: npm audit fix

# 5. Test build
npm run build
# Should complete without errors

# 6. Test preview
npm run preview
# Should start server
```

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] `npm run build` succeeds
- [ ] No console errors in browser
- [ ] All 3 demo devices work
- [ ] All tabs load correctly
- [ ] Responsive on mobile
- [ ] Icons display properly
- [ ] No 404 errors
- [ ] Fast load time

---

**Most issues are solved by: npm install → restart server → hard refresh browser** 🔄
