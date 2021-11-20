//const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);
// THESE DO THE SAME THING
const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
if (plantNeedsWater === true) {
  console.log("Time to water the plant");
} else {
  console.log("No water needed, check back tomorrow");
}
plantNeedsWater("Wednesday");
