# Quick Reference Card

Keep this handy for day-to-day operations!

---

## ⚡ Most Common Commands

### Daily Blog Writing
```bash
# Start development
cd /Users/riebeeck/Documents/projects/online_profile_resume/website
make dev-start

# When done, stop server
make dev-stop

# Publish
cd ..
git add .
git commit -m "blog: [your message]"
git push origin main
```

### Quick Typo Fix
```bash
cd /Users/riebeeck/Documents/projects/online_profile_resume
git add .
git commit -m "fix: [what you fixed]"
git push origin main
```

---

## 📁 File Locations

### Blog Posts
```
website/content/blog/your-post.mdx
```

### Blog Images
```
website/public/images/blogs/your-post/image.jpg
```

### Pages
```
website/app/page.tsx          → Home page
website/app/about/page.tsx    → About page
website/app/blog/page.tsx     → Blog listing
```

### Components
```
website/components/Header.tsx
website/components/Footer.tsx
website/components/BlogCard.tsx
```

---

## 🎯 Blog Post Template

Create new file: `website/content/blog/your-post-name.mdx`

```mdx
---
title: "Your Post Title"
date: "2025-11-11"
excerpt: "Brief description for social sharing and blog listing"
tags: ["tag1", "tag2"]
---

# Your Post Title

Your content goes here...

## Subheading

More content...

```javascript
// Code blocks work great
const example = "syntax highlighting";
```

![Image description](/images/blogs/your-post/image.jpg)
```

---

## 🌐 Important URLs

### Development
- Local site: http://localhost:3000
- Local blog: http://localhost:3000/blog
- Local about: http://localhost:3000/about

### Production
- Live site: https://beckvanniekerk.com
- Blog: https://beckvanniekerk.com/blog
- About: https://beckvanniekerk.com/about

### Dashboards
- Vercel: https://vercel.com/dashboard
- GitHub: https://github.com/Riebeeck/resume_blog_page
- Cloudflare: https://dash.cloudflare.com

---

## 🔧 Make Commands

```bash
# Development
make dev-start      # Start dev server
make dev-stop       # Stop dev server
make dev-refresh    # Restart dev server

# Production (local testing)
make prod-build     # Build for production
make prod-start     # Start production server locally
make prod-stop      # Stop production server

# Maintenance
make status         # Check server status
make clean          # Remove build files
make clean-install  # Reinstall dependencies

# Aliases
make start          # = make dev-start
make stop           # = make dev-stop
make refresh        # = make dev-refresh
make build          # = make prod-build
```

### Example Status Output

```bash
make status
```

Shows:
```
==========================================
📊 Server Status Report
==========================================

🚀 Development Server:
  🟢 Running (PID: 12345)     # Green = running
  🔴 Not running              # Red = stopped

🏭 Production Server:
  🔴 Not running (no PID file)

🔌 Port 3000 Status:
  🟢 Port 3000 is in use
  📋 Processes:
    • PID 12345: node

📦 Build Status:
  🟢 Production build exists

📚 Dependencies:
  🟢 Dependencies installed
==========================================
```

---

## 📝 Git Commit Messages

Use these prefixes:

```bash
blog: add new post about [topic]
blog: update [post name]

content: update about page
content: add new section to home page

fix: typo in [location]
fix: broken link on [page]

feat: add new component [name]
feat: add dark mode toggle

style: improve mobile layout
style: update blog card design

chore: update dependencies
chore: clean up unused files

docs: update README
docs: add deployment guide
```

---

## 🐛 Troubleshooting

### "Port 3000 is already in use"
```bash
make dev-stop
# or
lsof -ti:3000 | xargs kill -9
```

### Build Fails Locally
```bash
cd website
npm install
npm run build
# Fix errors shown in output
```

### Changes Don't Show on Live Site
```bash
# 1. Hard refresh browser
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# 2. Check Vercel deployment status
# Visit Vercel dashboard

# 3. Check if commit was pushed
git log --oneline -5
git push origin main
```

