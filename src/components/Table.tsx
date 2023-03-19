const Table = () => {
  const columns = ["Name", "Acronym"];

  const data = [
    {
      name: "Standard",
      acronym: "SN P",
    },
    {
      name: "Structural Plasticity",
      acronym: "SNPSP",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th className="cell" key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, acronym }, index) => (
          <tr key={index}>
            <td className="cell">{name}</td>
            <td className="cell">{acronym}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
