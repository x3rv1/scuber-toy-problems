// Speed Detector
// This function checks a car's speed and assigns demerit points.
// If speed is below 70 km/h, it's "Ok".
// For every 5 km/h above 70, the driver gets 1 point.
// If points exceed 12, the license is suspended.

function speedCheck(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  // If speed is within limit
  if (speed < speedLimit) {
    return "Ok";
  }

  // Calculate demerit points
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  // Check for suspension
  if (points > 12) {
    return "License suspended";
  }

  return `Points: ${points}`;
}

// Example usage:
console.log(speedCheck(65)); // Ok
console.log(speedCheck(80)); // Points: 2
console.log(speedCheck(135)); // License suspended
