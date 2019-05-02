import React from "react";

function Header(props) {
    return (
        <div>
            <nav className="jumbotron text-center bg-info">
                <h1 className="display-4 text-light">Welcome to the Clicky Game!</h1>
                <hr className="my-4" />
                <p className="text-danger font-weight-bold">Don't click a character more than once!</p>
                <div className="lead font-weight-bold">
                Score: {props.score}
                </div>
            </nav>
        </div>
    );
};

export default Header;