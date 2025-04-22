# E-Commerce Product List App

Project Overview
----------------

This is a simple `React` web application that fetches product data from the [Fake Store API](https://fakestoreapi.com/) and displays it in a searchable, sortable, and paginated table. Clicking on a product opens a modal with more detailed information.

### Features

-   Fetch products from a public API

-   Search by title or description

-   Paginate product list

-   View detailed info in a modal

-   Styled with Tailwind CSS

-   Handles loading, error, and empty states


Available Scripts
-----------------

In the project directory, you can run:


Install Dependencies

### `npm install`

Runs the app in the development mode. Open [http://localhost:3000] to view it in your browser.

### `npm start`


To create a production-ready build:

### `npm run build`

### Project Structure

```
src/
├── components/
│   ├── ProductModal.jsx
│   ├── ProductTable.jsx
│   ├── SearchBar.jsx
│   └── Pagination.jsx
├── App.jsx
├── index.js
└── index.css

```

### API Reference

-   `GET /products` --- list all products

-   `GET /products/{id}` --- get product details

### Credits

-   API: [Fake Store API](https://fakestoreapi.com/)

-   UI Framework: [Tailwind CSS](https://tailwindcss.com/)