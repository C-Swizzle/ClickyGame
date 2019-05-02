import React from "react";

function Header(props) {
    return (
        <div>
            <nav className="jumbotron text-center bg-info">
                <h1 className="display-4 text-light">Welcome to the Clicky Game!</h1>
                <hr className="my-4" />
                <h4 className="text-danger font-weight-bold">Don't click a character more than once!</h4>
                <br />
                <div className="container">
                <div className="row">
                <div className="col-md-6">
                <h2 className="font-weight-bold">
                Score: {props.score}
                </h2>
                </div>
                <div className="col-md-6">
                <h2 className="font-weight-bold">
                Top Score: {props.TopScore}
                </h2>
                </div>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;