const slider = document.querySelector('.slider');
const sliderImg = document.querySelector('.slider-img');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

const regex = /mounth-(\d+)/;

const next = () => {
  let index = parseInt(sliderImg.src.match(regex)[1]);
  console.log(index);
  sliderImg.src = `img/mounth-${index + 1}.jpg`;
  console.log(sliderImg.src);
  checkImgPrev();
  checkImgNext();
};

const prev = () => {
  let index = parseInt(sliderImg.src.match(regex)[1]);
  console.log(index);
  sliderImg.src = `img/mounth-${index - 1}.jpg`;
  console.log(sliderImg.src);
  console.log(index);
  checkImgPrev();
  checkImgNext();
};

const checkImgPrev = () => {
  let index = parseInt(sliderImg.src.match(regex)[1]);
  console.log(index);
  if (index == 1) {
    btnPrev.classList.add('hidden');
  } else {
    btnPrev.classList.remove('hidden');
  }
};

const checkImgNext = () => {
  let index = parseInt(sliderImg.src.match(regex)[1]);
  console.log(index);
  if (index == 10) {
    btnNext.classList.add('hidden');
  } else {
    btnNext.classList.remove('hidden');
  }
};
checkImgPrev();

btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);
