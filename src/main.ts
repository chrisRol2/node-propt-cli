import * as readline from "readline";
import { Writable } from "stream";

class MutableStdout extends Writable {
  constructor(private question: string) {
    super();
  }
  _write(
    chunk: any,
    encoding: BufferEncoding,
    callback: (error?: Error | null) => void
  ) {
    if (chunk.toString().includes(this.question)) {
      process.stdout.write(chunk, encoding);
    }
    callback();
  }
}

/**
 * Ask a question to the user and return the answer
 * @param question The question to ask
 * @returns The answer to the question
 * @example
 * const answer = await askQuestion("What is your name?");
 * console.log(`Hello, ${answer}!`);
 * // Output: What is your name?
 * // (user types "John")
 * // Hello, John!AWS
 */

const askQuestion = (question: string): Promise<string> => {
  const mutableStdout = new MutableStdout(question);
  const rl = readline.createInterface({
    input: process.stdin,
    output: mutableStdout,
    terminal: true,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
};

export { askQuestion };
export default askQuestion;
