import { Copyright } from 'lucide-react';

import { Separator } from "@/components/ui/separator";
import { LangToggle } from "./lang-toggle";

import { Dictionaries, Footer } from "@/i18n/dictionaries/types";

interface FooterProps {
  dict: Dictionaries,
}

export default async function Footer({ dict }: FooterProps) {
  return (
    <footer className="flex flex-col justify-center gap-2 items-center w-full px-10 max-sm:pb-6 pb-9 opacity-50 text-sm">
      <LangToggle dict={dict}/>
      <Separator className="bg-white"/>
      <div className="flex items-center gap-1">
        <Copyright className='w-4 h-4'/>
        <p>2023 Luan. {dict.footer.rights}</p>
      </div>
      <p>{dict.footer.content}</p>
    </footer>
  );
}