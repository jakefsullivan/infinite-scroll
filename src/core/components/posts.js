import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Header from "./header";

const styles = () => ({
	postsContainer: {
		marginTop: 110
	},
	paper: {
		background:
			"linear-gradient(45deg, rgba(205,158,255,1) 0%, rgba(185,169,255,1) 21%, rgba(133,200,255,1) 77%, rgba(133,200,255,1) 79%)",
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
		minHeight: 200,
		margin: "0 auto",
		maxWidth: 700,
		border: "3px solid #000",
		flexGrow: 1,
		marginBottom: 30
	},
	post: {
		padding: "50px 30px"
	},
	link: {
		color: "#000",
		textDecoration: "none"
	},
	image: {
		width: 150,
		height: 150,
		display: "block",
		margin: "auto",
		paddingTop: 20
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%"
	},
	postInfoContainer: {
		padding: 10
	},
	postInfo: {
		display: "inline-flex",
		width: "100%"
	}
});

class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		};
	}

	render() {
		const { data, classes, totalPostsLoaded, baseUrl } = this.props;

		return (
			<div>
				<Header totalPostsLoaded={totalPostsLoaded} />
				<div className={classes.postsContainer}>
					{data
						? data.map((post, i) => (
								<Paper className={classes.paper} key={i}>
									<a
										href={baseUrl + post.data.permalink}
										target="_blank"
										className={classes.link}
									>
										<Grid
											container
											item
											xs={12}
											className={classes.post}
										>
											<Grid item xs={12} sm={3}>
												<div className={classes.image}>
													<img
														alt={post.data.title}
														className={classes.img}
														src={
															post.data.thumbnail
														}
													/>
												</div>
											</Grid>
											<Grid
												item
												xs={12}
												sm={9}
												className={
													classes.postInfoContainer
												}
											>
												<Grid
													item
													xs
													style={{
														textAlign: "right"
													}}
												>
													<p>
														created:{" "}
														{post.data.created}
													</p>
												</Grid>
												<h3>{post.data.title}</h3>
												<div
													className={classes.postInfo}
												>
													<Grid item xs={12} sm={4}>
														<p>
															by:{" "}
															{post.data.author}
														</p>
													</Grid>
													<Grid item xs={6} sm={4}>
														<p>{post.data.score}</p>
													</Grid>
													<div item xs={6} sm={4}>
														<p>
															{
																post.data
																	.num_comments
															}
														</p>
													</div>
												</div>
											</Grid>
										</Grid>
									</a>
								</Paper>
						  ))
						: null}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Posts);
