import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest thoughts, tutorials, and writings on various topics.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="w-full px-6 py-12 md:py-16">
      <div className="max-w-content mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            Thoughts, tutorials, and writings on technology, design, and more.
          </p>
        </header>

        <div className="space-y-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-light dark:text-muted-dark">
                No posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
