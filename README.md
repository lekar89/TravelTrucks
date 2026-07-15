# TravelTrucks

TravelTrucks is a frontend web application for a camper rental company. Users can browse available campers, filter the catalog, save favorite vehicles, view detailed information and submit a booking request.

## Features

- Home page with a call-to-action banner
- Camper catalog
- Filtering by location, vehicle type, transmission, engine and equipment
- Pagination with the Load More button
- Favorites saved in localStorage
- Individual camper details page
- Image gallery
- Camper characteristics and vehicle details
- User reviews with a five-star rating
- Booking form with validation
- Success notifications
- Loading and error states
- React Router navigation
- Responsive layout

## Technologies

- React
- Vite
- Redux Toolkit
- React Redux
- React Router
- Axios
- React Hot Toast
- CSS Modules

## API

The project uses the TravelTrucks campers API:

```text
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
```

Available endpoints:

```text
GET /campers
GET /campers/:id
```

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project directory:

```bash
cd testTask
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available commands

Run the development server:

```bash
npm run dev
```

Check the code with ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Routes

```text
/             Home page
/catalog      Camper catalog
/catalog/:id  Camper details page
```
## Live Demo

The application is deployed on Vercel:

https://travel-trucks-zeta-olive.vercel.app/
