import '../style/SideBar.css'
export default function SideBar(){
    return(
            <nav className="sideBarNav">
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