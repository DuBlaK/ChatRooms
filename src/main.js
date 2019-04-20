import React from "react";
import Rooms from "./rooms.js";
import Messages from "./messages.js";
import Post from "./post.js";

export default class Main extends React.Component {
	constructor(){
		super();
		this.state = {

		};
	};

	render(){
		return (
			<div className="container">
				<Rooms />
				<Messages />
				<Post />
			</div>
			)
	}
}
