type TopBorderHeadProps = {
  title: string;
};

const TopBorderHead = ({ title }: TopBorderHeadProps) => {
  return <span className="top-head">{title}</span>;
};

export default TopBorderHead;
