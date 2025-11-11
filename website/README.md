# Personal Website & Blog

A modern, minimalist personal website and blog built with Next.js 14, React, TypeScript, and Tailwind CSS. Features a clean design, dark/light mode toggle, MDX-powered blog, and optimized performance.

## 🚀 Quick Start

```bash
# Start the development server
make start

# Stop the development server
make stop

# Restart the development server
make refresh
```

Navigate to [http://localhost:3000](http://localhost:3000) to see your site.

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm** or **pnpm**
- **Make** (usually pre-installed on macOS/Linux)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   make start
   # Or use npm directly
   npm run dev
   ```

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── blog/               # Blog listing and posts
│   └── globals.css         # Global styles and Tailwind
├── components/             # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── BlogCard.tsx        # Blog post card
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── TableOfContents.tsx # Post navigation sidebar
│   └── MDXComponents.tsx   # Custom MDX components
├── content/                # Blog content
│   └── blog/               # MDX blog posts
│       ├── hello-world.mdx
│       ├── building-with-nextjs.mdx
│       └── design-philosophy.mdx
├── lib/                    # Utility functions
│   ├── blog.ts             # Blog post fetching/processing
│   └── utils.ts            # General utilities
├── public/                 # Static assets
├── Makefile                # Development commands
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

## 🎨 Features

### Core Features
- ✅ **Modern Stack**: Next.js 14 App Router, React 18, TypeScript
- ✅ **Styling**: Tailwind CSS with custom design tokens
- ✅ **Dark Mode**: Smooth toggle with localStorage persistence
- ✅ **MDX Blog**: Write posts in Markdown with React components
- ✅ **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- ✅ **Performance**: Static generation, optimized images
- ✅ **Responsive**: Mobile-first design
- ✅ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

### Design Features
- Clean, minimalist aesthetic
- Generous whitespace
- Maximum content width of 720px for readability
- Subtle color palette (grayscale + accent color)
- Excellent typography with Inter font
- Smooth transitions and hover states

### Developer Features
- Type-safe with TypeScript
- Makefile commands for easy development
- Hot reload in development
- ESLint for code quality
- Automatic reading time calculation
- Syntax highlighting for code blocks
- Table of contents generation

## 📝 Adding New Blog Posts

### 1. Create a New MDX File

Create a new file in `content/blog/` with the `.mdx` extension:

```bash
touch content/blog/my-new-post.mdx
```

### 2. Add Front Matter

Every blog post needs front matter metadata:

```yaml
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "A brief description of your post for previews and SEO"
tags: ["tag1", "tag2", "tag3"]
---
```

### 3. Write Your Content

Write your post using Markdown. You can use:

- **Headings** (h2, h3, h4)
- **Paragraphs**
- **Lists** (ordered and unordered)
- **Code blocks** with syntax highlighting
- **Images**
- **Links**
- **Blockquotes**
- **Tables**

Example:

```markdown
## Introduction

This is a paragraph with **bold** and *italic* text.

### Code Example

\`\`\`typescript
function hello(name: string) {
  console.log(`Hello, ${name}!`)
}
\`\`\`

### Lists

- Item one
- Item two
- Item three

> This is a blockquote
```

### 4. Preview Your Post

The post will automatically appear:
- On the blog listing page (`/blog`)
- As a recent post on the home page (if it's one of the 3 newest)
- At its own URL (`/blog/your-post-slug`)

## 🎨 Customization

### Update Personal Information

1. **Site Metadata** (`app/layout.tsx`):
   ```tsx
   export const metadata: Metadata = {
     title: {
       default: 'Your Name | Personal Website & Blog',
       template: '%s | Your Name',
     },
     description: 'Your description here',
     // ... update other fields
   }
   ```

2. **Header** (`components/Header.tsx`):
   ```tsx
   <Link href="/">Your Name</Link>
   ```

3. **Footer** (`components/Footer.tsx`):
   ```tsx
   const socialLinks = [
     { name: 'GitHub', href: 'https://github.com/yourusername' },
     // ... update your links
   ]
   ```

4. **Home Page** (`app/page.tsx`):
   ```tsx
   <h1>Your Name</h1>
   <p>Your tagline here</p>
   ```

5. **About Page** (`app/about/page.tsx`):
   - Replace all placeholder content with your information

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: {
    light: '#ffffff',
    dark: '#0a0a0a',
  },
  foreground: {
    light: '#0a0a0a',
    dark: '#ededed',
  },
  accent: {
    light: '#3b82f6',  // Change this to your accent color
    dark: '#60a5fa',
  },
  // ...
}
```

### Customize Typography

Change the font in `app/layout.tsx`:

```typescript
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})
```

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Riebeeck/resume_blog_page.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live in minutes!

### Configure Custom Domain (Cloudflare)

1. **Add Domain in Vercel:**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain

2. **Configure DNS in Cloudflare:**
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records pointing to Vercel's IP addresses

3. **Wait for DNS Propagation:**
   - Usually takes 5-30 minutes
   - SSL certificate is automatically provisioned

## 🔧 Make Commands Reference

| Command | Description |
|---------|-------------|
| `make start` | Start development server (installs deps if needed) |
| `make stop` | Stop development server |
| `make refresh` | Restart development server |
| `make status` | Show running server status (dev/prod, ports, build) |
| `make dev` | Alias for `make start` |
| `make build` | Build for production |
| `make clean` | Remove build artifacts and cache |
| `make clean-install` | Remove node_modules and reinstall |
| `make help` | Show all available commands |

## 📦 npm Scripts

If you prefer npm commands:

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npm run type-check
```

## 🐛 Troubleshooting

### Port 3000 is already in use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Dark mode not working

Make sure the ThemeProvider is in the layout and you're using the 'use client' directive in theme-related components.

### Blog posts not showing

1. Check that MDX files are in `content/blog/`
2. Verify front matter is correct (YAML format)
3. Check the browser console for errors
4. Restart the development server

### TypeScript errors

```bash
# Run type check
npm run type-check

# Delete .next and rebuild
make clean
make start
```

## 📚 Tech Stack Details

- **Framework**: [Next.js 14](https://nextjs.org/)
- **React**: [React 18](https://react.dev/)
- **TypeScript**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Syntax Highlighting**: [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- **Date Formatting**: [date-fns](https://date-fns.org/)
- **Reading Time**: [reading-time](https://github.com/ngryman/reading-time)
- **Deployment**: [Vercel](https://vercel.com/)

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by minimalist principles and the reference example
- Built with modern web technologies
- Optimized for performance and accessibility

---

**Happy blogging!** 🎉

If you have questions or run into issues, feel free to open an issue on GitHub.
