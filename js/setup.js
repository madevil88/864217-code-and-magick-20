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
userDialog.classList.remove('hidden');
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
