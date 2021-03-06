import * as React from "react";
import {RoundButton} from "./RoundButton";
import {UIStore} from "../../stores/UIStore";
import {observer} from "mobx-react";
 
import "./Landing.scss";

export interface LandingProps { 
    
   
}

@observer
export class Landing extends React.Component<LandingProps, undefined> {
    render() {
        return ( 
            <div className="landing">
                <h1>How are we doing?</h1>
                <p>Your feedback is important.  Let us know what you think!</p>
                <div className="action_container">
                    <ul>
                        <RoundButton name="info" onClick={this.handleInfoClick}>Flight<br/>Info</RoundButton>
                        <RoundButton name="feedback" onClick={this.handleFeedbackClick}>Give<br/><span>Feedback</span></RoundButton>
                        <RoundButton name="game" onClick={this.handleGameClick}>Trivia<br/>Game</RoundButton>
                    </ul>
                </div>
            </div>
        );
    }

    //@observable wasClicked = false

    handleFeedbackClick = () => {
        UIStore.page = "rating";
    }
    handleInfoClick = () => {
        UIStore.modal = "info";
    }
     handleGameClick = () => {
        UIStore.modal = "game";
    }
}