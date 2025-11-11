import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getRecentPosts } from '@/lib/blog'

export default async function HomePage() {
  const recentPosts = await getRecentPosts(3)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-content mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-center">Hi, I&apos;m Beck</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-light dark:text-muted-dark max-w-2xl">
            <span className="block text-center">
              I&apos;m a software engineer and entrepreneur. I&apos;m the Co-Founder and CTO of Stable Edges.
              Please feel free to explore my work.
              <br />
              <br />
              I&apos;m always looking for new opportunities to collaborate and build something great.
            </span>
          </p>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="w-full px-6 py-12 md:py-16">
        <div className="max-w-content mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="text-accent-light dark:text-accent-dark hover:underline transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="space-y-6">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))
            ) : (
              <p className="text-muted-light dark:text-muted-dark">
                No posts yet. Check back soon!
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
