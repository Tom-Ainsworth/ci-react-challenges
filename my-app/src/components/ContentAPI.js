import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets";

export class ContentApi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			posts: [],
			savedPosts: [],
		};
	}

	componentDidMount() {
		this.fetchImages();
	}

	async fetchImages() {
		axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`).then((response) => {
			const fetchedPosts = response.data.hits;
			this.setState({ isLoaded: true, posts: fetchedPosts, savedPosts: fetchedPosts });
		});
	}

	handleChange = (e) => {
		const name = e.target.value;
		const filteredPosts = this.savedPosts.filter((post) => post.user.toLowerCase().includes(name));
		this.setState({
			posts: filteredPosts,
		});
	};

	render() {
		return (
			<div>
				<div className={css.TitleBar}>
					<h1>My Photos</h1>
					<form>
						<label htmlFor="searchInput">Search:</label>
						<input
							type="text"
							id="searchInput"
							placeholder="By Author"
							name="searchInput"
							onChange={(e) => this.handleChange(e)}
						/>
						<h4>posts found: {this.state.posts.length}</h4>
					</form>
				</div>
				<div className={css.SearchResults}>
					{this.state.isLoaded ? <PostItemAPI posts={this.state.posts} /> : <Loader />}
				</div>
			</div>
		);
	}
}

export default ContentApi;
