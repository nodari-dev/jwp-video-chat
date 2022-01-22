import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default (props: any) => {
    return(
        <div className={"logo"}>
            <Link to={"/"}>
                <img src="/svg/logo.svg" alt="Connection."/>
                <h3>Bazaru.net</h3>
            </Link>
        </div>
    )
}