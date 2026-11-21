import { expertise } from '../data/portfolio'
import { Heading, Reveal, Section, icons, tone } from '../components/ui'

// Edit the intro copy here.
const intro = {
  title: 'Where content meets data and code.',
  text: 'Social media management, creator content, data analytics and web development, practised together so a campaign can be planned, measured and built end to end.',
}

export default function Expertise() {
  return (
    <div className="bg-ink/[0.04]">
      <Section id="expertise">
        <Heading title={intro.title} text={intro.text} />

        <div className="grid gap-5 md:grid-cols-2">
          {expertise.map((e, i) => {
            const Icon = icons[e.icon]
            const t = tone[e.color]

            return (
              <Reveal key={e.id} delay={0.08 * i} className={i % 2 ? 'md:mt-12' : ''}>
                <article
                  className={`group h-full rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1.5 sm:p-10 ${t.bg} ${t.text}`}
                >
                  <Icon
                    size={36}
                    className="transition duration-300 group-hover:rotate-12"
                  />
                  <h3 className="mt-14 text-3xl font-bold leading-tight">{e.title}</h3>
                  <p className="mt-3 max-w-md opacity-85">{e.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {e.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-current/30 px-3 py-1 text-sm"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Section>
    </div>
  )
}