import Link from 'next/link'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Riebeeck' },
  { name: 'Twitter', href: 'https://twitter.com/yourusername' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/riebeeckvanniekerk/' },
  { name: 'Email', href: 'mailto:beck@stableedges.ai' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border-light dark:border-border-dark mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-light dark:text-muted-dark">
            © {currentYear} Beck van Niekerk. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-muted-light dark:text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
