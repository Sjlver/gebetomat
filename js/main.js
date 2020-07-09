function replacePart(part) {
  const paragraph = document.getElementById(`gebet-${part}`);
  const options = kGebete.get(part);
  const choice = Math.floor(Math.random() * options.length);
  paragraph.textContent = options[choice];
}

function cyclePart(part) {
  const paragraph = document.getElementById(`gebet-${part}`);
  const options = kGebete.get(part);
  const current = options.findIndex((t) => t === paragraph.textContent);
  paragraph.textContent = options[(current + 1) % options.length];
}

const gebetRandom = document.getElementById('gebet-random');
gebetRandom.addEventListener('click', (event) => {
  for (const part of kGebete.keys()) {
    replacePart(part);
  }
});

for (const part of kGebete.keys()) {
  document.getElementById(`gebet-${part}`).addEventListener('click', (event) => {
    cyclePart(part);
  });
}
