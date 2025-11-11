# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Building a modern, minimalist personal website with integrated blog. The design follows the clean, uncluttered aesthetic of the reference example in `example_blog_page_files/` (Dario Amodei's essay page), focusing on typography, readability, and elegant user experience.

**GitHub Repository**: https://github.com/Riebeeck/resume_blog_page
**Website Code Location**: `website/` subfolder within this root directory

## Repository Structure

```
.
├── example_blog_page_files/     # Design reference - DO NOT MODIFY
│   ├── example_blog_page.html   # Reference for design aesthetic
│   ├── style.css                # Phosphor icons, typography patterns
│   └── ...                      # Supporting assets
├── website/                     # Next.js website code
│   ├── Makefile                 # Development commands (make start/stop/refresh)
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── lib/
│   └── ... (see File Structure below)
└── .github/
    └── copilot-instructions.md
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with React and TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Content Management**: MDX for blog posts (Markdown + React components)
- **Deployment**: Vercel (with Cloudflare domain)
- **Version Control**: Git (GitHub)

**Why This Stack:**
- Next.js: Excellent SEO, performance, modern DX
- Tailwind CSS: Rapid styling, maintainable code
- MDX: Rich blog content with embedded React components
- Vercel + Next.js: Optimized for seamless deployment
- Static generation for blazing-fast load times

## Design Aesthetic (Critical Requirements)

**Core Principle**: Minimalist and content-focused. The content is the star.

### Visual Style
- Clean, modern sans-serif typography (Inter or similar system font)
- Generous whitespace and breathing room
- Maximum content width: ~720px for optimal readability
- Subtle color palette: primarily grayscale with one accent color (e.g., subtle blue)
- Minimal visual clutter - let content breathe

### Typography
- Clear hierarchy with proper font weights and sizes
- Body text: 16-18px for comfortable reading
- Line height: 1.6-1.8 for body text
- Text should "wrap balance" for headings
- Reference `example_blog_page_files/` for inspiration

### Dark/Light Mode
- Smooth toggle switch in header (similar to reference)
- Persist preference in localStorage
- Smooth color transitions (200ms)
- Both modes equally polished and readable
- Default to system preference if no saved preference exists
- Apply mode immediately on page load (no flash)

### Interactions
- Subtle hover states (no aggressive animations)
- Smooth transitions for interactive elements
- Focus states: accessible but not intrusive
- Clean, minimal loading states

## Site Structure & Pages

### 1. Home/Landing Page (`/`)
- Large, prominent header with name
- Simple navigation: "About" | "Blog" | Dark/Light toggle
- Brief tagline (1-2 sentences max)
- "Recent Posts" section (2-3 latest entries as cards)
- Minimal footer with social links

**Blog Cards Include:**
- Title, date, excerpt (2-3 lines), estimated read time
- Subtle hover states

### 2. About Page (`/about`)
- Long-form personal introduction
- Same header/navigation
- Content feels like well-formatted essay
- Support for h2, h3, paragraphs, lists, emphasis
- Optional: sticky sidebar with section navigation (desktop)

### 3. Blog Listing Page (`/blog`)
- Grid/list of all blog post cards
- Chronological order (newest first)
- Each card: title, date, excerpt, reading time, optional tags

### 4. Individual Blog Post Page (`/blog/[slug]`)
- Article metadata: title, date, reading time
- Table of contents sidebar (sticky on desktop)
- Rich typography and content support
- Optional: reading progress indicator, prev/next navigation

**Content Support:**
- Headings (h1-h4), paragraphs, lists, blockquotes
- Inline code and syntax-highlighted code blocks
- Images with captions
- Links with subtle hover effects
- Bold, italic, horizontal rules

## File Structure (in website subfolder)

```
/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual post
│   └── globals.css             # Tailwind imports + custom CSS
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BlogCard.tsx
│   ├── TableOfContents.tsx
│   ├── ThemeToggle.tsx
│   └── MDXComponents.tsx       # Custom MDX components
├── content/
│   └── blog/
│       ├── post-1.mdx
│       ├── post-2.mdx
│       └── post-3.mdx          # Sample posts
├── lib/
│   ├── mdx.ts                  # MDX processing utilities
│   ├── blog.ts                 # Blog post data fetching
│   └── utils.ts                # General utilities
├── public/
│   ├── images/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Development Commands

**Primary workflow uses Makefile commands for simplicity:**

### Quick Start (Using Make)
```bash
# Navigate to website subfolder
cd website

# Start development server (installs deps if needed)
make start

# Stop development server
make stop

# Restart development server (useful after changes)
make refresh

# Check server status (shows dev/prod servers, ports, and build status)
make status

# Clean install (removes node_modules and reinstalls)
make clean-install
```

