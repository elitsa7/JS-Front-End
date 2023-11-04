function solve(input) {
  const data = input.map((cityData) => {
    const [town, latitude, longitude] = cityData.split(" | ");
    return {
      town,
      latitude: parseFloat(latitude).toFixed(2),
      longitude: parseFloat(longitude).toFixed(2),
    };
  });

  data.forEach((element) => {
    console.log(element);
  });
}
solve(["Sofia | 42.70 | 23.33", "Beijing | 39.91 | 116.36"]);
