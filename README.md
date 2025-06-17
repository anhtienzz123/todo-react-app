# Todo React App

A modern, full-featured Todo List application built with React, TypeScript, and a comprehensive tech stack including Shadcn/UI, Tailwind CSS, Zustand, React Hook Form, TanStack Query, and React Router.

## 🚀 Features

-   ✅ Add new todos with title and description
-   ✏️ Edit existing todos inline
-   🗑️ Delete todos with confirmation
-   ☑️ Mark todos as complete/incomplete
-   📊 View todo statistics (total, active, completed)
-   🎨 Beautiful, responsive UI with Shadcn/UI components
-   ⚡ Fast and smooth user experience
-   🔄 State management with Zustand
-   📝 Form validation with React Hook Form
-   🎯 TypeScript for type safety

## 🛠️ Tech Stack

-   **Frontend Framework**: React 19 with TypeScript
-   **Build Tool**: Vite
-   **UI Components**: Shadcn/UI
-   **Styling**: Tailwind CSS
-   **State Management**: Zustand
-   **Form Handling**: React Hook Form
-   **API Integration**: TanStack Query (ready for integration)
-   **Routing**: React Router
-   **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (Shadcn/UI)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── features/           # Feature-specific components
│       ├── TodoForm.tsx
│       ├── TodoItem.tsx
│       └── TodoList.tsx
├── hooks/                  # Custom React hooks
│   └── useTodos.ts
├── lib/                    # Utility functions and API
│   ├── api.ts
│   └── utils.ts
├── pages/                  # Page components
│   └── TodoPage.tsx
├── store/                  # Zustand store
│   └── todoStore.ts
├── types/                  # TypeScript type definitions
│   └── todo.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🚦 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd todo-react-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

-   `npm run dev` - Start the development server
-   `npm run build` - Build the app for production
-   `npm run preview` - Preview the production build
-   `npm run lint` - Run ESLint for code linting

## 🎨 UI Components

This project uses Shadcn/UI components with Tailwind CSS for styling. The components are:

-   **Button** - Various button variants (default, destructive, outline, etc.)
-   **Card** - Container components for displaying content
-   **Checkbox** - For marking todos as complete
-   **Input** - Text input fields
-   **Textarea** - Multi-line text input for descriptions

## 🗄️ State Management

The app uses Zustand for state management with the following features:

-   **Persistent state** - Todo data persists between sessions
-   **Devtools integration** - Debug state changes in browser dev tools
-   **Type safety** - Full TypeScript support

## 🔗 API Integration

The project is set up for API integration with TanStack Query:

-   Mock API service in `src/lib/api.ts`
-   Custom hooks in `src/hooks/useTodos.ts` ready for TanStack Query integration
-   Error handling and loading states implemented

## 🎯 Future Enhancements

-   [ ] Integration with a backend API
-   [ ] Data persistence with a database
-   [ ] User authentication
-   [ ] Todo categories/tags
-   [ ] Due dates and reminders
-   [ ] Search and filtering
-   [ ] Dark mode support
-   [ ] Drag and drop reordering
-   [ ] Bulk operations
-   [ ] Export/import functionality

## 🧪 Testing

This project is set up for testing with:

-   Unit tests for components
-   Integration tests for user flows
-   E2E tests with Playwright (can be added)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   [Shadcn/UI](https://ui.shadcn.com/) for the beautiful UI components
-   [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
-   [Zustand](https://zustand-demo.pmnd.rs/) for simple state management
-   [React Hook Form](https://react-hook-form.com/) for efficient form handling
-   [TanStack Query](https://tanstack.com/query) for server state management
-   [Lucide](https://lucide.dev/) for the icon library
