import type { Contact } from '@/i18n/dictionaries/types'

import ContactIcons from './components/ContactIcons'
import SectionTitle from '@/components/section-title'

interface ContactProps {
  dict: Contact
}

export default async function Contact({ dict }: ContactProps) {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col justify-center items-center w-full h-fit"
      >
        <SectionTitle text={dict.titleContact} />
        <ContactIcons />
      </section>
    </>
  )
}
