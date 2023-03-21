import type System from "~/types/System";

const shorten = (data: System[]) => {
  return data.map((system) => ({
    ...system,
    name: system.name.replace("Spiking Neural P Systems", "SNPS"),
  }));
};

export default shorten;
