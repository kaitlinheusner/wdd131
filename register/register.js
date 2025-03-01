import { participantTemplate, successTemplate } from "./Templates.js";

import(participantTemplate)
let count = 1 

function submitForm(event) {
    event.preventDefault();
    let adultName = document.querySelector("input[name='adult_name']").value;
    let total_fee = totalFees()
    let participantNumber = document.querySelectorAll("[id^=fee]").length;

    let info = {
      name: adultName,
      fee: total_fee,
      count: participantNumber
    };

    let message = successTemplate(info)

    document.getElementById("form").classList.add("hide");
    let summary = document.getElementById("summary");
    summary.classList.remove("hide");
    summary.innerHTML = message;
  }

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  let total = 0
  console.log(feeElements);
  feeElements = [...feeElements];
  feeElements.forEach(feeInput => {
  total += Number(feeInput.value)
  });
  return total
  }

document.getElementById("add").addEventListener("click", function() {
    count++;
    let addButton = document.getElementById("add");
    addButton.insertAdjacentHTML("beforebegin", participantTemplate(count));
});

document.getElementById("form").addEventListener("submit", submitForm);