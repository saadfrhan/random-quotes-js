import { QUOTES_API_KEY } from "./secret";

const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=success';
const API_KEY = QUOTES_API_KEY;

const ERROR_MESSAGE = 'An error occurred while fetching the quote.';

const quoteElement = document.getElementById('quote')!;
const authorElement = document.getElementById('author')!;

interface QuoteResponse {
  quote: string;
  author: string;
}

async function getQuote(): Promise<void> {
  try {
    const response = await fetch(API_URL, {
      headers: { 'X-Api-Key': API_KEY }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const [data]: QuoteResponse[] = await response.json();

    quoteElement.textContent = `"${data.quote}"`;
    authorElement.textContent = `- ${data.author}`;
    
  } catch (error) {
    console.error('Error fetching the quote:', error);
    quoteElement.textContent = ERROR_MESSAGE;
    authorElement.textContent = '';
  }
}

// document.addEventListener('DOMContentLoaded', getQuote);


getQuote()