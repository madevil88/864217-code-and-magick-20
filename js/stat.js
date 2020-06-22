'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 20;
  var TEXT_HEIGHT = 16;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var MAX_BAR_HEIGHT = 150;
  var getTextX = function (i) {
    return CLOUD_X + BAR_WIDTH + ((BAR_GAP + BAR_WIDTH) * i);
  };
  var textY = CLOUD_HEIGHT - FONT_GAP;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxTime = function (arr) {
    var maxTime = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxTime) {
        maxTime = arr[i];
      }
    }
    return maxTime;
  };

  var getRectHeight = function (arr, i) {
    return MAX_BAR_HEIGHT / getMaxTime(arr) * arr[i];
  };

  var getRandomColor = function (ctx, arr, i) {
    var color = 'hsl(240,' + Math.round(Math.random() * 100) + '%,50%)';
    if (arr[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillStyle = color;
  };

  var renderText = function (ctx, color, arr, i) {
    ctx.fillStyle = color;
    if (typeof (arr[i]) === 'number') {
      ctx.fillText(Math.round(arr[i]), getTextX(i), textY - FONT_GAP - GAP - getRectHeight(arr, i));
    } else {
      ctx.fillText(arr[i], getTextX(i), textY);
    }
  };

  var renderColumn = function (ctx, arr, i) {
    ctx.fillRect(CLOUD_X + BAR_WIDTH + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - FONT_GAP - GAP - getRectHeight(arr, i), BAR_WIDTH, getRectHeight(arr, i));
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = TEXT_HEIGHT + 'px PT Mono';
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);

    for (var i = 0; i < players.length; i++) {
      renderText(ctx, '#000', players, i);
      getRandomColor(ctx, players, i);
      renderColumn(ctx, times, i);
      renderText(ctx, '#000', times, i);
    }
  };
})();
