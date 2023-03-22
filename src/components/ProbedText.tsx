interface Props {
  text: string;
  indices: number[];
}

const ProbedText = ({ text, indices }: Props) => {
  const chars = [...text];

  const spans = chars.map((char, index) =>
    indices.includes(index) ? (
      <span key={index} className="bg-blue-500/60">
        {char}
      </span>
    ) : (
      <span key={index}>{char}</span>
    )
  );
  return <p>{spans}</p>;
};

export default ProbedText;
