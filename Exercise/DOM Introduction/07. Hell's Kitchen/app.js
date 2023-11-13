function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = JSON.parse(document.querySelector("#inputs textarea").value);
    let winner = findBestRestaurant(input);
    document.querySelector("#bestRestaurant>p").textContent =
      getBestRestaurant(winner).trim();
    document.querySelector("#workers>p").textContent = getBestWorker(
      winner.workers
    ).trim();

    function getBestRestaurant(winner) {
      return `Name: ${winner.name} Average Salary: ${winner.avgSalary.toFixed(
        2
      )} Best Salary: ${winner.maxSalary.toFixed(2)}`;
    }

    function getBestWorker(workers) {
      return workers
        .map((w) => `Name: ${w.worker} With Salary: ${w.salary}`)
        .join(" ");
    }
    
    function findBestRestaurant(input) {
      let resultRestaurants = input.reduce((acc, curr) => {
        let [restaurant, ...workers] = curr.split(/(?: - )|(?:, )/g);
        workers = workers.map((w) => {
          let [worker, salary] = w.split(" ");
          return {
            worker: worker,
            salary: +salary,
          };
        });

        let foundRestaurant = acc.find((r) => r.name === restaurant);

        if (foundRestaurant) {
          foundRestaurant.workers = foundRestaurant.workers.concat(workers);
        } else {
          acc.push({
            name: restaurant,
            workers: workers,
          });
        }

        return acc;
      }, []);

      resultRestaurants.forEach((element, index) => {
        element.inputOrder = index;
        element.avgSalary =
          element.workers.reduce((acc, el) => acc + el.salary, 0) /
          element.workers.length;
        element.maxSalary = Math.max(
          ...element.workers.map((worker) => worker.salary)
        );
      });

      resultRestaurants.sort(
        (a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder
      );
      let bestRestaurant = resultRestaurants[0];
      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

      return bestRestaurant;
    }
  }
}
