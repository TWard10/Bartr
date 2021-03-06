import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { deletePost } from '../../actions';
import * as routes from '../../constants';

class PostItem extends Component {
	onClick = (e) => {
		this.props.deletePost(this.props.post.postId);
	}
	
	// TODO: Add ability for posts to display more pictures
	render() {
		const { post, type } = this.props;
		console.log('Post item:', post);
		return (
			<div className="placeHolder">
				<div className="postTitle">
					<div className="floatRight">{
						type === 'user' ? <button className="deletePostButton" onClick={this.onClick}>X</button> : null
					}{
						//type === 'user' ? <button className="editPostButton" onClick={this.onClick}>Edit</button> : null
						type === 'user' ? <Link to={`/post/edit/${post.postId}`}><button className="editPostButton">Edit</button></Link> : null

					}</div>
					
					<Link to={`/post/${post.postId}`}><h3 className="listingTitle">{post.title}</h3></Link>
				</div>
				<div className="postInfo">
					<div className="postPicture">
						<img className="itemPicture" alt="itemPicture" src={post.photoUrls[0]}></img>
					</div>
					<div className="postDescription">
						<ul className="descriptionDetails">
							{post.description}
						</ul>
						<div className="postedBy">
							Posted by: <Link to={`/user/${post.userId}`}>{post.displayName}</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default compose(
	connect(null, { deletePost })
)(PostItem);
