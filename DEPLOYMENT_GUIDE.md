# 🚀 Deployment Guide - Alves Cury Financial

Complete deployment guide for production environment with automated CI/CD pipeline.

## 🎯 Quick Deployment Overview

### Automatic Deployment (Recommended)
- **Staging**: Push to `develop` branch → Auto-deploy to staging
- **Production**: Push to `main` branch → Auto-deploy to production

### Manual Deployment
- **Vercel**: `npm run deploy:production`
- **Railway/Render**: Direct integration with GitHub

---

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] GitHub repository configured
- [ ] Vercel account connected
- [ ] Domain DNS configured
- [ ] SSL certificates ready
- [ ] Email SMTP configured

### 2. Required Secrets
Configure these in GitHub Secrets and deployment platforms:

```env
# GitHub Secrets (for CI/CD)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
GITHUB_TOKEN=automatically_provided

# Production Environment Variables
NEXT_PUBLIC_SITE_URL=https://www.alvescuryfinancial.com
NEXT_PUBLIC_WHATSAPP_PHONE=15618231966
NEXT_PUBLIC_BRAND_NAME="Alves Cury Financial"
NEXT_PUBLIC_API_URL=https://api.alvescuryfinancial.com

# Backend Variables
DATABASE_URL=postgresql://user:pass@host:5432/db
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contato@alvescuryfinancial.com
SMTP_PASS=your_app_password
NOTIFY_TO=contato@alvescuryfinancial.com
CORS_ORIGIN=https://www.alvescuryfinancial.com
API_KEY=your_secure_api_key
```

---

## 🌐 Frontend Deployment (Vercel)

### Automatic Setup

1. **Connect Repository**
   ```bash
   # Repository already configured at:
   # https://github.com/malves-eth/landingpage.git
   ```

2. **Vercel Integration**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import project from GitHub
   - Select `landingpage` repository
   - Set build settings:
     - **Framework:** Next.js
     - **Root Directory:** `web`
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next`

3. **Environment Variables**
   ```env
   NEXT_PUBLIC_SITE_URL=https://www.alvescuryfinancial.com
   NEXT_PUBLIC_WHATSAPP_PHONE=15618231966
   NEXT_PUBLIC_BRAND_NAME="Alves Cury Financial"
   NEXT_PUBLIC_API_URL=https://api.alvescuryfinancial.com/api
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

4. **Domain Configuration**
   - Add custom domain: `www.alvescuryfinancial.com`
   - Configure DNS: `CNAME www -> cname.vercel-dns.com`
   - SSL certificate: Automatic via Vercel

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to staging
cd web
vercel

# Deploy to production
vercel --prod
```

---

## 🔌 Backend Deployment

### Option 1: Railway (Recommended)

1. **Setup Railway**
   ```bash
   # Connect GitHub repository
   # Railway auto-detects NestJS project
   ```

2. **Environment Variables**
   ```env
   # Automatically provided by Railway
   DATABASE_URL=postgresql://postgres:password@host:5432/database
   
   # Configure manually
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=contato@alvescuryfinancial.com
   SMTP_PASS=your_gmail_app_password
   NOTIFY_TO=contato@alvescuryfinancial.com
   CORS_ORIGIN=https://www.alvescuryfinancial.com
   API_KEY=generate_secure_random_key
   PORT=4000
   ```

3. **Database Migration**
   ```bash
   # Railway automatically runs:
   npm run build
   npm run prisma:migrate
   npm run start:prod
   ```

### Option 2: Render

1. **Create Web Service**
   - Connect GitHub repository
   - Set root directory: `api`
   - Build command: `npm install && npm run build`
   - Start command: `npm run start:prod`

2. **Database Setup**
   - Create PostgreSQL service on Render
   - Copy connection string to `DATABASE_URL`

### Option 3: Heroku

1. **Heroku Setup**
   ```bash
   # Install Heroku CLI
   npm install -g heroku
   
   # Login and create app
   heroku login
   heroku create alves-cury-api
   
   # Add PostgreSQL
   heroku addons:create heroku-postgresql:mini
   ```

2. **Deploy**
   ```bash
   # Set buildpack for subdirectory
   heroku buildpacks:add -a alves-cury-api https://github.com/timanovsky/subdir-heroku-buildpack
   heroku config:set PROJECT_PATH=api -a alves-cury-api
   
   # Deploy
   git push heroku main
   ```

---

## 🤖 CI/CD Pipeline Setup

### GitHub Actions Configuration

The repository includes complete CI/CD workflows:

1. **Testing Pipeline** (`ci.yml`)
   - Runs on every PR and push
   - Tests both frontend and backend
   - Security auditing
   - Build verification

2. **Staging Deployment**
   - Triggered by push to `develop` branch
   - Deploys to staging environment
   - Runs all tests before deployment

3. **Production Deployment**
   - Triggered by push to `main` branch
   - Deploys to production environment
   - Creates automatic releases

### Required GitHub Secrets

```bash
# Navigate to: GitHub Repository → Settings → Secrets and Variables → Actions

VERCEL_TOKEN          # Get from Vercel dashboard
VERCEL_ORG_ID         # Get from Vercel project settings
VERCEL_PROJECT_ID     # Get from Vercel project settings
GITHUB_TOKEN          # Automatically provided
```

---

## 🔒 Security Configuration

### 1. Environment Security
```env
# Generate secure API key
API_KEY=$(openssl rand -hex 32)

