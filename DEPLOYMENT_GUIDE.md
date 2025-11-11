# Deployment & Maintenance Guide

## Overview

This guide covers deploying your Next.js website to Vercel with your custom Cloudflare domain (beckvanniekerk.com) and explains the complete workflow for developing, publishing, and maintaining your blog.

---

## 🚀 Initial Deployment Setup

### Prerequisites Checklist
- [x] GitHub repository: https://github.com/Riebeeck/resume_blog_page
- [x] Domain registered: beckvanniekerk.com (via Cloudflare)
- [ ] Vercel account (will create)
- [ ] Domain connected to Vercel
- [ ] First deployment successful

---

## Step 1: Prepare Your Repository

### 1.1 Commit and Push Current Changes

First, ensure all your work is committed and pushed to GitHub:

```bash
# Navigate to project root
cd /Users/riebeeck/Documents/projects/online_profile_resume

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "chore: prepare for initial deployment"

# Push to GitHub
git push origin main
```

### 1.2 Verify Repository Structure

Your Vercel build will need to know the website code is in the `website/` subfolder. We'll configure this in Vercel settings.

---

## Step 2: Create Vercel Account & Deploy

### 2.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. **Important**: Sign up with GitHub (this makes the integration seamless)
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Repository

1. On the Vercel dashboard, click **"Add New..." → "Project"**
2. Find your repository: `Riebeeck/resume_blog_page`
3. Click **"Import"**

### 2.3 Configure Build Settings

Vercel will auto-detect Next.js, but you need to configure the root directory:

**Build & Development Settings:**
```
Framework Preset: Next.js
Root Directory: website
Build Command: npm run build (auto-detected)
Output Directory: .next (auto-detected)
Install Command: npm install (auto-detected)
```

**Environment Variables:** 
- None required for initial deployment (your site has no secrets)
- Add `NODE_ENV=production` if needed (usually auto-set)

### 2.4 Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. You'll get a temporary URL like: `resume-blog-page.vercel.app`
4. Click the URL to verify your site works!

---

## Step 3: Connect Your Custom Domain

### 3.1 Add Domain in Vercel

1. In your Vercel project, go to **"Settings" → "Domains"**
2. Add your domain: `beckvanniekerk.com`
3. Also add: `www.beckvanniekerk.com` (recommended for automatic redirect)
4. Vercel will show you DNS configuration instructions

### 3.2 Configure DNS in Cloudflare

Log into your Cloudflare account and update DNS records:

**Option A: Using A Records (Recommended)**
```
Type: A
Name: @ (root)
Value: 76.76.21.21
Proxy: DNS only (gray cloud)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
Proxy: DNS only (gray cloud)
```

**Option B: Using CNAME (Alternative)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
Proxy: DNS only (gray cloud)
```

**Important Cloudflare Settings:**
- **Disable Cloudflare Proxy** (gray cloud, not orange) for initial setup
- Vercel handles SSL automatically
- You can re-enable Cloudflare proxy later if needed, but test first

### 3.3 Wait for DNS Propagation

- DNS changes can take 1-48 hours (usually ~15 minutes)
- Check status: [whatsmydns.net](https://whatsmydns.net)
- Vercel will automatically issue SSL certificate once DNS propagates

### 3.4 Verify Domain

1. Wait for Vercel to show "Valid Configuration" in Domains settings
2. Visit `https://beckvanniekerk.com` (HTTPS should work automatically)
3. Verify `https://www.beckvanniekerk.com` redirects to main domain

---

## 🔄 Development & Deployment Workflow

### Your Workflow (Local → GitHub → Vercel → Production)

```
┌─────────────────┐
│  1. LOCAL DEV   │  make dev-start → Edit code/blogs locally
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  2. GIT COMMIT  │  git add/commit/push to GitHub
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  3. VERCEL AUTO │  Automatically detects push & deploys
│     DEPLOY      │  Build → Test → Deploy (2-3 mins)
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  4. PRODUCTION  │  Live at beckvanniekerk.com
└─────────────────┘
```

