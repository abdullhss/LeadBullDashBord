import NavBar from "./NavBar"
import SearchWithText from "./SearchWithText"
import Table from "./Table.jsx"
import BurgerIcone from "./BurgerIcone.jsx"

import "../style/BodyContaner.css"

export default function BodyContaner(){
    return(
        <div id="BodyContainer">
            <BurgerIcone></BurgerIcone>
            <NavBar></NavBar>
            <SearchWithText></SearchWithText>
            <Table></Table>
        </div>
    )
}