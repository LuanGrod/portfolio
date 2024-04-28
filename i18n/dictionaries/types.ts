/* eslint-disable no-use-before-define */
export type Dictionaries = {
  navbar: Navbar
  about: About
  experience: Experience
  pinned: Pinned
  projects: Projects
  technologies: Technologies
  contact: Contact
  footer: Footer
  notfound: Notfound
  toasts: Toasts
}

export type About = {
  titleAbout: string
  content1: string
  content2: string
  content3: string
  content4: string
  getintouch: string
}

export type Contact = {
  titleContact: string
}

export type Experience = {
  titleExperience: string
  cards: Cards
}

export type Cards = {
  card11: string
  card12: string
  card21: string
  card22: string
  card31: string
  card32: string
}

export type Footer = {
  rights: string
  content: string
}

export type Navbar = {
  welcome: string
  about: string
  experience: string
  tech: string
  repos: Repos
  contact: string
  language: string
  tooltip: Tooltip
}

export type Repos = {
  projects: string
  pinneds: string
}

export type Tooltip = {
  download: string
}

export type Notfound = {
  routenotfind: string
  returnhome: string
}

export type Pinned = {
  titlePinned: string
}

export type Projects = {
  titleProjects: string
  visit: string
  visitgithub: string
  list: List
}

export type List = {
  portfolio: Animeflix
  animeflix: Animeflix
  blackjack: Animeflix
  instagram: Animeflix
  leairn: Animeflix
  petshop: Animeflix
  tictactoe: Animeflix
  immobilelink: Animeflix
  beatstore: Animeflix
}

export type Animeflix = {
  short: string
  long: string
}

export type Technologies = {
  titleTechnologies: string
  content1: string
}

export type Toasts = {
  langchanged: string
  themechanged: string
}
