'use strict';

(function () {
  var LOAD_URL = 'https://javascript.pages.academy/code-and-magick/data';
  var SAVE_URL = 'https://javascript.pages.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;
  var StatusCode = {
    OK: 200
  };
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  window.backend = {
    'load': function (onLoad, onError) {
      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open('GET', LOAD_URL);
      xhr.send();
    },
    'save': function (data, onLoad) {

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.open('POST', SAVE_URL);
      xhr.send(data);
    }
  };
})();
