import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

export class NavBarForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	handleClick = () => {
		this.setState(
			(prevState) => ({
				isLoggedIn: !prevState.isLoggedIn,
			}),
			() => {
				console.log(this.state.isLoggedIn);
			}
		);
	};

	render() {
		return (
			<div className={css.NavBar}>
				<h1>My Gallery</h1>
				<NavBarChild handleClick={this.handleClick} isLoggedIn={this.state.isLoggedIn} />
			</div>
		);
	}
}

export default NavBarForm;
