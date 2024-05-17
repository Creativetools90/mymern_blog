import React from 'react'
import { useContext } from 'react'
import { MyAdminContext } from './AdminContext';
const RightPannel = () => {
    const {AdminUserName} = useContext(MyAdminContext); //set context value 
  return (
    <>
     <div className="rightPannel">
        <div className="topPannel">
          <nav className="topNav">
            <div className="option_open_msg">
              <p className="msg">user setting pannel</p>
            </div>
            <div className="menus_top">
              <div className="wrap_m">
                <img src="../../bell.png" alt="" />
                <div className="user_verfity">
                  <div className="user_profile">
                    <img src="../../userprofile.png" alt="" />
                  </div>
                  <div className="user_name">
                    <h2 className="u_n">{AdminUserName.user}</h2>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="mainPannel"></div>
      </div>
    </>
  )
}

export default RightPannel