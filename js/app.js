import { getRecommendedPlants, getRecommendText } from '../utils/recommend.js';

let step = 'start';

let answers = {
    space: null,
    light: null,
    experience: null,
    water: null
};

const app = document.getElementById('app');
const stepOrder = ['start', 'space', 'light', 'experience', 'water', 'result'];

function select(key, value, nextStep) {
    answers[key] = value;
    step = nextStep;
    render();
}

function reset() {
    step = 'start';
    answers = {
        space: null,
        light: null,
        experience: null,
        water: null
    };
    render();
}

/* ---------- 화면 렌더 ---------- */

function render() {
    if (step === 'start') {
        app.innerHTML = `
          <div class="flex-1 flex flex-col justify-center">
              <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full w-fit mb-5">
                mugwort plants
              </span>
    
              <h1 class="text-3xl font-bold leading-tight">
                내 공간에 맞는<br />
                식물을 추천해드려요
              </h1>
    
              <p class="mt-4 text-gray-600">
                공간, 햇빛, 경험을 선택하면<br />
                어울리는 식물을 찾아드릴게요.
              </p>
    
              <button
              onclick="start()"
              class="mt-10 h-14 rounded-2xl bg-green-700 text-white font-bold text-lg active:scale-95 transition"
            >
              추천 시작하기
            </button>
            </div>
        `;
    }

    if (step === 'space') {
        app.innerHTML = `
           <div class="flex flex-col">
              <button onclick="goBack()" class="mb-5 text-sm text-gray-500 text-left">
                ← 이전
              </button>
              <p class="text-sm text-green-700 font-bold mb-3">1 / 4</p>
    
              <h2 class="text-2xl font-bold mb-6">
                식물을 둘 공간은<br />
                어느 정도인가요?
              </h2>
    
              <div class="flex flex-col gap-3">
                <button onclick="select('space','small','light')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  작은 공간
                </button>
    
                <button onclick="select('space','medium','light')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  중간 공간
                </button>
    
                <button onclick="select('space','large','light')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  넓은 공간
                </button>
              </div>
            </div>
        `;
    }

    if (step === 'light') {
        app.innerHTML = `
          <div class="flex flex-col">
              <button onclick="goBack()" class="mb-5 text-sm text-gray-500 text-left">
                ← 이전
              </button>
              <p class="text-sm text-green-700 font-bold mb-3">2 / 4</p>
    
              <h2 class="text-2xl font-bold mb-6">
                햇빛은 얼마나<br />
                잘 들어오나요?
              </h2>
    
              <div class="flex flex-col gap-3">
                <button onclick="select('light','low','experience')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left active:scale-95 transition">
                  <strong class="block text-lg">거의 안 들어와요</strong>
                  <span class="text-sm text-gray-500">북향, 창문과 먼 공간</span>
                </button>
    
                <button onclick="select('light','medium','experience')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left active:scale-95 transition">
                  <strong class="block text-lg">은은하게 들어와요</strong>
                  <span class="text-sm text-gray-500">간접광, 커튼 너머 빛</span>
                </button>
    
                <button onclick="select('light','high','experience')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left active:scale-95 transition">
                  <strong class="block text-lg">햇빛이 잘 들어와요</strong>
                  <span class="text-sm text-gray-500">남향 창가, 밝은 공간</span>
                </button>
              </div>
            </div>
        `;
    }

    if (step === 'experience') {
        app.innerHTML = `
          <div class="flex flex-col">
              <button onclick="goBack()" class="mb-5 text-sm text-gray-500 text-left">
                ← 이전
              </button>
              <p class="text-sm text-green-700 font-bold mb-3">3 / 4</p>
    
              <h2 class="text-2xl font-bold mb-6">
                식물을 얼마나<br />
                키워봤나요?
              </h2>
    
              <div class="flex flex-col gap-3">
                <button onclick="select('experience','beginner','water')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  처음이에요
                </button>
    
                <button onclick="select('experience','failed','water')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  몇 번 실패했어요
                </button>
    
                <button onclick="select('experience','normal','water')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  어느 정도 키워봤어요
                </button>
              </div>
            </div>
        `;
    }

    if (step === 'water') {
        app.innerHTML = `
          <div class="flex flex-col">
              <button onclick="goBack()" class="mb-5 text-sm text-gray-500 text-left">
                ← 이전
              </button>
              <p class="text-sm text-green-700 font-bold mb-3">4 / 4</p>
    
              <h2 class="text-2xl font-bold mb-6">
                물 주기는<br />
                어떤 편인가요?
              </h2>
    
              <div class="flex flex-col gap-3">
                <button onclick="select('water','low','result')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  자주 까먹어요
                </button>
    
                <button onclick="select('water','medium','result')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  생각나면 챙겨요
                </button>
    
                <button onclick="select('water','high','result')" class="w-full p-5 bg-white border border-gray-200 rounded-2xl text-left font-semibold active:scale-95 transition">
                  자주 확인할 수 있어요
                </button>
              </div>
            </div>
        `;
    }

    if (step === 'result') {
        const list = getRecommendedPlants(answers);

        app.innerHTML = `
          <div class="flex flex-col">
            <h2 class="text-2xl font-bold mb-6">
              🌿 추천 식물
            </h2>
    
            <div class="flex flex-col gap-4">
              ${list.map(plant => `
                <div class="p-5 bg-white rounded-2xl border">
                  <h3 class="text-lg font-bold mb-2">${plant.name}</h3>
                   <p class="text-sm text-green-700 mb-2">
                      ${getRecommendText(plant)}
                   </p>
                  <p class="text-sm text-gray-600 mb-2">${plant.reason}</p>
                  <p class="text-sm">관리법: ${plant.care}</p>
                  <p class="text-green-700 font-bold mt-2">${plant.price}</p>
                </div>
              `).join('')}
            </div>
    
            <button onclick="reset()" class="mt-6 h-12 bg-gray-200 rounded-xl">
              다시 하기
            </button>
          </div>
        `;
    }
}

function goBack() {
    const currentIndex = stepOrder.indexOf(step);

    if (currentIndex <= 0) return;

    step = stepOrder[currentIndex - 1];
    render();
}


/* ---------- 글로벌 노출 ---------- */
window.goBack = goBack;
window.select = select;
window.reset = reset;
window.start = () => {
    step = 'space';
    render();
};

render();