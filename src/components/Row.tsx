import type Variant from "~/types/Variant";
import Link from "next/link";
import ProbedText from "./ProbedText";

interface Props {
  data: Variant;
}

const Row = ({ data }: Props) => {
  return (
    <tr>
      <td className="cell">
        {typeof data.matchIndices === "undefined" ||
        data.matchIndices?.length === 0 ? (
          <p>{data.name}</p>
        ) : (
          <ProbedText text={data.name} indices={data.matchIndices} />
        )}
      </td>
      <td className="cell">{data.description}</td>
      <td className="cell">
        {data.references && (
          <div className="flex gap-1">
            {data.references.map(({ link, open, matched }, index) => (
              <Link
                key={index}
                href={link}
                className={`transition-all hover:scale-110 ${
                  open ? "text-green-400" : "text-yellow-400"
                } ${matched ? "bg-blue-500/60" : ""}`}
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
