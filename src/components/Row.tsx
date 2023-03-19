import type System from "~/types/System";
import Link from "next/link";

interface Props {
  data: System;
}

const Row = ({ data }: Props) => {
  return (
    <tr>
      <td className="cell">{data.name}</td>
      <td className="cell">{data.description}</td>
      <td className="cell">
        {data.references && (
          <div className="flex gap-1">
            {data.references.map((href, index) => (
              <Link
                key={index}
                href={href}
                className="transition-all hover:scale-110"
              >
                [{index + 1}]
              </Link>
            ))}
          </div>
        )}
      </td>
    </tr>
  );
};

export default Row;
