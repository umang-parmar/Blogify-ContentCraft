import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
const Allblogs = () => {

    const [allblogs, setallblogs] = useState()

    //refreshing page automatically in UI
    useEffect(() => {
        getallblogs()
    }, [])
    
    //Get all blog function
    const getallblogs = async () => {
        // All blogs fetched from backend using API
        const response = await axios.get("http://localhost:3000/allblog")
        // All blogs set in allblogs
        setallblogs(response.data.allBlog);
    }
  return (

    //maping of array to sequential way
    <div>{allblogs && allblogs.map((a,idx) => 
    <div key={idx}>
        <img src={a.img}/>
        <p>{a.title}</p>
        <p>{a.descripion}</p>
        <p>{a.email}</p>
        <a href={`/edit/${a._id}`}><button>edit</button></a>
        <p>-------------------------------------</p>
    </div>
    )}</div>
  )
}

export default Allblogs