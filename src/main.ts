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
