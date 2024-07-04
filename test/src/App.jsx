import './App.css'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import BodyContaner from './components/BodyContaner'
function App() {
  return (
    <div id="pageContaner">
      <SideBar></SideBar>
      <BodyContaner></BodyContaner>
    </div>
  )
}
export default App