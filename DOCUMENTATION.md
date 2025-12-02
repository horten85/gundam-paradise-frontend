# Gundpara - Gundam Paradise Frontend Documentation

## Overview
Gundpara is a modern e-commerce frontend for selling Gundam model kits. Built with React, Vite, TypeScript, and Tailwind CSS, it features a sleek mecha-inspired design with full CRUD operations, authentication, and shopping cart functionality.

## Prerequisites
- Node.js (v16 or higher)
- Backend server running on `http://localhost:3000/`
- MySQL database with the required schema (see Database Schema section)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd gundpara
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Database Schema

The backend should have the following tables:

### Products Table
```sql
CREATE TABLE product (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  grade ENUM('hg', 'mg', 'sd', 'pg', 'rg') NOT NULL,
  link VARCHAR(200)
);
```

### Users Table
```sql
CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  hashed_password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);
```

## Backend API Endpoints

### Authentication
- **POST** `/auth/register` - Register new user
  - Body: `{ username, email, password }`
  - Returns: Success message
  
- **POST** `/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ token: "JWT_TOKEN" }`

### Products
- **GET** `/products` - Get all products
  - Returns: Array of products
  
- **GET** `/products/:id` - Get single product
  - Returns: Product object
  
- **POST** `/products` - Create new product (requires auth)
  - Body: `{ name, grade, price, link }`
  - Returns: Created product
  
- **PUT** `/products/:id` - Update product (requires auth)
  - Body: `{ name, grade, price, link }`
  - Returns: Updated product
  
- **DELETE** `/products/:id` - Delete product (requires auth)
  - Returns: Success message

## Application Features

### 1. Authentication System
- **Register**: New users sign up with username, email, and password
- **Login**: Existing users login with email and password
- **Session Management**: JWT token stored in localStorage
- **Protected Routes**: Automatic redirect to login for unauthenticated users

### 2. Product Management

#### Home Page
- Display all products in a responsive grid
- Filter products by grade (HG, MG, SD, PG, RG)
- Add products to cart
- Edit/delete products (inline actions)
- Floating action button for quick product creation

#### Product Cards
- Product image with fallback to placeholder
- Product name, grade, and price
- Grade badge with color coding
- Action buttons (Add to Cart, Edit, Delete)
- Hover effects with scale and glow

### 3. Shopping Cart
- View all items added to cart
- Remove items from cart
- See order summary with total
- Checkout process (purchases delete products from database)
- Cart persists in localStorage

### 4. Admin Dashboard
- Dedicated admin interface at `/admin`
- Full CRUD operations for products
- Bulk product management
- Same functionality as home page but organized for administration

### 5. Gundam Grades

The app supports five Gundam model grades:
- **HG** (High Grade) - Entry level, good detail
- **MG** (Master Grade) - Advanced detail, internal frame
- **SD** (Super Deformed) - Cute, chibi style
- **PG** (Perfect Grade) - Ultimate detail and size
- **RG** (Real Grade) - Extreme detail in smaller scale

## User Flow

### New User
1. Visit the site → Redirected to `/login`
2. Click "Register here" → Go to `/register`
3. Fill in username, email, password → Submit
4. Redirected to `/login`
5. Login with email and password
6. Access home page

### Shopping Flow
1. Browse products on home page
2. Filter by grade using tabs
3. Click "Add to Cart" on desired products
4. Navigate to cart via navbar
5. Review items and total
6. Click "Checkout" to complete purchase
7. Products are deleted from database
8. Redirected to home page

### Admin Flow
1. Login as admin
2. Navigate to `/admin` via navbar
3. View all products
4. Click "Add Product" or use floating button
5. Fill in product form (name, grade, price, image URL)
6. Click "Create Product"
7. Edit products using edit button on cards
8. Delete products using delete button

## Styling & Design

### Color Scheme
- **Primary**: Deep Gundam blue (hsl(220, 90%, 50%))
- **Accent**: Gundam red (hsl(0, 85%, 55%))
- **Background**: Dark space theme (hsl(220, 25%, 8%))
- **Cards**: Gradient dark panels

### Design Tokens
- Gradients for hero sections and cards
- Glow effects on hover and focus
- Smooth transitions (300ms cubic-bezier)
- Border radius: 0.75rem
- Consistent spacing and typography

### Responsive Design
- Mobile-first approach
- Grid layouts: 1 column (mobile) → 4 columns (desktop)
- Sticky navbar
- Responsive dialogs and forms

## Configuration

### API URL
Update the API URL in `src/services/api.ts`:
```typescript
const API_URL = 'http://localhost:3000';
```

### Cart Storage
Cart data is stored in `localStorage` under the key `cart`

### Auth Token
JWT token is stored in `localStorage` under the key `token`

## Troubleshooting

### Products not loading
- Ensure backend is running on correct port
- Check browser console for CORS errors
- Verify API endpoints are accessible

### Login not working
- Check that backend returns JWT token in response
- Verify token is being saved to localStorage
- Check network tab for API response

### Images not displaying
- Ensure image URLs are accessible
- Placeholder image will show if link is invalid
- Check browser console for CORS issues

### Cart not persisting
- Check localStorage in browser DevTools
- Clear localStorage and try again
- Ensure cart data is valid JSON

## Development Tips

1. **Hot Module Replacement**: Vite provides instant updates during development
2. **TypeScript**: Full type safety across the application
3. **Component Structure**: Reusable components in `src/components/`
4. **API Service**: Centralized API calls in `src/services/api.ts`
5. **Context API**: Authentication state managed globally
6. **Design System**: All styles use semantic tokens from `index.css`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Shadcn/ui** - UI component library
- **Lucide React** - Icon library

## Support & Maintenance

For issues or questions:
1. Check this documentation
2. Verify backend API is running correctly
3. Check browser console for errors
4. Review network requests in DevTools

## License

[Add your license information here]
