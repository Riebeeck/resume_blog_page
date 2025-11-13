# Deployment Workflow for beckvanniekerk.com

**Last Updated:** 2025-11-12

## Overview

This document describes the exact steps to update your website and deploy changes to production at [www.beckvanniekerk.com](https://www.beckvanniekerk.com).

---

## Current Setup

- **Platform:** Vercel
- **Domain:** www.beckvanniekerk.com
- **GitHub Repository:** https://github.com/Riebeeck/resume_blog_page (Public)
- **Repository Structure:** Website code is in `/website` subfolder
- **Deployment Method:** Manual Deploy Hook (auto-deploy via GitHub webhook is NOT working)

---

## ⚠️ Important Known Issues

### Issue: GitHub Webhook Auto-Deploy Not Working

**Problem:** Vercel does not automatically deploy when you push commits to GitHub, even though:
- GitHub integration is connected
- Repository is public
- Ignored Build Step is configured correctly
- All permissions appear correct

**Root Cause:** Unknown - likely a Vercel project configuration issue that persists even after reconnecting GitHub integration multiple times.

**Workaround:** Use Deploy Hook (manual trigger) - see instructions below.

---

## Standard Workflow: Updating Content & Deploying

### Step 1: Make Your Changes Locally

Navigate to the website directory:

```bash
cd /Users/riebeeck/Documents/projects/online_profile_resume/website
```

**Common tasks:**

#### Adding a New Blog Post
```bash
# Create new MDX file
touch content/blog/my-new-post.mdx

# Edit the file with front matter:
---
title: "Your Post Title"
date: "2025-11-12"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

# Your content here...
```

#### Updating Existing Content
- Edit files in `website/app/` for pages
- Edit files in `website/components/` for components
- Edit files in `website/content/blog/` for blog posts

#### Updating Styles
- Edit `website/app/globals.css` for global styles
- Edit `website/tailwind.config.ts` for design tokens

---

### Step 2: Test Locally (Optional but Recommended)

```bash
# Start development server
make start

# Or using npm directly:
npm run dev
```

Open http://localhost:3000 to preview your changes.

Stop the server when done:
```bash
make stop
```

---

### Step 3: Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "your commit message here"

# Examples:
git commit -m "blog: add new post about AI"
git commit -m "fix: correct typo in about page"
git commit -m "style: update header design"
```

---

### Step 4: Push to GitHub

```bash
git push origin main
```

⚠️ **Note:** This will NOT automatically trigger a deployment due to the webhook issue.

---

### Step 5: Trigger Deployment (Manual)

Since auto-deploy doesn't work, you must manually trigger deployment using the Deploy Hook:

```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_q7LoFg86A1sMGQw69h26A56nv7me/LopeC8CbC7
```

**What this does:**
- Triggers Vercel to pull the latest code from the `main` branch on GitHub
- Builds and deploys to production
- Updates www.beckvanniekerk.com

**Expected response:**
```json
{"job":{"id":"...","state":"PENDING","createdAt":...}}
```

---

### Step 6: Verify Deployment

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your **beckvanniekerk.com** project
3. Go to the **Deployments** tab
4. You should see a new deployment with status "Building" → "Ready"
5. Wait for it to show **"Ready"** status (usually 1-2 minutes)
6. Visit [www.beckvanniekerk.com](https://www.beckvanniekerk.com) to verify your changes are live

---

## Quick Reference Commands

### Complete Workflow (Copy-Paste)

```bash
# Navigate to website directory
cd /Users/riebeeck/Documents/projects/online_profile_resume/website

# Make your changes, then:

# Commit and push
git add .
git commit -m "your message here"
git push origin main

# Trigger deployment
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_q7LoFg86A1sMGQw69h26A56nv7me/LopeC8CbC7
```

### Create Deploy Hook Script (Optional)

You can create a convenience script to make deployment easier:

```bash
# Create deploy script
cat > /Users/riebeeck/Documents/projects/online_profile_resume/deploy.sh << 'EOF'
#!/bin/bash
echo "🚀 Triggering Vercel deployment..."
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_q7LoFg86A1sMGQw69h26A56nv7me/LopeC8CbC7
echo ""
echo "✅ Deployment triggered! Check Vercel dashboard for status."
EOF

# Make it executable
chmod +x /Users/riebeeck/Documents/projects/online_profile_resume/deploy.sh
```

Then you can just run:
```bash
./deploy.sh
```

---

## Using Git Tags for Version Control (Optional)

If you want to track releases with version tags:

```bash
# Create and push a tag
git tag -a v0.1.4 -m "Release v0.1.4: Description of changes"
git push origin v0.1.4

# Then trigger deployment
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_q7LoFg86A1sMGQw69h26A56nv7me/LopeC8CbC7
```

---

## Troubleshooting

### Deployment Not Starting After Triggering Hook

**Symptoms:**
- Deploy hook returns success, but no deployment appears in Vercel dashboard
- Old deployment still shows as "Current"

**Solutions:**
1. Wait 1-2 minutes and refresh the Vercel dashboard
2. Check Vercel status page: https://www.vercel-status.com/
3. Try triggering the hook again
4. Go to Settings → Git in Vercel and verify the repository is still connected

---

### Deploy Hook URL Not Working

**Symptoms:**
- 404 error when calling deploy hook
- "Invalid hook" error

**Solution:**
Regenerate the Deploy Hook:
1. Go to Vercel → Settings → Git → Deploy Hooks
2. Delete the existing "Manual Deploy" hook
3. Create a new one:
   - Name: `Manual Deploy`
   - Branch: `main`
4. Copy the new URL and update this documentation

---

### Changes Not Appearing on Website

**Possible causes:**

1. **Browser cache:** Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. **Deployment failed:** Check Vercel dashboard for build errors
3. **Wrong branch:** Ensure you pushed to `main` branch
4. **CDN cache:** Wait 1-2 minutes for CDN to update

**Verify deployment:**
```bash
# Check latest commit on GitHub
git log origin/main -1 --oneline

# Check in Vercel dashboard which commit is deployed
# It should match your latest commit
```

---

### Build Errors

If deployment fails with build errors:

1. **Check Vercel build logs:**
   - Go to Deployments → Click on failed deployment → Build Logs

2. **Test locally first:**
   ```bash
   cd website
   npm run build
   ```

3. **Common issues:**
   - TypeScript errors: Run `npm run type-check`
   - MDX formatting errors: Check your blog post front matter
   - Missing dependencies: Run `npm install`

---

## Future: Fixing Auto-Deploy

To enable automatic deployments (so you don't need to manually trigger):

### Option 1: Make Repository Private Again with Proper Setup

If you want the repository private:

1. Contact Vercel support about webhook not working for private repo
2. Ensure GitHub App has full "Contents" read permission
3. Disconnect and reconnect GitHub integration
4. Test with a commit

### Option 2: Keep Repository Public

The simplest solution - keep the repo public. This has been confirmed to work.

### Option 3: Use Vercel CLI for Deployments

Instead of Deploy Hook:

```bash
# From website directory
cd website
vercel --prod
```

This manually deploys from your local machine.

---

## Repository Structure Reference

```
/Users/riebeeck/Documents/projects/online_profile_resume/
├── website/                    # Next.js website code (THIS is the root for Vercel)
│   ├── app/                   # Next.js app directory
│   ├── components/            # React components
│   ├── content/               # MDX blog posts
│   │   └── blog/             # Blog post files (.mdx)
│   ├── lib/                  # Utility functions
│   ├── public/               # Static assets
│   ├── Makefile              # Development commands
│   ├── package.json          # Dependencies
│   └── next.config.js        # Next.js configuration
├── CLAUDE.md                  # Project instructions
├── DEPLOYMENT_WORKFLOW.md     # This file
└── deploy.sh                  # Deployment script (optional)
```

---

## Vercel Project Settings

**Current Configuration:**

- **Root Directory:** `website`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Framework:** Next.js
- **Node Version:** 22.x
- **Production Branch:** `main`
- **Ignored Build Step:** "Only build if there are changes"

---

## Deploy Hook Information

**Hook Name:** Manual Deploy
**Hook URL:** `https://api.vercel.com/v1/integrations/deploy/prj_q7LoFg86A1sMGQw69h26A56nv7me/LopeC8CbC7`
**Branch:** `main`
**Created:** 2025-11-12

⚠️ **Security Note:** This URL is safe to share in documentation. It only allows triggering deployments, not modifying project settings or accessing sensitive data.

---

## Contact & Support

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Support:** https://vercel.com/support
- **GitHub Repository:** https://github.com/Riebeeck/resume_blog_page
- **Live Site:** https://www.beckvanniekerk.com

---

## Changelog

- **2025-11-12:** Initial documentation created
  - Documented manual Deploy Hook workflow
  - Identified GitHub webhook auto-deploy issue
  - Repository changed from private to public (fixed visibility issue)
