<div align="center">
  <img src="public/logo.svg" alt="CopilotAI Logo" width="120" />
</div>

<h1 align="center">CopilotAI Landing Page & Operations Portal</h1>

<div align="center">
  <p align="center">
    <strong>The world's most advanced real-time interview assistant.</strong>
  </p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![Stripe](https://img.shields.io/badge/Stripe-Payments-6772E5?logo=stripe)](https://stripe.com/)
  [![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase)](https://firebase.google.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://prisma.io/)
</div>

<br />

## 🌟 Overview

This repository contains the premium, production-ready marketing and operations frontend for **CopilotAI**. Designed to convert high-intent software engineering candidates, this web application acts as the central hub for account management, subscription handling, and software distribution.

The application leverages a modern, cutting-edge "Dark Glassmorphism" aesthetic, utilizing Framer Motion for smooth, physics-based micro-interactions that communicate the premium nature of the underlying desktop software.

## 🚀 Key Features

- **Dynamic Hero & Particle Systems**: Custom animated backgrounds that react to user presence.
- **Integrated Stripe Checkout**: End-to-end payment flows for Pro and Elite tiers, fully wired with webhooks for subscription management.
- **Firebase Authentication Engine**: Seamless Sign-In, Registration, and Password Reset flows integrated directly into the UI via modals.
- **Real-Time Account Dashboard**: Allows users to manage their profile, view past interview sessions (pulled from Firestore), and manage their subscription.
- **OS-Aware Downloads**: Automatically detects the user's operating system (Windows, macOS, Linux) to highlight the correct binary format.
- **Comprehensive Support Portal**: Integrated FAQ accordions, bug reporting, and testimonial submission forms.

## 🏗 Architecture & Tech Stack

This project is built on the **Next.js 14 App Router**, providing optimal server-side rendering and static generation capabilities for maximum SEO performance.

- **Frontend**: React 18, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend/API**: Next.js Server Actions & API Routes (`/api/checkout`).
- **Database Layer**: Dual-architecture supporting both **Firebase Firestore** (for real-time session logs) and **Prisma ORM over PostgreSQL** (for structured relational data).
- **Authentication**: Firebase Client SDK paired with React Context (`AuthContext.tsx`) for global state management.

## 📂 Project Structure

```text
copilotai-landing/
├── app/                  # Next.js App Router (Pages & API)
│   ├── api/              # Backend endpoints (Stripe Webhooks, etc.)
│   ├── download/         # OS-specific download portal
│   ├── features/         # Deep dive into software capabilities
│   └── (other pages)
├── components/           # Reusable React components
│   ├── AuthSection.tsx   # Firebase Authentication Modals
│   ├── AccountSection.tsx# User Dashboard
│   ├── Pricing.tsx       # Stripe Integration
│   └── (UI elements)
├── lib/                  # Utilities and Contexts
│   ├── AuthContext.tsx   # Global Firebase State
│   └── firebase.ts       # Firebase Initialization
├── public/               # Static assets & sample binaries
└── prisma/               # Database schema
```

## 🛠 Getting Started

For detailed instructions on environment variables, Firebase setup, Stripe configuration, and database initialization, please refer to the dedicated [Setup Guide](./setup%20guide.md).

### Quick Start
```bash
git clone https://github.com/your-org/copilotai-landing.git
cd copilotai-landing
npm install
npm run dev
```

## 🤝 Contributing
Internal team members should branch off `main`, ensure all ESLint rules pass (`npm run lint`), and submit a PR for review. Ensure no environment variables are accidentally committed.

## 📄 License
This project and its assets are proprietary. All rights reserved © 2026 CopilotAI.
