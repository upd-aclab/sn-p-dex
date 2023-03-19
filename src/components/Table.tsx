import data from "~/data/data";

const Table = () => {
  const columns = ["Name"];

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
        {data.map(({ name }, index) => (
          <tr key={index}>
            <td className="cell">{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
