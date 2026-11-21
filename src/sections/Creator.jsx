import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Instagram } from 'lucide-react'
import { creator, links } from '../data/portfolio'
import { Img } from '../components/ui'

// Muted, looping mini video. Plays only while on screen.
function VideoTile({ t }) {
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

  if (failed) {
    return (
      <Img
        src={null}
        label={`${t.label} video (add ${t.video})`}
        tint="bg-cream"
        className="aspect-[4/5] w-full rounded-3xl"
      />
    )
  }

  return (
    <video
      ref={ref}
      src={t.video}
      poster={t.poster || undefined}
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setFailed(true)}
      aria-label={`${t.label} preview`}
      className="aspect-[4/5] w-full rounded-3xl bg-ink/10 object-cover transition duration-300 group-hover:scale-[1.03]"
    />
  )
}

export default function Creator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-[2rem] bg-coral/15 p-6 sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h3 className="text-3xl font-bold leading-[1.05] sm:text-4xl md:text-5xl">
            {creator.heading}
          </h3>
          <p className="mt-4 max-w-md text-lg text-ink/75">{creator.text}</p>

          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn mt-7 bg-ink text-cream hover:bg-coral hover:text-ink"
          >
            <Instagram size={18} /> {creator.handle}
          </a>

          <h4 className="mb-3 mt-10 text-xl font-semibold">Collaborations</h4>
          <ul className="space-y-3">
            {creator.collaborations.map((c) => {
              const row = (
                <>
                  <span className="font-display font-semibold">{c.name}</span>
                  <span className="flex items-center gap-1.5 text-right text-sm text-ink/60">
                    {c.note}
                    {c.url && (
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 transition group-hover:text-ink"
                      />
                    )}
                  </span>
                </>
              )

              return (
                <li key={c.name}>
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${c.name} on Instagram`}
                      className="group flex items-center justify-between gap-3 rounded-2xl bg-white/70 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      {row}
                    </a>
                  ) : (
                    <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/70 px-5 py-4">
                      {row}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-7">
          {creator.thumbnails.map((t, i) => {
            const inner = t.video ? (
              <VideoTile t={t} />
            ) : (
              <Img
                src={t.image}
                label={t.label}
                tint="bg-cream"
                className="aspect-[4/5] w-full rounded-3xl transition duration-300 group-hover:scale-[1.03]"
              />
            )

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className={i % 2 ? 'sm:mt-8' : ''}
              >
                <a
                  href={t.url || links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-3xl"
                  aria-label={`Open ${t.label} on Instagram`}
                >
                  {inner}
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}