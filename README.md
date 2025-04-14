# Crowdfunding Platform

A crowdfunding system where recipients can register needed products, suppliers can offer products, and donors can contribute financially.

## Features

- Modern and responsive interface built with React and Material UI
- Three different user flows: Recipients, Suppliers, and Donors
- Registration and signup system for each user type
- Support for products with NCM codes (Brazilian product classification)

## Technologies Used

- React 18
- TypeScript
- Material UI 5
- React Router 6
- Modern CSS with Emotion

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/crowdfunding-platform.git
cd crowdfunding-platform
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

4. Access the application at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── assets/         # Static images and resources
├── components/     # Reusable components
├── contexts/       # React contexts
├── hooks/          # Custom hooks
├── pages/          # Application pages
├── routes/         # Routes configuration
├── services/       # Services and APIs
├── styles/         # Styles and themes
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## User Flows

### Donation Recipient
- Registration with institution/project information
- Listing of needed products with NCM codes
- Tracking of received donations

### Supplier
- Registration of available products with NCM codes
- Inventory and offer management

### Donor
- Viewing campaigns and needed products
- Financial donation system
- Tracking the impact of donations

## In Development

- User authentication
- Administrative dashboard
- Payment method integration
- Reports and statistics

## License

This project is licensed under the MIT License.
