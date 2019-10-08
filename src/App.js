import React, { Component } from "react";
import "./App.css";
import Posts from "./core/components/posts";
import axios from "axios";

const API = "https://api.reddit.com/r/pics/hot.json";
const baseUrl = "https://reddit.com";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading: false,
			error: null,
			page: 0,
			posts: []
		};
	}

	async componentDidMount() {
		this.setState({ isLoading: true });
		try {
			const result = await axios.get(API);
			this.setState(
				{
					data: result.data.data.children,
					isLoading: false,
					page: 0
				},
				function() {
					this.addPosts(0);
				}
			);
		} catch (error) {
			this.setState({
				error,
				isLoading: false
			});
		}

		this.refs.detectScroll.addEventListener("scroll", () => {
			if (
				this.refs.detectScroll.scrollTop +
					this.refs.detectScroll.clientHeight >=
				this.refs.detectScroll.scrollHeight
			) {
				this.onScrollHandler();
			}
		});
	}

	addPosts = page => {
		const newPosts = [];
		for (
			var i = page * 4, il = i + 4;
			i < il && i < this.state.data.length;
			i++
		) {
			newPosts.push(this.state.data[i]);
		}
		this.setState({
			posts: [...this.state.posts, ...newPosts]
		});
	};

	onScrollHandler = () => {
		this.setState(
			{
				page: this.state.page + 1
			},
			() => {
				this.addPosts(this.state.page);
			}
		);
	};

	render() {
		return (
			<div
				className="App"
				ref="detectScroll"
				style={{
					height: "100vh",
					overflow: "auto"
				}}
			>
				<Posts
					data={this.state.posts}
					totalPostsLoaded={this.state.posts.length}
					baseUrl={baseUrl}
				/>
				<p style={{ textAlign: "center" }}>
					{this.state.isLoading ? "Loading ..." : "Scroll to Bottom"}
				</p>
			</div>
		);
	}
}

export default App;
