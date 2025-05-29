# Store Management

A full-stack MERN (MongoDB, Express, React, Node.js) web application for managing products in a store. Users can create, view, update, and delete products with a modern UI built using Chakra UI.

## Features

- View all products in a responsive grid
- Add new products with name, price, and image URL
- Edit existing products
- Delete products
- Instant UI updates (no page reloads)
- Light/Dark mode toggle

## Tech Stack

- **Frontend:** React, Vite, Chakra UI, Zustand, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Dev Tools:** ESLint, Nodemon, dotenv

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/yourusername/store_managment.git
cd store_managment
```

### Backend Setup

1. Install dependencies:

    ```sh
    npm install
    ```

2. Configure environment variables in `.env`:

    ```
    PORT=5000
    ```

3. Start the backend server:

    ```sh
    npm run dev
    ```

    The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Go to the frontend directory:

    ```sh
    cd frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the frontend development server:

    ```sh
    npm run dev
    ```

    The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).

## Folder Structure

```
store_managment/
  backend/
    config/
    controllers/
    models/
    routes/
    server.js
  frontend/
    public/
    src/
      assets/
      components/
      pages/
      store/
      App.jsx
      main.jsx
    index.html
    vite.config.js
  .env
  package.json
```

## API Endpoints

- `GET /api/products` — Get all products
- `POST /api/products` — Create a new product
- `GET /api/products/:id` — Get a single product
- `PUT /api/products/:id` — Update a product
- `DELETE /api/products/:id` — Delete a product

## License

This project is licensed under the ISC License.

---

**Made with ❤️ using MERN stack**
**Thank you for checking my project, Jabez Shiferaw**