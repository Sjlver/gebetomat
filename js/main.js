const kGebete = new Map([
  ['anrede', [
    'Lieber Gott',
    'Gott, du mein Freund und meine Freundin ',
    'Unser Vater / Unsere Mutter',
    'Du…',
    'Jesus …',
    'Rätselhafter Gott',
    'Grosser Gott',
  ]],
  ['intro', [
    'Ich möchte dir sagen, dass…',
    'Ich freue mich, denn…',
    'Ich danke dir, dass…',
    'Heute war der Tag schwierig, weil …',
    'Ich bitte dich für …',
    'Ich frage mich, ob…',
    'Ich lobe dich…',
  ]],
  ['frage', [
    'Wer bist du?',
    'Wie finde ich dich?',
    'Bist du im Himmel? Bist du hier bei mir? Bist du überall?',
    'Ich weiss, ich kann dich nicht sehen, doch ich glaube, du bist da…',
  ]],
  ['bitte', [
    'Bleibe bei mir',
    'Behüte und tröste mich',
    'Wache über mir',
    'Lass mich nicht allein',
    'Sorge du',
    'Dir vertraue ich',
    'Du machst es schon recht',
  ]],
  ['ende', [
    'Amen',
    'So sei es',
  ]],
]);

function replacePart(part) {
  const paragraph = document.getElementById(`gebet-${part}`);
  const options = kGebete.get(part);
  const choice = Math.floor(Math.random() * options.length);
  paragraph.textContent = options[choice];
}

const gebetRandom = document.getElementById('gebet-random');
gebetRandom.addEventListener('click', (event) => {
  console.log('gebetRandom');

  for (const part of ['anrede', 'intro', 'frage', 'bitte', 'ende']) {
    replacePart(part);
  }
});

for (const part of ['anrede', 'intro', 'frage', 'bitte', 'ende']) {
  document.getElementById(`gebet-${part}`).addEventListener('click', (event) => {
    replacePart(part);
  });
}
