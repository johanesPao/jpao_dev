import {
  IconLetterJ,
  IconLetterP,
  IconHeartFilled,
  IconLetterA,
  IconLetterW,
  IconLetterX,
  IconLetterN,
  IconLetterS,
  IconAmpersand,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <span className="flex items-center space-x-1">
        <span>created by</span>
        <div className="flex -space-x-2 items-baseline">
          <IconLetterJ size={20} />
          <IconLetterP size={20} />
        </div>
        <span>with full of</span>
        <IconHeartFilled color="#C70039" />
        <span>from</span>
        <div className="flex -space-x-2">
          <IconLetterA size={20} />
          <IconLetterA size={20} />
          <IconLetterW size={20} />
        </div>
        <IconAmpersand />
        <div className="flex -space-x-2">
          <IconLetterX size={20} />
          <IconLetterN size={20} />
          <IconLetterS size={20} />
          <IconLetterP size={20} />
        </div>
      </span>
      <span className="text-[36px]">2024</span>
    </div>
  );
};

export default Footer;
