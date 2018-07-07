(function(window) {
Symbol_1_instantie_1 = function() {
	this.initialize();
}
Symbol_1_instantie_1._SpriteSheet = new createjs.SpriteSheet({images: ["buttons.png"], frames: [[0,0,398,72,0,0,0],[398,0,398,72,0,0,0],[0,72,287,72,0,0,0],[287,72,287,72,0,0,0],[574,72,236,72,0,0,0],[0,144,236,72,0,0,0],[236,144,236,72,0,0,0],[472,144,236,72,0,0,0],[0,216,645,182,0,0,0],[0,398,645,182,0,0,0],[0,580,855,182,0,0,0],[0,762,855,182,0,0,0],[0,944,435,182,0,0,0],[435,944,435,182,0,0,0],[870,944,146,145,0,0,0],[0,1126,146,145,0,0,0],[146,1126,515,182,0,0,0],[0,1308,515,182,0,0,0],[515,1308,435,182,0,0,0],[0,1490,435,182,0,0,0],[435,1490,435,182,0,0,0],[0,1672,435,182,0,0,0],[435,1672,103,95,0,0,0],[538,1672,103,95,0,0,0],[641,1672,8,25,0,0,0]]});
var Symbol_1_instantie_1_p = Symbol_1_instantie_1.prototype = new createjs.BitmapAnimation();
Symbol_1_instantie_1_p.BitmapAnimation_initialize = Symbol_1_instantie_1_p.initialize;
Symbol_1_instantie_1_p.initialize = function() {
	this.BitmapAnimation_initialize(Symbol_1_instantie_1._SpriteSheet);
	this.paused = false;
}
window.Symbol_1_instantie_1 = Symbol_1_instantie_1;
}(window));

