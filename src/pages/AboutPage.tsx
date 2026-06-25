import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { teamMembers } from '@/data/teamMembers';
import { timelineEvents } from '@/data/timelineEvents';
import { awards } from '@/data/awards';

const HERO_IMG = 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&h=800&fit=crop&q=80';
const STORY_IMGS = [
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&h=500&fit=crop&q=80',
];

const PHILOSOPHY_POINTS = [
  {
    number: '01',
    title: 'Sourcing is Everything',
    description: 'We source every bean through direct trade partnerships with Indian farmers — from Araku Valley tribal cooperatives to century-old Coorg estates. We pay above Fair Trade prices because quality demands it.',
  },
  {
    number: '02',
    title: 'Food is Culture',
    description: 'Our menu sits at the intersection of world-class technique and the bold, layered flavors of India\'s culinary heritage. Every dish tells a story of two worlds meeting.',
  },
  {
    number: '03',
    title: 'Space Matters',
    description: 'We believe the physical environment shapes the quality of your experience. Every material, every light source, every piece of furniture was chosen with intention.',
  },
  {
    number: '04',
    title: 'Community First',
    description: 'We are a Vizag cafe, for Vizag people. We source locally where possible, employ locally always, and give back through our monthly community coffee sessions.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-20">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={HERO_IMG} alt="Latte Global Cafe space" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55 flex items-end pb-16">
          <div className="container-custom">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-caption text-[var(--accent)] block mb-3"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-h1 text-white max-w-2xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              More Than Coffee — A Movement
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Cafe Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-caption text-[var(--accent)] block mb-4">The Beginning</span>
              <h2 className="text-h2 text-[var(--text-primary)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                A Dream That Started in Coorg
              </h2>
              <p
                className="text-pull-quote text-[var(--text-secondary)] mb-6"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                "I walked into a tiny estate in Madikeri at 6am and watched a woman hand-pick coffee cherries in the mist. I knew then that this was a story that needed to be told over a cup, in a cafe, in Vizag."
              </p>
              <p className="text-sm text-[var(--text-muted)] italic mb-6">— Arjun Naidu, Founder</p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-5">
                Latte Global Cafe was born from eight years of travel, study, and obsession. Arjun Naidu spent a decade studying coffee culture across Japan (Kyoto's kissaten culture), Italy (the espresso bar tradition), Ethiopia (origin tourism), and Colombia (third-wave innovation) before returning to Visakhapatnam with a singular vision.
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-5">
                He met Chef Meera Sharma at a pop-up in Hyderabad — she was plating a masala-spiced foie gras terrine; he was setting up a V60 brewing station across the hall. They talked for four hours and decided to build something together.
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Three years later, Latte Global Cafe opened on Beach Road, MVP Colony — and Visakhapatnam's cafe culture was never quite the same.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] mt-8">
                  <img src={STORY_IMGS[1]} alt="Coffee sourcing" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                  <img src={STORY_IMGS[0]} alt="Cafe interior" className="w-full h-80 object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What We Believe"
            title="Our Philosophy"
            subtitle="Four principles that guide everything we do — from sourcing to service."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PHILOSOPHY_POINTS.map((point, i) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 p-7 bg-[var(--surface-elevated)] border border-[var(--border)] rounded-2xl"
              >
                <span
                  className="text-4xl font-bold text-[var(--accent)] opacity-30 leading-none mt-1 flex-shrink-0"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {point.number}
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold text-[var(--text-primary)] mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[var(--bg)]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Journey"
            title="The Latte Global Story"
            subtitle="From a dream in a Coorg mist to Vizag's most-loved cafe."
            className="mb-16"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30 -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <span className="text-caption text-[var(--accent)] block mb-1">{event.year}</span>
                    <h3
                      className={`text-lg font-semibold text-[var(--text-primary)] mb-2 ${event.milestone ? 'text-[var(--accent)]' : ''}`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {event.title}
                      {event.milestone && ' ✦'}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] flex-shrink-0 mt-1" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="The Humans Behind the Magic"
            title="Meet Our Team"
            subtitle="Every great cafe is a reflection of the people who pour their heart into it."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors shadow-[var(--shadow-md)]">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[var(--accent)] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {member.joinedYear.toString().slice(-2)}
                  </div>
                </div>
                <h3
                  className="text-base font-semibold text-[var(--text-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--accent)] font-medium mb-1">{member.role}</p>
                <p className="text-xs text-[var(--text-muted)] italic mb-3">{member.speciality}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-4 text-left mx-2">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-[var(--bg)]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Recognition"
            title="Awards & Accolades"
            subtitle="Humbled and grateful for the recognition from guests and industry alike."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)]/40 hover:shadow-[var(--shadow-md)] transition-all"
              >
                <div className="text-3xl flex-shrink-0">{award.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3
                      className="text-sm font-semibold text-[var(--text-primary)]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {award.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--accent)] font-medium mb-1">{award.organization} · {award.year}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="container-custom text-center">
          <h2
            className="text-h2 text-[var(--text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Come Experience It Yourself
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            The best way to understand what we're building here is to sit down, order a pour-over, and let us take care of you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="flex items-center gap-2 px-8 py-3.5 bg-[var(--accent)] text-white font-medium rounded-xl hover:bg-[var(--accent-hover)] transition-colors"
            >
              Reserve a Table <ArrowRight size={16} />
            </Link>
            <Link
              to="/menu"
              className="flex items-center gap-2 px-8 py-3.5 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Explore the Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
