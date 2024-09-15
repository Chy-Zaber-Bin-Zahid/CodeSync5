import { VscRadioTower } from "react-icons/vsc";
import {
  FaShoppingCart,
  FaHandHoldingHeart,
  FaDollarSign,
  FaHospitalAlt,
} from "react-icons/fa";
import { FaLaptopCode, FaBookOpen } from "react-icons/fa6";
import { IoHome, IoRocketSharp } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";

export const industries = [
  { icon: <FaDollarSign />, name: "Fintech" },
  { icon: <FaHospitalAlt />, name: "Healthcare" },
  { icon: <VscRadioTower />, name: "Telco" },
  { icon: <FaShoppingCart />, name: "E-com" },
  { icon: <IoHome />, name: "Real Estate" },
  { icon: <GiSteeringWheel />, name: "Automotive" },
  { icon: <FaLaptopCode />, name: "Software" },
  { icon: <IoRocketSharp />, name: "Startup" },
  { icon: <FaBookOpen />, name: "Education" },
  { icon: <AiOutlineGlobal />, name: "Retail" },
  { icon: <FaHandHoldingHeart />, name: "Non-Profit" },
  { icon: <TbListDetails />, name: "Miscellaneous" },
];
