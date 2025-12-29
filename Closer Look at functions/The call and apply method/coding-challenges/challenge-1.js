const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  registerNewAnswer() {
    let result = prompt(
      `${this.question}\n ${this.options.join("\n")}\n(write option number)`
    );

    // convert to number
    let resultInNumber = parseInt(result);
    console.log(resultInNumber);

    if (resultInNumber > 4 || resultInNumber < 0) {
      alert("Invalid number. choose number between 0 to 3 ");
      return;
    }
    let valueOnThatIndex = this.answers[resultInNumber];
    console.log("value on that index", valueOnThatIndex);
    console.log("increamentValueonThatIndex", valueOnThatIndex + 1);
    this.answers[resultInNumber] = valueOnThatIndex + 1;

    console.log(this.answers);
    this.displayResults();
  },

  displayResults(type = "array") {
    if (type === "string") {
      const pollResult = `Poll results are ${this.answers.join(", ")}`;
      console.log(pollResult);
    } else if (type === "array") {
      console.log(this.answers);
    }
  },
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

console.log(poll);