# Use app-specific passwords for Gmail
# Enable 2FA and generate app password
SMTP_PASS=your_16_character_app_password
```

### 2. CORS Configuration
```typescript
// Restrict CORS to production domains only
CORS_ORIGIN="https://www.alvescuryfinancial.com,https://alvescuryfinancial.com"
```

### 3. Rate Limiting
```typescript
// Already configured in api/src/app.module.ts
ThrottlerModule.forRoot([{
  ttl: 60000,        // 60 seconds
  limit: 10,         // 10 requests per minute
}])
```

---

## 📊 Monitoring & Analytics

### 1. Application Monitoring

**Vercel Analytics**
```bash
# Automatically enabled for Vercel Pro accounts
# View at: https://vercel.com/analytics
```

**Railway Metrics**
```bash
# Built-in monitoring for:
# - CPU usage
# - Memory usage
# - Request metrics
# - Error rates
```

### 2. Error Tracking

**Option 1: Sentry**
```bash
# Install Sentry
npm install @sentry/nextjs @sentry/node

# Configure in next.config.js and main.ts
```

**Option 2: LogRocket**
```bash
# Install LogRocket
npm install logrocket
```

### 3. Google Analytics

```typescript
// Already configured in layout.tsx
// Set NEXT_PUBLIC_GA4_ID in environment variables
```

---

## 🧪 Testing Deployment

### Pre-Production Testing

1. **Staging Environment**
   ```bash
   # Test staging deployment
   curl -I https://staging.alvescuryfinancial.com
   
   # Test API endpoints
   curl -X POST https://api-staging.alvescuryfinancial.com/api/leads \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","whatsapp":"1234567890","state":"FL","age":30,"goal":"test"}'
   ```

2. **Load Testing**
   ```bash
   # Install artillery for load testing
   npm install -g artillery
   
   # Create load test config
   echo 'config:
     target: "https://www.alvescuryfinancial.com"
     phases:
       - duration: 60
         arrivalRate: 10
   scenarios:
     - name: "Homepage load"
       requests:
         - get:
             url: "/"' > load-test.yml
   
   # Run load test
   artillery run load-test.yml
   ```

### Production Verification

1. **Health Checks**
   ```bash
   # Frontend health
   curl -I https://www.alvescuryfinancial.com
   
   # Backend health
   curl https://api.alvescuryfinancial.com/health
   ```

2. **SEO Verification**
   ```bash
   # Check robots.txt
   curl https://www.alvescuryfinancial.com/robots.txt
   
   # Check sitemap
   curl https://www.alvescuryfinancial.com/sitemap.xml
   
   # Lighthouse audit
   npx lighthouse https://www.alvescuryfinancial.com --view
   ```

---

## 🚨 Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   ```bash
   # Check build logs in Vercel dashboard
   # Common fixes:
   - Update Node.js version to 18+
   - Fix TypeScript errors
   - Update environment variables
   ```

2. **Database Connection Issues**
   ```bash
   # Verify DATABASE_URL format:
   postgresql://username:password@host:port/database?sslmode=require
   
   # Test connection:
   npx prisma db push
   ```

3. **CORS Errors**
   ```bash
   # Update CORS_ORIGIN in backend environment
   CORS_ORIGIN="https://www.alvescuryfinancial.com"
   ```

4. **Email Delivery Issues**
   ```bash
   # Verify Gmail app password
   # Check SMTP configuration
   # Test with Gmail SMTP tester
   ```

### Emergency Procedures

1. **Rollback Deployment**
   ```bash
   # Vercel rollback
   vercel rollback
   
   # Railway rollback
   # Use Railway dashboard to rollback to previous deployment
   ```

2. **Database Recovery**
   ```bash
   # Railway automatic backups
   # Restore from backup in Railway dashboard
   
   # Manual backup
   pg_dump $DATABASE_URL > backup.sql
   ```

---

## 📈 Performance Optimization

### 1. Frontend Optimization
- ✅ Next.js App Router for optimal performance
- ✅ Image optimization with Next.js Image component
- ✅ Static generation where possible
- ✅ CDN caching via Vercel Edge Network

### 2. Backend Optimization
- ✅ Database connection pooling
- ✅ Response compression
- ✅ Rate limiting to prevent abuse
- ✅ Efficient database queries with Prisma

### 3. CDN Configuration
```bash
# Vercel automatically configures:
# - Global CDN
# - Edge caching
# - Image optimization
# - Automatic compression
```

---

## 📞 Deployment Support

### Internal Support
- **Technical Lead**: Setup and configuration
- **DevOps**: CI/CD pipeline and monitoring
- **QA**: Testing and validation

### External Support
- **Vercel Support**: Platform-specific issues
- **Railway Support**: Backend hosting issues
- **Domain Provider**: DNS and SSL issues

---

## 🎉 Go-Live Checklist

### Final Verification

- [ ] **DNS Configuration**: Domain points to Vercel
- [ ] **SSL Certificate**: HTTPS working properly
- [ ] **Frontend Deployment**: Website loads correctly
- [ ] **Backend Deployment**: API endpoints responding
- [ ] **Database**: Migrations applied successfully
- [ ] **Email System**: Test email notifications
- [ ] **Analytics**: Google Analytics tracking
- [ ] **SEO**: Sitemap and robots.txt accessible
- [ ] **Performance**: Lighthouse score > 90
- [ ] **Security**: All security headers active
- [ ] **Monitoring**: Error tracking configured
- [ ] **Backups**: Database backup system active

### Launch Day
1. **Monitor deployments** in real-time
2. **Watch error logs** for any issues
3. **Test critical paths** (form submission, email delivery)
4. **Monitor performance** metrics
5. **Verify analytics** data collection

---

**🚀 Ready for Production! The deployment pipeline is fully automated and ready to scale.**