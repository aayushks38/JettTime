# JettTime - Development Environment Setup

## Prerequisites Check

Before starting, ensure you have:

- ✅ Node.js 18+ installed
- ✅ npm or yarn package manager
- ✅ Git installed and configured
- ✅ A code editor (VS Code recommended)
- ✅ Internet connection for dependencies

### Check Node.js Version
```bash
node --version
npm --version
```

Should show v18.0.0 or higher.

---

## Installation Steps

### 1. Navigate to Project Directory
```bash
cd e:\JettTime
```

### 2. Install Dependencies
```bash
npm install
```

This installs:
- **Next.js** - React framework
- **React** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- And other utilities

**Installation time:** ~2-5 minutes depending on internet speed

### 3. Verify Installation
```bash
npm list next react tailwindcss framer-motion react-hook-form
```

### 4. Start Development Server
```bash
npm run dev
```

You should see:
```
> jetttime@1.0.0 dev
> next dev

  ▲ Next.js 16.2.12
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.1s
```

### 5. Open in Browser
Navigate to: `http://localhost:3000`

---

## File Structure Overview

```
e:\JettTime/
├── .git/                    # Git repository
├── node_modules/            # Dependencies (auto-generated)
├── app/
│   ├── layout.tsx          # Root layout wrapper
│   ├── page.tsx            # Main page (imports all components)
│   └── globals.css         # Global styles
├── components/             # Reusable React components
│   ├── Navbar.tsx
│   ├── HeroBanner.tsx
│   ├── SearchBar.tsx
│   ├── PopularDestinations.tsx
│   ├── TravelPackages.tsx
│   ├── FeaturedOffers.tsx
│   ├── ImageGallery.tsx
│   ├── CustomerReviews.tsx
│   ├── AboutUs.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── public/                 # Static files (if needed)
├── .gitignore             # Git ignore rules
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Project metadata & scripts
└── package-lock.json      # Dependency lock file
```

---

## Available npm Scripts

### Development
```bash
npm run dev
```
- Starts development server on port 3000
- Hot reload enabled
- Debug mode available

### Production Build
```bash
npm run build
```
- Creates optimized production build
- Generates `.next` folder
- Performs code splitting and optimization

### Start Production Server
```bash
npm start
```
- Starts production server
- Requires running `npm run build` first
- Optimized performance

### Linting
```bash
npm run lint
```
- Checks code for errors
- Follows Next.js best practices
- Helps maintain code quality

---

## Environment Setup

### Create `.env.local` (Optional)
For local development environment variables:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=JettTime
```

**Note:** Variables starting with `NEXT_PUBLIC_` are exposed to browser.

---

## Troubleshooting

### Issue: Port 3000 Already in Use
```bash
# Kill process on port 3000
# Windows Command Prompt:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
npm run dev -- -p 3001
```

### Issue: Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rmdir node_modules /s /q

# Reinstall
npm install
```

### Issue: Build Fails with TypeScript Errors
```bash
# Ensure TypeScript is properly installed
npm install --save-dev typescript

# Run type check
npx tsc --noEmit
```

### Issue: Slow Performance
1. Check disk space (at least 500MB free)
2. Close other applications
3. Use faster internet connection
4. Clear browser cache (Ctrl+Shift+Delete)

---

## Development Tips

### 1. Hot Reload
- Changes are instantly reflected
- No need to manually refresh browser
- Works for components, styles, and configs

### 2. Browser DevTools
- Open DevTools: F12 or Ctrl+Shift+I
- Inspect elements
- Debug JavaScript
- Check responsive design

### 3. Testing Responsive Design
- DevTools Device Toolbar: Ctrl+Shift+M
- Test on mobile, tablet, desktop sizes
- Check touch interactions

### 4. Code Formatting
- VS Code: Install Prettier extension
- Auto-format on save: Ctrl+Shift+P → Format Document

### 5. Performance Monitoring
```bash
# Build analysis
npm run build -- --analyze
```

---

## IDE Configuration

### VS Code Setup (Recommended)

**Essential Extensions:**
1. ES7+ React/Redux/React-Native snippets
2. Tailwind CSS IntelliSense
3. Prettier - Code formatter
4. Thunder Client (for API testing)
5. GitLens

**Settings.json Configuration:**
```json
{
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## Common Development Workflows

### Adding a New Component
1. Create file in `components/NewComponent.tsx`
2. Import in `app/page.tsx`
3. Add to JSX
4. Save - hot reload automatically

### Modifying Styles
1. Edit Tailwind classes in component
2. Save - instantly reflected
3. Use DevTools for debugging

### Testing Form Validation
1. Leave required fields empty
2. Try invalid email
3. Check error messages appear
4. Submit valid data

### Testing Animations
1. Open DevTools
2. Check Performance tab
3. Record animations
4. Analyze frame rate (should be 60fps)

---

## Building for Production

### Step 1: Build
```bash
npm run build
```

### Step 2: Test Production Build Locally
```bash
npm start
```

Visit `http://localhost:3000` and test thoroughly.

### Step 3: Deploy
Choose your platform:
- Vercel (recommended)
- AWS
- Netlify
- DigitalOcean
- Docker

See `DEPLOYMENT.md` for detailed guides.

---

## Git Workflow

### Initial Setup (Already Done)
```bash
git clone https://github.com/aayushks38/JettTime.git
cd e:\JettTime
npm install
```

### Making Changes
```bash
# Create new branch
git checkout -b feature/my-feature

# Make changes and test
npm run dev

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to GitHub
git push origin feature/my-feature
```

### Create Pull Request
1. Go to GitHub repository
2. Click "Pull requests"
3. Click "New pull request"
4. Select your branch
5. Add description
6. Create PR

---

## Next Steps

1. ✅ **Install dependencies** - `npm install`
2. ✅ **Start dev server** - `npm run dev`
3. ✅ **Open browser** - `http://localhost:3000`
4. 📝 **Customize** - Edit components and styles
5. 🧪 **Test** - Verify all features work
6. 🚀 **Deploy** - Push to production

---

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Quick Command Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clear npm cache
npm cache clean --force

# Update all packages
npm update

# Check for outdated packages
npm outdated
```

---

## You're All Set! 🎉

Your development environment is ready. Start building and customizing JettTime!

For questions, check the other documentation files:
- `README.md` - Full documentation
- `QUICKSTART.md` - Quick reference
- `DEPLOYMENT.md` - Deployment guides

Happy coding! 🚀
