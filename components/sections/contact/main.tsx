import { Contact } from "@/i18n/dictionaries/types";
import ContactIcons from "./components/ContactIcons";

interface ContactProps { 
  dict: Contact
}

export default async function Contact({ dict }: ContactProps) {
  return (
    <>
      <section id="contact" className="flex flex-col justify-center items-center w-full h-fit gap-10 max-sm:pb-20 pb-28">
        <h1 className='font-montserrat max-sm:text-lg sm:text-xl lg:text-2xl'>{dict.titleContact}</h1>
        <ContactIcons/>
      </section>
    </>
  );
}