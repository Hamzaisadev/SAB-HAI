
# My ECOM WEB

**My ECOM WEB** is a modern e-commerce website template designed for building professional online stores. This is a **frontend-only project**, meaning it focuses entirely on the visual and interactive elements of an e-commerce website without any backend integration. Built with HTML, CSS, and JavaScript, this project offers flexibility to customize and extend for any online shop's frontend needs.

**Live Demo**: [My ECOM WEB](https://myfirstecommerceweb.netlify.app/)

![Homepage](./screenshots/homepage.png)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [Dependencies](#dependencies)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Features
- **Frontend Only**: This project focuses solely on the frontend UI/UX, with no backend or database integration.
- **Responsive Design**: The website automatically adapts to any screen size, ensuring a smooth user experience on desktops, tablets, and mobile devices.
- **Interactive Modals**: Includes a newsletter subscription modal and other popups for better engagement with users.
- **Toast Notifications**: Real-time notifications that simulate product purchases and display to users.
- **Mobile-Friendly Navigation**: A well-designed mobile navigation menu with collapsible categories and easy access to essential links.
- **Accordion Menus**: Collapsible accordion menus for organizing content such as product categories and FAQs.
- **Multi-Currency and Language Support**: Options to switch between different currencies and languages for global user support.
- **Category Dropdowns**: Detailed dropdown panels for showcasing product categories such as electronics, men's fashion, and women's fashion.

## Installation

### Prerequisites
Ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Safari, etc.)
- Git (optional, if you want to clone the project)

### Steps
1. Clone the repository:

    ```bash
    git clone <https://github.com/Hamzaisadev/SAB-HAI.github.io/tree/main>
    ```

2. Navigate to the project directory:

    ```bash
    cd my-ecom-web
    ```

3. Open the `index.html` file in your browser:

    ```bash
    open index.html
   

Alternatively, you can deploy the website on a static hosting platform like Netlify or GitHub Pages.

## Usage
This project can be used as a base template for an e-commerce website or adapted for other types of websites. Since it's a frontend-only project, all interactions are simulated without real data or backend services.

- **Newsletter Modal**: A modal that prompts users to subscribe to a newsletter. This can be customized by modifying the HTML and CSS in the `index.html` and `styles.css` files.
  
  ![Newsletter Modal](./screenshots/newsletter_modal.png)

- **Toast Notifications**: A notification that displays whenever a product is purchased. The notification can be customized in `script.js` to reflect real-time data.
  
  ![Toast Notification](./screenshots/toast_notification.png)

- **Mobile Navigation**: The mobile navigation includes expandable menus for easy access to categories and other pages.

  ![Mobile Navigation](./screenshots/mobile_navigation.png)

- **Search Functionality**: The header includes a search bar where users can search for products.
  
  ![Search Bar](./screenshots/search_bar.png)

## Configuration
You can customize the website by modifying the following files:

- **HTML (index.html)**: Modify the structure of the pages, add or remove elements, and customize modals, notifications, and menus.
- **CSS (styles.css)**: Change colors, fonts, and layouts. The CSS file includes custom properties for typography, colors, and transitions, making it easy to update styles globally.
  
  ```css
  :root {
    --salmon-pink: #ff8f9c;
    --eerie-black: hsl(0, 0%, 13%);
    --white: hsl(0, 100%, 100%);
    /* More color variables */
  }
  ```

- **JavaScript (script.js)**: All interactive features such as modal triggers, notification handling, and navigation toggles are managed through JavaScript. Functions are organized by feature, making it easy to adjust or extend functionality.

  ```javascript
  const modalCloseFunc = function () {
    modal.classList.add('closed');
  };
  ```

## Screenshots

### Homepage
![Homepage](./screenshots/homepage.png)

### Newsletter Modal
![Newsletter Modal](./screenshots/newsletter_modal.png)

### Toast Notification
![Toast Notification](./screenshots/toast_notification.png)

### Mobile Navigation
![Mobile Navigation](./screenshots/mobile_navigation.png)

## Dependencies
The following dependencies are used in this project:
- **HTML5 and CSS3**: For the structure and styling of the website.
- **JavaScript (ES6)**: For interactivity and dynamic features.
- **[Ionicons](https://ionicons.com/)**: Icons used throughout the website (e.g., in the header, modals, and notifications).
- **Google Fonts - Poppins**: The font used for typography.

## Examples
- **Toast Notifications**: Toast notifications simulate product purchases with a sliding effect that appears and disappears after a set interval.
- **Newsletter Modal**: The modal prompts users to subscribe to a newsletter and can be closed via the 'X' button or by clicking outside the modal.

## Troubleshooting
- If the modal or navigation menus are not working, check for any console errors in your browser’s developer tools. Ensure that `script.js` is properly linked in the `index.html`.
- If styles are not being applied, verify that the `styles.css` file is properly linked and there are no syntax errors.

## Contributors
- **Code with Sadee** - Primary developer ([GitHub](https://github.com/codewithsadee))
- **You** - Contributions are welcome! Feel free to fork the repository and make changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
