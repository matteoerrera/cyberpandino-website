import React from "react";
import "./Navbar.scss";
import { NavbarProps } from "./Navbar.types";
import { ArrowLeft } from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { state } from "../../store/state";

const Navbar: React.FC<NavbarProps> = ({ label, onClick = null, icon, back = true, backOnClick = null, variant = "dark" }) => {
  const navigate = useNavigate();
  const snapApp = useSnapshot(state.app);
  
  return (
    <nav
      className={`componentNavbar ${variant} ${snapApp.hasNotch ? "has-notch" : ""}`}
    >
      {back && 
        <button 
          className="back"
          onClick={backOnClick ? backOnClick : () => navigate(-1)}
        >
          <ArrowLeft 
            size={20}
            color={variant === "dark" ? "#fff" : "#000" }
          />
        </button>
      }
      <Link to={"/"}>
        <h1 className={`${back ? "text-center" : ""}`}>{label}</h1>
      </Link>
      <button 
        className={`custom`}
        onClick={onClick ? onClick : () => {}}
        disabled={!icon}
      >
        {icon}
      </button>
    </nav>
  );
};

export default Navbar;
