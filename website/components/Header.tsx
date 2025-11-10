'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-semibold hover:text-accent-light dark:hover:text-accent-dark transition-colors group"
          >
            <Image
              src="/images/logos/beck-logo-minimal-b-navy-pink.svg"
              alt="Beck Logo"
              width={40}
              height={50}
              className="transition-transform group-hover:scale-105"
            />
            <span>Beck van Niekerk</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent-light dark:hover:text-accent-dark ${
                    isActive
                      ? 'text-accent-light dark:text-accent-dark'
                      : 'text-foreground-light/70 dark:text-foreground-dark/70'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
