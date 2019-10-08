import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div
				style={{
					height: "80px",
					position: "fixed",
					top: 0,
					width: "100%",
					backgroundColor: "#000",
					color: "#fff"
				}}
			>
				<span style={{ display: "flex" }}>
					<h2
						style={{
							textAlign: "left",
							padding: "10px 30px 10px 30px",
							width: "50%"
						}}
					>
						/ subreddit
					</h2>
					<p
						style={{
							textAlign: "right",
							padding: "15px 30px 10px",
							width: "50%"
						}}
					>
						Posts Loaded: {this.props.totalPostsLoaded}
					</p>
				</span>
			</div>
		);
	}
}

export default Header;
