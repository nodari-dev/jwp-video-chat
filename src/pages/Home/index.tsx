import React from "react";
import { Footer } from "../../common";
import {Navigation} from "../../components";
import StartMeeting from "./StartMeeting";
import "./style.scss";

export default (props: any) => {
    return (
        <div className={"wrap wrap-full-width home"}>
            <Navigation/>
            <div className={"container"}>
                <div className={"home-welcome"}>
                    <div className={"text-container"}>
                        <h1>Farm-to-table
                            vegan everyday</h1>
                        <p>Mixtape XOXO VHS migas asymmetrical brunch la croix beard keffiyeh distillery chicharrones cloud
                            bread gochujang cray. Biodiesel disrupt +1 keytar snackwave blue bottle. Forage la croix
                            jianbing deep v locavore lumbersexual. Tacos freegan flannel paleo air plant trust fund.</p>
                    </div>
                    <StartMeeting/>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
