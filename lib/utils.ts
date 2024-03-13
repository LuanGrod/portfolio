import { Navbar, Projects } from "@/i18n/dictionaries/types"
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
      id: "experience",
      label: navbar.experience
    },
    // {
    //   id: "pinned",
    //   label: navbar.repos.pinneds
    // },
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
      "nome": "GitHub",
      "icon": React.createElement(BiLogoGithub),
      "site": "https://docs.github.com/pt"
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

export function getProjects(projects: Projects) {
  const resp = [
    {
      id: "1",
      status: false, 
      name: 'Portfólio',
      short: projects.list.portfolio.short,
      long: projects.list.portfolio.long,
      date: '03/2024',
      siteUrl: 'https://portfolio-luangrod.vercel.app/',
      githubUrl: 'https://github.com/LuanGrod/portfolio',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384139/portfolio/k09urmcg9l2qmxhg1krw.png'
      ],
      videoUrl: '',
      tags: [
        'Next.js',
        'Typescript',
        'Tailwind',
        'Framer Motion',
        'Shadcn.ui',
        'i18n'
      ]
    },
    {
      id: "2",
      status: false, 
      name: 'Beats Store',
      short: projects.list.beatstore.short,
      long: projects.list.beatstore.long,
      date: '03/2024',
      siteUrl: '',
      githubUrl: 'https://github.com/LuanGrod/ecommerce',
      imageUrl: [],
      videoUrl: '',
      tags: [
        'Next.js',
        'Typescript',
        'Tailwind',
        'Clerk',
        'Planet Scale',
        'Prisma',
        'Zustand'
      ]
    },
    {
      id: "3",
      status: false, 
      name: 'ImmobileLink',
      short: projects.list.immobilelink.short,
      long: projects.list.immobilelink.long,
      date: '11/2023',
      siteUrl: 'https://immobilelink.vercel.app/',
      githubUrl: 'https://github.com/ImmobileLink/Front-end',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384137/portfolio/pk5dfwicc5v7lugntvvs.png',
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384138/portfolio/wa4bq7gwtboxacq9o4ex.png'
      ],
      videoUrl: '',
      tags: [
        'Next.js',
        'Typescript',
        'Tailwind',
        'Supabase',
        'i18n',
        'Charts.js',
        'Zustand',
        'Jest',
        'Nodemailer'
      ]
    },
    {
      id: "4",
      status: false, 
      name: 'Petshop',
      short: projects.list.petshop.short,
      long: projects.list.petshop.long,
      date: '12/2022',
      siteUrl: 'https://petshop-nb1aip8ft-luangrod.vercel.app/',
      githubUrl: 'https://github.com/LuanGrod/pet-shop',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384139/portfolio/rynibruoryzo1hm9relf.png',
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384139/portfolio/esu4jz9yzqiqgmw3yxgg.png'
      ],
      videoUrl: '',
      tags: [
        'React.js',
        'Node.js',
        'Javascript',
        'Tailwind',
        'MVC pattern',
        'JSON'
      ]
    },
    {
      id: "5",
      status: false, 
      name: 'Blackjack game',
      short: projects.list.blackjack.short,
      long: projects.list.blackjack.long,
      date: '10/2022',
      siteUrl: 'https://luangrod-blackjack.netlify.app/',
      githubUrl: 'https://github.com/LuanGrod/deck-of-cards-pure-js',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384138/portfolio/blko3pkjeyouf4vmcr7c.png'
      ],
      videoUrl: '',
      tags: [
        'HMTL',
        'CSS',
        'Javascript'
      ]
    },
    {
      id: "6",
      status: false, 
      name: 'LeAIrn',
      short: projects.list.leairn.short,
      long: projects.list.leairn.long,
      date: '09/2022',
      siteUrl: 'https://luangrod.github.io/leairn/',
      githubUrl: 'https://github.com/LuanGrod/leairn',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384138/portfolio/r9omq9tlawbmomwkecjq.png',
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384138/portfolio/izwbf3onogbc9jgd1jme.png'
      ],
      videoUrl: '',
      tags: [
        'HMTL',
        'CSS',
        'Javascript'
      ]
    },
    {
      id: "7",
      status: false, 
      name: 'Tic-Tac-Toe',
      short: projects.list.tictactoe.short,
      long: projects.list.tictactoe.long,
      date: '09/2022',
      siteUrl: '',
      githubUrl: 'https://github.com/LuanGrod/TicTacToe-ReactJs',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384139/portfolio/agsgzc16nglohzl32abh.png'
      ],
      videoUrl: '',
      tags: [
        'HTML',
        'CSS',
        'Javascript',
      ]
    },
    {
      id: "8",
      status: false, 
      name: 'Animeflix',
      short: projects.list.animeflix.short,
      long: projects.list.animeflix.long,
      date: '03/2022',
      siteUrl: 'https://netflix-dio-jade.vercel.app/',
      githubUrl: 'https://github.com/LuanGrod/netflix-DIO',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384138/portfolio/fpguuxwuh37m2vpkzcf4.png'
      ],
      videoUrl: '',
      tags: [
        'HMTL',
        'CSS',
        'Javascript'
      ]
    },
    {
      id: "9",
      status: false, 
      name: 'Instagram',
      short: projects.list.instagram.short,
      long: projects.list.instagram.long,
      date: '03/2022',
      siteUrl: 'https://instagram-dio-blue.vercel.app/',
      githubUrl: 'https://github.com/LuanGrod/instagram-Dio',
      imageUrl: [
        'https://res.cloudinary.com/dwsgo3qmd/image/upload/v1699384138/portfolio/li5micyblrdg0v85c6i2.png'
      ],
      videoUrl: '',
      tags: [
        'HMTL',
        'CSS',
        'Javascript'
      ]
    }
  ]

  return resp;
}

