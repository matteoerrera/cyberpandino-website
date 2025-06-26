import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import { ArrowLeft, Calendar, Home, Map } from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { NavigationProps } from "./Navigation.types";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSnapshot } from "valtio";
import { state } from "../../store/state";


const Navigation: React.FC<NavigationProps> = ({  }) => {
  const navigate = useNavigate();
  const snapApp = useSnapshot(state.app);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  /* const pagesWithNavbar = ["/", "/calendar", "/calendar/list", "/garages", "/services", "/garages/list", "/garages/map", "/services/", "/calendar/"];
  if(!pagesWithNavbar.includes(currentPath)) return null; */

  const pagesWithNavbar = ["/welcome", "/login", "/register", "/forgot-password", "/reset-password"];
  if(pagesWithNavbar.includes(currentPath)) return null;

  const menuItems = [
    {
      label: "Oggi",
      icon: <IoMdHome size={22} color="#fff" />,
      active: ["/", "/services"],
      slug: "/"
    },
    {
      label: "Calendario",
      icon: <FaRegCalendarAlt size={22} color="#fff" />,
      active: ["/calendar", "/calendar/list"],
      slug: "/calendar"
    },
    { 
      label: "Parcheggi",
      icon: <FaMapMarkerAlt size={22} color="#fff" />,
      active: ["/garages", "/garages/list", "/garages/map"],
      slug: "/garages"
    }
  ];

  return ( 
    <ul
      className={`componentNavigation ${snapApp.hasNotch ? "has-notch" : ""}`}
    >
      {menuItems.map((item, index) => (
        <li key={index} className={item.active.includes(currentPath) ? "active" : ""}>
          <Link to={item.slug}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
