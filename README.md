# Web4 Community Studio

Web4 Community Studio is a modern, full-stack web application built with Next.js, TypeScript, and Tailwind CSS. It features a comprehensive dashboard designed for community management, content strategy, and task organization. The application leverages the power of Google's Genkit to provide AI-driven insights and content suggestions.

<img width="1911" height="797" alt="Screenshot 2025-10-04 9 45 38 PM" src="https://github.com/user-attachments/assets/f9263ccb-2e44-4957-892a-2d6d49082bf5" />


## Features

-   **Dashboard:** A central hub for all your management needs.
-   **Community Analyzer:** Analyze community trends and gain valuable insights.
-   **Content Board:** Visualize and manage your content pipeline.
-   **Goal Setting:** Define and track your community and content goals.
-   **Content Planner:** Plan your content strategy with an easy-to-use interface.
-   **Task Management:** Organize your workflow and keep track of your tasks.
-   **Content Templates:** Create and manage templates for your content.
-   **AI-Powered Suggestions:** Get AI-driven suggestions for content templates and trend analysis.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **AI:** [Google's Genkit](https://firebase.google.com/docs/genkit)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/studio.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the application in a development environment, use the following command:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project structure is organized as follows:

```
/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   └── dashboard/      # Dashboard pages
│   ├── components/         # Reusable UI components
│   ├── ai/                 # Genkit AI flows and configuration
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions and libraries
├── public/                 # Static assets
└── ...                     # Configuration files
```

## AI Features

The application utilizes Google's Genkit to provide the following AI-powered features:

-   **`analyze-community-trends`**: This flow analyzes community data to identify emerging trends and provide insights to the user.
-   **`content-template-suggestions`**: This flow generates suggestions for content templates based on the analyzed trends and user input.
