import { type Dispatch, type SetStateAction } from "react";

interface Handlers {
  toggleShort: () => void;
  setSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export default Handlers;
