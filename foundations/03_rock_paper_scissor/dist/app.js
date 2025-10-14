msg = document.querySelector("#msg");
rock = document.querySelector("#rock");
paper = document.querySelector("#paper");
scissor = document.querySelector("#scissor");
us = document.querySelector("#userScore");
cs = document.querySelector("#compScore");

let userScore = 0;
let compScore = 0;

const userWin = () => {
  msg.classList.remove("bg-[#A376A2]");
  msg.classList.remove("bg-red-400");
  msg.classList.remove("bg-slate-400");
  msg.classList.add("bg-green-400");
  userScore++;
  us.innerText = userScore;
};

const compWin = () => {
  msg.classList.remove("bg-[#A376A2]");
  msg.classList.remove("bg-green-400");
  msg.classList.remove("bg-slate-400");
  msg.classList.add("bg-red-400");
  compScore++;
  cs.innerText = compScore;
};

const draw = () => {
  msg.classList.remove("bg-[#A376A2]");
  msg.classList.remove("bg-red-400");
  msg.classList.remove("bg-green-400");
  msg.classList.add("bg-slate-400");
  msg.innerText = "DRAW!";
};

const result = (res) => {
  if (res === "rock") {
    msg.innerText = "ROCK BEATS SCISSOR";
  } else if (res === "paper") {
    msg.innerText = "PAPER BEATS ROCK";
  } else if (res === "scissor") {
    msg.innerText = "SCISSOR BEATS PAPER";
  }
};

const comp = () => {
  const options = ["rock", "paper", "scissor"];
  const randomInx = Math.floor(Math.random() * 3);
  console.log(options[randomInx]);
  return options[randomInx];
};

const play = (userChoice) => {
  const compChoice = comp();
  if (userChoice === "rock" && compChoice === "scissor") {
    userWin();
    let res = "rock";
    result(res);
  } else if (userChoice === "paper" && compChoice === "rock") {
    userWin();
    let res = "paper";
    result(res);
  } else if (userChoice === "scissor" && compChoice === "paper") {
    userWin();
    let res = "scissor";
    result(res);
  } else if (userChoice === "paper" && compChoice === "scissor") {
    compWin();
    let res = "scissor";
    result(res);
  } else if (userChoice === "rock" && compChoice === "paper") {
    compWin();
    let res = "paper";
    result(res);
  } else if (userChoice === "scissor" && compChoice === "rock") {
    compWin();
    let res = "rock";
    result(res);
  } else {
    draw();
  }
};

rock.addEventListener("click", () => {
  const userChoice = "rock";
  play(userChoice);
});

paper.addEventListener("click", () => {
  const userChoice = "paper";
  play(userChoice);
});

scissor.addEventListener("click", () => {
  const userChoice = "scissor";
  play(userChoice);
});
