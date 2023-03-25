import { type Dispatch, type SetStateAction } from "react";

interface Handlers {
  toggleShort: () => void;
  setVariantSearch: Dispatch<SetStateAction<string>>;
  setAuthorFirstNameSearch: Dispatch<SetStateAction<string>>;
  setAuthorLastNameSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export default Handlers;
