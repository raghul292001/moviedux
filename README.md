# Moviedux

A React application that allows users to browse and filter a list of movies. The app provides options to filter movies by their rating, genre, and search term.

## Features

- Display a list of movies with their details (title, genre, rating, etc.)
- Filter movies based on:
  - **Rating**: Choose a minimum rating to display movies.
  - **Genre**: Select one or more genres to filter the movies.
  - **Search Term**: Search movies by title.
  
## Technologies Used

- **React**: For building the user interface.
- **React Hooks**: For managing state and side effects.
- **CSS**: For styling the application.

## Setup

To get started with the project, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/raghul292001/moviedux.git
cd moviedux
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

This will open the app in your browser at `http://localhost:3000`.

## How It Works

1. **Movie Data**: The app has a list of movies, each with attributes like title, genre, and rating.
2. **Filters**: 
   - **Rating**: You can filter movies that have a rating higher than the specified value.
   - **Genre**: Select one or more genres to narrow down the movie list.
   - **Search Term**: Use the search box to find movies by their title.
3. **State Management**: React hooks (`useState`, `useEffect`) are used to manage and update the state of the filters and the displayed list of movies.

## Components

- **MovieList**: Displays the filtered list of movies.
- **FilterBar**: Provides controls for filtering movies by rating, genre, and search term.
- **MovieItem**: Displays details for each movie (like title, genre, and rating).

## Example Usage

Once the app is up and running, you can use the following filter controls:

1. **Search Movies**: Enter a movie title in the search box to find matching results.
2. **Filter by Rating**: Select a minimum rating to only show movies with a rating higher than the selected value.
3. **Filter by Genre**: Choose one or more genres from the dropdown to filter the movie list accordingly.
---

Feel free to customize this template with your app-specific details or modify the features based on what you implemented!