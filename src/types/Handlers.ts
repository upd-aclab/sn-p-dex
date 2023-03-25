import { type Dispatch, type SetStateAction } from "react";

interface Handlers {
  toggleShort: () => void;
  setVariant: Dispatch<SetStateAction<string>>;
  setAuthorFirstName: Dispatch<SetStateAction<string>>;
  setAuthorLastName: Dispatch<SetStateAction<string>>;
  setDoi: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export default Handlers;
