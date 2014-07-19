var GameState = function(game){};

GameState.prototype.preload = function() {
};

GameState.prototype.create = function() {
  this.game.stage.backgroundColor = 0x664a33;
  var test = this.add.sprite(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'platino');
  test.width = TILE_SIZE;
  test.height = TILE_SIZE;
  test.animations.add('bob', [0, 1], 4, true);
  test.animations.play('bob');
  
  this.sounds = {
    //place: this.game.add.audio("place")
  };

  this.groups = {};
  //this.bg = this.game.add.group();
  
  var map = this.game.add.tilemap('mario');
  map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
  var layer = map.createLayer('World1');
  layer.resizeWorld();
};

GameState.prototype.update = function() {
  // Move to next level
  if (this.game.input.activePointer.justPressed()) {
    console.log("Clicked");
    //this.sounds.newLevel.play('', 0, 0.3);
  }
};
