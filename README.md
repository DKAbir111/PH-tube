# PH Tube

PH Tube is a video platform that allows users to explore videos by category, search for specific videos, and view detailed information about each video. The application is built using **HTML**, **Tailwind CSS**, **DaisyUI**, and **JavaScript**. It interacts with the [Programming Hero API](https://openapi.programming-hero.com/api/phero-tube) to fetch video data and categories dynamically.

 # live link: https://dkabir111.github.io/PH-tube/
## Features

- **Dynamic Categories**: Fetches and displays categories from the Programming Hero API. Users can browse videos by category.
- **Search Functionality**: Users can search for videos by title using the search bar.
- **Responsive Design**: The platform is fully responsive, built using Tailwind CSS, ensuring it looks good on all devices.
- **Video Details Modal**: Users can view video details, including a description and thumbnail, in a modal popup.
- **Author Information**: Each video card displays the author's profile image, name, and verification status (if verified).
- **Views Counter**: Displays the number of views for each video.
- **Custom Time Converter**: Converts video upload time into a human-readable format (e.g., "2hrs 10min ago").

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can visit the live demo of the project at: [PH Tube Live](#) (Add your live link here if available)

## Technologies Used

- **HTML5**: Markup language used for structuring the content.
- **Tailwind CSS**: Utility-first CSS framework for building responsive designs quickly.
- **DaisyUI**: Tailwind CSS component library for UI elements.
- **JavaScript (ES6+)**: Used to fetch data from the API and handle dynamic content rendering.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ph-tube.git

# Navigate to the project directory
cd ph-tube

# Open the index.html file in your browser
open index.html

# Alternatively, you may use a local development server such as Live Server for a better development experience.

#############################
# Usage
#############################

# Browsing Categories:
# Upon opening the site, categories are fetched dynamically from the API.
# You can click on any category to view the videos available in that category.

# Searching for Videos:
# Use the search bar at the top to search for videos by title. The results will automatically update as you type.

# Viewing Video Details:
# Click the "Details" button on any video card to open a modal with more detailed information about the selected video.


#############################
# API Reference
#############################

# This project utilizes the Programming Hero API for fetching video categories and video details.

# Categories Endpoint:
# GET https://openapi.programming-hero.com/api/phero-tube/categories
# Fetches all available video categories.

# Category Videos Endpoint:
# GET https://openapi.programming-hero.com/api/phero-tube/category/{category_id}
# Fetches videos based on the selected category.

# Video Details Endpoint:
# GET https://openapi.programming-hero.com/api/phero-tube/video/{video_id}
# Fetches detailed information for a specific video.


#############################
# Contributing
#############################

# Contributions are welcome! Please follow the steps below to contribute to this project:

# 1. Fork the repository.
# 2. Create a new branch:
git checkout -b my-feature-branch

# 3. Make your changes and commit them:
git commit -m 'Add some feature'

# 4. Push to the branch:
git push origin my-feature-branch

# 5. Submit a pull request.

# Please make sure your code follows the existing coding style and passes all linting checks.


#############################
# License
#############################

# This project is licensed under the MIT License.
# See the LICENSE file for details.


#############################
# Saving the README.md file
#############################

# Once you've pasted the content into the terminal:
# 1. Press `CTRL + X` to exit.
# 2. Press `Y` to confirm saving the file.
# 3. Press `Enter` to confirm the file name as `README.md`.