### Images Don't Load
```bash
# Check image path (must start with /)
/images/blogs/your-post/image.jpg  ✓ Correct
images/blogs/your-post/image.jpg   ✗ Wrong
./images/blogs/your-post/image.jpg ✗ Wrong

# Verify image exists
ls website/public/images/blogs/your-post/
```

### Git Push Rejected
```bash
# Pull latest changes first
git pull origin main

# Resolve any conflicts
# Then push again
git push origin main
```

---

## 🔐 Checking Status

### Local Development Status
```bash
# Check if server is running
lsof -ti:3000

# Check git status
git status

# Check recent commits
git log --oneline -5
```

### Production Status
```bash
# Check current production commit
# Visit: https://github.com/Riebeeck/resume_blog_page/commits/main

# Check Vercel deployment
# Visit: https://vercel.com/dashboard

# Test live site
curl -I https://beckvanniekerk.com
```

---

## ⏱️ Typical Timings

| Task | Time |
|------|------|
| Start dev server | 5-10 seconds |
| Write blog post | 15-60 minutes |
| Test locally | 2-5 minutes |
| Commit & push | 30 seconds |
| Vercel build & deploy | 2-3 minutes |
| DNS propagation (first time) | 1-48 hours |
| Total: New blog post to live | ~20-70 minutes |
| Total: Quick typo fix | ~5 minutes |

---

## 📞 Getting Help

### Documentation
- This project: `DEPLOYMENT_GUIDE.md`
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- MDX: https://mdxjs.com

### Check Logs
```bash
# Local build logs
cd website
npm run build

# Vercel logs
# Visit Vercel dashboard → Your project → Deployments → Click deployment → Logs
```

### Common Issues
1. **Build fails**: Check Vercel deployment logs
2. **Images missing**: Verify path starts with `/`
3. **Old content shows**: Hard refresh browser
4. **Port in use**: Run `make dev-stop`
5. **Git errors**: Run `git status`, then `git pull`

---

## 🎨 Content Formatting

### MDX Features You Can Use

#### Text Formatting
```markdown
**bold text**
*italic text*
`inline code`
[link text](https://example.com)
```

#### Headings
```markdown
# H1 - Main title
## H2 - Section
### H3 - Subsection
#### H4 - Minor heading
```

#### Lists
```markdown
- Bullet point
- Another point
  - Nested point

1. Numbered item
2. Another numbered item
```

#### Code Blocks
````markdown
```javascript
const code = "with syntax highlighting";
```
````

#### Images
```markdown
![Alt text](/images/blogs/post/image.jpg)
```

#### Blockquotes
```markdown
> This is a quote
> It can span multiple lines
```

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Test locally (`make dev-start`)
- [ ] Check for typos
- [ ] Verify images load
- [ ] Test dark/light mode
- [ ] Stop dev server (`make dev-stop`)
- [ ] Commit with clear message
- [ ] Push to GitHub

After deploying:
- [ ] Wait for Vercel email
- [ ] Visit live site
- [ ] Test on mobile
- [ ] Share with others!

---

## 💡 Pro Tips

1. **Write blog posts offline** - commit when ready
2. **Use branches for big changes** - test before merging
3. **Test builds locally first** - `make prod-build`
4. **Commit often** - small commits are easier to manage
5. **Use descriptive commit messages** - helps track changes
6. **Check Vercel dashboard regularly** - monitor deployments
7. **Keep dev server running while writing** - instant preview
8. **Hard refresh after deployment** - `Cmd+Shift+R`

---

## 📱 Mobile Testing

Test your site on mobile:
1. Start dev server: `make dev-start`
2. Find your local IP: `ifconfig | grep "inet " | grep -v 127.0.0.1`
3. Visit from phone: `http://YOUR_IP:3000`

Or just visit live site on your phone: https://beckvanniekerk.com

---

## 🎉 Success Indicators

Your deployment is successful if:
- ✅ Vercel shows green checkmark
- ✅ Email from Vercel says "Deployment Ready"
- ✅ Live site shows your changes
- ✅ No console errors in browser
- ✅ Images load correctly
- ✅ Dark/light mode works

---

**Keep this reference handy!** 📌

Bookmark or print for quick access while working on your blog.

