import { motion } from 'framer-motion'
import { site } from '../data/portfolio'
import { Img } from '../components/ui'

const up = (i) => ({ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: 'easeOut' } })

export default function Hero() {
  const [first, last] = site.name.split(' ')
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div aria-hidden className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-lime/60 blur-3xl" />
      <div aria-hidden className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:pb-8">
          <motion.h1 {...up(0)} className="text-[clamp(4rem,14vw,10.5rem)] font-bold leading-[0.86]">
            {first}<br /><span className="ml-[0.6em] inline-block text-blue">{last}</span>
          </motion.h1>
          <motion.p {...up(1)} className="mt-8 max-w-lg text-xl text-ink/75">{site.intro}</motion.p>
          <motion.ul {...up(2)} className="mt-6 flex flex-wrap gap-2">
            {site.roles.map((r) => <li key={r} className="chip">{r}</li>)}
          </motion.ul>
          <motion.div {...up(3)} className="mt-9 flex flex-wrap gap-4">
            <a href="#work" className="btn bg-ink text-cream hover:bg-blue">Explore My Work</a>
            <a href="#contact" className="btn border-2 border-ink hover:bg-coral hover:border-coral">Let's Collaborate</a>
          </motion.div>
          <motion.p {...up(4)} className="mt-8 font-display text-lg font-medium text-ink/60">{site.tagline}</motion.p>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative lg:col-span-5">
          <div aria-hidden className="absolute -left-4 top-10 h-full w-full rotate-3 rounded-t-[999px] rounded-b-[2.5rem] bg-coral" />
          <div aria-hidden className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-blue" />
          <Img src={site.portrait} alt={`Portrait of ${site.name}`} label="Vidhi's portrait (set site.portrait in portfolio.js)" tint="bg-cream"
            className="relative aspect-[4/5] w-full rounded-t-[999px] rounded-b-[2.5rem]" />
        </motion.div>
      </div>
    </section>
  )
}
