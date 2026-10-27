This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Standalone (demo data) vs. against the admin

- **Standalone:** leave `NEXT_PUBLIC_API_URL` unset. The storefront uses the demo catalog in `lib/mock-data.ts` (categories, sizes, colors, products with Unsplash images); filters work, checkout shows a "demo mode" toast instead of calling Stripe.
- **Against the admin** (`../e-commerce-admin`): run the admin, create a store and copy its id, then create `.env` here with
  `NEXT_PUBLIC_API_URL=http://localhost:<adminPort>/api/<storeId>` and run this app on port 3001 (`npm run dev -- -p 3001`), which is the admin's default `FRONTEND_STORE_URL` (Stripe success/cancel redirects).
  Note: the home page shows billboard id `7182f5b7-5a08-4314-a6e2-90d756f321a2` (hard-coded in `app/(routes)/page.tsx`); replace it with one of your billboard ids.


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
