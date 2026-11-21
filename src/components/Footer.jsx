import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { links, site } from '../data/portfolio'

const s = [[Instagram, links.instagram, 'Instagram'], [Linkedin, links.linkedin, 'LinkedIn'], [Github, links.github, 'GitHub'], [Mail, `mailto:${links.email}`, 'Email']]
export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 pb-10 pt-4 text-sm text-ink/70 sm:flex-row sm:px-8">
      <p><span className="font-display font-bold text-ink">{site.name}</span> · © {new Date().getFullYear()}</p>
      <ul className="flex gap-2">
        {s.map(([Icon, href, label]) => (
          <li key={label}><a href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-ink/5 transition hover:bg-ink hover:text-cream"><Icon size={18} /></a></li>
        ))}
      </ul>
    </footer>
  )
}
