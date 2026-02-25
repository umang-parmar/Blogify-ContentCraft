import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
const Allblogs = () => {

    const [allblogs, setallblogs] = useState()

    //refreshing page automatically
    useEffect(() => {
        getallblogs()
    }, [])
    
    //Get all blog function
    const getallblogs = async () => {
        // All blogs fetched from backend using API
        const response = await axios.get("http://localhost:3000/allblog")
        // All blogs set in allblogsb
        setallblogs(response.data.allBlog);
    }
  return (

    //maping of array to sequential way
    <div>{allblogs && allblogs.map((a) => 
    <div>
        <img src={a.img}/>
        <p>{a.title}</p>
        <p>{a.descripion}</p>
        <p>{a.email}</p>
        <p>-------------------------------------</p>
    </div>
    )}</div>
  )
}

export default Allblogs