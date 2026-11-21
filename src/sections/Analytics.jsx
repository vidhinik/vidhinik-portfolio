import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { analytics } from '../data/portfolio'
import { Heading, Img, Section } from '../components/ui'

// Counts up to the supplied value once it scrolls into view.
function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return undefined
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {display.toFixed(1)}
      {suffix}
    </span>
  )
}

// Muted, looping Reel video. Plays only while on screen.
function ReelVideo({ src, poster, label }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return undefined

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.4 }
    )

    io.observe(v)
    return () => io.disconnect()
  }, [failed])

  if (!src || failed) {
    return (
      <Img
        src={null}
        label={`Reel video (add ${src || '/videos/reel-2.mp4'})`}
        tint="bg-white/10"
        className="aspect-[9/16] w-full"
      />
    )
  }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster || undefined}
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setFailed(true)}
      aria-label={label}
      className="aspect-[9/16] w-full bg-white/10 object-cover"
    />
  )
}

function CaseStudy({ study }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[2rem] bg-ink p-5 text-cream sm:p-8 lg:p-10"
    >
      {/* Soft lavender and blue glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#8175F5]/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-blue/30 blur-3xl"
      />

      <div className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Reel video */}
          <div className="mx-auto w-full max-w-[260px] lg:col-span-4 lg:max-w-none">
            <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-white/15">
              <ReelVideo
                src={study.video}
                poster={study.poster}
                label={`Reel with ${study.collaborator}`}
              />
            </div>
          </div>

          {/* Headline, counter, metrics */}
          <div className="lg:col-span-8">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-[#B8B5FF]">
              {study.label} with {study.collaborator}
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-[1.05] sm:text-4xl md:text-5xl">
              {study.headline}
            </h3>

            <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1">
              <p className="font-display text-6xl font-bold leading-none text-[#B8B5FF] sm:text-7xl md:text-8xl">
                <CountUp
                  value={study.totalViews.value}
                  suffix={study.totalViews.suffix}
                />
              </p>
              <p className="pb-2 text-sm text-cream/70">
                {study.totalViews.caption}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className={`rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition duration-300 hover:bg-white/[0.12] ${
                    m.wide ? 'col-span-2' : ''
                  }`}
                >
                  <p className="font-display text-2xl font-bold sm:text-3xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs text-cream/65">{m.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-cream/55">
              {study.snapshotNote}
            </p>
          </div>
        </div>

        {/* About the Reel */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <h4 className="font-display text-lg font-semibold">About the Reel</h4>
          <p className="mt-2 max-w-3xl leading-relaxed text-cream/75">
            {study.about}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function Analytics() {
  return (
    <Section id="analytics" className="!pt-6 md:!pt-10">
      <Heading title={analytics.heading} text={analytics.text} />

      <div className="space-y-8">
        {analytics.caseStudies.map((study) => (
          <CaseStudy key={study.id} study={study} />
        ))}
      </div>
    </Section>
  )
}