### Writing & Publishing a New Blog Post

**Step-by-step:**

1. **Create the blog post locally**
   ```bash
   cd /Users/riebeeck/Documents/projects/online_profile_resume/website
   
   # Start dev server to preview
   make dev-start
   
   # Create new blog post
   touch content/blog/my-new-post.mdx
   
   # Edit in your IDE with front matter
   ```

2. **Preview locally**
   - Visit `http://localhost:3000/blog` to see your new post
   - Click through to verify formatting, images, etc.
   - Test dark/light mode

3. **Commit and push**
   ```bash
   # Stop dev server
   make dev-stop
   
   # Navigate to root
   cd ..
   
   # Add your new blog post (and any images)
   git add website/content/blog/my-new-post.mdx
   git add website/public/images/blogs/my-new-post/
   
   # Commit with descriptive message
   git commit -m "blog: add new post about [topic]"
   
   # Push to GitHub
   git push origin main
   ```

4. **Automatic deployment**
   - Vercel detects the push automatically
   - Builds and deploys (check progress in Vercel dashboard)
   - Live in ~2-3 minutes at beckvanniekerk.com

5. **Verify production**
   - Visit your website
   - Check the new blog post appears
   - Test all links and images

---

## 📝 Common Workflows

### Updating About Page

```bash
# 1. Edit locally
cd /Users/riebeeck/Documents/projects/online_profile_resume/website
make dev-start
# Edit app/about/page.tsx

# 2. Preview and test
# Visit http://localhost:3000/about

# 3. Commit and push
make dev-stop
cd ..
git add website/app/about/page.tsx
git commit -m "content: update about page"
git push origin main

# 4. Wait for automatic deployment
```

### Adding New Images

```bash
# 1. Add images to public/images/
cp ~/Downloads/new-photo.jpg website/public/images/general/

# 2. Reference in your blog post or page
<Image src="/images/general/new-photo.jpg" alt="Description" />

# 3. Commit and push
git add website/public/images/
git commit -m "assets: add new images"
git push origin main
```

### Fixing Typos (Quick Fix)

```bash
# Make the fix locally
cd /Users/riebeeck/Documents/projects/online_profile_resume

# Commit and push immediately
git add .
git commit -m "fix: typo in [blog post/page name]"
git push origin main

# Live in 2-3 minutes
```

---

## 🔍 Monitoring & Verification

### Check Deployment Status

1. **Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click your project
   - See deployment history, logs, and status

2. **Deployment Notifications**
   - Vercel sends email on every deployment
   - Shows success/failure
   - Links to preview and production

3. **Git Commit Integration**
   - Each commit on GitHub shows Vercel deployment status
   - Green checkmark = successful deployment
   - Red X = build failed

### Testing Checklist After Deployment

- [ ] Home page loads correctly
- [ ] Blog listing page shows all posts
- [ ] Individual blog posts open and render properly
- [ ] Images load correctly
- [ ] Dark/light mode toggle works
- [ ] Navigation links work
- [ ] Mobile responsive design works
- [ ] Page load speed is good (use Lighthouse in Chrome DevTools)

---

## 🛠️ Troubleshooting

### Build Fails on Vercel

**Check build logs in Vercel dashboard:**

1. Click on failed deployment
2. View "Build Logs"
3. Common issues:
   - **TypeScript errors**: Fix type errors locally
   - **Missing dependencies**: Run `npm install` locally, commit `package-lock.json`
   - **MDX parsing errors**: Check front matter formatting in blog posts
   - **Image optimization errors**: Ensure images are in correct formats

**Test build locally:**
```bash
cd /Users/riebeeck/Documents/projects/online_profile_resume/website
make prod-build

# If build succeeds locally, likely a Vercel config issue
# If build fails, fix errors shown in terminal
```

### Domain Not Working

