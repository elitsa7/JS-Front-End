function solve() {
  const baseURL = "http://localhost:3030/jsonstore/bus/schedule/";

  let currentStopID = "depot";
  let currentStop = "";
  let nextStop = "";

  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const spanElement = document.querySelector("span.info");

  function depart() {
    const url = baseURL + currentStopID;
    fetch(url)
      .then((request) => request.json())
      .then((data) => loadStop(data));
  }

  function arrive() {
    spanElement.textContent = `Arriving at ${currentStop.name}`;
    currentStopID = currentStop.next;
    disableArriveBtn();
  }

  function loadStop(data) {
    currentStop = data;
    spanElement.textContent = `Next stop ${currentStop.name}`;
    disableDepartBtn();
    currentStopID = currentStop.next;
  }

  function disableDepartBtn() {
    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  function disableArriveBtn() {
    arriveBtn.disabled = true;
    departBtn.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
