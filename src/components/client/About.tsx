type AboutProps = {
  desc: string;
};

const About = ({ desc }: AboutProps) => {
  return <article>{desc}</article>;
};

export default About;
