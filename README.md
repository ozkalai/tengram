# Real-Time Collaboration with Ably, Next.js, and Tailwind CSS

This application allows participants to work together to create a Tengram, with a focus on real-time collaboration. A Tengram is a geometric design formed by the combination of nine different triangle shapes.

## Technology Stack

This application was developed using the following technology stack:

- [Next.js](https://nextjs.org/): A React-based web application framework. It enables you to build and manage your pages quickly.
- [Tailwind CSS](https://tailwindcss.com/): A fast and customizable CSS framework. It allows you to create your application's styles quickly.
- [Ably](https://ably.com/): A real-time data communication platform that enables participants to receive and share instant updates.

## How the Application Works

To run the application in a local development environment, use the following commands:

   ```bash
   npm install
   npm run dev
   ```
This will start your Next.js application and run the development server.

Create an Ably account and obtain your API keys.

Set your Ably API key in a single .env file as follows:

```
NEXT_PUBLIC_ABLY_API_KEY=<Your Ably API Key>
```

Participants can use the application to collaboratively create a Tengram. Any changes made are reflected to other participants in real-time.
