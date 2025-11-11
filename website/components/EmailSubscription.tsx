'use client'

import { useState, FormEvent } from 'react'

interface EmailSubscriptionProps {
  variant?: 'default' | 'inline'
  title?: string
  subtitle?: string
}

export default function EmailSubscription({ 
  variant = 'default',
  title = 'Subscribe to my blog',
  subtitle = 'Get notified when I publish new posts'
}: EmailSubscriptionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'opening'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email) return

    setStatus('opening')
    
    // Create mailto link with pre-filled information
    const subject = encodeURIComponent('Blog Subscription')
    const body = encodeURIComponent(`Please add me to the mailing list.\n\nEmail: ${email}`)
    const mailtoLink = `mailto:beck@stableedges.ai?subject=${subject}&body=${body}`
    
    // Open mail client
    window.location.href = mailtoLink
    
    // Reset after a short delay
    setTimeout(() => {
      setStatus('idle')
      setEmail('')
    }, 2000)
  }

  if (variant === 'inline') {
    return (
      <div className="bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-sm border border-border-light dark:border-border-dark rounded-lg p-8 my-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-light dark:text-muted-dark mb-6">{subtitle}</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'opening'}
              className="flex-1 px-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'opening'}
              className="px-6 py-2.5 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'opening' ? 'Opening...' : 'Subscribe'}
            </button>
          </form>
          
          <p className="text-xs text-muted-light dark:text-muted-dark mt-3">
            No spam, unsubscribe anytime
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-light dark:text-muted-dark mb-4">{subtitle}</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === 'opening'}
          className="flex-1 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-all text-sm disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'opening'}
          className="px-5 py-2 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-medium hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:ring-offset-2 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'opening' ? 'Opening...' : 'Subscribe'}
        </button>
      </form>
      
      <p className="text-xs text-muted-light dark:text-muted-dark mt-2">
        No spam, unsubscribe anytime
      </p>
    </div>
  )
}

