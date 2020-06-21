'use strict';

var WIZARD_FIRSTNAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SECONDNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var WIZARD_FIELDS = {
  NAME: 'name',
  COAT_COLOR: 'coatColor',
  EYES_COLOR: 'eyesColor'
};

var wizards = [];

var getRandomArray = function (arr) {
  var randomArray = [];
  for (var i = arr.length; i > 0; i--) {
    do {
      var index = Math.floor(Math.random() * arr.length);
    }
    while (randomArray.indexOf(arr[index]) !== -1);
    randomArray.push(arr[index]);
  }
  return randomArray;
};

var addWizardFirstName = function (arr, wizardsFields, length) {
  var randomFirstNames = getRandomArray(arr);
  for (var i = 0; i < length; i++) {
    wizardsFields.push({
      name: randomFirstNames[i]
    });
  }
  return wizardsFields;
};

var addWizardSecondName = function (arr, wizardsFields, wizardField) {
  var randomSecondNames = getRandomArray(arr);
  for (var i = 0; i < wizardsFields.length; i++) {
    wizardsFields[i][wizardField] += ' ' + randomSecondNames[i];
  }
  return wizardsFields;
};

var addWizardColors = function (arr, wizardsFields, wizardField) {
  var randomColors = getRandomArray(arr);
  for (var i = 0; i < wizardsFields.length; i++) {
    wizardsFields[i][wizardField] = randomColors[i];
  }
  return wizardsFields;
};

addWizardFirstName(WIZARD_FIRSTNAMES, wizards, 4);
addWizardSecondName(WIZARD_SECONDNAMES, wizards, WIZARD_FIELDS.NAME);
addWizardColors(COAT_COLORS, wizards, WIZARD_FIELDS.COAT_COLOR);
addWizardColors(EYES_COLORS, wizards, WIZARD_FIELDS.EYES_COLOR);

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var g = 0; g < wizards.length; g++) {
  fragment.appendChild(renderWizard(wizards[g]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !evt.target.matches('.setup-user-name')) {
    evt.preventDefault();
    setup.classList.add('hidden');
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
var inputWizardCoat = setup.querySelector('input[name="coat-color"]');
var inputWizardEyes = setup.querySelector('input[name="eyes-color"]');
var inputWizardFireball = setupWizardFireball.querySelector('input[name="fireball-color"]');

var randomCoatColors = getRandomArray(COAT_COLORS);
var randomEyesColors = getRandomArray(EYES_COLORS);
var randomFireballColors = getRandomArray(FIREBALL_COLORS);
var index = 0;

var getRandomElement = function (arr) {
  if (index > arr.length - 1) {
    index = 0;
  }
  var randomElement = arr[index];
  index++;
  return randomElement;
};

setupWizardCoat.addEventListener('click', function () {
  var eyesColor = getRandomElement(randomCoatColors);
  setupWizardCoat.style.fill = eyesColor;
  inputWizardCoat.value = eyesColor;
});
setupWizardEyes.addEventListener('click', function () {
  var coatColor = getRandomElement(randomEyesColors);
  setupWizardEyes.style.fill = coatColor;
  inputWizardEyes.value = coatColor;
});

setupWizardFireball.addEventListener('click', function () {
  var fireballColor = getRandomElement(randomFireballColors);
  setupWizardFireball.style.backgroundColor = fireballColor;
  inputWizardFireball.value = fireballColor;
});
