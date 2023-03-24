import type Reference from "./Reference";

interface Variant {
  name: string;
  description?: string;
  references?: Reference[];
  matchIndices?: number[];
}

export default Variant;
