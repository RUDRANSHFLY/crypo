# Next.js Project - Crypto App  

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  

## 🚀 Getting Started  

First, install dependencies and run the development server:  

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.  

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.  

This project utilizes [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load [Geist](https://vercel.com/font), a modern font family by Vercel.  

---

## 🔧 Upgrading to React 19  

To use **React 19**, install it manually using the `--force` flag to override dependencies:  

```bash
npm install react@next react-dom@next --force
```

or with **yarn**:  

```bash
yarn add react@next react-dom@next --force
```

### 🛠 Debugging Issues  
If you encounter issues related to **React Server Components or Next.js compatibility**, enable debugging mode:  

```bash
export DEBUG=react*
npm run dev
```

This will output debugging logs to help identify potential issues.

---

## 🔧 Development Approach  

### 1️⃣ API Testing  
- Used **Thunder Client** to test API endpoints.  
- Verified responses and ensured the expected data structure.  

### 2️⃣ Minimum Viable Version  
- Built a **basic setup** to fetch and display cryptocurrency data.  
- Defined **TypeScript types** for API responses.  

### 3️⃣ Server Actions for Data Fetching  
- Implemented **server actions** to fetch coin data dynamically.  
- Ensured efficient and optimized data handling.  

### 4️⃣ UI Structure & Initial Screens  
- Developed UI using **Next.js (App Router)** and **Tailwind CSS**.  
- Displayed essential coin data dynamically.  

### 5️⃣ Search & Responsiveness  
- Added **search functionality** using `useSearchParams` for state persistence.  
- Ensured **mobile responsiveness** for a seamless experience.  

### 6️⃣ Loaders & Error Handling  
- Implemented **loading states** for better UX.  
- Added **error-handling mechanisms** to manage API failures.  

### 7️⃣ Final Testing & Debugging  
- Conducted **extensive testing** to fix bugs and handle edge cases.  
- Ensured stability across different devices and browsers.  

---

## 🔗 Live Project  

Check out the live project here: [Crypto App](https://crypo-ebon.vercel.app/)  

---

## 🛠️ Tech Stack & State Management  

- **Fetching Data:** Axios with Next.js server actions.  
- **Search Functionality:** `useSearchParams` from Next.js for state persistence.  
- **State Management:** Familiar with **Zustand**, **Redux Toolkit**, and **Recoil**, but used Next.js params for state management in this project.  

---

## 💡 Feedback & Suggestions  

I’d love to hear your feedback! Please review the project and share your thoughts on improvements or enhancements.  

---

## 📖 Learn More  

To dive deeper into Next.js, check out:  
- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.  
- [Learn Next.js](https://nextjs.org/learn) – An interactive Next.js tutorial.  
- [Next.js GitHub Repo](https://github.com/vercel/next.js) – Explore and contribute!  

---

## 🚀 Deploy on Vercel  

The easiest way to deploy your Next.js app is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).  

For more details, refer to the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).  

---