# KB Brothers website starter

Next.js storefront starter for Toyota Revo and Fortuner parts.

## Business settings
- Brand: KB Brothers
- Address: AJP Road, Kacha Stop, Rawalpindi, Pakistan
- Current WhatsApp contact (until new number is accessible): 0345 9032565
- Delivery: Local pickup and Pakistan-wide delivery
- Currency: PKR
- Catalogue: Genuine, OEM and aftermarket
- Pricing: Public prices for selected products; quotation-only for others

## Run locally
Requires Node.js 20.9 or newer.
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`
4. `npm run build` to test production build.

## Important
This is a frontend starter only. The catalogue and prices are illustrative. There is no production database, secure admin login, inventory persistence, live checkout, payment processing or courier integration yet. Do not accept live orders or payments based solely on this starter.

## Production work still required
1. Confirm exact registered domain name and DNS control.
2. Deploy the Next.js app to a commercial hosting plan.
3. Provision PostgreSQL and implement products, fitments, suppliers, purchases, inventory movements, orders, quotations, payments, expenses, returns and audit logs.
4. Add secure owner/staff authentication and server-side role permissions.
5. Add real catalogue data, verified fitment, stock and pricing.
6. Integrate a Pakistan-supported payment gateway after merchant onboarding; use hosted/tokenized checkout and signed webhooks. Never store card numbers or CVV.
7. Add COD, bank transfer reconciliation, courier tracking, backups, monitoring, legal policies and security testing.

Copy `.env.example` to `.env.local` and add private credentials only in your own deployment environment. Never commit secrets.
