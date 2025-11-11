import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about me, my background, and what I do.',
}

export default function AboutPage() {
  return (
    <div className="w-full px-6 py-12 md:py-16">
      <article className="max-w-content mx-auto prose-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          About Me
        </h1>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <Image
              src="/images/general/riebeeck-profile.jpg"
              alt="Riebeeck van Niekerk"
              width={240}
              height={240}
              className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg"
              priority
              style={{ aspectRatio: '1/1' }}
            />
          </div>
        </div>

        <div className="space-y-6 text-lg">
          <p>
            Beck is the Co-Founder and CTO of Stable Edges, an AI design studio & product company helping brands build 
            their digital native AI-powered products & an innovation hub currently dedicated to building tools for AI 
            observability, traceablity and monitoring.
          </p>

          <h2 id="background">Background</h2>
          <p>
            Beck has a background in engineering and a passion for building products that improve lives. 
            Previously, he led data engineering at Meta, served as lead Data Scientist for Deloitte&apos;s board of directors, 
            and was an architect at Databricks helping them scale to a multi-billion dollar company.
          </p>
          <p>
            Most recently, Beck bootstrapped{' '}
            <a href="https://stableedges.dev" target="_blank" rel="noopener noreferrer" className="link">
              StableEdges.dev
            </a>{' '}
            and{' '}
            <a href="https://stableedges.ai" target="_blank" rel="noopener noreferrer" className="link">
              StableEdges.ai
            </a>
            , developing AgentOps & Observability toolkits for managing AI agents.
          </p>

          <h2 id="what-i-do">What I Do</h2>
          <p>
            I&apos;m a builder and here are some of the the things that make me tick!
          </p>
          <ul>
            <li>Applied Artificial Intelligence</li>
            <li>Product Development & Engineering</li>
            <li>Systems Architecture & Cloud Infrastructure</li>
          </ul>

          <h2 id="interests">Interests & Expression</h2>
          <p>
            Beyond work, I find balance in participating and creating in the following activities:
          </p>
          <ul>
            <li>Real Estate Development & Investing</li>
            <li>
              <a href="https://youtu.be/PNl4wLdWPbw?si=qtBRFW4e2S5eVr9g" target="_blank" rel="noopener noreferrer" className="link">
                Media Production & Documentary Filmmaking
              </a>
            </li>
            <li>
              <a href="https://xredrocks.com/" target="_blank" rel="noopener noreferrer" className="link">
                Endurance Sports & Adventure Racing
              </a>
            </li>
            <li>Indie Game Development</li>
          </ul>

          <h2 id="this-site">About This Site</h2>
          <p>
            This page contains my thoughts, ideas, and projects and aims to be a record of my journey and the things that make me tick.
          </p>
          <p>
            Thank you for visiting and I hope you find something of value here.
          </p>

          <h2 id="connect">Let&apos;s Connect</h2>
          <p>
            If you&apos;d like to get in touch, feel free to reach out via:
          </p>
          <ul>
            <li>
              <a href="mailto:beck@stableedges.ai" className="link">
                Email
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="link">
                Twitter/X
              </a>
            </li>
            <li>
              <a href="https://github.com/beck-devx" target="_blank" rel="noopener noreferrer" className="link">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/riebeeckvanniekerk/" target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}
