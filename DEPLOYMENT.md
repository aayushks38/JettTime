# JettTime Deployment Guide

## Local Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git (already configured)

### Installation Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to `http://localhost:3000`

## Building for Production

### Build the project:
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start production server:
```bash
npm start
```

## Deployment Platforms

### 1. Vercel (Recommended - Easiest)

**Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Select your repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

**Advantages:**
- Zero-configuration deployment
- Automatic HTTPS
- Global CDN
- Free tier available
- Automatic deployments on git push

### 2. Docker Deployment

**Create Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./.next
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and run:**
```bash
docker build -t jetttime .
docker run -p 3000:3000 jetttime
```

### 3. AWS Deployment

**Using Amplify:**
1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Amplify auto-detects Next.js
4. Configure build settings
5. Deploy

**Using EC2:**
1. Launch an EC2 instance (Ubuntu 22.04)
2. Install Node.js and npm
3. Clone the repository
4. Install dependencies
5. Build the project
6. Use PM2 for process management

### 4. Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your repository
4. Set build command: `npm run build`
5. Deploy

### 5. DigitalOcean App Platform

1. Go to DigitalOcean App Platform
2. Create new app
3. Connect GitHub repository
4. Configure settings
5. Deploy

## Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=JettTime
```

For production, set these in your deployment platform's environment variables section.

## Performance Optimization

### Image Optimization
- All images are served from Unsplash CDN
- Next.js automatically optimizes images
- Consider hosting images on CDN for production

### Caching
- Static pages are automatically cached
- API responses can be cached with getStaticProps
- Browser caching headers are set by default

### Bundle Size
- Tailwind CSS is tree-shaken for production
- Only used styles are included
- Framer Motion is code-split

## Security Considerations

1. **HTTPS:** Always use HTTPS in production
2. **CSP Headers:** Add Content Security Policy headers
3. **CORS:** Configure CORS properly
4. **Environment Variables:** Never commit secrets
5. **Dependencies:** Regularly update packages

### Add security headers (next.config.js):
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ]
}
```

## Monitoring & Analytics

### Vercel Analytics
- Built-in analytics in Vercel
- Monitor performance metrics
- Track deployment history

### Google Analytics
Add to `layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout() {
  return (
    <html>
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
```

## Domain Setup

### Connect Custom Domain
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. In your hosting platform, add custom domain
3. Update DNS records (typically CNAME or A records)
4. Wait for DNS propagation (5-48 hours)

### SSL Certificate
- Automatically provisioned by most platforms
- No additional configuration needed
- Auto-renewal handled by hosting provider

## Backup & Recovery

1. **Code:** Already backed up on GitHub
2. **Database:** Set up regular backups if using database
3. **Environment:** Document all environment variables
4. **Monitoring:** Set up alerts for downtime

## CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## Troubleshooting

### Build Fails
1. Check Node.js version: `node --version`
2. Clear cache: `npm cache clean --force`
3. Delete node_modules: `rm -rf node_modules`
4. Reinstall: `npm install`

### Slow Performance
1. Check bundle size: `npm run build -- --analyze`
2. Optimize images
3. Enable caching
4. Consider CDN

### Memory Issues
1. Increase Node.js memory
2. Optimize large operations
3. Use streaming for large files

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Post-Deployment Checklist

- [ ] SSL certificate installed
- [ ] Domain configured correctly
- [ ] Analytics enabled
- [ ] Email notifications set up
- [ ] Backup strategy implemented
- [ ] Monitoring and alerts configured
- [ ] Performance tested
- [ ] Mobile responsiveness verified
- [ ] All links working
- [ ] Contact form tested
- [ ] Newsletter signup tested
- [ ] Social media links updated

---

Happy deploying! 🚀
