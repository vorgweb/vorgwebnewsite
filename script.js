const stage = document.getElementById('cubeStage');
const cube = document.getElementById('cube');
const faces = cube.querySelectorAll('.cube-face');
const dots = document.querySelectorAll('.revision-dot');
const prevBtn = document.getElementById('cubePrev');
const nextBtn = document.getElementById('cubeNext');

const nFaces = faces.length;
const stepAngle = 360 / nFaces;

let radius = 0;
let currentIndex = 0;
let currentAngle = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartAngle = 0;

function layoutFaces(){
  radius = cube.offsetWidth / 2;
  faces.forEach((face, i) => {
    face.style.transform = `rotateY(${i * stepAngle}deg) translateZ(${radius}px)`;
  });
}

function applyRotation(angle, animate){
  cube.style.transition = animate ? 'transform .55s cubic-bezier(.65,0,.35,1)' : 'none';
  cube.style.transform = `rotateY(${angle}deg)`;
}

function goToIndex(index){
  currentIndex = ((index % nFaces) + nFaces) % nFaces;
  currentAngle = -currentIndex * stepAngle;
  applyRotation(currentAngle, true);
  dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

window.addEventListener('resize', layoutFaces);
layoutFaces();
goToIndex(0);

stage.addEventListener('pointerdown', (e) => {
  isDragging = true;
  dragStartX = e.clientX;
  dragStartAngle = currentAngle;
  stage.setPointerCapture(e.pointerId);
  stage.classList.add('dragging');
});

stage.addEventListener('pointermove', (e) => {
  if(!isDragging) return;
  const deltaX = e.clientX - dragStartX;
  const sensitivity = 0.35;
  currentAngle = dragStartAngle + deltaX * sensitivity;
  applyRotation(currentAngle, false);
});

function endDrag(){
  if(!isDragging) return;
  isDragging = false;
  stage.classList.remove('dragging');
  const nearestIndex = Math.round(-currentAngle / stepAngle);
  goToIndex(nearestIndex);
}

stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);
stage.addEventListener('pointerleave', endDrag);

prevBtn.addEventListener('click', () => goToIndex(currentIndex - 1));
nextBtn.addEventListener('click', () => goToIndex(currentIndex + 1));
dots.forEach(dot => dot.addEventListener('click', () => goToIndex(Number(dot.dataset.index))));

document.querySelector('.nav-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});