# Workouts App 🚀 - An Astro App with React & TypeScript

## 📚 About
Simple and responsive application built with [Astro](https://astro.build/) and the [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) API to display exercises and workout routines. Users can search for exercises and routines, and view the details of each.

The application features a pagination system and exercises can be filtered by categories (work in progress).

It also showcases posts with simulated news, each of which can be viewed in detail. These posts are in Markdown format.

## ⚙️ Technologies
`Astro` `React` `TypeScript` `TailwindCSS` `ExerciseDB` `Markdown`

## 🏗 TODOs
- [ ] Category filtering
- [ ] Favicon
- [ ] Route with training material

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── cardio.svg
│   │   └── icon.svg
│   ├── components
│   │   ├── Header
│   │   │   └── Header.astro
│   │   ├── PostPreview
│   │   │   └── PostPreview.astro
│   │   ├── Shared
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── LinkButton.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── Search.tsx
│   │   │   └── Title.astro
│   │   └── Workout
│   │       ├── CardBadges.tsx
│   │       ├── FilterWorkout.tsx
│   │       ├── WorkoutPreview.tsx
│   │       └── WorkoutsPage.tsx
│   ├── content
│   │   ├── config.ts
│   │   └── posts
│   │       ├── post-1.md
│   │       ├── post-2.md
│   │       ├── post-3.md
│   │       └── post-4.md
│   ├── env.d.ts
│   ├── interfaces
│   │   ├── Post.ts
│   │   └── Workout.ts
│   ├── layouts
│   │   ├── Layout.astro
│   │   └── LayoutMd.astro
│   ├── mocks
│   │   ├── oneWorkout.ts
│   │   └── workouts.ts
│   ├── pages
│   │   ├── index.astro
│   │   ├── posts
│   │   │   └── [...slug].astro
│   │   └── workouts
│   │       ├── [...id].astro
│   │       └── index.astro
│   ├── services
│   │   └── workout.ts
│   └── utils
│       ├── capitalize.ts
│       ├── date.ts
│       └── icon-paths.ts
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `nvm use`                 | Set node version                                 |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `tree -I node_modules`    | Regenerate the directory tree                    |