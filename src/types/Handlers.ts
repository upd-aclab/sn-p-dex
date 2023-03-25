import { type Dispatch, type SetStateAction } from "react";

interface Handlers {
  toggleShort: () => void;
  setNameSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export default Handlers;
