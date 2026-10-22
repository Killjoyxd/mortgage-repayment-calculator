const form = document.getElementById("form");
const clearBtn = document.getElementById("clear-btn");

const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById("rate");

const amountField = document.getElementById("amount-field");
const termField = document.getElementById("term-field");
const rateField = document.getElementById("rate-field");
const typeField = document.getElementById("type-field");

const inputWrap = document.querySelectorAll(".input-wrap");
const error = document.querySelectorAll(".error-msg");
const symbol = document.querySelectorAll(".symbol");
const emptyEl = document.getElementById("empty");
const filledEl = document.getElementById("filled");
const monthlyEl = document.getElementById("monthly");
const total = document.getElementById("total");

console.log(amountInput.value);
const radioBoxes = document.querySelectorAll(".radio");
const radioInputs = document.querySelectorAll('input[name="type"]');
console.log(amountField.value);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let p = amountInput.value;
  let r = rateInput.value / 100 / 12;
  let n = termInput.value;

  const monthlyPay = function () {
    return (pay = p * ((r * (1 + r) ** n) / ((1 + r) ** n - 1)));
  };

  const intrest = function () {
    return (intr = monthlyPay() * n - p);
  };
  if (amountInput.value === "") {
    error[0].style.display = "block";
    error[0].textContent = "This field is Required";
    symbol[0].style.color = " hsl(0, 0%, 100%)";
    symbol[0].style.background = " hsl(4, 69%, 50%)";
  } else {
    error[0].style.display = "none";
    error[0].textContent = "";
    inputWrap[0].style.borderColor = "hsl(200, 26%, 54%)";

    symbol[0].style.color = " hsl(200, 26%, 54%)";
    symbol[0].style.background = "hsl(202, 86%, 94%) ";
  }
  if (termInput.value === "") {
    error[1].style.display = "block";
    error[1].textContent = "This field is Required";
    inputWrap[1].style.borderColor = "hsl(4, 69%, 50%)";
    symbol[1].style.color = " hsl(0, 0%, 100%)";
    symbol[1].style.background = " hsl(4, 69%, 50%)";
  } else {
    error[1].style.display = "none";
    error[1].textContent = "";
    inputWrap[1].style.borderColor = "hsl(200, 26%, 54%)";
    symbol[1].style.color = " hsl(200, 26%, 54%)";
    symbol[1].style.background = "hsl(202, 86%, 94%) ";
  }
  if (rateInput.value === "") {
    error[2].style.display = "block";
    error[2].textContent = "This field is Required";
    inputWrap[2].style.borderColor = "hsl(4, 69%, 50%)";

    symbol[2].style.color = " hsl(0, 0%, 100%)";
    symbol[2].style.background = " hsl(4, 69%, 50%)";
  } else {
    error[2].style.display = "none";
    error[2].textContent = "";
    inputWrap[2].style.borderColor = "hsl(200, 26%, 54%)";
    symbol[2].style.color = " hsl(200, 26%, 54%)";
    symbol[2].style.background = "hsl(202, 86%, 94%) ";
  }
  if (!radioInputs[0].checked && !radioInputs[1].checked) {
    error[3].style.display = "block";
    error[3].textContent = "This field is Required";
  } else {
    error[3].style.display = "none";
    error[3].textContent = "";
  }

  if (
    error[0].style.display === "none" &&
    error[1].style.display === "none" &&
    error[2].style.display === "none" &&
    error[3].style.display === "none"
  ) {
    emptyEl.style.display = "none";
    filledEl.style.display = "block";
  }

  monthlyEl.textContent = "£" + monthlyPay().toFixed(2);
  total.textContent = "£" + intrest().toFixed(2);
});
const numbersOnly = document.querySelector(".numbersonly");

numbersOnly.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});
const numberOnly = document.querySelector(".numbersonly1");

numberOnly.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
});
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  amountInput.value = "";
  termInput.value = "";
  rateInput.value = "";
  radioInputs[0].checked = false;
  radioInputs[1].checked = false;
  error[0].style.display = "none";
  error[0].textContent = "";
  inputWrap[0].style.borderColor = "";
  symbol[0].style.color = " hsl(200, 26%, 54%)";
  symbol[0].style.background = "hsl(202, 86%, 94%) ";
  error[1].style.display = "none";
  error[1].textContent = "";
  inputWrap[1].style.borderColor = "";
  symbol[1].style.color = " hsl(200, 26%, 54%)";
  symbol[1].style.background = "hsl(202, 86%, 94%) ";
  error[2].style.display = "none";
  error[2].textContent = "";
  inputWrap[2].style.borderColor = "";
  symbol[2].style.color = " hsl(200, 26%, 54%)";
  symbol[2].style.background = "hsl(202, 86%, 94%) ";
  error[3].style.display = "none";
  error[3].textContent = "";
  emptyEl.style.display = "";
  filledEl.style.display = "none";
});

const bigNumber = 1325456573;
const slicedNo = String(bigNumber);
const reslice = slicedNo.slice(0, 5);
const newSlice = Number(reslice);
console.log(newSlice.toLocaleString());
console.log(slicedNo);
console.log(bigNumber.toLocaleString());
