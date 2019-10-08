Subreddit is an example of an Infinite Scrolling list of posts.

## Summary

This App can connect to the reddit api endpoint and the correct baseUrl defined in app.js. Instead of rendering all the data at once, the app will display 3 posts on initial load and add posts in increments of 3 as you scroll down. This is meant to increase speed for larger data sets. The total number of posts loaded is displayed in the top right section of the header.

## Yet to be added

-   Jest unit testing.
-   Load post permalinks in an iframe instead of a new tab.
-   Add more custom style and image sizing.
-   Further seperation of logic and view components.
-   Add a button that scrolls to the top.

## Installation Instructions
First, download or clone this repo. 
Run `yarn install` to install package dependencies.
To start run `yarn start` in the terminal.

## Built With

\*[create-react-app](https://reactjs.org/)

\*[material-ui](https://material-ui.com)

\*[reddit-api](https://api.reddit.com)
