function getInfo() {
  const submitBtn = document.getElementById("submit");
  const stopIdInput = document.getElementById("stopId");
  const stopNameElement = document.getElementById("stopName");
  const busesListElement = document.getElementById("buses");

  submitBtn.addEventListener("click", fetchBusInfo);

  async function fetchBusInfo() {
    stopNameElement.textContent = "";
    busesListElement.innerHTML = "";

    try {
      const stopId = stopIdInput.value.trim();

      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
      );
      const data = await response.json();

      if (data.name && data.buses) {
        const stopName = data.name;

        stopNameElement.textContent = stopName;

        for (const [busId, time] of Object.entries(data.buses)) {
          const listItem = document.createElement("li");
          listItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
          busesListElement.appendChild(listItem);
        }
      } 
    } catch (err) {
      stopNameElement.textContent = "Error";
      console.error(err);
    }
  }
}
getInfo();
