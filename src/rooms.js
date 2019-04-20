import React from "react";
import { connect } from "react-redux";
import { getAllRooms, getMessages, setRoomId } from "./actions";

class Rooms extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
	};

	componentDidMount(){
		this.props.getAllRooms();
	};

	render(){
		let rooms;

		if(this.props.allRooms.length > 0){
			rooms = this.props.allRooms.map( room => {
				return(
				<li
					className="list-group-item"
					key={room.id}
					onClick={ () => {
						this.props.getMessages(room.id);
						this.props.setRoomId(room.id);
					} }
				>
					<h4 className="list-group-item-heading">{room.name}</h4>
				</li>)
			} )
		}

		return (
			<div className="col-xs-12 col-md-6 col-md-offset-3">
				<ul className="list-group">
					<li className="list-group-item">
						<h3 className="list-group-item-heading">Rooms</h3>
					</li>
					{rooms}
				</ul>
			</div>
			)
	}
};

function mapStateToProps(state){
	return {allRooms: state.allRooms}
}

export default connect(mapStateToProps, {
	getAllRooms: getAllRooms,
	getMessages: getMessages,
	setRoomId: setRoomId,
})(Rooms)