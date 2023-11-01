function loadingBar(number) {
  if (number === 100) {
    console.log("100% [%%%%%%%%%%]");
  } else {
    let bar = new Array(10).fill(".");
    for (let index = 0; index < number / 10; index++) {
      bar[index] = "%";
    }
    const loadingBar = "[" + bar.join("") + "]";
    console.log(`${number}% ${loadingBar}\nStill loading...`);
  }
}
loadingBar(30);
loadingBar(50);
