import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  // Override default elements with custom styling
  h1: ({ children, ...props }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4 scroll-mt-24" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 scroll-mt-24" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-xl font-semibold mt-6 mb-3 scroll-mt-24" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-accent-light dark:border-accent-dark pl-4 italic my-6 text-muted-light dark:text-muted-dark"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: any) => {
    const isInline = !className

    if (isInline) {
      return (
        <code
          className="bg-muted-light/10 dark:bg-muted-dark/10 px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      )
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children, ...props }) => (
    <pre
      className="bg-muted-light/10 dark:bg-muted-dark/10 p-4 rounded-lg overflow-x-auto my-6 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  a: ({ href, children, ...props }: any) => {
    const isExternal = href?.startsWith('http')

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-light dark:text-accent-dark hover:underline"
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        href={href || '#'}
        className="text-accent-light dark:text-accent-dark hover:underline"
        {...props}
      >
        {children}
      </Link>
    )
  },
  img: ({ src, alt, ...props }: any) => (
    <span className="block my-6">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={400}
        className="rounded-lg w-full h-auto"
        {...props}
      />
      {alt && (
        <span className="block text-center text-sm text-muted-light dark:text-muted-dark mt-2">
          {alt}
        </span>
      )}
    </span>
  ),
  hr: ({ ...props }) => (
    <hr className="border-border-light dark:border-border-dark my-8" {...props} />
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6">
      <table
        className="min-w-full divide-y divide-border-light dark:divide-border-dark"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-4 py-2 text-left text-sm font-semibold bg-muted-light/5 dark:bg-muted-dark/5"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-2 text-sm" {...props}>
      {children}
    </td>
  ),
  // Custom components can be added here
  Callout: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'error' }) => {
    const styles = {
      info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
      warning: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
      error: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
    }

    return (
      <div className={`border-l-4 p-4 my-6 rounded ${styles[type]}`}>
        {children}
      </div>
    )
  },
}
