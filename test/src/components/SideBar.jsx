import '../style/SideBar.css'
import {useRef} from "react"
export default function SideBar({SideBarRef , toggleSidebar}){
    
    return(
            <nav className="sideBarNav" ref={SideBarRef} >
                <div id="Xcontaner" onClick={toggleSidebar}>
                    <div id='xIconeFirst'></div>
                    <div id='xIconeSecond'></div>
                </div>
                <img src="../public/leadbull logo .png" alt="logo" id="leadbullLogo" />
                <h2 className="UserName">iqoxss</h2>
                <a href="#">DashBord</a>
                <a href="#">Leads</a>
                <a href="#">Contacts</a>
                <a href="#">Companies</a>
                <a href="#">Deals</a>
                <a href="#">Documents</a>
                <a href="#">Tasks</a>
                <a href="#">Flows</a>
                <a href="#">Automations</a>
                <a href="#">Apps</a>
            </nav>
    )
}