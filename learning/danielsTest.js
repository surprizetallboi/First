// Problem: Given the total square footage and leases for a property, write a function to calculate the occupancy rate over time.
// Occupancy Rate = SUM(Occupied SF) / Total SF

// Dates for which we want to return the occupancy rate
const dates = ["2020-03-31", "2020-06-30", "2020-09-30", "2020-12-31"];

// Total SF of the property
const totalSF = 20000;

const computeOccupancyRateOverTime = (leases, dates, totalSF) => {
  const occupancyRatesByDate = [];
  for (let d = 0; d < dates.length; d++) {
    let sqf = 0;
    for (let l = 0; l < leases.length; l++) {
      if (leases[l].end > dates[d] && leases[l].start < dates[d]) {
        sqf += leases[l].sf;
      }
    }
    occupancyRatesByDate.push([dates[d], sqf / totalSF]);
  }
  // TODO: Your implementation here
  return occupancyRatesByDate;
};
//////////// TEST INPUT ////////////
const leases = [
  { start: "2020-01-01", end: "2022-01-01", sf: 1000, id: "abcd" },
  { start: "2020-05-01", end: "2021-05-01", sf: 5000, id: "dcba" },
  { start: "2020-12-01", end: "2021-12-01", sf: 10000, id: "badc" },
];

//////////// EXPECTED TEST OUTPUT ////////////
// const expectedOutput = [
//   ["2020-03-31", 0.05],
//   ["2020-06-30", 0.3],
//   ["2020-09-30", 0.3],
//   ["2020-12-31", 0.8]
// ];
// Logs actual output in a formatted table to the console
console.table(computeOccupancyRateOverTime(leases, dates, totalSF));
