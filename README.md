# Todo Dashboard

A modern Todo management application built with Next.js and Chakra UI. This application provides an intuitive interface for managing tasks with features like priority levels, assignees, and different view modes.

## 🚀 Features

- **Multiple View Modes**: Switch between grid and table views
- **User Assignment**: Assign tasks to multiple users
- **Modern UI**: Clean interface with Chakra UI components

## 📋 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [Chakra UI v3](https://chakra-ui.com/)
- **Styling**: CSS Modules + Chakra UI
- **Icons**: Iconsax React, React Icons
- **Theming**: next-themes
- **Language**: TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IchaCoder/todo-dashboard.git
   cd todo-dashboard
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000/department/todo](http://localhost:3000/department/todo) with your browser to see the application.

## 📁 Project Structure

```
todo-dashboard/
├── app/                  # Next.js App Router
│   ├── department/
│   │   └── todo/         # Todo section
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx        # Root layout with sidebar
│   ├── not-found.tsx
│   └── page.tsx          # Home page with redirect
├── components/
│   ├── sidebar/          # Sidebar navigation
│   │   ├── data.ts
│   │   └── sidebar.tsx
│   ├── todo/             # Todo components
│   │   ├── todo-grid-view.tsx
│   │   ├── todo-item-card.tsx
│   │   ├── todo-search-bar.tsx
│   │   ├── todo-table-view.tsx
│   │   ├── todo-tabs.tsx
│   │   └── TodoHeader.tsx
│   ├── ui/               # UI components
│   │   ├── color-mode.tsx
│   │   ├── provider.tsx
│   │   ├── Switch.module.css
│   │   ├── Switch.tsx
│   │   ├── toaster.tsx
│   │   └── tooltip.tsx
│   ├── header-search.tsx
│   ├── header.tsx
│   └── table-avatar-group.tsx
├── public/               # Static files
│   └── images/           # Images and icons
├── utils/
│   ├── data.ts           # Mock data
│   └── types.ts          # TypeScript types
├── .eslintrc.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 📱 Application Routes

- `/` - Home page (redirects to Todo section)
- `/department/todo` - Todo management dashboard
- All other routes show a "Page Not Available" message

## 💻 Development

### Key Components

- **Sidebar**: Navigation menu for the application
- **TodoHeader**: Header with controls for the Todo section
- **TodoTabs**: Switch between grid and table views
- **TodoSearchBar**: Search and filter todo items
- **TodoGridView/TodoTableView**: Different display modes for tasks

### Data Structure

Todo items have the following properties:

- ID
- Name
- Start and End Dates
- Assignees (multiple users)
- Priority (medium, important, urgent)
- Status (todo, in-progress, complete)

---

Built with ❤️ by [IchaCoder](https://github.com/IchaCoder)
