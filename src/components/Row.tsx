import type System from "~/types/System";
import Link from "next/link";
import ProbedText from "./ProbedText";

interface Props {
  data: System;
}

const Row = ({ data }: Props) => {
  return (
    <tr>
      <td className="cell">
        {typeof data.titleMatches === "undefined" ||
        data.titleMatches?.length === 0 ? (
          <p>{data.name}</p>
        ) : (
          <ProbedText text={data.name} indices={data.titleMatches} />
        )}
      </td>
      <td className="cell">{data.description}</td>
      <td className="cell">
        {data.references && (
          <div className="flex gap-1">
            {data.references.map((href, index) => (
              <Link
                key={index}
                href={href}
                className="transition-all hover:scale-110"
                target="_blank"
                rel="noreferrer"
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
