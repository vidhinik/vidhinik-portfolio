import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'bg-cream/90 shadow-sm backdrop-blur-md' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold" aria-label={`${site.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm text-cream">{site.monogram}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-ink hover:text-cream">{n.label}</a></li>
          ))}
        </ul>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-cream px-5 pb-6 md:hidden">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 font-display text-2xl font-semibold">{n.label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
