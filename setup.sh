#!/bin/bash

# ===========================================
# HAVELLS DEVICE TRACKER - AUTOMATED SETUP
# ===========================================
# This script will set up the entire project
# ===========================================

set -e  # Exit on error

echo "🚀 Starting Havells Device Tracker Setup..."
echo "==========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check Node.js version
echo -e "${BLUE}📋 Step 1: Checking Node.js version...${NC}"
node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$node_version" -lt 18 ]; then
    echo -e "${YELLOW}⚠️  Warning: Node.js 18+ recommended. Current version: $(node -v)${NC}"
else
    echo -e "${GREEN}✅ Node.js version: $(node -v)${NC}"
fi
echo ""

# Step 2: Install dependencies
echo -e "${BLUE}📦 Step 2: Installing dependencies...${NC}"
echo "This may take a few minutes..."
npm install
echo -e "${GREEN}✅ Base dependencies installed${NC}"
echo ""

# Step 3: Install additional packages
echo -e "${BLUE}📦 Step 3: Installing Lucide React icons...${NC}"
npm install lucide-react
echo -e "${GREEN}✅ Lucide React installed${NC}"
echo ""

echo -e "${BLUE}📦 Step 4: Installing Tailwind CSS and tools...${NC}"
npm install -D tailwindcss postcss autoprefixer
echo -e "${GREEN}✅ Tailwind CSS installed${NC}"
echo ""

# Step 4: Initialize Tailwind (if not already done)
echo -e "${BLUE}⚙️  Step 5: Initializing Tailwind CSS...${NC}"
if [ ! -f "tailwind.config.js" ]; then
    npx tailwindcss init -p
    echo -e "${GREEN}✅ Tailwind CSS initialized${NC}"
else
    echo -e "${YELLOW}⚠️  Tailwind config already exists${NC}"
fi
echo ""

# Step 5: Create directory structure
echo -e "${BLUE}📁 Step 6: Creating directory structure...${NC}"
mkdir -p src/components
mkdir -p src/data
echo -e "${GREEN}✅ Directories created${NC}"
echo ""

# Step 6: Verify all files exist
echo -e "${BLUE}📋 Step 7: Verifying project files...${NC}"
required_files=(
    "src/data/deviceDatabase.js"
    "src/components/HavellsDeviceTracker.jsx"
    "src/App.jsx"
    "src/main.jsx"
    "src/index.css"
    "tailwind.config.js"
    "postcss.config.js"
    "index.html"
)

all_exist=true
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${YELLOW}⚠️  Missing: $file${NC}"
        all_exist=false
    fi
done
echo ""

# Step 7: Summary
echo "==========================================="
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo "==========================================="
echo ""
echo "📍 Next Steps:"
echo "   1. Run: npm run dev"
echo "   2. Open: http://localhost:5173"
echo "   3. Try device codes:"
echo "      - HVL-LIGHT-001"
echo "      - HVL-FAN-002"
echo "      - HVL-THERM-003"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview"
echo "   - PROJECT_SUMMARY.md - Detailed guide"
echo "   - QUICK_START.md - This guide"
echo ""
echo "🛠️  Available Commands:"
echo "   npm run dev      - Start development server"
echo "   npm run build    - Build for production"
echo "   npm run preview  - Preview production build"
echo ""
echo "==========================================="
echo -e "${GREEN}✨ Happy Coding!${NC}"
echo "==========================================="
