# Reddit Client

A browser-based Reddit client that allows users to display multiple subreddits in customizable lanes. This project uses the Reddit JSON feed to fetch posts from various subreddits, offering a dynamic and responsive layout for viewing and managing content from Reddit.

## Project Overview

This project is part of the [Roadmap.sh Projects](https://roadmap.sh/projects/reddit-client). It provides a hands-on approach to practicing API integration, state management, asynchronous programming, and building a responsive, dynamic user interface.

## Features

- **Customizable Subreddit Lanes**: Users can add lanes by entering the name of a subreddit. Each lane displays posts from the subreddit, including the title and upvote count.
- **Add and Remove Lanes**: Easily add new subreddits or delete existing lanes to customize the view.
- **Live Data Fetching**: Data is fetched in real-time from Reddit’s JSON feed.
- **Lane Controls**: Each lane has a "Refresh" button to reload the subreddit data and an "X" button to delete the lane.
- **Error Handling**: Displays error messages for invalid subreddits or network issues.
- **Persistent State with Local Storage**: Subreddit lanes are saved in local storage, so the layout is preserved even after refreshing the page.

## Demo

This project offers an interactive UI for adding, viewing, and removing subreddit lanes dynamically.

## Project Structure

```
reddit-client/
├── index.html         # Main HTML file with app structure
├── style.css          # CSS file for styling
└── script.js          # JavaScript for handling API requests and dynamic UI
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, etc.) to run this project.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Yashi-Singh-9/Reddit-Client
    ```
   
2. **Navigate to the project folder**:
    ```bash
    cd reddit-client
    ```

3. **Open the project**:
    Open `index.html` in your browser to view the application.

## Usage

1. **Add a Subreddit Lane**:
   - Click the "+" button in the top-right corner.
   - Enter the subreddit name (e.g., `javascript`) in the popup and click "Add Subreddit."
   
2. **Refresh a Subreddit**:
   - Click the "Refresh" button in the lane’s menu to reload the latest posts.

3. **Remove a Lane**:
   - Click the "X" button in the lane header to delete the lane from the view.

4. **Persistent State**:
   - Any added lanes will be saved to local storage, so the next time you open the app, your lanes will be restored.

## Code Overview

### `index.html`
Defines the HTML structure, including:
- Button for adding new subreddits.
- Modal for entering subreddit names.
- A container to display subreddit lanes.

### `style.css`
Contains styles for:
- Main layout and responsive grid for lanes.
- Modal popup for adding subreddits.
- Styling for buttons, lanes, and posts.

### `script.js`
JavaScript functionality, including:
- Event listeners for opening the modal, adding lanes, and deleting lanes.
- `fetchSubredditData`: Fetches subreddit posts using the Reddit JSON feed.
- `addSubredditLane`: Adds a new lane to the page based on user input.
- `removeLane`: Removes a lane from the view and updates local storage.

## API Integration

This project uses the Reddit JSON feed to fetch subreddit data. Example endpoint:

```
https://www.reddit.com/r/{subreddit}.json
```

Each lane fetches its data independently, and errors are handled gracefully if a subreddit is invalid or there’s a network issue.

## Technologies Used

- **HTML**: For the app structure and layout.
- **CSS**: For styling and responsive design.
- **JavaScript**: For asynchronous data fetching, UI interaction, and local storage.

## Future Enhancements

Possible improvements include:
- Adding options to sort posts by votes, date, etc.
- Adding a loading indicator while fetching data.
- Implementing a dark mode toggle.
- Enhancing error handling with more specific messages.

## Project Link

This project is part of the [Roadmap.sh Projects](https://roadmap.sh/projects/reddit-client) series. Check out the roadmap for more project ideas to build and learn.

## License

This project is open source and free to use.
