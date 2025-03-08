
# Phabricator Comments Extension for Firefox

## Overview

The Phabricator Comments Extension enhances the commenting experience on Phabricator by adding a control in the comment toolbar to insert pre-defined labels. These labels help categorize comments and make them more visually distinct with pastel background colors. This extension is designed for Firefox.

## Features

- **Pre-defined Labels**: Easily insert common comment types like "nitpick," "typo," "suggestion," etc.
- **Blocking Indicator**: Add a tag `IMPORTANT` when a comment is blocking the review.
- **Dynamic UI**: Automatically adds the label selection UI to Phabricator comment textareas.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/phabricator-comments.git
   cd phabricator-comments
   ```

2. **Load the Extension**:
   - Open Firefox and navigate to `about:debugging`.
   - Click "This Firefox" (or "This Nightly" if you're using Firefox Nightly).
   - Click "Load Temporary Add-on..." and select the `manifest.json` file from the cloned repository.

## Usage

1. **Navigate to Phabricator**: Open a Phabricator page where you want to add a comment.
2. **Use the Toolbar**: In the comment textarea, you will see a new label selection dropdown.
3. **Select a Label**: Choose the appropriate label from the dropdown to insert it into your comment with the corresponding style and color.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any issues or feature requests, please open an issue on the GitHub repository.
