import React from "react";

const SlotM = (props) =>{
    // let x = 'π';
    // let y = 'π';
    // let z = 'π';

    if((props.x===props.y) && (props.y===props.z)){
        return(
            <>
                <div className="slot-inner">
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>This matched.</h1>
                    <hr/>
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className="slot-inner">
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>This isn't matched.</h1>
                    <hr/>
                </div>
            </>
        );
    }
}; 
const Slotapp1 = () =>{
        return(
            <>
                
                <h1 className="heading_style"> π°Welcome to <span style={{fontWeight : "bold"}}>Slot Machine Game </span>π°</h1>
                

                <div className="slotmachine">
                <SlotM x = 'π' y = 'π' z = 'π'/>
                <SlotM x = 'π' y = 'π' z = 'π'/>
                <SlotM x = 'π' y = 'π' z = 'π'/>
                <SlotM x = 'π' y = 'π' z = 'π'/>
                </div>
            </>
         );
};

export default Slotapp1;
