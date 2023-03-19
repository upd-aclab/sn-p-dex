import type System from "~/types/System";
import Row from "./Row";

interface Props {
  columns: string[];
  rows: System[];
}

const Table = ({ columns, rows }: Props) => {
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
        {rows.map((data, index) => (
          <Row key={index} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
