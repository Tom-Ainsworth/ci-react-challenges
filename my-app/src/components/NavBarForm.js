import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";

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

				{this.state.isLoggedIn ? (
					<form>
						<label for="username">Username:</label>
						<input name="username" id="username" type="text" placeholder="username"></input>
						<label for="password">Password:</label>
						<input name="password" id="password" type="password" placeholder="password"></input>
						<button type="submit" id="login" onClick={this.handleClick}>
							Submit
						</button>
					</form>
				) : (
					<button onClick={this.handleClick}>Log In</button>
				)}
			</div>
		);
	}
}

export default NavBarForm;