1. **Check DNS in Cloudflare**: Ensure A/CNAME records are correct
2. **Check Vercel domain status**: Should show "Valid Configuration"
3. **Wait longer**: DNS can take up to 48 hours
4. **Try incognito mode**: Clear browser cache
5. **Check SSL**: Vercel should auto-issue Let's Encrypt certificate

### Old Content Shows After Deployment

1. **Hard refresh**: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. **Check deployment**: Verify latest commit deployed in Vercel
3. **Clear browser cache**
4. **Check Vercel cache**: May need to redeploy

---

## 🏗️ Production Best Practices

### Branch Strategy (Optional but Recommended)

For more complex updates, consider using branches:

```bash
# Create feature branch
git checkout -b blog/new-post

# Make changes, commit
git add .
git commit -m "blog: draft new post"
git push origin blog/new-post

# Vercel creates preview deployment automatically
# Test at preview URL (sent via email)

# When ready, merge to main
git checkout main
git merge blog/new-post
git push origin main

# Production deploys automatically
```

### Environment Variables (Future)

If you add features requiring secrets (e.g., newsletter signup, analytics):

1. Add `.env.local` locally (gitignored)
2. Add variables in Vercel dashboard: **Settings → Environment Variables**
3. Redeploy for variables to take effect

### Performance Monitoring

After deployment, use these tools:

1. **Google Lighthouse** (built into Chrome DevTools)
   - Performance score
   - SEO analysis
   - Accessibility check
   - Best practices

2. **Vercel Analytics** (built-in)
   - Page load times
   - User geography
   - Most visited pages

3. **Google Search Console** (optional)
   - Submit sitemap: `beckvanniekerk.com/sitemap.xml`
   - Monitor search rankings
   - Check indexing status

---

## 📋 Pre-Deployment Checklist

Before your first deployment, verify:

### Content
- [ ] About page is complete and accurate
- [ ] Blog posts have proper front matter (title, date, excerpt)
- [ ] All images have alt text
- [ ] No placeholder text (lorem ipsum)
- [ ] Links all work (internal and external)

### Technical
- [ ] `npm run build` succeeds locally
- [ ] No console errors in browser
- [ ] Dark mode works on all pages
- [ ] Mobile responsive on all screen sizes
- [ ] Lighthouse score > 90 in all categories

### SEO & Social
- [ ] Page titles are descriptive
- [ ] Meta descriptions are present
- [ ] Open Graph images set (for social sharing)
- [ ] Favicon is present and loads

### Files to Commit
- [ ] All blog posts in `website/content/blog/`
- [ ] All images in `website/public/images/`
- [ ] Updated `package.json` if dependencies changed
- [ ] Remove any test files or drafts

---

## 🚦 Quick Reference Commands

### Local Development
```bash
cd /Users/riebeeck/Documents/projects/online_profile_resume/website

# Start development server
make dev-start

# Stop development server
make dev-stop

# Restart after changes
make dev-refresh

# Test production build
make prod-build
make prod-start
```

### Git Workflow
```bash
cd /Users/riebeeck/Documents/projects/online_profile_resume

# Check status
git status

# Add changes
git add .

# Commit
git commit -m "descriptive message"

# Push to GitHub (triggers Vercel deployment)
git push origin main

# View git log
git log --oneline -10
```

### Vercel CLI (Optional)
```bash
# Install Vercel CLI globally (if you want more control)
npm install -g vercel

# Login
vercel login

# Deploy from command line
cd /Users/riebeeck/Documents/projects/online_profile_resume/website
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs
```

---

## 🎯 Summary

**Your deployment flow is now:**

1. **Develop locally** with `make dev-start`
2. **Commit changes** with descriptive messages
3. **Push to GitHub** with `git push origin main`
4. **Vercel auto-deploys** to production (2-3 mins)
5. **Verify** at beckvanniekerk.com

**Every push to `main` branch = automatic production deployment.**

This is a "continuous deployment" workflow - fast, simple, and reliable.

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Cloudflare DNS**: https://developers.cloudflare.com/dns/
- **Your Project**: https://github.com/Riebeeck/resume_blog_page

Good luck with your deployment! 🚀

