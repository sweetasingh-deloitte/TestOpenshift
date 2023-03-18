import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>
                        Mcube
                    </span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconsContainer'>
                        <NotificationsNoneIcon />
                        <span className='topIconBag'>2</span>

                    </div>
                    <div className='topbarIconsContainer'>
                        <PersonIcon />
                        {/* <span className='topIconBag'>2</span> */}
                    </div>
                    <div className='topbarIconsContainer'>
                        <ExitToAppIcon />
                        {/* <span className='topIconBag'>2</span> */}
                    </div>
                    {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        
                    

                </div>
                {/* test<br></br> */}
                


            </div>

        </div>
    )
}
