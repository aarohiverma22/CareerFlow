# CareerFlow 🚀

**A personal job application tracking platform to organize your job search and manage your career opportunities in one place.**

CareerFlow is a web application designed to help job seekers keep track of their job applications, monitor application statuses, manage interview schedules, and stay organized throughout their job search.

Instead of maintaining spreadsheets or scattered notes, users can manage their job search through a centralized dashboard.

> **Project status:** Frontend UI development is nearly complete. Backend development and database integration are planned next.

## ✨ Features

### 📊 Dashboard

- Get an overview of your job search activity.
- View total applications, upcoming interviews, offers, and response rate.
- Monitor your application pipeline by status.
- Check upcoming interviews and recently added applications.

### 💼 Application Management

- Add and manage job applications in one place.
- Record company names, job titles, application dates, locations, salary ranges, job URLs, and notes.
- Track application statuses:
  - Applied
  - Screening
  - Interview
  - Offer
  - Rejected
  - Withdrawn
- View and organize your application history.

### 📅 Interview Calendar

- View scheduled interviews on a calendar.
- Keep track of upcoming interviews and important dates.
- Organize interview-related information alongside job applications.

### 👤 Profile Management

- Maintain personal and professional information.
- Manage skills, experience, preferred work mode, and job preferences.
- Store relevant professional links, such as LinkedIn, GitHub, and portfolio URLs.

### ⚙️ Settings

- Manage application preferences.
- Configure notification preferences.
- Choose light, dark, or system-based appearance.
- Access privacy and security settings.

## 🛠️ Tech Stack

### Frontend

- **React** — UI development
- **TypeScript** — Type safety
- **Vite** — Development server and build tooling
- **Tailwind CSS** — Styling and responsive layouts
- **React Router** — Client-side navigation
- **Formik** — Form management
- **Yup** — Form validation
- **Lucide React** — Icons

### Backend — Planned

- **Node.js** — JavaScript runtime
- **Express.js** — REST API development
- **MongoDB** — Database
- **Mongoose** — MongoDB object modeling
- **JWT authentication** — Potential authentication implementation

The backend stack and integrations will be finalized during backend development.

## 📁 Project Structure

The repository is intended to follow this structure:

```text
CareerFlow/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── componenets/
│   │   ├── modules/
│   │   │   ├── dashboard/
│   │   │   ├── applications/
│   │   │   ├── calendar/
│   │   │   ├── profile/
│   │   │   └── settings/
│   │   ├── routes/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   └── (backend structure to be added)
│
├── .gitignore
└── README.md
```

_Note: The folder names above illustrate the intended organization. Update them to match the actual project structure if any names or paths differ._

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd CareerFlow
```

Replace `<your-repository-url>` with your GitHub repository URL.

### 2. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local development URL in your terminal, usually `http://localhost:5173/`.

Open that URL in your browser.

### 3. Set up the backend

Backend setup instructions will be added after the backend structure, dependencies, environment variables, and API endpoints have been implemented.

## 🔄 How CareerFlow Works

CareerFlow is intended to help individuals manage their own job search.

1. A user discovers a job on an external platform, such as LinkedIn, Naukri, or a company's careers website.
2. The user applies through that external platform.
3. The user records the application in CareerFlow.
4. The user updates the application's status as they receive responses or progress through interviews.
5. The dashboard and calendar help the user monitor their progress and upcoming events.

**CareerFlow is a tracking tool, not a job board.** It does not currently claim to fetch jobs automatically or submit applications on the user's behalf.

## 🗺️ Development Roadmap

- [x] Frontend layout and navigation
- [x] Dashboard UI
- [x] Application management UI
- [x] Calendar UI
- [x] Profile UI
- [x] Settings UI
- [ ] Separate frontend and backend directories
- [ ] Initialize Node.js and Express backend
- [ ] Connect MongoDB
- [ ] Implement authentication and authorization
- [ ] Create application management APIs
- [ ] Persist application data in the database
- [ ] Integrate the frontend with backend APIs
- [ ] Implement interview and calendar data integration
- [ ] Add loading states, error handling, and API validation
- [ ] Test and deploy the complete application

_The roadmap reflects the current development plan; check off items as they are completed._

## 🔐 Security and Privacy

CareerFlow is intended to keep each user's job-search information private.

Planned backend safeguards include:

- User authentication and authorization.
- Access controls to prevent users from accessing other users' records.
- Environment variables for secrets and database credentials.
- Server-side validation of incoming requests.
- Secure handling of authentication credentials.

These protections will depend on the backend implementation and should not be considered fully implemented until verified.

## 🎯 Project Goal

The goal of CareerFlow is to provide a clean, practical, and centralized workspace for managing a job search. By bringing application tracking, interview scheduling, and career information together, it aims to help users stay organized and make better-informed decisions throughout their job search.

## 👩‍💻 Author

**Aarohi Verma**

Computer Science & Engineering Graduate | Software Developer

---

_CareerFlow — Organize your applications. Track your progress. Move your career forward._
