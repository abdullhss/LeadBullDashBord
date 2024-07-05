import '../style/BurgerIcone.css'
import '../style/SideBar.css'
export default function BurgerIcone({toggleSidebar}){
    
    return(
        <div id="BurgerIcone" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}