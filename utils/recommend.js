import { recommendWeights, plants } from '../data/plants.js';

export function getRecommendedPlants(answers, limit = 3) {
    return plants
        .map((plant) => {
            let score = 0;
            const matched = [];
            const missed = [];

            Object.entries(recommendWeights).forEach(([key, weight]) => {
                const plantValues = plant[key] || [];
                const userValue = answers[key];

                if (!userValue) return;

                if (plantValues.includes(userValue)) {
                    score += weight;
                    matched.push(key);
                } else {
                    missed.push(key);
                }
            });

            if (answers.experience === 'beginner' && plant.tags?.includes('관리 쉬움')) {
                score += 1;
                matched.push('easyCareBonus');
            }

            if (answers.water === 'low' && plant.water?.includes('high')) {
                score -= 2;
                missed.push('waterPenalty');
            }

            return {
                ...plant,
                score: score + Math.random() * 0.3,
                matched,
                missed,
            };
        })
        .filter((plant) => plant.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
}

export function getRecommendText(plant) {
    const reasons = [];

    if (plant.matched.includes('space')) reasons.push('공간에 잘 맞아요');
    if (plant.matched.includes('light')) reasons.push('빛 조건에 적합해요');
    if (plant.matched.includes('experience')) reasons.push('키우기 쉬워요');
    if (plant.matched.includes('water')) reasons.push('물 관리 부담이 적어요');

    return reasons.join(', ') || plant.reason;
}