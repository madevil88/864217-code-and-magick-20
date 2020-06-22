'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
  var inputWizardCoat = setup.querySelector('input[name="coat-color"]');
  var inputWizardEyes = setup.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = setupWizardFireball.querySelector('input[name="fireball-color"]');

  var randomCoatColors = window.createWizardsList.getRandomArray(window.createWizardsList.COAT_COLORS);
  var randomEyesColors = window.createWizardsList.getRandomArray(window.createWizardsList.EYES_COLORS);
  var randomFireballColors = window.createWizardsList.getRandomArray(window.createWizardsList.FIREBALL_COLORS);
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
