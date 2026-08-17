# Simple E‑Commerce MVP

A lightweight, server‑side rendered e‑commerce application built with **Node.js** and **Express**. It includes a product catalog, product detail page, shopping cart, checkout flow, and a basic admin interface for product management.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Admin Panel](#admin-panel)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The MVP demonstrates core e‑commerce concepts:
- Browse products by category.
- View detailed product information.
- Add/remove items from a shopping cart stored in the session.
- Checkout with a simple payment placeholder.
- Admin CRUD for products (protected by basic authentication).

## Features
- **Product Catalog** – Paginated list of products with filtering.
- **Product Detail** – Full description, price, and add‑to‑cart button.
- **Shopping Cart** – Session‑based cart with quantity adjustment.
- **Checkout** – Order confirmation page; no real payment gateway.
- **Admin Dashboard** – Create, read, update, delete products.
- **Responsive UI** – Uses Bootstrap 5 for quick styling.

## Tech Stack
- **Node.js** 18+ (runtime)
- **Express** 4.x (web framework)
- **EJS** (templating engine)
- **SQLite3** (embedded database)
- **Express‑session** (session store)
- **Body‑parser** (request parsing)
- **Bootstrap 5** (CSS framework)
- **Mocha & Chai** (unit tests)

## Installation
```bash
# Clone the repository
git clone https://github.com/your-org/simple-ecommerce-mvp.git
cd simple-ecommerce-mvp

# Install dependencies
npm install

# Initialize the database (creates db.sqlite)
npm run init-db
```

## Running the Application
```bash
# Development mode (auto‑reload)
npm run dev

# Production mode
npm start
```
The app will be available at `http://localhost:3000`.

## API Documentation
The API is RESTful and uses JSON responses for non‑HTML routes.

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/api/products` | List all products | N/A | `200` – Array of products |
| `GET` | `/api/products/:id` | Retrieve a single product | N/A | `200` – Product object |
| `POST` | `/api/products` | Create a new product (admin only) | `{name, description, price, imageUrl}` | `201` – Created product |
| `PUT` | `/api/products/:id` | Update a product (admin only) | `{name, description, price, imageUrl}` | `200` – Updated product |
| `DELETE` | `/api/products/:id` | Delete a product (admin only) | N/A | `204` – No content |
| `POST` | `/api/cart/add` | Add item to cart | `{productId, quantity}` | `200` – Updated cart |
| `POST` | `/api/cart/remove` | Remove item from cart | `{productId}` | `200` – Updated cart |
| `POST` | `/api/checkout` | Process checkout | `{paymentInfo}` | `200` – Order confirmation |

> **Note**: All admin routes require authentication. The admin panel uses HTTP Basic Auth with credentials defined in `config.js`.

## Admin Panel
Access the admin dashboard at `http://localhost:3000/admin`. A login prompt will appear; use the credentials specified in `config.js`.

## Testing
Run the unit tests with:
```bash
npm test
```
The test suite covers product CRUD, cart operations, and checkout logic.

## Deployment
The application can be deployed on any platform that supports Node.js (e.g., Heroku, Render, or a VPS).

### 1. Set Environment Variables
| Variable | Description |
|----------|-------------|
| `PORT` | Port number (default 3000) |
| `SESSION_SECRET` | Secret for session encryption |
| `ADMIN_USER` | Admin username |
| `ADMIN_PASS` | Admin password |

### 2. Build & Start
```bash
# On the server
git clone https://github.com/your-org/simple-ecommerce-mvp.git
cd simple-ecommerce-mvp
npm install --production
npm run init-db
npm start
```

The app will listen on the port defined by `PORT`.

## Contributing
Feel free to open issues or submit pull requests. Please follow the existing code style and include tests for new features.

## License
MIT © 2026 MAULI AI COMPANY
