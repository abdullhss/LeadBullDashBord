import './App.css'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import BodyContaner from './components/BodyContaner'
import { useRef } from 'react'
function App() {
  const sidebarRef = useRef(null) ;
  const toggleSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle('displaySideBarRefHandler');
      if (sidebarRef.current.classList.contains('displaySideBarRefHandler')) {
        sidebarRef.current.style.display = 'flex';
      } else {
        sidebarRef.current.style.display = 'none';
      }
    }
  };
  return (
    <div id="pageContaner">
      <SideBar SideBarRef={sidebarRef} toggleSidebar={toggleSidebar}></SideBar>
      <BodyContaner toggleSidebar = {toggleSidebar}></BodyContaner>
    </div>
  )
}
export default App