import React, { useState }from 'react'


const SearchBar = (props) => {
    // const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log('handlesubmit function')}
    //     event.preventDefault();
    //     searchVideo()
    // }

    // async function searchVideo(){
    //     const results = 
    // }
    return(
        <form onSubmit={handleSubmit}>
            <label></label>
            <button onClick={console.log('onclick test')}>Search</button>
            <input type='text' placeholder='search' onChange={() => console.log('onchange event test')}/>
        </form>
    )
}
export default SearchBar
