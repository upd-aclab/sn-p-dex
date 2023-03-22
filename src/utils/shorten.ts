import type Variant from "~/types/Variant";

const shorten = (data: Variant[]) => {
  return data.map((system) => ({
    ...system,
    name: system.name.replace("Spiking Neural P Systems", "SNPS"),
  }));
};

export default shorten;
