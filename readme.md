

# NodeJs Prompt CLI

NodeJs Prompt CLI is a package that allows you to print a question to the console and wait for a user's response. It uses Node.js's command-line interface to interact with the user in a simple and efficient manner.

## Features

- Prints any question to the console.
- Waits for the user's response and returns it as a promise.
- Uses a custom writable stream to control the output of the question.

## Installation

```bash
npm install nodejs-prompt-cli
```

## Usage

```typescript
import askQuestion from 'nodejs-prompt-cli';

(async () => {
  const name = await askQuestion("What is your name? ");
  console.log(`Hello ${name}`);
})();
```

## API

### askQuestion(question: string): Promise<string>

Prints the provided question to the console and waits for the user's response.

- `question`: The question to be printed to the console.
- Returns a promise that resolves with the user's response.

## Example

```typescript
import askQuestion from 'nodejs-prompt-cli';

(async () => {
  const age = await askQuestion("How old are you? ");
  console.log(`You are ${age} years old.`);
})();
```

---

This description provides an overview of your package, how to install it, use it, and includes a code example.