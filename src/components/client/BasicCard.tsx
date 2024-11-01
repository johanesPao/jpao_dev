type BasicCardProps = {
  title: string;
  value: string;
};

const BasicCard = ({ title, value }: BasicCardProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <span>{value}</span>
    </section>
  );
};

export default BasicCard;
