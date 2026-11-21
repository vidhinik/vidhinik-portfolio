import { about, site } from '../data/portfolio'
import { Img, Reveal, Section } from '../components/ui'

export default function About() {
  return (
    <Section id="about" className="!pb-6 md:!pb-10">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Img
            src={site.aboutImage}
            label="About photo (set site.aboutImage)"
            className="aspect-square w-full rounded-[2.5rem] lg:-rotate-2"
            tint="bg-lime/40"
          />
        </Reveal>

        <div className="lg:col-span-8 lg:pl-8">
          <Reveal>
            <h2 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 max-w-2xl space-y-4 text-lg text-ink/75">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {about.principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={0.1 * i}
                className={`rounded-3xl p-6 ${['bg-white', 'bg-coral/15', 'bg-lime/40'][i]}`}
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}