import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [fetchedPosts, setFetchedPosts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			console.log("Component mounted");
			setIsLoaded(true);
			setFetchedPosts(savedPosts);
		}, 2000);
	}, []);

	const handleChange = (e) => {
		const name = e.target.value.toLowerCase();
		const filteredPosts = savedPosts.filter((post) => post.name.toLowerCase().includes(name));
		setFetchedPosts(filteredPosts);
	};

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
						onChange={(e) => handleChange(e)}
					></input>
					<h4>posts found: {fetchedPosts.length}</h4>
				</form>
			</div>
			<div className={css.SearchResults}>{isLoaded ? <PostItem posts={fetchedPosts} /> : <Loader />}</div>
		</div>
	);
}

export default ContentHooks;
