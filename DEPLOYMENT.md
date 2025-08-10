# St. George High School Website - Deployment Guide

## 🚀 Vercel Deployment Instructions

### Prerequisites
- GitHub repository with the project code
- Vercel account (free tier available)
- Node.js 18+ installed locally

### Step 1: Prepare for Deployment
The project is already configured for Vercel deployment with:
- ✅ `next.config.mjs` optimized for Vercel
- ✅ `vercel.json` configuration file
- ✅ Sharp package installed for image optimization
- ✅ Production build tested

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `https://github.com/TirthC27/St-George-`
4. Vercel will automatically detect it's a Next.js project
5. Configure deployment settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
6. Click "Deploy"

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow the prompts:
# - Link to existing project? N
# - Project name: st-george-high-school
# - Directory: ./
# - Override settings? N
```

### Step 3: Configure Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain (e.g., `stgeorgehighschool.com`)
4. Follow DNS configuration instructions

### Step 4: Environment Variables
If you have any environment variables in `.env`, add them in Vercel:
1. Go to "Settings" → "Environment Variables"
2. Add each variable from your `.env` file
3. Redeploy if needed

## 🔧 Configuration Files

### vercel.json
```json
{
  "version": 2,
  "regions": ["bom1"],
  "build": {
    "env": {
      "NEXT_TELEMETRY_DISABLED": "1"
    }
  },
  "functions": {
    "app/**/*.{js,ts,tsx}": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "caching": {
    "static": {
      "maxAge": 31536000
    },
    "images": {
      "maxAge": 31536000
    }
  }
}
```

### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment optimizations
  poweredByHeader: false,
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // React configuration
  reactStrictMode: true,
  
  // Build optimizations
  swcMinify: true,
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## 📊 Performance Optimizations

### Implemented Features
- ✅ Image optimization with Sharp
- ✅ Automatic WebP/AVIF conversion
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Security headers
- ✅ React strict mode
- ✅ SWC minification
- ✅ CSS optimization

### Expected Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔍 Troubleshooting

### Common Issues

#### Build Fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

#### Images Not Loading
- Ensure images are in `public/` directory
- Check image paths are relative to public folder
- Verify image formats are supported (jpg, png, webp, avif)

#### Smooth Scrolling Issues
- Lenis and GSAP are client-side only
- Components use dynamic imports with `ssr: false`
- Check browser compatibility for smooth scrolling

#### Environment Variables
- Add all `.env` variables to Vercel dashboard
- Prefix public variables with `NEXT_PUBLIC_`
- Redeploy after adding variables

### Performance Monitoring
- Use Vercel Analytics for real-time metrics
- Monitor Core Web Vitals in production
- Check Lighthouse scores regularly

## 🌐 Post-Deployment Checklist

### Functionality Testing
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Smooth scrolling functions
- [ ] Animations trigger properly
- [ ] Logo displays correctly
- [ ] Footer information is accurate
- [ ] All images load optimally
- [ ] Mobile responsiveness works
- [ ] Contact forms function (if applicable)
- [ ] Page transitions are smooth

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test loading speed
- [ ] Verify image optimization
- [ ] Check mobile performance

### SEO & Accessibility
- [ ] Meta tags are present
- [ ] Alt text for images
- [ ] Proper heading hierarchy
- [ ] Color contrast compliance
- [ ] Keyboard navigation works

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Review build output for errors
3. Verify all dependencies are installed
4. Ensure Node.js version compatibility

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Repository](https://github.com/TirthC27/St-George-)
- [Vercel Dashboard](https://vercel.com/dashboard)