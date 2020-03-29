import React, {useContext, useState} from 'react'
import DataContext from 'helpers/DataContext'

const SearchBar = () => {
  const {country, getData} = useContext(DataContext)
  const [data, setData] = useState("")
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search..." onChange={(event)=>setData(event.target.value)}/>
      <button onClick={()=>getData(data)}>Search</button>
    </div>
  )
}

export default SearchBar