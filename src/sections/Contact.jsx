import { Instagram, Linkedin, Mail } from 'lucide-react'
import { contact, links } from '../data/portfolio'
import { Reveal, Section } from '../components/ui'

const items = [
  { label: 'Email', Icon: Mail, href: `mailto:${links.email}`, text: links.email },
  { label: 'Instagram', Icon: Instagram, href: links.instagram, text: 'Send a DM' },
  { label: 'LinkedIn', Icon: Linkedin, href: links.linkedin, text: 'Connect' },
]

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-blue p-8 text-cream sm:p-14">
        <div aria-hidden className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-coral" />
        <div aria-hidden className="absolute -bottom-20 right-24 h-48 w-48 rounded-full bg-lime/80" />

        <div className="relative max-w-3xl">
          <h2 className="text-4xl font-bold leading-[1] sm:text-6xl md:text-7xl">
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-cream/85">{contact.text}</p>
          <a
            href={`mailto:${links.email}?subject=Collaboration%20enquiry`}
            className="btn mt-8 bg-cream text-ink hover:bg-lime"
          >
            Start a conversation
          </a>
        </div>

        <ul className="relative mt-12 grid gap-3 sm:grid-cols-3">
          {items.map(({ label, Icon, href, text }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex h-full items-center gap-3 rounded-2xl bg-cream px-5 py-4 text-ink transition hover:-translate-y-1"
              >
                <Icon size={22} className="shrink-0" />
                <span className="min-w-0">
                  <span className="block font-display font-semibold">{label}</span>
                  <span className="block truncate text-sm text-ink/60">{text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}