# FoodTuck-Marketplace-Builder-Hackathon-2025

## Day 1 Task: Laying the Foundation for Your Marketplace Journey

### Overview
This repository contains my completed task for Day 1 of the Hackathon 2025, where the foundational elements of a general e-commerce marketplace focused on food and restaurant supplies were established. Tasks included outlining business goals, selecting a marketplace type, and designing a data schema with key fields and relationships between entities.

### Task Overview

#### Step 1: Marketplace Type
- *Marketplace Type*: General E-Commerce
- *Primary Purpose*: A platform connecting buyers with high-quality food and restaurant supplies, offering convenience, variety, and affordability.

#### Step 2: Business Goals
- *Problem Solved*:
  - Providing a one-stop solution for food and restaurant supply needs.
  - Addressing functionality, quality, and affordability concerns.
- *Target Audience*:
  - Restaurant owners
  - Chefs and caterers
  - Food truck operators
  - Home-based food entrepreneurs
- *Offered Products and Services*:
  - Restaurant-grade kitchen equipment
  - High-quality ingredients
  - Customizable food packaging
  - Delivery services
  - Subscription-based supply options
- *Unique Selling Points*:
  - Quality assurance
  - Customization flexibility
  - Affordable pricing
  - Broad variety of products
  - Dedicated customer support

#### Step 3: Data Schema
- *Entities in the Marketplace*:
  - *Products*: ID, Name, Description, Price, Stock, Category, Ingredients/Material, Image URL, Customization Options.
  - *Orders*: Order ID, Customer ID, Order Date, Product Details (Product ID, Quantity), Total Price, Status, Payment Method.
  - *Customers*: Customer ID, Name, Email, Phone, Address, Registration Date.
  - *Delivery Zones*: Zone ID, Zone Name, Coverage Area, Assigned Drivers, Delivery Charges.
- *Relationships Between Entities*:
  - Products → Orders: Products can appear in multiple orders.
  - Orders → Customers: An order is placed by one customer.
  - Delivery Zones → Orders: Orders are associated with delivery zones based on the shipping address.

#### Step 4: Diagram
The data schema diagram visualizing the relationships between the entities is available in the images folder.

---

## Day 2: Technical Foundation

### Goal
The objective of Day 2 was to transition from business planning (Day 1) to creating a technical foundation for the FoodTuck Marketplace. This involved designing the system architecture, defining workflows, creating schemas, and specifying API requirements to ensure scalability, efficiency, and user-friendliness.

### Day 2 Deliverables

#### 1. eCommerce Schema
- Developed schemas using Sanity CMS to manage:
  - Product data
  - Customer details
  - Order records

#### 2. Marketplace Technical Foundation
- Designed a high-level system architecture:
  - *Frontend*: Next.js
  - *Backend*: Sanity CMS
  - *Third-Party APIs*: ShipEngine for shipments, Stripe for payments.
- Defined workflows:
  - Product Browsing
  - Order Placement
  - Shipment Tracking
- Identified dependencies to streamline implementation.

#### 3. Third-Party API Documentation
- Defined APIs for:
  - Product management via Sanity CMS
  - Payment processing using Stripe
  - Shipment tracking using ShipEngine
- Included detailed API endpoints, methods, payloads, and sample responses.

### System Architecture

#### Workflow Overview:
1. *Frontend (Next.js)*:
   - A responsive UI for product browsing, cart management, and checkout.
2. *Sanity CMS*:
   - Manages product data, order records, and customer details.
3. *Third-Party APIs*:
   - ShipEngine for shipment tracking.
   - Stripe for secure payment processing.

#### Data Flow:
- User actions on the frontend trigger API calls to Sanity CMS for product and order data.
- Payment and shipment details are handled by Stripe and ShipEngine, respectively, with seamless integration.

### Technical Documentation
Refer to the following PDF files for detailed documentation:
- eCommerce Schema: Detailed schemas for Sanity CMS.
- Marketplace Technical Foundation: High-level architecture and workflows.
- Third-Party API: API documentation for integrations with ShipEngine and Stripe.

---

## GitHub Repository
Access the full project files, schemas, and documentation on GitHub: *FoodTuck Marketplace Builder Hackathon 2025*

---

## Features
- *Dynamic Marketplace Builder*: Add, edit, and manage listings in real-time.
- *Responsive Design*: Optimized for all screen sizes using TailwindCSS.
- *Carousel Integration*: Advanced product showcase using Embla Carousel.
- *Email Communication*: Integrated email functionality via EmailJS.
- *State Management*: Manage application state efficiently with Jotai.
- *Content Management*: Backed by Sanity CMS for dynamic content updates.

---

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FoodTuck-Marketplace-Builder-Hackathon-2025.git
