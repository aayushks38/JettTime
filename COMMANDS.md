# JettTime - Command Reference

Quick reference for all commands you need.

---

## 🚀 Essential Commands

### Start Development Server
```bash
npm run dev
```
- Starts dev server on `http://localhost:3000`
- Hot reload enabled
- Debug mode
- Auto-refresh on file changes

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Generates `.next` folder
- Minifies code
- Optimizes images
- Takes ~30 seconds

### Start Production Server
```bash
npm start
```
- Starts production server on `http://localhost:3000`
- Requires `npm run build` first
- Optimized performance
- No hot reload

### Lint Code
```bash
npm run lint
```
- Checks code quality
- Finds potential issues
- Follows Next.js standards
- Optional but recommended

---

## 📦 Package Management

### Install All Dependencies
```bash
npm install
```
- Installs packages from package.json
- Creates node_modules folder
- Generates package-lock.json
- Takes 1-3 minutes

### Update Dependencies
```bash
npm update
```
- Updates all packages to latest version
- Maintains compatibility
- Updates package-lock.json

### Check for Outdated Packages
```bash
npm outdated
```
- Shows which packages have updates available
- Shows current vs latest version
- Helps identify security updates

### Install Specific Package
```bash
npm install package-name --save
```
- Installs and saves to package.json
- Updates package-lock.json
- Example: `npm install axios --save`

### Remove Package
```bash
npm uninstall package-name --save
```
- Removes from node_modules
- Removes from package.json
- Updates package-lock.json

### Clean Cache
```bash
npm cache clean --force
```
- Clears npm cache
- Useful for fixing installation issues
- Takes 5-10 seconds

### Audit Dependencies
```bash
npm audit
```
- Checks for vulnerabilities
- Shows severity levels
- Lists affected packages

### Fix Vulnerabilities
```bash
npm audit fix
```
- Automatically fixes known vulnerabilities
- May update packages
- Creates new package-lock.json

---

## 🛠️ Development Tasks

### Development Workflow
```bash
npm install     # 1. Install dependencies
npm run dev     # 2. Start development
npm run lint    # 3. Check code (optional)
```

### Production Workflow
```bash
npm install     # 1. Install dependencies
npm run build   # 2. Build production
npm start       # 3. Start production
```

### Quick Development Session
```bash
npm run dev     # Only need this!
```
- Assumes packages already installed
- Hottest dev experience
- Fastest to start

---

## 🐛 Debugging Commands

### Run with Verbose Output
```bash
npm run build -- --debug
```
- Shows detailed build information
- Helps identify issues
- Useful for troubleshooting

### Run TypeScript Check
```bash
npx tsc --noEmit
```
- Checks TypeScript without emitting
- Finds type errors
- Useful before deployment

### Check Bundle Size
```bash
npm run build -- --analyze
```
- Shows what's in your bundle
- Helps optimize size
- Identifies large packages

### Clear Build Cache
```bash
rm -r .next
npm run build
```
- Removes cached build
- Rebuilds from scratch
- Useful for fixing build issues

---

## 📊 Information Commands

### Show npm Version
```bash
npm --version
```
- Shows installed npm version
- Should be recent for best experience

### Show Node Version
```bash
node --version
```
- Shows installed Node.js version
- Should be 18+ for this project

### List Installed Packages
```bash
npm list
```
- Shows all installed packages
- Shows version numbers
- Shows dependency tree

### Show Package Info
```bash
npm list package-name
```
- Shows specific package info
- Shows version and location
- Example: `npm list next`

### Fund Packages
```bash
npm fund
```
- Shows packages that accept funding
- Helps support developers

---

## 🚀 Deployment Commands

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```
- Installs Vercel CLI globally
- Deploys to Vercel
- Configure during first deploy

### Build Docker Image
```bash
docker build -t jetttime .
docker run -p 3000:3000 jetttime
```
- Builds Docker container
- Runs at http://localhost:3000
- Requires Dockerfile

### Sync to GitHub
```bash
git add .
git commit -m "message"
git push origin main
```
- Stages changes
- Commits with message
- Pushes to GitHub

---

## 🎯 Common Workflows

### Full Development Session
```bash
npm run dev
# Make changes
# Changes auto-reload
# Keep running while developing
```

### Before Committing
```bash
npm run lint
npm run build
```
- Checks code quality
- Verifies production build works
- Ensures no errors

### Prepare for Deployment
```bash
npm run build
npm run lint
git add .
git commit -m "Ready for deployment"
git push origin main
```
- Builds and checks code
- Commits changes
- Pushes to GitHub
- Ready for Vercel/other platforms

### Daily Development
```bash
npm run dev
# Work on features
# Code auto-compiles
# Make your changes
```

### Troubleshooting Setup Issues
```bash
npm cache clean --force
rm -r node_modules
npm install
npm run dev
```
- Clears cache
- Removes modules
- Reinstalls fresh
- Starts dev server

---

## ⚙️ Configuration

### Development Server Port
Default: 3000
```bash
npm run dev -- -p 3001
```
- Changes to port 3001
- Useful if 3000 is in use

### Production Server Port
Default: 3000
```bash
npm start -- -p 3001
```
- Changes to port 3001
- Requires environment variable

---

## 📝 Tips & Tricks

### Use `npm ci` for CI/CD
```bash
npm ci
```
- Better for automated deployments
- Uses exact versions from package-lock.json
- More reliable than `npm install`

### Check for Updates
```bash
npm update -g npm
```
- Updates npm itself
- Keeps package manager fresh

### Speed Up Installation
```bash
npm install --prefer-offline
```
- Uses cached packages first
- Faster installation on repeat

### Verbose Installation
```bash
npm install --verbose
```
- Shows detailed installation steps
- Helpful for debugging

---

## 🚨 Emergency Commands

### If npm Stops Working
```bash
npm cache clean --force
rm -r node_modules package-lock.json
npm install
```

### If Build Fails
```bash
npm run build -- --debug
```
- Shows what went wrong

### If Dev Server Won't Start
```bash
lsof -i :3000  # Find process on port 3000
kill -9 PID    # Kill that process
npm run dev    # Try again
```

### If Packages Conflict
```bash
npm audit fix --force
```
- Forces updates to fix conflicts
- May break things, use carefully

---

## 📚 Reference Table

| Command | Purpose | Time |
|---------|---------|------|
| `npm install` | Install packages | 1-3 min |
| `npm run dev` | Start development | 5 sec |
| `npm run build` | Build for production | 30 sec |
| `npm start` | Start production server | 2 sec |
| `npm run lint` | Check code quality | 10 sec |
| `npm audit` | Check security | 5 sec |
| `npm list` | List packages | 1 sec |
| `npm cache clean` | Clear cache | 10 sec |

---

## 🎯 Your First Commands

```bash
# 1. Navigate to project
cd e:\JettTime

# 2. Install packages (already done, but just in case)
npm install

# 3. Start development
npm run dev

# 4. Open browser
# Go to http://localhost:3000
```

---

## ✅ You're Ready!

You now know all the commands you need. Most of the time you'll only use:

```bash
npm run dev    # Development
npm run build  # Production
npm start      # Run production
```

**Happy coding! 🚀**
