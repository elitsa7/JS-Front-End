// function calculate(count, type, day) {
//   let price = 0;
//   if (type === "Students") {
//     if (day === "Friday") {
//       price = count * 8.45;
//     } else if (day === "Saturday") {
//       price = count * 9.8;
//     } else if (day === "Sunday") {
//       price = count * 10.46;
//     }
//     if (count >= 30) {
//       price -= price * 0.15;
//     }
//   } else if (type === "Business") {
//     if (count >= 100) {
//       count -= 10;
//     }
//     if (day === "Friday") {
//       price = count * 10.9;
//     } else if (day === "Saturday") {
//       price = count * 15.6;
//     } else if (day === "Sunday") {
//       price = count * 16;
//     }
//   } else if (type === "Regular") {
//     if (day === "Friday") {
//       price = count * 15;
//     } else if (day === "Saturday") {
//       price = count * 20;
//     } else if (day === "Sunday") {
//       price = count * 22.5;
//     }
//     if (count >= 10 && count <= 20) {
//       price -= price * 0.5;
//     }
//   }
//   console.log(`Total price: ${price.toFixed(2)}`);
// }
// calculate(11, "Regular", "Saturday");

function solve(count, type, day) {
  let sum = 0;

  const prices = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16,
    },
    Regular: {
      Friday: 15,
      Saturday: 20,
      Sunday: 22.5,
    },
  };
  
  const cost = prices[type][day];
  sum = count * cost;

  if (type === "Students" && count >= 30) {
    sum -= sum * 0.15;
  } else if (type === "Business" && count >= 100) {
    const payingCount = count - 10;
    sum = payingCount * cost;
  } else if (type === "Regular" && count >= 10 && count <= 20) {
    sum -= sum * 0.05;
  }
  console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(11,
  "Regular",
  "Saturday"
  );
