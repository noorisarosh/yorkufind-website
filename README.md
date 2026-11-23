# YorkUFind — Official Companion Website

Companion website, landing page, and legal policy hub for the **YorkUFind** iOS application (York University student schedule builder and campus companion).

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Optimized for instantaneous one-click deployment on **Vercel** via **GitHub**.

---

## 🔗 Key Public Routes (App Store Ready)

Apple requires dedicated, publicly accessible URLs during App Store Connect submission. All routes are fully rendered and responsive:

| Route | Purpose | App Store Field |
| :--- | :--- | :--- |
| **`/privacy`** | Complete, compliant Privacy Policy explaining on-device local storage, zero credential collection, and zero data selling. | **Privacy Policy URL** |
| **`/terms`** | Terms of Service & EULA covering personal educational license, disclaimer of university affiliation, and academic accuracy guidance. | **Terms of Use / EULA** |
| **`/support`** | Support & Help Center with timetable import FAQ (REM & Plot My Timetable), bug reporting, and email contact (`support@yorkufind.app`). | **Support URL** |
| **`/`** | Modern landing page showcasing the app's features (Smart Timetable builder, Fall/Winter separation, building code decoders, offline mode). | **Marketing URL** |

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
# Visit http://localhost:3000
```

To verify the production build locally:
```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel with GitHub (Step-by-Step)

This repository is already initialized with `git`. Follow these steps to launch it live on the web:

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Repository name: `yorkufind-website` (or any name you prefer).
3. Set visibility to **Public** (or Private).
4. Do **not** initialize with a README or .gitignore (they already exist here).
5. Click **Create repository**.

### Step 2: Push Your Code to GitHub
Run the following commands in the terminal from this project directory (`/Users/saroshnoori/yorkufind-website`):

```bash
git add .
git commit -m "feat: complete YorkUFind website with privacy policy, terms, support, and landing page"
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/yorkufind-website.git
git push -u origin main
```
*(Replace `<YOUR-GITHUB-USERNAME>` with your actual GitHub username)*

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Locate **`yorkufind-website`** in the list of GitHub repositories and click **Import**.
4. Leave all build settings at their defaults (Framework Preset: **Next.js**).
5. Click **Deploy**.
6. Within ~60 seconds, your website will be live at `https://yorkufind-website.vercel.app` (or custom domain).

---

## 📱 App Store Connect URLs Reference

Once deployed to Vercel (e.g. `https://yorkufind.vercel.app` or `https://yorkufind.app`), paste these exact URLs into your App Store Connect app metadata:

- **Privacy Policy URL**: `https://your-domain.vercel.app/privacy`
- **Support URL**: `https://your-domain.vercel.app/support`
- **Marketing URL**: `https://your-domain.vercel.app/`

---

## 🛡️ Student Disclaimer

*YorkUFind is an independent student-created project and is NOT officially affiliated with, endorsed by, or operated by York University. All trademarks, building abbreviations, course codes, and portal names belong to York University.*
