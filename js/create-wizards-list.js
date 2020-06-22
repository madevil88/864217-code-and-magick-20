'use strict';

(function () {
  window.createWizardsList = {
    'WIZARD_FIRSTNAMES': [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],
    'WIZARD_SECONDNAMES': [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],
    'COAT_COLORS': [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    'EYES_COLORS': [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    'FIREBALL_COLORS': [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
    'WIZARD_FIELDS': {
      NAME: 'name',
      COAT_COLOR: 'coatColor',
      EYES_COLOR: 'eyesColor'
    },
    'wizards': [],
    'getRandomArray': function (arr) {
      var randomArray = [];
      for (var i = arr.length; i > 0; i--) {
        do {
          var index = Math.floor(Math.random() * arr.length);
        }
        while (randomArray.indexOf(arr[index]) !== -1);
        randomArray.push(arr[index]);
      }
      return randomArray;
    }
  };

  var addWizardFirstName = function (arr, wizardsFields, length) {
    var randomFirstNames = window.createWizardsList.getRandomArray(arr);
    for (var i = 0; i < length; i++) {
      wizardsFields.push({
        name: randomFirstNames[i]
      });
    }
    return wizardsFields;
  };

  var addWizardSecondName = function (arr, wizardsFields, wizardField) {
    var randomSecondNames = window.createWizardsList.getRandomArray(arr);
    for (var i = 0; i < wizardsFields.length; i++) {
      wizardsFields[i][wizardField] += ' ' + randomSecondNames[i];
    }
    return wizardsFields;
  };

  var addWizardColors = function (arr, wizardsFields, wizardField) {
    var randomColors = window.createWizardsList.getRandomArray(arr);
    for (var i = 0; i < wizardsFields.length; i++) {
      wizardsFields[i][wizardField] = randomColors[i];
    }
    return wizardsFields;
  };

  addWizardFirstName(window.createWizardsList.WIZARD_FIRSTNAMES, window.createWizardsList.wizards, 4);
  addWizardSecondName(window.createWizardsList.WIZARD_SECONDNAMES, window.createWizardsList.wizards, window.createWizardsList.WIZARD_FIELDS.NAME);
  addWizardColors(window.createWizardsList.COAT_COLORS, window.createWizardsList.wizards, window.createWizardsList.WIZARD_FIELDS.COAT_COLOR);
  addWizardColors(window.createWizardsList.EYES_COLORS, window.createWizardsList.wizards, window.createWizardsList.WIZARD_FIELDS.EYES_COLOR);
})();
