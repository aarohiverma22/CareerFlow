interface RatioCardProps {
  value: string;
  label: string;
}

const RatioCards = ({ value, label }: RatioCardProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold text-[#170062]">{value}</span>

      <span className="text-sm font-semibold text-[#402FCA]">{label}</span>
    </div>
  );
};

export default RatioCards;
