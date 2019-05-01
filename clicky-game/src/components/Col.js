import React from "react";

function Col(props){

    return (
        <div className="col-md-4 mt-4">
        {props.children}
        </div>
    );
}
export default Col;