import '../style/SearchWithText.css'
export default function Search(){
    return(
        <div id="Searchcontaner" className='SearchContanerResponsive'>
            <h3 id='message'>manage your sales effectively using our worlds leading CRM software tool</h3>
            <form id="searchForm" action="">
                <input id="searchBar" type="text" placeholder="Search"/>
                <button id="searchbtn" type="submit">Apply filter</button>
                
                <select name="" id="Select">
                    <option value="0" selected hidden>select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </form>
        </div>
    )
}