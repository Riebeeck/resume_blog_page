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
              width={192}
              height={192}
              className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg"
              priority
              style={{ aspectRatio: '1/1' }}
            />
          </div>
        </div>

        <div className="space-y-6 text-lg">
          <p>
            Riebeeck van Niekerk is Co-Founder and CTO of Stable Edges, an AI design studio helping brands build their digital native AI-powered products & a innovation hub dedicated to building tools for AI observability, traceablity and monitoring.
          </p>

          <h2 id="background">Background</h2>
          <p>
            Riebeeck has a background in engineering and a passion for building products that improve the world and help people live better lives. 
            He has a degree in Mechanical Engineering from the University of Texas at San Antonio. Previously, Riebeeck was an Architect at Databricks
            where he helped scale and build the world's largest data and AI platform, helping customers build their AI-powered products.
          </p>
          <p>
            Most recently, Riebeeck launched Stable Edges and is developing a X-platform AgentOps & Observability platform for managing AI agents, tracing their performance and improving their overall quality.
          </p>

          <h2 id="what-i-do">What I Do</h2>
          <p>
            I'm a builder and here are some of the the things that make me tick!
          </p>
          <ul>
            <li>Applied Artificial Intelligence</li>
            <li>Product Development & Software Engineering</li>
            <li>Systems Architecture & Infrastructure</li>
          </ul>

          <h2 id="interests">Interests & Expression</h2>
          <p>
            Beyond work, I find balance in exploring excellence in the following activities:
          </p>
          <ul>
            <li>Real Estate Development & Investing</li>
            <li>Story Telling & Documentary Filmmaking</li>
            <li>Endurance Sports & Adventure Racing</li>
            <li>Indie Game Development</li>
          </ul>

          <h2 id="this-site">About This Site</h2>
          <p>
            This page contains my thoughts, ideas, and projects and aims to be a record of my journey and the things that make me tick.
          </p>
          <p>
            Thank you for visiting and I hope you find something of value here.
          </p>

          <h2 id="connect">Let's Connect</h2>
          <p>
            If you'd like to get in touch, feel free to reach out via:
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
              <a href="https://github.com/Riebeeck" target="_blank" rel="noopener noreferrer" className="link">
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
