import "./header.modules.css";
import { useState } from "react";
const Heaqder = ({ title }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-container">
      <span>
        <img src="/leftarrow.svg" alt="" height={20} width={20} />
      </span>
      <img src="/logo.png" alt="" height={50} width={50} />
      <p>{title}</p>

          <img src="/threedots.svg" alt="" height={20} width={20} />

    </div>
  );
};

export default Heaqder;
