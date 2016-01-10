var vg = require('vega');

var parser = function(selector, renderer) {
  return function(spec) {
    vg.parse.spec(spec, function(chart) {
      chart({el: selector, renderer: renderer}).update();
    });
  }
}


var spec = require('./specs/image.json');


parser('#vis-svg', 'svg')(spec);
parser('#vis-canvas', 'canvas')(spec);
parser('#vis-gl', 'webgl')(spec);
