const rangeInput = document.getElementById('range');
const rangeResult = document.getElementById('range-result');

rangeResult.textContent = 175;
rangeInput.addEventListener('input', () => {
   const min = 50;
   const max = 300;

   const value = min + ((rangeInput.value - 0) / (100 - 0)) * (max - min);
   rangeResult.textContent = Math.floor(value);
});

const switcher = document.querySelector('.switcher');
const placeholder = document.querySelector('.placeholder');

switcher.addEventListener('click', () => {
    placeholder.classList.toggle('switch-off');
})

const btnAgePlus = document.getElementById('btn-age-plus');
const btnAgeMinus = document.getElementById('btn-age-minus');
const ageValue = document.getElementById('age-value');

btnAgePlus.addEventListener('click', () => {
    const value = ageValue.textContent;
    ageValue.innerHTML = +value + 1;
    
});
btnAgeMinus.addEventListener('click', () => {
    const value = ageValue.textContent;
    ageValue.innerHTML = +value - 1;
});

const btnWeightPlus = document.getElementById('weight-btn-plus');
const btnWeightMinus = document.getElementById('weight-btn-minus');
const weightValue = document.getElementById('weight-value');

btnWeightPlus.addEventListener('click', () => {
    const value = weightValue.textContent;
    weightValue.innerHTML = +value + 1;
    
});
btnWeightMinus.addEventListener('click', () => {
    const value = weightValue.textContent;
    weightValue.innerHTML = +value - 1;
});

const btnGetStart = document.getElementById('btn-get-start');
const btnCalculate = document.getElementById('btn-calculate');
const btnSave = document.getElementById('btn-save');
const sliderWrapper = document.querySelector('.slider-wrap');
const bmiResult = document.getElementById('bmi-result');
const bmiReport = document.getElementById('bmi-report');
const resultList = document.querySelector('.result-list');
const resultElements = document.querySelectorAll('.result-list li');


btnGetStart.addEventListener('click', () => {
    sliderWrapper.style.transform = 'translateX(-393px)';
})

btnCalculate.addEventListener('click', () => {
    const weight = +weightValue.innerHTML;
    const height = +rangeResult.textContent;
    const result = +(weight / Math.pow((height / 100), 2)).toFixed(1) ;

    bmiResult.innerHTML = result;
    
    switch (true) {
        case result < 18.5:
            bmiReport.innerHTML = 'Underweight';
            resultList.children[0].classList.toggle('active');
            break;
        case result >= 18.5 && result <= 24.9:
            bmiReport.innerHTML = 'Normal weight';
            resultList.children[1].classList.toggle('active');
            break;
        case result >= 25 && result <= 29.9:
            bmiReport.innerHTML = 'Overweight';
            resultList.children[2].classList.toggle('active');
            break;
        default:
            bmiReport.innerHTML = 'Obese';
            resultList.children[3].classList.toggle('active');
    }
    
    sliderWrapper.style.transform = 'translateX(-786px)';
})

btnSave.addEventListener('click', () => {
    sliderWrapper.style.transform = 'translateX(-393px)';
    resultElements.forEach(el => el.classList.remove('active'))
})