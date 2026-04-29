export const recommendWeights = {
    space: 3,
    light: 4,
    experience: 2,
    water: 3,
};

export const plants = [
   // space         : 공간 크기
   // light         : 빛 조건
   // experience    : 식물 경험
    // beginner - 처음 키움/ failed-]
   // water         : 물 주는 스타일

    {
        id: 'stucky',
        name: '스투키',
        space: ['small', 'medium'],
        light: ['low', 'medium'],
        experience: ['beginner', 'failed'],
        water: ['low'],
        price: '15,000원~',
        tags: ['초보자 추천', '관리 쉬움', '반려동물 주의'],
        reason: '초보자에게 적합하고 물을 자주 안줘도 돼요.',
        care: '3주 1회 물주기'
    },
    {
        id: 'zz',
        name: '금전수',
        space: ['medium', 'large'],
        light: ['low', 'medium'],
        experience: ['beginner', 'failed', 'normal'],
        water: ['low', 'medium'],
        price: '25,000원~',
        tags: ['초보자 추천', '관리 쉬움'],
        reason: '빛이 부족해도 잘 자라는 실내 식물이에요.',
        care: '2~3주 1회 물주기'
    },
    {
        id: 'monstera',
        name: '몬스테라',
        space: ['medium', 'large'],
        light: ['medium', 'high'],
        experience: ['normal'],
        water: ['medium'],
        price: '35,000원~',
        tags: ['반려동물 주의'],
        reason: '인테리어 효과가 좋은 인기 식물이에요.',
        care: '흙 마르면 물주기'
    }
];