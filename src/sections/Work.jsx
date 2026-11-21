import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  X,
} from 'lucide-react'

import { categories, footballShowcase, projects } from '../data/portfolio'
import { Heading, Img, Section, ShotImage, Tag } from '../components/ui'
import Creator from './Creator'

// ==========================================
// THRIVEAI PROJECT
// ==========================================

const thriveAIProject = {
  id: 'thriveai',
  title: 'ThriveAI',
  category: 'Web Development',
  summary:
    'AI-powered personal life mentor with persistent memory and personalized guidance across five areas of life.',
  description:
    'ThriveAI is an AI-powered personal life mentor that uses persistent memory to deliver personalized, context-aware guidance across five key areas: Career, Health, Mental Wellbeing, Finances, and Relationships.',
  tools: [
    'Next.js (App Router)',
    'TypeScript',
    'Material UI v6',
    'NextAuth.js',
    'LLaMA',
    'Hugging Face',
  ],
  link: 'https://thriveai.vercel.app/',
  featured: true,
}

// ==========================================
// THRIVEAI CUSTOM PREVIEW
// compact = smaller version used in the grid cards
// ==========================================

function ThriveAIPreview({ className = '', compact = false }) {
  return (
    <div
      className={`relative isolate flex w-full flex-col justify-between overflow-hidden bg-[#171B35] text-white ${
        compact ? 'p-4' : 'p-5 sm:p-7'
      } ${className}`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#8175F5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#49B7CB]/30 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm font-bold tracking-wider">
          <span
            className={`grid place-items-center rounded-xl bg-white/15 ${
              compact ? 'h-7 w-7' : 'h-9 w-9'
            }`}
          >
            <Sparkles size={compact ? 14 : 18} />
          </span>
          <span className={compact ? 'text-xs' : ''}>THRIVEAI</span>
        </div>

        {!compact && (
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-medium tracking-widest text-white/80">
            AI PERSONAL MENTOR
          </span>
        )}
      </div>

      {/* Main content */}
      <div
        className={`relative grid grid-cols-[1.2fr_0.8fr] items-center gap-3 ${
          compact ? 'py-3' : 'py-5'
        }`}
      >
        <div>
          {!compact && (
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8B5FF]">
              Your growth space
            </p>
          )}

          <h3
            className={`font-bold leading-tight ${
              compact ? 'text-base' : 'mt-3 text-2xl sm:text-3xl'
            }`}
          >
            Grow with clarity.
            <span className="block text-[#B8B5FF]">Thrive with purpose.</span>
          </h3>

          {!compact && (
            <p className="mt-3 text-xs leading-relaxed text-white/65">
              Personalized guidance that understands your goals and remembers
              your journey.
            </p>
          )}
        </div>

        <div className={`flex flex-col ${compact ? 'gap-1' : 'gap-2'}`}>
          {['Career', 'Health', 'Wellbeing', 'Finances', 'Relationships'].map(
            (item) => (
              <div
                key={item}
                className={`rounded-lg border border-white/15 bg-white/10 text-center font-medium text-white/90 backdrop-blur-sm ${
                  compact
                    ? 'px-1.5 py-1 text-[9px]'
                    : 'rounded-xl px-2 py-2 text-[10px] sm:text-xs'
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <div
        className={`relative flex items-center justify-between border-t border-white/15 ${
          compact ? 'pt-2' : 'pt-4'
        }`}
      >
        <span className="text-[9px] tracking-widest text-white/60">
          AI-POWERED PERSONAL GROWTH
        </span>
        <Sparkles size={compact ? 13 : 17} className="text-[#B8B5FF]" />
      </div>
    </div>
  )
}

// ==========================================
// SCREENSHOT GALLERY (project detail modal)
// Checks which screenshot files exist and skips the missing ones.
// ==========================================

function useAvailable(images) {
  const [available, setAvailable] = useState(null)
  const key = (images || []).join('|')

  useEffect(() => {
    let alive = true
    setAvailable(null)

    Promise.all(
      (images || []).map(
        (src) =>
          new Promise((resolve) => {
            const probe = new Image()
            probe.onload = () => resolve(src)
            probe.onerror = () => resolve(null)
            probe.src = src
          })
      )
    ).then((results) => {
      if (alive) setAvailable(results.filter(Boolean))
    })

    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return available
}

function Gallery({ project }) {
  const shots = useAvailable(project.images)
  const [index, setIndex] = useState(0)
  const total = shots ? shots.length : 0

  // Left and right arrow keys browse the screenshots
  useEffect(() => {
    if (total < 2) return undefined

    const onKey = (event) => {
      if (event.key === 'ArrowRight') setIndex((n) => (n + 1) % total)
      if (event.key === 'ArrowLeft') setIndex((n) => (n - 1 + total) % total)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  if (shots === null) {
    return (
      <div
        className={`aspect-video w-full animate-pulse rounded-2xl ${project.tint}`}
      />
    )
  }

  if (total === 0) {
    return (
      <Img
        src={null}
        label={`${project.title} screenshots (add them to the project's images folder)`}
        tint={project.tint}
        className="aspect-video w-full rounded-2xl"
      />
    )
  }

  const go = (step) => setIndex((n) => (n + step + total) % total)

  return (
    <div>
      <div className={`relative overflow-hidden rounded-2xl ${project.tint}`}>
        <motion.img
          key={shots[index]}
          src={shots[index]}
          alt={`${project.title} screenshot ${index + 1} of ${total}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mx-auto h-[min(60vh,30rem)] w-full object-contain p-3"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-cream/90 shadow transition hover:bg-cream"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-cream/90 shadow transition hover:bg-cream"
            >
              <ChevronRight size={20} />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-cream">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {total > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {shots.map((src, i) => (
            <li key={src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index}
                className={`block overflow-hidden rounded-xl transition ${
                  i === index
                    ? 'ring-2 ring-ink'
                    : 'opacity-60 ring-1 ring-ink/10 hover:opacity-100'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`h-16 w-24 object-cover object-top ${project.tint}`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ==========================================
// FOOTBALL CLUB CARDS
// ==========================================

function ClubCard({ club, index }) {
  const [imageFailed, setImageFailed] = useState(false)

  const initials = club.name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="h-full"
    >
      <a
        href={club.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${club.name} on Instagram`}
        className="group flex h-full flex-col rounded-3xl bg-white p-3 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      >
        {/* Club logo */}
        <div className="mx-auto grid aspect-square w-full max-w-[260px] place-items-center overflow-hidden rounded-2xl border border-ink/5 bg-[#F7F4EE] p-5 sm:p-6">
          {!imageFailed && club.image ? (
            <img
              src={club.image}
              alt={`${club.name} logo`}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="grid h-32 w-32 place-items-center rounded-full bg-white text-3xl font-bold text-ink shadow-sm">
              {initials}
            </div>
          )}
        </div>

        {/* Club information */}
        <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
          <div>
            <span className="inline-flex rounded-full bg-lime/60 px-2.5 py-1 text-[11px] font-medium">
              {club.label || 'Social Media Management'}
            </span>
            <h4 className="mt-3 text-lg font-bold leading-snug">{club.name}</h4>
            <p className="mt-0.5 truncate text-sm text-ink/60">{club.handle}</p>
          </div>

          <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-ink px-3.5 py-2 text-xs font-semibold text-cream transition group-hover:bg-blue">
            View Instagram
            <ArrowUpRight size={14} />
          </span>
        </div>
      </a>
    </motion.article>
  )
}

// ==========================================
// CATEGORY STYLING
// ==========================================

const catTone = {
  'Social Media': 'bg-coral/20',
  Influencer: 'bg-lime/50',
  Analytics: 'bg-blue/15',
  'Web Development': 'bg-ink/10',
}

// ==========================================
// MAIN WORK COMPONENT
// ==========================================

export default function Work() {
  const [cat, setCat] = useState('All')
  const [active, setActive] = useState(null)

  // Remove duplicate ThriveAI entries and generic placeholder entries.
  const existingProjects = projects.filter((project) => {
    const isThriveAI =
      project.id === 'thriveai' || project.title?.toLowerCase() === 'thriveai'

    const isPlaceholder =
      project.title?.toLowerCase() === 'website project' ||
      project.summary?.toUpperCase().includes('PLACEHOLDER:')

    return !isThriveAI && !isPlaceholder
  })

  const allProjects = [thriveAIProject, ...existingProjects]

  const list =
    cat === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === cat)

  // Club cards show on All and Social Media.
  const showClubs = cat === 'All' || cat === 'Social Media'

  // The football heading and subtitle show only on Social Media.
  const showClubHeading = cat === 'Social Media'

  // Clicking a filter. Influencer also scrolls down to "Behind the content".
  const handleCategory = (category) => {
    setCat(category)

    if (category === 'Influencer') {
      setTimeout(() => {
        document
          .getElementById('creator')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
    }
  }

  // Close modal on Escape key
  useEffect(() => {
    if (!active) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActive(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [active])

  return (
    <Section id="work" className="!pt-6 !pb-6 md:!pt-10 md:!pb-10">
      <Heading
        title="Featured work"
        text="Filter by discipline and open any project for the full story."
      />

      {/* CATEGORY FILTERS */}
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Project categories"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={cat === category}
            onClick={() => handleCategory(category)}
            className={`rounded-full border-2 border-ink px-5 py-2 font-display text-sm font-semibold transition ${
              cat === category ? 'bg-ink text-cream' : 'hover:bg-lime'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FOOTBALL SHOWCASE */}
      {showClubs && (
        <div className={list.length > 0 ? 'mb-20' : ''}>
          {showClubHeading && (
            <div className="mb-10 max-w-3xl">
              <h3 className="text-3xl font-bold leading-[1.05] sm:text-4xl md:text-5xl">
                {footballShowcase.title}
              </h3>
              <p className="mt-4 max-w-xl text-lg text-ink/70">
                {footballShowcase.subtitle}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {footballShowcase.clubs.map((club, index) => (
              <ClubCard key={club.id} club={club} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* FEATURED PROJECT CARDS (4 across on large screens) */}
      {list.length > 0 && (
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {list.map((project, index) => (
              <motion.button
                layout
                key={project.id}
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setActive(project)}
                className={`group text-left ${
                  index % 4 === 1 || index % 4 === 3 ? 'lg:mt-6' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  {project.images ? (
                    <ShotImage
                      src={project.images[0]}
                      label={`${project.title} screenshot`}
                      tint={project.tint}
                      fit={project.fit}
                      className="aspect-[4/3] w-full transition duration-500 group-hover:scale-105"
                    />
                  ) : project.id === 'thriveai' ? (
                    <ThriveAIPreview
                      compact
                      className="aspect-[4/3] transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <Img
                      src={project.image}
                      label={
                        project.organisation
                          ? `${project.organisation} photo (save as lets-grow-more.jpg)`
                          : project.title
                      }
                      tint={catTone[project.category]}
                      className="aspect-[4/3] w-full transition duration-500 group-hover:scale-105"
                    />
                  )}

                  {project.type && (
                    <span className="absolute left-3 top-3 rounded-full bg-cream px-3 py-1 text-[11px] font-semibold shadow-sm">
                      {project.type}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold group-hover:text-blue">
                    {project.title}
                  </h3>
                  <Tag>{project.category}</Tag>
                </div>

                {project.organisation && (
                  <p className="mt-0.5 text-sm font-medium text-ink/75">
                    {project.organisation}
                  </p>
                )}

                {project.projectType && (
                  <p className="mt-0.5 text-sm font-medium text-ink/75">
                    {project.projectType}
                  </p>
                )}

                <p className="mt-1 line-clamp-2 text-sm text-ink/65">
                  {project.summary}
                </p>

                {project.featured && (
                  <p className="mt-2 text-xs font-semibold text-blue">
                    Featured project · View details ↗
                  </p>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* BEHIND THE CONTENT (always visible, also reached by the Creator nav link) */}
      <div
        id="creator"
        className={`scroll-mt-24 ${list.length > 0 || showClubs ? 'mt-20' : ''}`}
      >
        <Creator />
      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              onClick={(event) => event.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-cream p-5 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink text-cream"
              >
                <X size={18} />
              </button>

              {active.images ? (
                <Gallery project={active} />
              ) : active.id === 'thriveai' ? (
                <ThriveAIPreview className="aspect-video rounded-2xl" />
              ) : (
                <Img
                  src={active.image}
                  label={
                    active.organisation
                      ? `${active.organisation} photo (save as lets-grow-more.jpg)`
                      : active.title
                  }
                  tint={catTone[active.category]}
                  className="aspect-video w-full rounded-2xl"
                />
              )}

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Tag>{active.category}</Tag>
                {active.type && (
                  <span className="rounded-full bg-lime/60 px-3 py-1 text-xs font-semibold">
                    {active.type}
                  </span>
                )}
                {active.year && <Tag>{active.year}</Tag>}
              </div>

              <h3 className="mt-3 text-3xl font-bold">{active.title}</h3>

              {active.organisation && (
                <p className="mt-1 font-display text-lg font-medium text-blue">
                  {active.organisation}
                </p>
              )}

              {active.projectType && (
                <p className="mt-1 font-display text-lg font-medium text-blue">
                  {active.projectType}
                </p>
              )}

              <p className="mt-4 leading-relaxed text-ink/75">
                {active.description || active.summary}
              </p>

              {active.role && (
                <p className="mt-4 text-sm">
                  <strong>Role:</strong> {active.role}
                </p>
              )}

              {active.learnings?.length > 0 && (
                <div className="mt-5">
                  <h4 className="mb-3 text-sm font-bold">Key learnings</h4>
                  <ul className="flex flex-wrap gap-2">
                    {active.learnings.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-lime/50 px-3.5 py-1.5 text-sm font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.tools?.length > 0 && (
                <div className="mt-5">
                  <h4 className="mb-3 text-sm font-bold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {active.tools.map((tool) => (
                      <Tag key={tool}>{tool}</Tag>
                    ))}
                  </div>
                </div>
              )}

              {active.closing && (
                <p className="mt-6 border-t border-ink/10 pt-5 font-display text-lg font-medium">
                  {active.closing}
                </p>
              )}

              {active.link && (
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-6 inline-flex items-center gap-2 bg-ink text-cream hover:bg-blue"
                >
                  View live project
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}