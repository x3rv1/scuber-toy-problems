// Student Grade Generator
// This function takes in student marks and returns the corresponding grade.
// Grading scale:
// A > 79, B = 60–79, C = 49–59, D = 40–49, E < 40

function generateGrade(marks) {
  // Validate that marks are within the acceptable range
  if (marks < 0 || marks > 100) {
    return "Invalid input. Marks should be between 0 and 100.";
  }

  // Determine grade based on mark range
  if (marks > 79) {
    return "Grade: A";
  } else if (marks >= 60) {
    return "Grade: B";
  } else if (marks >= 49) {
    return "Grade: C";
  } else if (marks >= 40) {
    return "Grade: D";
  } else {
    return "Grade: E";
  }
}

// Example usage:
console.log(generateGrade(85)); // Grade: A
console.log(generateGrade(73)); // Grade: B
console.log(generateGrade(50)); // Grade: C
console.log(generateGrade(42)); // Grade: D
console.log(generateGrade(30)); // Grade: E
