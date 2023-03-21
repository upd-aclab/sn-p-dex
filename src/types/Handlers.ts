import { type Dispatch, type SetStateAction } from "react";

interface Handlers {
  handleChange: () => void;
  setSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export default Handlers;
