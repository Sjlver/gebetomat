function tutorial(part) {
  const pointer = document.getElementById('tutorial');
  const paragraph = document.getElementById('gebet-' + part);

  function part0Prepare() {
    const pos = paragraph.getBoundingClientRect();

    pointer.style.opacity = 0;
    pointer.style.display = 'block';
    pointer.style.left = (pos.left + 20) + 'px';
    pointer.style.top = (pos.top + pos.height / 2) + 'px';
  }

  function part1MouseDown() {
    pointer.classList.add('far');
    pointer.classList.remove('fas');
  }

  function part2MouseUp() {
    pointer.classList.add('fas');
    pointer.classList.remove('far');
  }

  pointer
    .velocity({}, {duration: 2000, complete: part0Prepare})
    .velocity({opacity: 1}, {duration: 400})
    .velocity({}, {duration: 1000, complete: part1MouseDown})
    .velocity({}, {duration: 200, complete: part2MouseUp})
    .velocity({}, {duration: 200})
    .velocity({opacity: 0}, {duration: 200, complete: () => cyclePart(part)})
}

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
