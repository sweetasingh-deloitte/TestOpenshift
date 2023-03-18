import "./Sidebar.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LineStyleIcon from '@mui/icons-material/LineStyle';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import CommuteIcon from '@mui/icons-material/Commute';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import { Link } from "react-router-dom";
import TripOriginIcon from '@mui/icons-material/TripOrigin';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard As A Driver</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
             <Link to="/createTrip" className="link">
            <li className="sidebarListItem">
              <CommuteIcon className="sidebarIcon" />
              Create Trip
            </li>
            </Link>
            <Link to="/allTrip" className="link">
            <li className="sidebarListItem">
              <TripOriginIcon className="sidebarIcon" />
              All Trip
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/driverDetail" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Driver Details
              </li>
            </Link>
            <Link to="/myVehicle" className="link">
              <li className="sidebarListItem">
                <DirectionsBusFilledIcon className="sidebarIcon" />
                My Vehicle
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Payments
            </li>
            {/* <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Update
            </li>
            {/* <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Messages
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              Rating
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ExitToAppIcon className="sidebarIcon" />
              Sign Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
