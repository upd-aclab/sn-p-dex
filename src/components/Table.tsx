import { motion } from "framer-motion";
import type Variant from "~/types/Variant";
import Row from "./Row";

interface Props {
  columns: string[];
  rows: Variant[];
}

const Table = ({ columns, rows }: Props) => {
  return (
    <motion.table layout>
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
    </motion.table>
  );
};

export default Table;
