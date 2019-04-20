import React from "react";
import { connect } from "react-redux";
import { postMessages, getMessages } from "./actions";

class Post extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userText: "",
		};
		this.setText = this.setText.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	};

	setText(e){
		this.setState({userText: e.target.value});
	};

	sendMessage(){
		let msgObj = {
			text: this.state.userText,
			userId: 12345,
			roomId: this.props.currRoomId,
		};

		this.setState({userText: ""}, () => {
			this.props.postMessages(msgObj);
			this.props.getMessages(this.props.currRoomId);
		})
	}

	render(){
		return (
			<div className="col-xs-12 col-md-6 col-md-offset-3">
				<div>{this.props.currRoomId}</div>
				<div className="input-group">
					<input
						onChange={this.setText}
						value={this.state.userText} 
						className="form-control" type="text" />
					<span className="input-group-btn">
						<button
							disabled={(this.props.currRoomId && this.state.userText) ? false : true} 
							className="btn btn-success"
							onClick={this.sendMessage}
						>
						Add Message
						</button>
					</span>
				
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {currRoomId: state.currRoomId}
}

export default connect(mapStateToProps, {
	postMessages: postMessages,
	getMessages: getMessages
})(Post)