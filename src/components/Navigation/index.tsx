import React from "react";
import Logo from "../Logo";
import UserAvatar from "../UserAvatar";

import "./style.scss";

export default (props: any) => {
    return (
            <nav className={"navigation"}>
                <Logo/>
                <h3>#Meeting name</h3>
            </nav>

    )
}