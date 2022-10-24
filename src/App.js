import React from "react";
import {Button,message} from "antd";

export default class App extends React.Component{

    onclick = () =>{
        message.success("yes")
    }

    render() {
        return <Button type={"primary"} onClick={this.onclick}>test</Button>
    }
}