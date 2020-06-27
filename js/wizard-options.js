'use strict';

(function () {
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

  var setup = document.querySelector('.setup');
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
})();
