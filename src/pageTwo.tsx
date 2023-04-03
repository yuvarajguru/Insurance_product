
import React, { useEffect, useState } from "react";


function PageTwo () {

    const [data,setData] = useState <any>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setData(json.products))
    },[])
    console.log(data)
    return(
        
            <div> 
            <div className="row">
            {data.map((item : any) => (
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                    <img className="card-img-top" src={item.thumbnail} alt="Card image cap"/>
                        <h5 className="card-title"><span>Title : </span>{item.title}</h5>
                        <p className="card-text"><span style={{fontWeight:'500'}}>Des : </span>{item.description}</p>
                        <p className="card-text"><span style={{fontWeight:'500'}}>Catgory : </span>{item.category}</p>
                        <p className="card-text"><span style={{fontWeight:'500'}}>Rating : </span>{item.rating}</p> 
                        <p className="card-text"><span style={{fontWeight:'500'}}>Price : </span>{item.price}</p>
                       
                    </div>
                    </div>
                </div>
                ))}
                </div>

          
            </div >
       
    )
}

export default PageTwo;