# Shopping Website with Cart Functionality

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Demo](#demo)
5. [Folder Structure](#folder-structure)
6. [Installation](#installation)
7. [Styling](#styling)
8. [Usage](#usage)
9. [Contributing](#contributing)
10. [License](#license)

## Project Overview

Building a store website with features such as adding and removing products, a shopping cart, product filtering, and product categorization using React.

## Features

- Show products
- Product filter and search
- Separate shopping cart
- Remove and add to carts
- Calculate the total price
- Storing shopping cart in localstorage

## Technologies Used

- React
- JavaScript(ES6+)
- CSS
- HTML
- Git a GitHub

## Demo

This project is deployed on Netlify. Here's a live demo of the project: [Click here to view ](https://shoppcart-vite-react.netlify.app/)

## Folder Structure

```
STORE-PROJECT/
├─ src/
│  ├─ components/
│  │  ├─ BasketCard.jsx
│  │  ├─ BasketCard.module.css
│  │  ├─ BasketSidebar.jsx
│  │  ├─ BasketSidebar.module.css
│  │  ├─ Card.jsx
│  │  ├─ Card.module.css
│  │  ├─ Loader.jsx
│  │  ├─ Loader.module.css
│  │  ├─ SearchBox.jsx
│  │  ├─ SearchBox.module.css
│  │  ├─ Sidebar.jsx
│  │  └─ Sidebar.module.css
│  ├─ constants/
│  │  └─ list.js
│  ├─ context/
│  │  ├─ CartProvider.jsx
│  │  └─ ProductProvider.jsx
│  ├─ helper/
│  │  └─ helper.js
│  ├─ layout/
│  │  ├─ Layout.jsx
│  │  └─ Layout.module.css
│  ├─ pages/
│  │  ├─ CheckOutPage.jsx
│  │  ├─ CheckOutPage.module.css
│  │  ├─ DetailsPage.jsx
│  │  ├─ DetailsPage.module.css
│  │  ├─ ProductsPage.jsx
│  │  └─ ProductsPage.module.css
│  ├─ services/
│  │  └─ config.js
│  ├─ App.jsx
│  ├─ Global.css
│  └─ main.js
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

## Installation

# Clone the repository:

git clone https://github.com/Amiricoder/Shopping-cart-with-React.git

# Install dependencies:

npm install

# Start the development server:

npm run dev
Open your browser and navigate to http://localhost:5173 to view the app.

## Styling

Styling is done using pure CSS.

## Usage

- Browse the home page to view available products.
- Click "Add to Cart" to add a product to the cart.
- Navigate to the cart page to manage your cart contents.
- Adjust product quantities using the "+" and "-" buttons.
- Click "Remove from Cart" to remove a product from the cart.

## Contributing

Contributions are welcome!  
If you have suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
