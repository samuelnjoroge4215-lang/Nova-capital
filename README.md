# Nova Capital Website (Starter)

This is a deployable Next.js website starter for Nova Capital.

## Deploy to Vercel (easiest from your phone)

1. Download and unzip this folder.
2. Create a GitHub account at https://github.com if you don't already have one.
3. Create a new repository named `nova-capital` (Public or Private).
4. Upload the **contents** of this folder to the repository (not the outer folder).
   The root should show `package.json`, `app/`, `tsconfig.json`, and `next.config.js`.
5. In Vercel, choose **Add New → Project**, import `nova-capital`.
6. Framework should be detected as **Next.js**. Leave build settings as defaults and click **Deploy**.
7. Vercel will give you a public `*.vercel.app` URL.

## Routes
- `/` — marketing homepage
- `/dashboard` — dashboard UI preview

## Important limitations
This is a visual starter/prototype. Authentication, database, actual trading platform/broker integration,
crypto checkout, automated evaluation, wallet verification, and payout processing are NOT implemented.
The plan figures are draft placeholders and must be confirmed before any real customer payments.
Do not advertise simulated accounts as live funded accounts. Publish legal terms, refund policy,
risk disclosures, jurisdiction/eligibility rules, and operational details before accepting funds.

## Local run (optional)
- Install Node.js 20+
- `npm install`
- `npm run dev`
- Visit http://localhost:3000
