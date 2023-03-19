import type System from "~/types/System";

interface Props {
  data: System;
}

const Row = ({ data }: Props) => {
  return (
    <tr>
      <td className="cell">{data.name}</td>
    </tr>
  );
};

export default Row;
