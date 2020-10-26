import {randomInt, hashcode, randomPlusMinus} from './randomInt';

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function ThreeDigitPlusMinus() {
  const questions = [];

  let questionHashcodeSet = new Set();

  for (let i = 0; i < 25; i++) {
    let a, b, questionHashcode;
    do {
      a = randomInt(100, 999);
      b = randomInt(100, 999);
      if (b > a) {
        a = a + b;
        b = a - b;
        a = a - b;
      }
      questionHashcode = hashcode(a, b);
    } while (questionHashcodeSet.has(questionHashcode));
    questionHashcodeSet.add(questionHashcode);
    questions.push(
      <div key={`q${questionHashcode}`} className="question">
        {a} {randomPlusMinus()} {b} =
      </div>
    );
  }

  for (let i = 0; i < 5; i++) {
    const a = randomInt(100, 999);
    const b = 1000 - a;
    const questionHashcode = hashcode(a, b);
    questions.push(
      <div key={`q${questionHashcode}`} className="question">
        {a} + {b} =
      </div>
    );
  }

  shuffle(questions);

  return (
    <div className="questions-section">
      {questions}
    </div>
  );
}

export default ThreeDigitPlusMinus;