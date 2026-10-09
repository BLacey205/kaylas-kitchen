# Kayla's Kitchen: Master Prompt

Use this to rebuild, extend or update the Kayla's Kitchen app in any future session.

## What it is
A free, single-page interactive cooking app (one HTML file, no backend, no paid services) that teaches Southern comfort food. Mobile-first, works in light and dark mode. Progress, saved recipes and the shopping list are kept in the viewer's own browser.

## Current contents (v1)
- **50 recipes**: 20 mains, 15 sides, 7 breads and breakfast, 7 desserts, 1 drink. Each has category, protein, difficulty (Easy / Medium / Project), total time, plan-ahead note, servings, Kayla's tip, linked techniques, linked herbs and spices, scalable ingredients, and steps with optional timers.
- **Recipes tab**: search by dish, ingredient or spice; filter by category and "Easy only"; "Next on your path" card.
- **Recipe page**: servings stepper that rescales amounts, tappable ingredient checklist, steps, skill and spice links, add to shopping list, mark as cooked, save.
- **Cook mode**: one step per screen, progress bar, per-step countdown timer with sound and vibration, mini bar for a timer running on another step, ingredients drawer, keeps the screen awake where allowed.
- **Herbs & Spices tab** (two directions):
  - Start with a seasoning: 21 herbs, spices and blends, each with flavor, how to use it, the proteins it suits best, and every dish that uses it.
  - Start with a protein (chicken, pork, beef, seafood, vegetables and beans, eggs/dairy/breads, sweets): ranked seasonings for that protein, plus each dish with its seasonings.
- **Learn tab**: 4-level path (6 dishes each), 13 technique lessons in plain language with key points, a one-question quiz, and practice recipes.
- **My Kitchen tab**: stats, shopping list grouped by dish with copy button, saved recipes, cooked history.

## v1.1: Cooking methods
- Herbs & Spices tab now has three starting points: a seasoning, a protein, or a cooking method.
- 7 methods: Fried, Baked and Oven-Roasted, Grilled, Smoked, Braised and Smothered, Boiled and Simmered, Skillet-Seared. Each has a plain explanation, temperature guide, 4 best practices, 3 seasoning combinations (linked spices plus extra ingredients), the recipes cooked that way, and other dishes that can be cooked that way.
- Every recipe page has "Ways to cook it": the method its steps use, plus alternate methods with short instructions (22 recipes have swaps).
- Data: `METHODS`, `METHOD_OF` (recipe id → primary method), `ALT` (recipe id → [[method, note]]) in `data4.js`.

## v1.2: Cooking journal
- My Kitchen tab has a Cooking journal: log any meal (one of the 50 recipes or a custom dish) with date, servings, each ingredient and the amount actually used, prep time, cook time, a 1–5 star rating and free-form notes.
- Finishing a recipe in cook mode opens a new entry pre-filled with the recipe's ingredients at the chosen servings and the real elapsed cook time.
- Recipe pages show "Log this meal" and list past journal entries for that dish. Entries can be edited, deleted (two-tap confirm) and copied as text.
- Stored per device in localStorage under `kk.v1` → `journal`.

## Workflow (trigger → generate → assemble → publish → track)
1. **Trigger**: a request to add recipes, lessons, seasonings or features.
2. **Generate**: research dishes on the web for popularity; write recipes in our own words in the data format below.
3. **Assemble**: data lives in `data1.js`, `data2.js`, `data3.js` → combined into `data.js` → injected into `app.html` at `/*DATA*/` → `kaylas-kitchen.html`.
4. **Self-check (definition of done)**: run the validation script (50+ unique ids; every technique, spice and path id resolves; every step is `[text, minutes]`), `node --check` the scripts, and a headless click-through of every tab, a recipe, cook mode, a spice page, each protein view, a quiz and the shopping list with zero errors.
5. **Publish**: republish the same file path so the artifact link stays the same.
6. **Track**: note what changed in this file under a version heading.

## Data format
Recipe: `{id, n:name, c:category, p:protein, d:1-3, t:minutes, s:servings, w:"plan ahead" (optional), k:[technique ids], sp:[spice ids], tip, i:[[qty, unit, item]], st:[[text, timerMinutes]]}`
Spice: `{id, n, t:"Herb"|"Spice"|"Blend", f:flavor, use, best:[protein ids]}`
Technique: `{id, n, eli:plain explanation, pts:[3 points], q:question, o:[3 options], a:answer index}`

## Ideas for v2
Recipe photos, more regional dishes (Hot Brown, Brunswick stew, tomato pie), a meal planner that builds a week and a combined grocery list, and a shareable public link.

## Hosting (public link)
- Live site: https://blacey205.github.io/kaylas-kitchen/ (free GitHub Pages, no account needed to view)
- Repo: github.com/BLacey205/kaylas-kitchen. `index.html` is the live site; `src/` holds `app.html` and `data1–4.js`.
- To publish an update: edit `src/`, run `python3 build.py` (writes `index.html` for the website and `dist/artifact.html` for the Claude artifact), run the self-checks, commit and push to `main`. Pages redeploys in 1–2 minutes.
