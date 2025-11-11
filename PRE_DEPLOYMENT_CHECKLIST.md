# Pre-Deployment Checklist

Use this checklist before your first deployment to ensure everything is ready.

## 📋 Content Review

### Home Page (/)
- [ ] Your name displays correctly
- [ ] Navigation works (About, Blog)
- [ ] Theme toggle works (dark/light mode)
- [ ] Recent posts section shows latest blog posts
- [ ] Footer has correct links
- [ ] No "TODO" or placeholder text

### About Page (/about)
- [ ] Personal introduction is complete
- [ ] All sections are filled out
- [ ] Links work (if any)
- [ ] Images load correctly
- [ ] No lorem ipsum or placeholder text

### Blog Posts
- [ ] All blog posts have proper front matter:
  - [ ] title
  - [ ] date
  - [ ] excerpt
  - [ ] tags (optional)
- [ ] All blog posts render correctly
- [ ] Code blocks have syntax highlighting
- [ ] Images have alt text
- [ ] Links work
- [ ] Reading time calculates correctly

## 🛠️ Technical Checks

### Build Test
- [ ] Run `make prod-build` successfully (no errors)
- [ ] Run `make prod-start` and verify at localhost:3000
- [ ] No console errors in browser developer tools

### Images & Assets
- [ ] All images are in `website/public/images/`
- [ ] Profile image exists at `website/public/images/general/riebeeck-profile.jpg`
- [ ] Blog images are in appropriate subdirectories
- [ ] Favicon exists at `website/public/favicon.ico`

### SEO & Meta Tags
- [ ] Each page has a unique title
- [ ] Meta descriptions are present
- [ ] Open Graph tags for social sharing
- [ ] Alt text on all images

### Responsive Design
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1440px width)
- [ ] Navigation works on all screen sizes
- [ ] Images scale appropriately

### Dark/Light Mode
- [ ] Toggle works on all pages
- [ ] All text is readable in both modes
- [ ] Images work in both modes
- [ ] No color contrast issues
- [ ] Preference persists on page reload

### Performance
- [ ] Run Lighthouse in Chrome DevTools
  - [ ] Performance: > 90
  - [ ] Accessibility: > 90
  - [ ] Best Practices: > 90
  - [ ] SEO: > 90

## 📁 Files & Git

### Required Files
- [ ] `website/package.json` is up to date
- [ ] `website/package-lock.json` is committed
- [ ] `website/next.config.js` is present
- [ ] `website/tailwind.config.ts` is present
- [ ] `website/vercel.json` is present
- [ ] `DEPLOYMENT_GUIDE.md` exists in root

### Git Status
- [ ] All changes are committed
- [ ] No untracked files (check with `git status`)
- [ ] Push to GitHub successful
- [ ] Repository is public or Vercel has access

### Cleanup
- [ ] No test files in content/blog/
- [ ] No `.dev-server.pid` or `.prod-server.pid` files
- [ ] No `node_modules/` in git
- [ ] No `.env.local` files (should be gitignored)

## 🔐 Access & Accounts

### GitHub
- [ ] Repository exists: https://github.com/Riebeeck/resume_blog_page
- [ ] Can push to main branch
- [ ] Repository description is filled out

### Cloudflare
- [ ] Domain registered: beckvanniekerk.com
- [ ] Can access DNS settings
- [ ] DNS is managed by Cloudflare

### Vercel (After Signup)
- [ ] Account created
- [ ] Connected to GitHub
- [ ] Can import repositories

## 🚀 Deployment Steps

Once all items above are checked:

1. [ ] Follow Step 1 in DEPLOYMENT_GUIDE.md (commit & push)
2. [ ] Follow Step 2 in DEPLOYMENT_GUIDE.md (Vercel setup)
3. [ ] Follow Step 3 in DEPLOYMENT_GUIDE.md (domain configuration)
4. [ ] Verify deployment at temporary Vercel URL
5. [ ] Wait for DNS propagation
6. [ ] Verify deployment at beckvanniekerk.com

## ✅ Post-Deployment Verification

After deployment is complete:

- [ ] Visit https://beckvanniekerk.com
- [ ] Test all navigation links
- [ ] Open several blog posts
- [ ] Test dark/light mode toggle
- [ ] Test on mobile device
- [ ] Check page load speed
- [ ] Test from incognito/private window
- [ ] Share a blog post URL to verify it works
- [ ] Check Vercel dashboard for deployment status

## 🎉 Success!

When all items are checked, your website is live and ready for the world!

---

**Next Steps After Deployment:**
1. Share your website with friends/colleagues
2. Submit to Google Search Console
3. Add analytics (optional)
4. Start writing more blog posts!

