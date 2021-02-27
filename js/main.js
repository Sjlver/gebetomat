function setElementText(element, text) {
  element.velocity({opacity : 0}, {
    duration : 400,
    complete : () => {
      element.textContent = text;
      element.velocity({opacity : 1}, {duration : 400});
    }
  });
}

function replacePart(part) {
  const paragraph = document.getElementById(`gebet-${part}`);
  const options = kGebete.get(part);
  const choice = Math.floor(Math.random() * options.length);
  setElementText(paragraph, options[choice]);
}

function cyclePart(part) {
  const paragraph = document.getElementById(`gebet-${part}`);
  const options = kGebete.get(part);
  const current = options.findIndex((t) => t === paragraph.textContent);
  setElementText(paragraph, options[(current + 1) % options.length]);
}

const gebetRandom = document.getElementById('gebet-random');
gebetRandom.addEventListener('click', (event) => {
  for (const part of kGebete.keys()) {
    replacePart(part);
  }
  setTimeout(() => gebetRandom.blur(), 800);
});

for (const part of kGebete.keys()) {
  document.getElementById(`gebet-${part}`)
      .addEventListener('click', (event) => { cyclePart(part); });
}
