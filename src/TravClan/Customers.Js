import React from 'react';


const Customers = ({posts, loading}) => {
    console.log(posts)
    if(loading){
    return <h2>Loading....</h2>;
    }
    return(
        <div>
            {

            posts.map((curElem)=>{
                return(
                    <>
                    <li style ={{display:"inline-block", padding:"75px", textAlign:"center"}} >
                    <h4>{curElem.firstname} {curElem.lastname}</h4>
                    <img style={{width:"150px", height:"200px"}} src={curElem.avatarUrl} />
                    <p>{curElem.email}</p>
                    <p>{curElem.phone}</p></li>
                    </>
                )    
            })

        }
        </div>
     )};

export default Customers;

