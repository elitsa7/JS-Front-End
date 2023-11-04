function solve(input) {
  const parking = new Set();
  input.forEach((element) => {
    const [command, number] = element.split(", ");
    if (command === "IN") {
      parking.add(number);
    } else if (command === "OUT") {
      parking.delete(number);
    }
  });
  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    Array.from(parking).sort().forEach((number) => console.log(number));
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
