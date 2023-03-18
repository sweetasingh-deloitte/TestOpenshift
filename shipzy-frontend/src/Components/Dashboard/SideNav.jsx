import React from "react";
import NavItem from "./NavItem";
import DashIcon from "../../Assets/icons/DashBoard.png";
import BookIcon from "../../Assets/icons/BookNow.png";
import BookingIcon from "../../Assets/icons/Bookings.png";
import SubsIcon from "../../Assets/icons/Subs.png";
const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="SideNav-Top">
        <NavItem img={DashIcon} content="Dashboard" />
        <NavItem img={BookIcon} content="Book Now" />
        <NavItem img={BookingIcon} content="Bookings" />
        <NavItem img={SubsIcon} content="Subscription" />
      </div>
      <div className="SideNav-Bottom">
        <NavItem img={DashIcon} content="Dashboard" />
        <NavItem img={BookIcon} content="Book Now" />
        <NavItem img={BookingIcon} content="Bookings" />
        <NavItem img={SubsIcon} content="Subscription" />
      </div>
    </div>
  );
};
export default SideNav;
