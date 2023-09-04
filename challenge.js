// Good Luck! You got this 💪🏾
// Write your code here.



                                                                                         function calculatePoints(wins, draws, losses) {
  const winPoints = wins * 3;
  const drawPoints = draws * 1;
  const totalPoints = winPoints + drawPoints;
  
  console.log("Total points: " + totalPoints);
  return totalPoints;
}

// Example usage:
const totalPoints = calculatePoints(5, 2, 3); // Output: 17

