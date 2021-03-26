import e from 'cors'
import React from 'react'

handleChange = (e) => {
    this.setState({search: e.target.value})
}
const SearchBar = () => {
    return (
        <div>
            <input onChange={this.handleChange}></input>
            <button placeholder="Search"/>
        </div>
    )
}

export default SearchBar
