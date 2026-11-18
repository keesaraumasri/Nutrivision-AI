// Educational estimate only. Needs height, activity, goals and clinical context for better estimates.
export function estimateDailyNeeds({ weight, age, sex='female', activity='moderate' }) {
  const factor = { low: 25, moderate: 30, high: 35 }[activity] || 30;
  const calories = Math.round(Number(weight) * factor);
  const protein = Math.round(Number(weight) * 0.8);
  return { calories, protein, carbs: Math.round(calories * 0.5 / 4), fat: Math.round(calories * 0.3 / 9), water: (Number(weight) * 0.035).toFixed(1) };
}
