// To parse this data:
//
//   import { Convert, Dictionaries } from "./file";
//
//   const dictionaries = Convert.toDictionaries(json);

export interface Dictionaries {
  "hello-world": string;
  navbar:        Navbar;
  about:         About;
  pinned:        Pinned;
  projects:      Projects;
  technologies:  Technologies;
  contact:       Contact;
  footer:        Footer;
  notfound:      Notfound;
  toasts:        Toasts;
}

export interface About {
  titleAbout: string;
  content1:   string;
  content2:   string;
  content3:   string;
  content4:   string;
  getintouch: string;
}

export interface Contact {
  titleContact: string;
}

export interface Footer {
  rights:  string;
  content: string;
}

export interface Navbar {
  welcome:  string;
  about:    string;
  tech:     string;
  repos:    Repos;
  contact:  string;
  language: string;
  tooltip:  Tooltip;
}

export interface Repos {
  projects: string;
  pinneds:  string;
}

export interface Tooltip {
  download: string;
}

export interface Notfound {
  routenotfind: string;
  returnhome:   string;
}

export interface Pinned {
  titlePinned: string;
}

export interface Projects {
  titleProjects: string;
}

export interface Technologies {
  titleTechnologies: string;
  content1:          string;
}

export interface Toasts {
  langchanged:  string;
  themechanged: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toDictionaries(json: string): Dictionaries {
      return JSON.parse(json);
  }

  public static dictionariesToJson(value: Dictionaries): string {
      return JSON.stringify(value);
  }
}
