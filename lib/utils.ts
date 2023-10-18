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

export function getSection ( navbar: Navbar ) {
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

export function getLinks ( navbar: Navbar ) {
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

export function getSkills () {

  const skills = [
    {
      "nome": "HTML",
      "icon": React.createElement(AiFillHtml5)
    },
    {
      "nome": "CSS",
      "icon": React.createElement(BiLogoCss3)
    },
    {
      "nome": "JavaScript",
      "icon": React.createElement(BiLogoJavascript)
    },
    {
      "nome": "TypeScript",
      "icon": React.createElement(BiLogoTypescript)
    },
    {
      "nome": "React",
      "icon": React.createElement(BiLogoReact)
    },
    {
      "nome": "Next.js",
      "icon": React.createElement(SiNextdotjs)
    },
    {
      "nome": "Tailwind",
      "icon": React.createElement(BiLogoTailwindCss)
    },
    {
      "nome": "PHP",
      "icon": React.createElement(BiLogoPhp)
    },
    {
      "nome": "Git",
      "icon": React.createElement(BiLogoGithub)
    },
    {
      "nome": "Node.js",
      "icon": React.createElement(BiLogoNodejs)
    },
    {
      "nome": "PostgreSQL",
      "icon": React.createElement(BiLogoPostgresql)
    },
    {
      "nome": "MySQL",
      "icon": React.createElement(TbBrandMysql)
    },
    {
      "nome": "Supabase",
      "icon": React.createElement(TbBrandSupabase)
    },
    {
      "nome": "Framer Motion",
      "icon": React.createElement(TbBrandFramerMotion)
    }
  ]

  return skills;
}
