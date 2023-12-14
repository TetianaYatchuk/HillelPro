'use strict';

const smiles = [
  { emoji: '😜', count: 0 },
  { emoji: '😏', count: 0 },
  { emoji: '😍', count: 0 },
  { emoji: '😉', count: 0 },
  { emoji: '🤩', count: 0 }
];

function vote(index) {
  smiles[index].count++;
  updateInterface();
}

function updateInterface() {
  const container = document.getElementById('container');
  container.innerHTML = '';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';

  smiles.forEach((smile, index) => {
    const smilesElement = document.createElement('div');
    smilesElement.className = 'smiles';
    smilesElement.textContent = smile.emoji;
    smilesElement.onclick = () => vote(index);

    smilesElement.style.fontSize = '60px';

    const counterElement = document.createElement('div');
    counterElement.className = 'counter';
    counterElement.textContent = `Voices: ${smiles[index].count}`;

    container.appendChild(smilesElement);
    container.appendChild(counterElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateInterface();
});