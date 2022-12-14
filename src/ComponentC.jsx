import React from "react";
import { FirstName, LastName } from "./AppComponent";

const ComponentC = () =>{
    return(
        <>
            <FirstName.Consumer>
            {(fname) =>{
                return(
                    <LastName.Consumer>
                    {(lname) => {
                        return <h1>Hey {fname} {lname}</h1>;
                    }}
                    </LastName.Consumer>
                );
                
            }}
            </FirstName.Consumer>
        </>
    );
};

export default ComponentC; 