import React from "react";
import { connect } from "react-redux";

class Messages extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
	};

	render(){
		let messages;

		if(this.props.messages.length){
			messages = this.props.messages.map( (message, index) => (
				<li
					className="list-group-item"
					key={index}
				>
				{message.text}
				</li>
				));
		}
		
		return (
			<div className="col-xs-12 col-md-6 col-md-offset-3">
				<ul className="list-group">
					<li className="list-group-item">
						<h3 className="list-group-item-heading">Messages</h3>
					</li>
					{messages}
				</ul>
			</div>
			)
	}
}

function mapStateToProps(state){
	return{ messages: state.messages };
}

export default connect(mapStateToProps)(Messages);