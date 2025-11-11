# Development & Deployment Workflow

## 📊 Visual Workflow Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    YOUR DEVELOPMENT WORKFLOW                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌────────────────┐
│  LOCAL MACHINE │
│                │
│  1. Write Code │  ← You edit files in /website/
│  2. Add Blog   │    - content/blog/*.mdx
│  3. Edit Pages │    - app/*/page.tsx
│                │    - components/*.tsx
└───────┬────────┘
        │
        │ make dev-start → Test at http://localhost:3000
        │
        ↓
┌────────────────┐
│  LOCAL PREVIEW │
│                │
│  ✓ Test blog   │  ← Verify everything works locally
│  ✓ Check UI    │
│  ✓ Fix bugs    │
│                │
└───────┬────────┘
        │
        │ make dev-stop
        │
        ↓
┌────────────────┐
│   GIT COMMIT   │
│                │
│  git add .     │  ← Commit your changes
│  git commit    │
│  git push      │
│                │
└───────┬────────┘
        │
        │ Pushes to GitHub
        │
        ↓
┌────────────────┐
│     GITHUB     │
│                │
│  Repository:   │  ← Code is stored here
│  Riebeeck/     │    https://github.com/Riebeeck/resume_blog_page
│  resume_blog   │
│                │
└───────┬────────┘
        │
        │ Webhook triggers Vercel
        │
        ↓
┌────────────────┐
│     VERCEL     │
│                │
│  1. Detects    │  ← Vercel automatically:
│     push       │    - Clones repository
│  2. Runs       │    - Runs npm install
│     build      │    - Runs npm run build
│  3. Deploys    │    - Deploys to CDN
│                │    - Sends notification
└───────┬────────┘
        │
        │ Deploy complete (2-3 minutes)
        │
        ↓
┌────────────────┐
│   PRODUCTION   │
│                │
│  Live Website  │  ← Your site is now live!
│  https://      │    https://beckvanniekerk.com
│  beckvanniek   │
│  erk.com       │
└────────────────┘
```

---

## 🔄 Common Workflows

### Workflow 1: Writing a New Blog Post

```
┌──────────────────────┐
│  Create new post     │ → content/blog/my-post.mdx
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Add front matter    │ → title, date, excerpt, tags
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Write content       │ → Markdown + MDX components
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Add images (opt.)   │ → public/images/blogs/my-post/
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  make dev-start      │ → Preview at localhost:3000/blog
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Looks good?         │ → Yes: Continue | No: Edit more
└──────────┬───────────┘
           │ Yes
           ↓
┌──────────────────────┐
│  make dev-stop       │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  git add .           │
│  git commit -m       │
│  "blog: new post"    │
│  git push origin main│
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Wait 2-3 mins       │ → Vercel builds & deploys
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Visit live site     │ → beckvanniekerk.com/blog
│  Verify post appears │
└──────────────────────┘

Time: ~15-30 minutes (including writing)
```

### Workflow 2: Fixing a Typo (Quick Fix)

```
┌──────────────────────┐
│  Spot typo on site   │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Edit file locally   │ → Fix typo in source file
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  git add .           │
│  git commit -m       │
│  "fix: typo"         │
│  git push origin main│
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Wait 2-3 mins       │ → Vercel rebuilds
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Typo fixed on site  │ → Hard refresh (Cmd+Shift+R)
└──────────────────────┘

Time: ~5 minutes total
```

### Workflow 3: Updating About Page

```
┌──────────────────────┐
│  Edit about page     │ → app/about/page.tsx
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  make dev-start      │ → Preview at localhost:3000/about
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Verify changes      │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  make dev-stop       │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  git add .           │
│  git commit -m       │
│  "content: update    │
│   about page"        │
│  git push origin main│
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Wait 2-3 mins       │
└──────────┬───────────┘
           │
           ↓
┌──────────────────────┐
│  Changes live        │ → beckvanniekerk.com/about
└──────────────────────┘

Time: ~10-20 minutes
```

---

## 🎯 Key Principles

### 1. **Continuous Deployment**
- Every push to `main` branch = automatic deployment
- No manual intervention needed
- Vercel handles everything automatically

### 2. **Always Test Locally First**
- Run `make dev-start` before pushing
- Verify changes work as expected
- Catch errors before deployment

### 3. **Commit Often, Deploy Often**
- Small, frequent commits are better
- Each commit deploys separately
- Easy to track what changed

### 4. **Trust the Process**
- Vercel is reliable (99.99% uptime)
- Builds are consistent (containerized)
- DNS caching might delay visibility (normal)

---

## 🔍 Monitoring Your Deployments

### Vercel Dashboard
```
https://vercel.com/dashboard
    ↓
Your Project
    ↓
Deployments Tab
    ↓
See: Status, Logs, Duration, Preview URL
```

### GitHub Integration
```
GitHub Repository
    ↓
Commits Tab
    ↓
Each commit shows:
    ✓ Green checkmark = deployed successfully
    ✗ Red X = build failed (check Vercel logs)
    ⏳ Yellow dot = building...
```

---

## ⚡ Speed & Performance

### Build Times
- **Initial build**: 2-3 minutes
- **Subsequent builds**: 1-2 minutes (with caching)
- **Very small changes**: 30-60 seconds

### Deployment Propagation
- **Vercel CDN**: Instant (globally distributed)
- **DNS changes**: 1-48 hours (first time only)
- **Browser cache**: Clear with Cmd+Shift+R

---

## 📁 File Structure Impact on Deployment

```
/Users/riebeeck/Documents/projects/online_profile_resume/
│
├── website/              ← Vercel builds THIS folder
│   ├── app/             ← Pages & layouts
│   ├── components/      ← React components
│   ├── content/         ← Blog posts (MDX)
│   ├── public/          ← Static assets (images, etc.)
│   ├── lib/             ← Utilities
│   ├── package.json     ← Dependencies (Vercel reads this)
│   ├── next.config.js   ← Next.js config
│   └── vercel.json      ← Vercel config
│
├── DEPLOYMENT_GUIDE.md  ← Documentation (not deployed)
├── CLAUDE.md            ← AI instructions (not deployed)
└── README.md            ← Project info (not deployed)
```

**What gets deployed:**
- Everything in `website/` folder
- Optimized and built by Next.js
- Served from Vercel's global CDN

**What doesn't get deployed:**
- Root-level documentation files
- `node_modules/` (rebuilt on Vercel)
- `.git/` history
- Files in `.gitignore`

---

## 🛡️ Rollback Strategy

If something goes wrong after deployment:

### Option 1: Quick Fix Forward
```
1. Fix the issue locally
2. git add . && git commit -m "fix: emergency fix"
3. git push origin main
4. Wait 2 minutes for new deployment
```

### Option 2: Rollback in Vercel
```
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find last working deployment
4. Click "..." menu → "Promote to Production"
5. Previous version is now live
6. Fix issue locally at your pace
```

### Option 3: Git Revert
```
1. git log (find commit to revert)
2. git revert <commit-hash>
3. git push origin main
4. Vercel deploys reverted version
```

---

## 🎨 Branch Strategy (Optional Advanced)

For bigger changes, use feature branches:

```
┌────────────────┐
│  main branch   │  ← Always production-ready
└───────┬────────┘
        │
        │ git checkout -b feature/new-feature
        │
        ↓
┌────────────────┐
│ feature branch │  ← Work on new feature
└───────┬────────┘
        │
        │ git push origin feature/new-feature
        │
        ↓
┌────────────────┐
│ Vercel Preview │  ← Automatic preview deployment
│  Deployment    │    (unique URL for testing)
└───────┬────────┘
        │
        │ Feature looks good?
        │
        ↓
┌────────────────┐
│ Merge to main  │  ← git merge or GitHub PR
└───────┬────────┘
        │
        ↓
┌────────────────┐
│   Production   │  ← Automatically deployed
│   Deployment   │
└────────────────┘
```

**Benefits:**
- Test big changes without affecting production
- Get preview URLs to share with others
- Roll back easily if needed

---

## 📊 Deployment Checklist Summary

### Before First Deployment
- [ ] All files committed to git
- [ ] Pushed to GitHub
- [ ] `npm run build` succeeds locally
- [ ] Vercel account created
- [ ] Repository connected to Vercel

### For Every Deployment
- [ ] Test locally with `make dev-start`
- [ ] Changes look good
- [ ] Commit with clear message
- [ ] Push to GitHub
- [ ] Wait for Vercel email confirmation
- [ ] Visit live site to verify

### After Deployment
- [ ] Check Vercel dashboard for status
- [ ] Test live site
- [ ] Clear browser cache if needed
- [ ] Verify on mobile device

---

## 🚀 Summary

**Your workflow is simple:**
1. Write/edit locally
2. Test with `make dev-start`
3. Commit & push to GitHub
4. Vercel deploys automatically
5. Live in 2-3 minutes

**No manual steps needed!**

This is modern continuous deployment at its best. 🎉

