function checkSpeed(speed) {
  const speedLimit = 50;

  if (speed <= speedLimit) {
    return "Within limit";
  }

  const penaltyPoints = Math.floor((speed - speedLimit) / 5);

  return `Penalty points: ${penaltyPoints}`;
}

console.log(checkSpeed(45));
console.log(checkSpeed(50));
console.log(checkSpeed(55));
console.log(checkSpeed(70));
console.log(checkSpeed(120));