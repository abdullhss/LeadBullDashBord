import NavBar from "./NavBar"
import SearchWithText from "./SearchWithText"
import Table from "./Table.jsx"
import BurgerIcone from "./BurgerIcone.jsx"

import "../style/BodyContaner.css"

export default function BodyContaner({toggleSidebar}){
    return(
        <div id="BodyContainer">
            <BurgerIcone toggleSidebar={toggleSidebar}></BurgerIcone>
            <NavBar></NavBar>
            <SearchWithText></SearchWithText>
            <Table></Table>
        </div>
    )
}