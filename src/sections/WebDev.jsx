import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { projects, webProjects } from '../data/portfolio'
import { Heading, Img, Reveal, Section, ShotImage, Tag } from '../components/ui'

const thriveAIProject = {
  id: 'thriveai',
  title: 'ThriveAI',
  subtitle: 'AI-Powered Personal Life Mentor',

  description:
    'ThriveAI is an AI-powered personal life mentor that uses persistent memory to deliver personalized, context-aware guidance across five key areas: Career, Health, Mental Wellbeing, Finances, and Relationships.',

  tech: [
    'Next.js (App Router)',
    'TypeScript',
    'Material UI v6',
    'NextAuth.js',
    'LLaMA',
    'Hugging Face',
  ],

  live: 'https://thriveai.vercel.app/',
  featured: true,
}

function ThriveAIPreview() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-[#171B35] p-5 text-white sm:p-6">
      {/* Background effects */}
      <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-[#8B7CF6]/40 blur-3xl" />
      <div className="absolute -bottom-16 -left-8 h-44 w-44 rounded-full bg-[#55B8C9]/30 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold tracking-wider">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">
              <Sparkles size={16} />
            </span>
            THRIVEAI
          </div>

          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] tracking-wider text-white/80">
            AI PERSONAL MENTOR
          </span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#B8B5FF]">
              Your growth space
            </p>

            <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
              Grow with clarity. Thrive with purpose.
            </h3>

            <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/65">
              Personalized guidance that understands your goals and remembers your journey.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {['Career', 'Health', 'Wellbeing', 'Finances', 'Relationships'].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-center text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/15 pt-3">
          <span className="text-[10px] tracking-wider text-white/60">
            AI-POWERED PERSONAL GROWTH
          </span>

          <Sparkles size={17} className="text-[#B8B5FF]" />
        </div>
      </div>
    </div>
  )
}

export default function WebDev() {
  // HerCalendar, FoodyGo and any other Web Development project with screenshots.
  // These come from portfolio.js, so edit them there.
  const screenshotProjects = projects.filter(
    (project) => project.category === 'Web Development' && project.images?.length
  )

  // Keep ThriveAI first, prevent duplicates, and hide generic placeholder entries.
  const otherProjects = webProjects.filter(
    (project) =>
      !project.title?.toLowerCase().includes('thriveai') &&
      !project.description?.toUpperCase().includes('PLACEHOLDER:')
  )

  const displayProjects = [
    thriveAIProject,
    ...screenshotProjects,
    ...otherProjects,
  ]

  return (
    <Section id="web">
      <Heading
        title="Websites built with care."
        text="Thoughtful digital experiences, from useful tools to AI-powered products."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects.map((project, index) => {
          // ThriveAI and webProjects use `tech`. Screenshot projects use `tools`.
          const tags = project.tech || project.tools || []

          return (
            <Reveal key={project.id} delay={0.1 * index}>
              <article className="group h-full rounded-[2rem] bg-white p-4 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                {/* Project preview */}
                <div className="overflow-hidden rounded-3xl">
                  {project.featured ? (
                    <ThriveAIPreview />
                  ) : project.images ? (
                    <ShotImage
                      src={project.images[0]}
                      label={`${project.title} screenshot`}
                      tint={project.tint}
                      fit={project.fit}
                      className="aspect-[16/10] w-full rounded-3xl transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Img
                      src={project.image}
                      label={`${project.title} screenshot`}
                      tint="bg-blue/10"
                      className="aspect-[16/10] w-full rounded-3xl"
                    />
                  )}
                </div>

                {/* Project information */}
                <div className="p-3">
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>

                    {project.featured && (
                      <span className="rounded-full bg-lime/60 px-2.5 py-1 text-[10px] font-semibold">
                        Featured project
                      </span>
                    )}
                  </div>

                  {(project.subtitle || project.projectType) && (
                    <p className="mt-1 text-sm font-medium text-ink/75">
                      {project.subtitle || project.projectType}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {project.description}
                  </p>

                  {/* Tools used */}
                  {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  )}

                  {/* Project links (only shown when provided) */}
                  {(project.live || project.github) && (
                    <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live website`}
                          className="inline-flex items-center gap-1.5 transition hover:text-blue"
                        >
                          <ExternalLink size={16} />
                          Live site
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} GitHub repository`}
                          className="inline-flex items-center gap-1.5 transition hover:text-blue"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}