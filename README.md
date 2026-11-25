# Rondo

A single-device, manual football teammate game for iPhone and other modern browsers. React, TypeScript and Vite; no account or backend required.

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. `npm test` runs the game logic tests; `npm run build` validates the dataset, checks TypeScript and builds to `dist/`. `npm run preview` serves the production build locally. Service workers need HTTPS or localhost; testing from a phone over plain local-network HTTP will not establish offline support.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch, including the lockfile and original JSON.
2. In repository Settings → Pages, select **GitHub Actions** as the build and deployment source.
3. The included workflow validates, tests and builds, then publishes the `dist` artifact. It sets the base path to the repository name. For a root user/organization site (`username.github.io`), change `BASE_PATH` in the workflow to `/`.
4. Open the Pages URL in Safari on the iPhone, use Share → Add to Home Screen, and launch it online. Wait for the offline-ready indicator before trying airplane mode. External evidence websites still require connectivity.

No deployment is performed by this project automatically until a repository is configured and the workflow runs. App updates prompt before reloading. Browser storage and cached assets can be cleared by the operating system; they are not a permanent backup.

## Dataset and game rules

The original `football_teammates_30_research_draft.json` is imported unchanged. Its schema remains independent of the interface. Each session saves a snapshot of its rounds, order, hint/reveal states, decisions, scores and timer state in local storage; the private preview is never saved. A running timer uses a deadline, so time continues through an interruption; navigating away pauses it. Completing a session saves a local history of up to ten completed games.

The data is a research draft with incomplete validation, repeated roster bridges and answers, preliminary difficulty ratings and non-exhaustive alternatives. Evidence dates are witnesses, not full career overlaps. Structural validation cannot verify historical facts. Accept other independently verified answers and reject any displayed player as their own teammate. Rounds 13 and 14 contain source hints that misclassify FC Barcelona as an international connection; they are retained and visibly flagged in the game.

Hold the GM preview control for 0.6 seconds to open the answer sheet; hide it with one tap. It also closes on backgrounding or round navigation. This is spoiler protection, not access control: anyone looking at the shared screen can see it. Official reveal asks for confirmation and stops the timer without awarding points. Choose a decision and, when scoring is enabled, award points manually. Awards can be undone via “No award”; scoreboard adjustments are separate.

Actual iPhone Home Screen installation, iOS interruption, offline launch and touch behavior require device testing. Desktop/browser checks do not establish iOS compatibility.
