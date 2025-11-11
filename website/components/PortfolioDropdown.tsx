'use client'

import { useState, useEffect, useRef } from 'react'

const portfolioLinks = [
  { 
    name: 'StableEdges AI', 
    href: 'https://stableedges.ai',
    available: true
  },
  { 
    name: 'StableEdges Dev', 
    href: 'https://stableedges.dev',
    available: true
  },
  { 
    name: 'More Projects', 
    href: '#',
    available: false
  },
]

export default function PortfolioDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused) return

      if (e.key === 'Escape') {
        setIsOpen(false)
        setIsFocused(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isFocused])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleFocus = () => {
    setIsFocused(true)
    setIsOpen(true)
  }

  const handleBlur = (e: React.FocusEvent) => {
    // Only close if focus moves outside the dropdown
    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
      setIsFocused(false)
      setIsOpen(false)
    }
  }

  return (
    <div 
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="px-4 py-1.5 text-sm font-medium border border-border-light dark:border-border-dark rounded-lg text-foreground-light dark:text-foreground-dark bg-muted-light/5 dark:bg-muted-dark/5 hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Portfolio
        <svg 
          className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-56 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark shadow-lg transition-all duration-200 origin-top-right ${
          isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="menu"
      >
        <div className="py-1">
          {portfolioLinks.map((link, index) => (
            <div key={link.name}>
              {link.available ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="block px-4 py-2.5 text-sm text-foreground-light dark:text-foreground-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors focus:outline-none focus:bg-surface-light dark:focus:bg-surface-dark"
                  role="menuitem"
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <svg 
                      className="w-4 h-4 opacity-50" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ) : (
                <div
                  className="block px-4 py-2.5 text-sm text-muted-light dark:text-muted-dark cursor-not-allowed opacity-50"
                  role="menuitem"
                  aria-disabled="true"
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <span className="text-xs">(Coming soon)</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Alternative Layout */}
      <style jsx>{`
        @media (max-width: 640px) {
          .absolute {
            position: fixed;
            right: 1rem;
            left: 1rem;
            width: auto;
          }
        }
      `}</style>
    </div>
  )
}

