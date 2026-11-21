import { useState } from 'react'
import { motion } from 'framer-motion'
import { Megaphone, Sparkles, BarChart3, Code2, ImageIcon } from 'lucide-react'

export const icons = { Megaphone, Sparkles, BarChart3, Code2 }

// Full class names so Tailwind can detect them.
export const tone = {
  coral: { bg: 'bg-coral', text: 'text-ink', soft: 'bg-coral/15', stroke: '#F16B50' },
  lime: { bg: 'bg-lime', text: 'text-ink', soft: 'bg-lime/40', stroke: '#9bc45f' },
  blue: { bg: 'bg-blue', text: 'text-cream', soft: 'bg-blue/10', stroke: '#4864DD' },
  ink: { bg: 'bg-ink', text: 'text-cream', soft: 'bg-ink/10', stroke: '#202020' },
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// Shows the real image when supplied, otherwise a clearly labelled placeholder.
export function Img({ src, label, alt, className = '', tint = 'bg-ink/5' }) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt || label}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`${tint} ${className} flex flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/25 p-4 text-center text-ink/60`}
    >
      <ImageIcon size={28} />
      <span className="text-sm font-medium">Image placeholder</span>
      <span className="text-xs">{label}</span>
    </div>
  )
}

// UI screenshot on a soft tinted backdrop.
// fit="cover" fills the frame and crops from the top.
// fit="contain" shows the whole screenshot.
export function ShotImage({
  src,
  label,
  tint = 'bg-ink/5',
  fit = 'cover',
  className = '',
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <Img src={null} label={label} tint={tint} className={className} />
  }

  return (
    <img
      src={src}
      alt={label}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${tint} ${
        fit === 'contain' ? 'object-contain p-3' : 'object-cover object-top'
      } ${className}`}
    />
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-32 ${className}`}
    >
      {children}
    </section>
  )
}

export function Heading({ title, text, className = '' }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${className}`}>
      <h2 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {text && <p className="mt-5 max-w-xl text-lg text-ink/70">{text}</p>}
    </Reveal>
  )
}

export const Tag = ({ children, dark }) => (
  <span
    className={`rounded-full px-3 py-1 text-xs font-medium ${
      dark ? 'bg-cream/15 text-cream' : 'bg-ink/5 text-ink/80'
    }`}
  >
    {children}
  </span>
)