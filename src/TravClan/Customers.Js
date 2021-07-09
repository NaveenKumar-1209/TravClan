import React from 'react';
import "./Customer.css";

const Customers = ({posts, loading}) => {
    const Cards = {
        display:"flex",
        width:"40vw",
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
                    <div className="perCustomer">
                    <ul style={Cards}>
                        <li style ={{display:"inline-block", padding:"75px", textAlign:"center"}} >
                        <h4 style={{color:"#c26c1b"}}>{curElem.firstname} {curElem.lastname}</h4>
                        <img style={{width:"250px", height:"200px"}} src={curElem.avatarUrl} />
                        <p>{curElem.email}</p>
                        <p>{curElem.phone}</p></li>
                        <li>
                        
                        {curElem.bids.map((subCurElem)=>{
                            const bidAmount = [];
                            for(let i = 1; i<=subCurElem.length; i++){
                                bidAmount.push(subCurElem.amount);
                            }
                            return(
                                <>
                                <div className="CustomerDetails">
                                <ul className="listCar">
                                    <li>{subCurElem.carTitle} : {subCurElem.amount}</li>
                                </ul>
                                </div>
                                </>
                            )
                        })} 
                    </li> 
                    </ul>
                    </div>
                    </>
                )    
            })
        }
        </div>
     )};

export default Customers;

