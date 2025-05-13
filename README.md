# Mini Property Listing Application

### Project Overview
This is the frontend for a Mini Property Listings Web Application built as part of a 3-Day Role Challenge. The application allows users to view a list of properties, see detailed information about a specific property, and add new properties via a form. The frontend is built using React (Vite), Tailwind CSS, and Material UI (MUI), with a focus on responsive design and clean, reusable code.

### Features

- Property Listings Page: Displays a list of properties with title, location, price, and image using MUI Cards and Tailwind styling.
- Property Details Page: Shows full details of a selected property, accessible via dynamic routing (/property/:id).
- Add New Property Form: A form to submit new property listings with client-side validation, built with MUI components.

### Tools Used
- Frontend Framework: React (Vite for fast setup and development)
- Styling: Tailwind CSS (responsive design), Material UI (Grid, Card, Form components)
- Routing: React Router for navigating between pages
- HTTP Client: Fetch API for making requests to the backend
- Testing: Jest for unit tests, Postman for API validation
- Deployment: Vercel for live deployment

### Setup Instructions (Local)

- Clone the Repository: `git clone https://github.com/blackbox/simple-property-listing-frontend.git/`
- cd simple-property-listing-frontend
- Install Dependencies:`npm install`
- Configure Environment:
    - Create a .env file in the root directory based on .env.example:VITE_API_URL=http://localhost:5000/api
    - Ensure the backend API URL matches your local or deployed backend.
- Run the Application:npm run dev
- The app will be available at http://localhost:5173.
- Build for Production:npm run build


### Usage
- Home Page: Visit / to see a welcome message and navigate to the property listings.
- Property Listings: Go to /properties to view a grid of property cards. Click a card to see details.
- Property Details: Access via /property/:id to view full details of a property.
- Add Property: Navigate to /add-property to submit a new property listing with validation.

### Testing Approach

- Unit Tests: Jest is used to test React components (e.g., PropertyCard renders correctly with props).
- Integration Tests: Tested fetching and rendering data from the backend API.
- Manual Tests: Verified responsiveness on mobile, tablet, and desktop devices.
- API Testing: Used Postman to validate API responses for GET /properties and GET /properties/:id.
- Test Evidence: Screenshots of test results and Postman responses are included in the /tests folder.

### Deployment

- Platform: Vercel
- Live URL: [[Vercel URL here after deployment](https://simple-property-list-frontend.vercel.app/)]
- Steps:
    - Push the code to a public GitHub repository.
    - Connect the repository to Vercel via the Vercel dashboard.
    - Set the environment variable VITE_API_URL in Vercel to point to the backend API.
    - Deploy the app and verify the live URL.
