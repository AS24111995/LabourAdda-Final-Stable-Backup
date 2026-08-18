# LabourAdda

> **Building India's Digital Labour Infrastructure.**

LabourAdda is an AI-assisted, bilingual Progressive Web App prototype that explores how skilled and informal workers can be discovered, evaluated, hired, and supported through transparent digital workflows.

[View Live Prototype](https://labour-adda-final-stable-backup.vercel.app/)

## Project Overview

India's informal workforce often depends on fragmented hiring networks, limited identity portability, unclear wage information, and manual agreements. LabourAdda brings these workflows into a single mobile-first experience designed for workers, contractors, builders, and homeowners.

The prototype demonstrates worker discovery, digital labour profiles, transparent work agreements, wage calculations, AI-assisted job matching, and workforce insights while prioritizing accessibility and trust.

## Prototype Notice

LabourAdda is a portfolio and product-concept prototype. It uses representative or simulated data and workflows for demonstration purposes.

- It does not perform real government, Aadhaar, banking, insurance, or employment verification.
- Payments, settlements, contracts, trust scores, analytics, and worker records shown in the interface are demonstrative.
- AI-assisted outputs should not be treated as verified employment, compliance, or financial decisions.
- A production implementation would require secure authentication, persistent backend services, consent management, regulatory review, and integrations with authorized providers.

## Key Capabilities

### Worker discovery and hiring

- Search workers by trade, location, wage, rating, and availability.
- Review trade information, verification-style indicators, and trust signals.
- Explore contractor-facing booking, wage negotiation, and assignment workflows.

### Digital Labour Passport

- Demonstrates a portable worker profile with a QR-based identity view.
- Presents trade badges, work history, ratings, and trust information in one place.
- Uses prototype-only records and does not claim government-backed verification.

### Digital contracts and wage transparency

- Captures representative daily-work terms such as wages, hours, meals, accommodation, and insurance.
- Calculates sample wage breakdowns, platform fees, and settlement totals.
- Demonstrates printable receipt and contract-oriented experiences.

### AI-assisted matching

- Demonstrates skill-to-job recommendations using Gemini-assisted workflows.
- Helps surface relevant opportunities using job and worker attributes.
- Keeps final hiring decisions with the people using the platform.

### Workforce dashboards and insights

- Worker dashboard for sample jobs, earnings, passport access, and contract history.
- Employer workspace for job posts, workforce rosters, settlements, and ratings.
- Administrative and labour-intelligence views for representative demand, wage, mobility, and verification metrics.

### Accessibility and inclusive design

- Hindi and English interface support.
- Speech-synthesis guidance for users with lower digital literacy.
- Mobile-first layouts, large touch targets, responsive navigation, and PWA-oriented behavior.
- Custom trade illustrations with copyright-safe SVG fallbacks.

## Technology Stack

| Area | Technologies |
| --- | --- |
| Application | Next.js App Router, React, TypeScript |
| Styling | Tailwind CSS, responsive component-based UI |
| AI assistance | Google Gemini API integration pattern |
| Accessibility | Bilingual UI and browser speech synthesis |
| Delivery | Progressive Web App approach and Vercel deployment |
| Configuration | Environment-based API key and application URL setup |

## Project Structure

```text
app/                    Next.js routes and application views
components/             Reusable interface components
hooks/                  Shared React hooks
lib/                    Utilities and supporting logic
public/images/trades/   Trade illustrations and public assets
assets/.aistudio/       AI Studio project assets
```

## Run Locally

### Prerequisites

- Node.js
- npm
- A Gemini API key for AI-assisted functionality

### Setup

1. Clone or download this repository using GitHub's **Code** menu, then open the project directory in a terminal.

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a `.env.local` file using `.env.example` as the template.

   ```env
   GEMINI_API_KEY=your_gemini_api_key
   APP_URL=http://localhost:3000
   ```

4. Start the development server.

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

Never commit `.env.local` or any real API key. The repository's `.gitignore` excludes environment files while retaining the safe `.env.example` template.

## Engineering Focus

This project demonstrates:

- Component-driven development with React and TypeScript.
- Next.js App Router organization.
- Responsive, mobile-first product design.
- Accessible bilingual interaction patterns.
- Environment-based configuration and secret hygiene.
- Honest separation between demonstrative workflows and production integrations.
- Product thinking across worker, employer, administrator, and analytics experiences.

## Current Status

The repository represents a stable recruiter-facing prototype. Application functionality and layout are currently frozen while documentation and project presentation are being refined.

## Author

**Ankur Sahani**  
Entry-Level Full Stack Developer  
[GitHub](https://github.com/AS24111995) · [LinkedIn](https://www.linkedin.com/in/ankur-sahani-277749228/) · [Live Prototype](https://labour-adda-final-stable-backup.vercel.app/)
