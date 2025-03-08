
# Phabricator Comments Extension

## Overview

The Phabricator Comments Extension enhances the commenting experience on Phabricator by adding a control in the comment toolbar to insert pre-defined labels. These labels help categorize comments and make them more visually distinct with pastel background colors. The extension is available for Firefox, Chrome, and Safari browsers.

## Features

- **Pre-defined Labels**: Easily insert common comment types like "nitpick," "typo," "suggestion," etc.
- **Blocking Indicator**: Add a tag `IMPORTANT` when a comment is blocking the review.
- **Dynamic UI**: Automatically adds the label selection UI to Phabricator comment textareas.

## Installation

### Firefox

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/phabricator-comments.git
   cd phabricator-comments
   ```

2. **Load the Extension**:
   - Open Firefox and navigate to `about:debugging`.
   - Click "This Firefox" (or "This Nightly" if you're using Firefox Nightly).
   - Click "Load Temporary Add-on..." and select the `manifest.json` file from the cloned repository.

### Chrome

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/phabricator-comments.git
   cd phabricator-comments
   ```

2. **Load the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top right.
   - Click "Load unpacked" and select the cloned repository directory.

### Safari (in progress)

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/phabricator-comments.git
   cd phabricator-comments
   ```

2. **Open the Project in Xcode**:
   - Open Xcode and select "Open a project or file."
   - Navigate to the cloned repository and open the `.xcodeproj` file.

3. **Build the Extension**:
   - Select the Safari extension target in Xcode.
   - Click the "Run" button to build and run the extension in Safari.

4. **Enable the Extension**:
   - In Safari, go to `Safari > Preferences > Extensions`.
   - Enable the "Phabricator Comments" extension.

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
