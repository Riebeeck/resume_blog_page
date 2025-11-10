import Link from 'next/link'
import { format } from 'date-fns'
import type { BlogPost } from '@/lib/blog'

type BlogCardProps = {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy')

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group"
    >
      <article className="p-6 rounded-lg border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors">
        <header className="mb-3">
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
            {post.title}
          </h2>
          <div className="flex items-center gap-3 text-sm text-muted-light dark:text-muted-dark">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <p className="text-muted-light dark:text-muted-dark mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-muted-light/10 dark:bg-muted-dark/10 text-muted-light dark:text-muted-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}
