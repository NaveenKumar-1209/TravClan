import React from 'react';


const Customers = ({posts, loading}) => {
    const Cards = {
        display:"flex",
        width:"30vw",
        backgroundColor:"#cecff0",
        listStyle:"none",
    }
    console.log(posts)
    if(loading){
    return <h2>Loading....</h2>;
    }
    return(
        <div className = "customer-list">
            {

            posts.map((curElem)=>{
                return(
                    <>
                    <ul style={Cards}>
                        <li style ={{display:"inline-block", padding:"75px", textAlign:"center"}} >
                        <h4 style={{color:"#c26c1b"}}>{curElem.firstname} {curElem.lastname}</h4>
                        <img style={{width:"150px", height:"200px"}} src={curElem.avatarUrl} />
                        <p>{curElem.email}</p>
                        <p>{curElem.phone}</p></li>
                        <li>
                            <p>{curElem.bids.carTitle}</p>
                        </li>
                    </ul>
                    </>
                )    
            })

        }
        </div>
     )};

export default Customers;

