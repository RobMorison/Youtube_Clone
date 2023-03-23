import React, { useState }from 'react'


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState()


    function handleSubmit(event){
        event.preventDefault();
        console.log('handlesubmit function')}

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='search' onChange={() => console.log('onchange event test')}/>
            <button onClick={console.log('onclick test')}>Search</button>
        </form>
    )
}
export default SearchBar
