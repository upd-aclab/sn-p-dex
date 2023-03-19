import data from "~/data/data";
import Row from "./Row";

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
        {data.map((data, index) => (
          <Row key={index} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
