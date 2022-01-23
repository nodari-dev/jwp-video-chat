import React from "react";
import "./style.scss"
interface Props{
    icon: any;
    disableIcon?: any;
    phone?: boolean;
    disabled?: boolean;
}

export default (props: Props) =>{
    return(
        <div className={`meeting-menu-el ${props.phone && "phone-style"} ${props.disabled && "disabled"}`}>
            {props.disableIcon
                ? props.disabled ? props.disableIcon : props.icon
                : props.icon}
        </div>
    )
}