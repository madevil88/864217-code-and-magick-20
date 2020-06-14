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
var OBJECT_NAMES = [
  'name',
  'coatColor',
  'eyesColor'
];

var wizards = [];
var object = {};

var getRandomElement = function (arr, max) {
  var randomElement = Math.floor(Math.random() * max);
  return arr[randomElement];
};

var addPlayersFirstName = function (arr, playersNames, objectName) {
  object = {};
  var wizardFirstName = getRandomElement(arr, arr.length);
  object[objectName] = wizardFirstName;
  playersNames.push(object);
  arr.splice(arr.indexOf(wizardFirstName), 1);
};

var addPlayersSecondName = function (arr, playersNames, objectName) {
  var wizardSecondName = getRandomElement(arr, arr.length);
  playersNames[i][objectName] += ' ' + wizardSecondName;
  arr.splice(arr.indexOf(wizardSecondName), 1);
};

var addWizardColors = function (arr, playersNames, objectName) {
  var color = getRandomElement(arr, arr.length);
  playersNames[i][objectName] = color;
  arr.splice(arr.indexOf(color), 1);
};

for (var i = 3; i >= 0; i--) {
  addPlayersFirstName(WIZARD_FIRSTNAMES, wizards, OBJECT_NAMES[0]);
}

for (var j = 3; j >= 0; j--) {
  addPlayersSecondName(WIZARD_SECONDNAMES, wizards, OBJECT_NAMES[0]);
  addWizardColors(COAT_COLORS, wizards, OBJECT_NAMES[1]);
  addWizardColors(EYES_COLORS, wizards, OBJECT_NAMES[2]);
}

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
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
