import type Name from "./Name";

interface Reference {
  link: string;
  doi: string;
  authors: Name[];
  date: Date;
  open: boolean;
  bibtex: string;
  matched?: boolean;
}

export default Reference;
