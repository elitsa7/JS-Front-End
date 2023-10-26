function calculateDistanceValidation(x1, y1, x2, y2) {
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  function numberIsInteger(value) {
    return Number.isInteger(value);
  }

  const distance1 = calculateDistance(x1, y1, 0, 0);
  const distance2 = calculateDistance(x2, y2, 0, 0);
  const distance3 = calculateDistance(x1, y1, x2, y2);

  if (numberIsInteger(distance1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (numberIsInteger(distance2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (numberIsInteger(distance3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
calculateDistanceValidation(3, 0, 0, 4);
calculateDistanceValidation(2, 1, 1, 1);
