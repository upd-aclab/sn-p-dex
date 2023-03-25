import type Reference from "./Reference";

interface Variant {
  name: string;
  description?: string;
  references?: Reference[];
  matchIndices?: number[];
	authorMatch?: boolean;
}

export default Variant;
