const display = document.querySelector(".display");
const dataNums = document.querySelectorAll(".dataNum");
const dataOpers = document.querySelectorAll(".dataOper");
const eqBtn = document.querySelector(".eqBtn");
const decimalBtn = document.querySelector(".decimalBtn");
const clearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");

const numAppend = (val) => {
  if (display.innerText === "0") {
    display.innerText = val;
  } else {
    display.innerHTML += val;
  }
};

const deleteNum = () => {
  let current = display.innerText;
  let updated = current.slice(0, -1);

  if (updated === "") {
    display.innerText = "0";
  } else {
    display.innerText = updated;
  }
};

const clear = () => {
  display.innerText = "0";
};

clearBtn.addEventListener("click", () => {
  clear();
});

deleteBtn.addEventListener("click", () => {
  deleteNum();
});

for (let dataNum of dataNums) {
  dataNum.addEventListener("click", () => {
    numAppend(dataNum.innerText);
  });
}

const opAppend = (val) => {
  let current = display.innerText;
  let lastChar = current.charAt(current.length - 1);
  const operators = "+-*/";
  if (operators.includes(lastChar)) {
    display.innerText = current.slice(0, -1) + val;
  } else {
    display.innerText += val;
  }
};

for (let dataOper of dataOpers) {
  dataOper.addEventListener("click", () => {
    opAppend(dataOper.innerText);
  });
}

const decAppend = () => {
  const current = display.innerText;
  const operators = "+-*/";

  let lastOperatorIndex = -1;
  for (let i = current.length - 1; i >= 0; i--) {
    if (operators.includes(current[i])) {
      lastOperatorIndex = i;
      break;
    }
  }

  const currentNum = current.slice(lastOperatorIndex + 1);

  if (!currentNum.includes(".")) {
    display.innerText += ".";
  }
};

decimalBtn.addEventListener("click", () => {
  decAppend();
});

const result = () => {
  let current = display.innerText;
  let lastChar = current.charAt(current.length - 1);
  const operators = "+-*/";

  if (operators.includes(lastChar)) {
    current = current.slice(0, -1);
  }
  let res = eval(current);
  display.innerText = res;
};

eqBtn.addEventListener("click", () => {
  result();
});

window.addEventListener("keydown", (evt) => {
  const key = evt.key;
  if (key >= "0" && key <= "9") {
    numAppend(key);
  } else if ("+-*/".includes(key)) {
    opAppend(key);
  } else if (key === ".") {
    decAppend();
  } else if (key === "Backspace") {
    deleteNum();
  } else if (key === "Escape") {
    clear();
  } else if (key === "Enter" || key === "=") {
    result();
  }
});
