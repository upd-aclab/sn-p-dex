import type System from "~/types/System";
import { InlineMath } from "react-katex";

interface Props {
  data: System;
}

const Row = ({ data }: Props) => {
  return (
    <tr>
      <td className="cell">{data.name}</td>
      <td className="cell">
        {data.power && <InlineMath math={`${data.power}`} />}
      </td>
    </tr>
  );
};

export default Row;
