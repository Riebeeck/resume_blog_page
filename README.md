# Personal Website & Blog

A modern, minimalist personal website and blog built with Next.js, React, TypeScript, and Tailwind CSS.

**Live Site**: [Coming Soon]  
**Repository**: https://github.com/Riebeeck/resume_blog_page

## 📁 Repository Structure

```
.
├── CLAUDE.md                    # AI assistant instructions for working with this codebase
├── example_blog_page_files/     # Design reference files (Dario Amodei's essay page aesthetic)
│   ├── example_blog_page.html   # Reference for design inspiration
│   ├── style.css                # Typography and styling patterns
│   └── ...                      # Supporting assets
├── website/                     # Next.js website application
│   ├── app/                     # Next.js App Router pages
│   ├── components/              # React components
│   ├── content/                 # MDX blog posts
│   ├── lib/                     # Utility functions
│   ├── public/                  # Static assets
│   ├── Makefile                 # Development commands
│   ├── package.json             # Dependencies
│   ├── README.md                # Detailed website documentation
│   └── ...                      # Configuration files
└── README.md                    # This file
```

## 🚀 Quick Start

```bash
# Navigate to the website folder
cd website

# Start the development server (automatically installs dependencies)
make start

# Open your browser to http://localhost:3000
```

**For detailed setup, customization, and deployment instructions, see [website/README.md](website/README.md)**

## ✨ Features

- 🎨 **Clean, Minimalist Design** - Content-focused aesthetic inspired by modern essay pages
- 🌓 **Dark/Light Mode** - Smooth toggle with localStorage persistence
- 📝 **MDX-Powered Blog** - Write posts in Markdown with embedded React components
- ⚡ **Blazing Fast** - Static generation and optimized performance
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data
- 🎯 **Type-Safe** - Built with TypeScript

## 📚 Project Overview

This repository contains:

1. **`website/`** - The main Next.js application
   - Modern personal website with integrated blog
   - Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
   - See [website/README.md](website/README.md) for full documentation

2. **`example_blog_page_files/`** - Design reference
   - Reference files from Dario Amodei's essay page
   - Used as inspiration for clean, minimalist design aesthetic
   - DO NOT MODIFY - kept for design reference

3. **`CLAUDE.md`** - Development guidelines
   - Instructions for AI assistants working with this codebase
   - Documents design principles, tech stack decisions, and project structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Content**: MDX (Markdown + JSX)
- **Deployment**: Vercel
- **Domain**: Cloudflare

## 🎨 Design Philosophy

The website follows a **minimalist, content-focused aesthetic**:

- Clean typography with generous whitespace
- Maximum content width of 720px for optimal readability
- Subtle color palette (grayscale + one accent color)
- Smooth transitions and hover states
- Both dark and light modes equally polished

Inspired by the elegant simplicity of modern essay pages and long-form content sites.

## 📖 Documentation

- **[Website README](website/README.md)** - Detailed setup, customization, and deployment guide
- **[CLAUDE.md](CLAUDE.md)** - Complete development guidelines and design specifications

## 🚢 Deployment

The site is designed for deployment on **Vercel** with a custom domain through **Cloudflare**.

For deployment instructions, see [website/README.md - Deployment section](website/README.md#-deployment).

## 🤝 Contributing

This is a personal website project, but feel free to fork it and use it as a template for your own site!

## 📄 License

MIT License - feel free to use this as a template for your own personal website.

---

**Built with ❤️ using Next.js and modern web technologies**

