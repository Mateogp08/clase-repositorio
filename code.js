var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3ce60d05-26ff-4226-9e57-d0d85a059f60","ff31a33e-162a-4c48-bb67-fc1892e4d1ef","80a84cf0-5ee6-4540-b59b-dee849aa8f77"],"propsByKey":{"3ce60d05-26ff-4226-9e57-d0d85a059f60":{"name":"ufo_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"},"ff31a33e-162a-4c48-bb67-fc1892e4d1ef":{"name":"ufo_2","sourceUrl":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png","frameSize":{"x":398,"y":332},"frameCount":1,"looping":true,"frameDelay":2,"version":"QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":332},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png"},"80a84cf0-5ee6-4540-b59b-dee849aa8f77":{"name":"star2_1","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"jZmhug20jgsjgxlZmOP09DxtPGNRZEXW","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/80a84cf0-5ee6-4540-b59b-dee849aa8f77.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sprite_group = createGroup();

for(var i=1; i<=4; i++)
{
  var sprite = createSprite(80*i, 350);
  sprite.setAnimation("ufo_1");
  sprite.scale = 0.2;
  sprite.velocityY = -4;
  sprite_group.add(sprite);
}

createEdgeSprites();
function draw() {
  background("black");
  sprite_group.bounceOff(edges);
  drawSprites();
}

function mousePressed() {
  
  for(var j=1; j<=50; j=j+1) {
    var star = createSprite(randomNumber(0,400), randomNumber(0,200));
    star.setAnimation("star2_1");
  }
  
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
