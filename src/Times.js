import {randomInt, hashcode} from './randomInt';

function Times() {
  const questions = [];

  let questionHashcodeSet = new Set();

  for (let i = 0; i < 30; i++) {
    let a, b, questionHashcode;
    do {
      a = randomInt(3, 6);
      b = randomInt(1, 9);
      questionHashcode = hashcode(a, b);
    } while (questionHashcodeSet.has(questionHashcode));
    questionHashcodeSet.add(questionHashcode);
    questions.push(<div key={`q${questionHashcode}`} className="question">{a} × {b} = </div>);
  }

  return (
    <div className="questions-section">
      {questions}
    </div>
  );
}

export default Times;