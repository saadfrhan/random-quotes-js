# Random Quotes App using vanilla JavaScript

This is a Random Quotes App using vanilla JavaScript. It fetches a quote on every page load and displays it on the screen.

## How to run

```bash
git clone https://github.com/saadfrhan/random-quotes-js
cd random-quotes-js
pnpm i
```

- Register for an API key at [https://api-ninjas.com](https://api-ninjas.com).
- Copy the API key.
- Create `src/secret.ts`

```js
export const QUOTES_API_KEY = 'yourapikey'
```

Now open your browser and go to `http://localhost:5173`.
