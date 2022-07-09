import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets";

function ContentAPIHooks() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const [savedPosts, setSavedPosts] = useState([]);

	useEffect(() => {
		fetchImages();
	}, []);

	const fetchImages = async () => {
		const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
		const fetchedPosts = response.data.hits;

		setIsLoaded(true);
		setPosts(fetchedPosts);
		setSavedPosts(fetchedPosts);
	};

	const handleChange = (e) => {
		const name = e.target.value;
		const filteredPosts = savedPosts.filter((post) => post.user.toLowerCase().includes(name));
		setPosts(filteredPosts);
	};

	return (
		<div className={css.Content}>
			<div className={css.TitleBar}>
				<h1>My Photos</h1>
				<form>
					<label htmlFor="searchInput">Search:</label>
					<input
						type="text"
						id="searchInput"
						placeholder="By Author"
						name="searchInput"
						onChange={(e) => handleChange(e)}
					/>
					<h4>posts found: {posts.length}</h4>
				</form>
			</div>
			<div className={css.SearchResults}>{isLoaded ? <PostItemAPI posts={posts} /> : <Loader />}</div>
		</div>
	);
}

export default ContentAPIHooks;
