import { Navbar } from "@/i18n/dictionaries/types"
import { type ClassValue, clsx } from "clsx"
import { Github, Download, Linkedin } from "lucide-react"
import React from "react"
import { twMerge } from "tailwind-merge"
import { AiFillHtml5 } from "react-icons/ai"
import { SiNextdotjs } from "react-icons/si"
import { TbBrandSupabase, TbBrandFramerMotion, TbBrandMysql } from "react-icons/tb"
import { BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoTailwindCss, BiLogoPhp, BiLogoGithub, BiLogoNodejs, BiLogoPostgresql } from "react-icons/bi";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSection(navbar: Navbar) {
  const sections = [
    {
      id: "about",
      label: navbar.about
    },
    {
      id: "pinned",
      label: navbar.repos.pinneds
    },
    {
      id: "technologies",
      label: navbar.tech
    },
    {
      id: "projects",
      label: navbar.repos.projects
    },
    {
      id: "contact",
      label: navbar.contact
    }
  ]

  return sections;
}

export function getLinks(navbar: Navbar) {
  const links = [
    {
      link: "https://www.linkedin.com/in/luan-grod/",
      icon: React.createElement(Linkedin),
      tooltip: "@luan-grod"
    },
    {
      link: "https://github.com/LuanGrod",
      icon: React.createElement(Github),
      tooltip: "@LuanGrod"
    },
    {
      link: "https://drive.google.com/file/d/1FKcFFi5LbgoIdid8P9iUt_U7wri-0_25/view?usp=sharing",
      icon: React.createElement(Download),
      tooltip: navbar.tooltip.download
    }
  ]

  return links;
}

export function getSkills() {

  const skills = [
    {
      "nome": "HTML",
      "icon": React.createElement(AiFillHtml5),
      "site": "https://developer.mozilla.org/docs/Web/HTML"
    },
    {
      "nome": "CSS",
      "icon": React.createElement(BiLogoCss3),
      "site": "https://developer.mozilla.org/pt-BR/docs/Web/CSS"
    },
    {
      "nome": "JavaScript",
      "icon": React.createElement(BiLogoJavascript),
      "site": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
    },
    {
      "nome": "TypeScript",
      "icon": React.createElement(BiLogoTypescript),
      "site": "https://www.typescriptlang.org/"
    },
    {
      "nome": "React",
      "icon": React.createElement(BiLogoReact),
      "site": "https://react.dev/"
    },
    {
      "nome": "Next.js",
      "icon": React.createElement(SiNextdotjs),
      "site": "https://nextjs.org/"
    },
    {
      "nome": "Tailwind",
      "icon": React.createElement(BiLogoTailwindCss),
      "site": "https://tailwindcss.com/"
    },
    {
      "nome": "PHP",
      "icon": React.createElement(BiLogoPhp),
      "site": "https://www.php.net/"
    },
    {
      "nome": "Git",
      "icon": React.createElement(BiLogoGithub),
      "site": "https://git-scm.com/about"
    },
    {
      "nome": "Node.js",
      "icon": React.createElement(BiLogoNodejs),
      "site": "https://nodejs.org"
    },
    {
      "nome": "PostgreSQL",
      "icon": React.createElement(BiLogoPostgresql),
      "site": "https://www.postgresql.org/"
    },
    {
      "nome": "MySQL",
      "icon": React.createElement(TbBrandMysql),
      "site": "https://www.mysql.com/"
    },
    {
      "nome": "Supabase",
      "icon": React.createElement(TbBrandSupabase),
      "site": "https://supabase.com/"
    },
    {
      "nome": "Framer Motion",
      "icon": React.createElement(TbBrandFramerMotion),
      "site": "https://www.framer.com/motion/animation/"
    }
  ]

  return skills;
}
