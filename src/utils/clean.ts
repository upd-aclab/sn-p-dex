const clean = (s: string): string => {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export default clean;
