import TopBorderHead from "@/components/client/TopBorderHead";

type BasicCardProps = {
  title: string;
  value: string;
};

const BasicCard = ({ title, value }: BasicCardProps) => {
  return (
    <section className="flex flex-col">
      <TopBorderHead title={title} />
      <span className="text-[0.8rem] font-semibold">{value}</span>
    </section>
  );
};

export default BasicCard;
