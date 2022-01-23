import Tabs from "../Tabs";
import {SendIcon} from "@iconicicons/react";
import React from "react";
import "./style.scss";
import {Message} from "../../../components";

interface Props{
    show: boolean;
    hook: any;
    clients: number;
}

const messages = [
    {
        name: "test",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "User 1",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "User 2",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
    {
        name: "User 3",
        message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual "
    },
]

export default (props: Props) =>{
    const [showChat, setVisibleChat] = React.useState(true);

    return(
        <div className={`wrap meeting-sidebar ${props.show && "hidden"}`}>
            <div className="content content-chat">
                <div className="tabs">
                    <Tabs hook={setVisibleChat} enabled={showChat} clients={props.clients} />
                </div>
                <div className={"chat"}>
                    <div className={"messages"}>
                        <ul className={"messages-list"}>
                            {messages.map((item: any, index: any) => {
                                return(
                                    <li key={index}>
                                        <Message name={item.name} message={item.message} />
                                    </li>
                                )
                            })}
                        </ul>


                    </div>
                    <div className={"form-message"}>
                        <form>
                            <textarea
                                name={"message"}
                                id={"message"}
                                placeholder={"Type your message..."}
                            />
                            <button><SendIcon/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
