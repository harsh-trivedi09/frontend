import { useState } from "react";


function Post() {
    const data={fname:" ", lname:" "}
const[inputdata,setdata]=useState(data)

    return (  
        <>sfsfs
        <label>First Name</label>
        <input type="text" name="fname" value={data.fname} onChange={handledata}/> <br />
        <label>Last Name</label>
        <input type="text" name="lname"  value={data.lname} onChange={handledata}/>
        </>
    );
}

export default Post;