import React from "react";
import css from "./css/PostItem.module.css";

function PostItem(props) {
	const savedPosts = props.savedPosts;
	return savedPosts.map((post) => {
		const { name, title, description, image } = post;
		return (
			<div key={title} className={css.SearchItem}>
				<p>{title}</p>
				<p>{name}</p>
				<img src={image} alt=""></img>

				<p>{description}</p>
			</div>
		);
	});
}

export default PostItem;