The Makefile handles:
- Automatic dependency installation on first run
- Process management (start/stop/restart)
- Clean rebuilds when needed
- Port management (default: 3000)

### Alternative: Direct npm Commands
```bash
# Navigate to website subfolder
cd website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Build & Deploy
```bash
# Build for production (via Make)
make build

# Or using npm directly
npm run build

# Deploy to Vercel (from GitHub)
# 1. Push to GitHub: https://github.com/Riebeeck/resume_blog_page
# 2. Connect repository to Vercel
# 3. Configure build settings (auto-detects Next.js)
# 4. Deploy
```

### Makefile Commands Reference
- `make start` - Start the development server (http://localhost:3000)
- `make stop` - Stop the development server
- `make refresh` - Restart the development server
- `make status` - Show running server status (development/production)
- `make build` - Build for production
- `make clean` - Remove build artifacts and cache
- `make clean-install` - Remove node_modules and reinstall dependencies
- `make help` - Show all available commands

## Design System (Tailwind Config)

Custom design tokens:

```typescript
// colors
colors: {
  background: { light: '#ffffff', dark: '#0a0a0a' },
  foreground: { light: '#0a0a0a', dark: '#ededed' },
  muted: { light: '#6b7280', dark: '#9ca3af' },
  accent: { light: '#3b82f6', dark: '#60a5fa' },
  border: { light: '#e5e7eb', dark: '#1f2937' }
}

// typography
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif']
}

// layout
maxWidth: {
  content: '720px'
}

// transitions
transitionDuration: {
  theme: '200ms'
}
```

## MDX Configuration

- Front matter support for metadata (title, date, excerpt, tags)
- Custom components for enhanced content (callouts, etc.)
- Syntax highlighting for code blocks (Prism or Shiki)
- Automatic heading anchor links
- Automatic reading time calculation

## Component Guidelines

- **TypeScript** for all components with proper type definitions
- **Server Components** by default (use 'use client' only when needed)
- **Responsive design**: mobile-first approach
- **Reusable and composable** components
- Follow existing patterns in the codebase

## Sample Content Requirements

Include 3 sample blog posts:
1. **"Hello World"** - Brief introduction post
2. **"Building with Next.js"** - Technical post with code examples
3. **"Design Philosophy"** - Long-form essay with multiple sections

Each should demonstrate different content types (code, images, lists, quotes, etc.)

## Key Features & Requirements

### Performance
- Static generation for all pages when possible
- Optimized images (Next.js Image component)
- Minimal JavaScript bundle size
- Fast page transitions
- Lighthouse score: 95+ on all metrics

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where appropriate
- Keyboard navigation support
- Visible focus indicators
- Alt text for images
- Sufficient color contrast in both modes

### SEO
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card meta tags
- Structured data (JSON-LD) for blog posts
- Sitemap.xml generation
- Robots.txt
- Optimized page titles and descriptions

## Design Reference

**Study `example_blog_page_files/example_blog_page.html` for:**
- Clean, minimal aesthetic inspiration
- Dark mode implementation patterns
- Typography hierarchy and spacing
- Content-focused layout approach
- Subtle interaction patterns

**Key takeaways from reference:**
- Focus on content, not decorative elements
- Generous whitespace
- Excellent typography
- Smooth dark/light mode
- Clean navigation
- Professional and timeless design

## Deployment

### Vercel Setup
1. Push code to GitHub: https://github.com/Riebeeck/resume_blog_page
2. Connect repository to Vercel
3. Configure build settings (auto-detects Next.js)
4. Deploy

### Cloudflare Domain Setup
1. Add domain in Vercel project settings
2. Configure DNS in Cloudflare to point to Vercel
3. Wait for DNS propagation
4. Enable SSL (automatic in Vercel)

## Important Constraints

- Keep it simple and maintainable
- Content is the star - avoid visual clutter
- Both dark and light modes must be equally polished
- Performance is critical - optimize everything
- Accessibility is non-negotiable
- Code should be production-ready from the start

## Adding New Blog Posts

```bash
# Create new MDX file in content/blog/
touch content/blog/my-new-post.mdx
```

Front matter template:
```yaml
---
title: "Post Title"
date: "2025-01-15"
excerpt: "Brief description for cards and meta tags"
tags: ["tag1", "tag2"]
---
```

## Common Tasks

### Update site-wide styling
- Edit `app/globals.css` for global styles
- Edit `tailwind.config.ts` for design tokens

### Add new components
- Create in `components/` directory
- Use TypeScript with proper types
- Export as default or named export

### Modify navigation
- Edit `components/Header.tsx`

### Update footer
- Edit `components/Footer.tsx`
