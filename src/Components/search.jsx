import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = ()=> {

    const {searchParam, handleOnChange, handleSubmit} = useContext(GlobalContext);

    return (
        <div className="search">
            <input 
                name="search" 
                value={searchParam} 
                onChange={handleOnChange}  placeholder="Enter movie keyword here"/>
            <button onClick={handleSubmit}>Submit search</button>    
        </div>
    )
}

export default Search;