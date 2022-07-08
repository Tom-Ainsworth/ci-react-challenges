import React from "react";

function NavBarChild(props) {
	return props.isLoggedIn ? (
		<button onClick={props.handleClick}>Login</button>
	) : (
		<form>
			<label htmlFor="username">Username:</label>
			<input name="username" id="username" type="text" placeholder="username"></input>

			<label htmlFor="password">Password:</label>
			<input name="password" id="password" type="password" placeholder="password"></input>

			<button type="submit" id="login" onClick={props.handleClick}>
				Submit
			</button>
		</form>
	);
}

export default NavBarChild;
