var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9c0c5958-d7fa-401b-847e-c648b7a43f52","24ed27dd-e3d1-4d52-b302-40082e56c303","1d8cc444-8a42-4764-99de-8a747dcdb23e"],"propsByKey":{"9c0c5958-d7fa-401b-847e-c648b7a43f52":{"name":"daughter","sourceUrl":"assets/api/v1/animation-library/gamelab/RqISdHJAs33PuJXA99K.erM2nznM9nLo/category_people/kid_8.png","frameSize":{"x":239,"y":342},"frameCount":1,"looping":true,"frameDelay":2,"version":"RqISdHJAs33PuJXA99K.erM2nznM9nLo","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":342},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RqISdHJAs33PuJXA99K.erM2nznM9nLo/category_people/kid_8.png"},"24ed27dd-e3d1-4d52-b302-40082e56c303":{"name":"mom","sourceUrl":"assets/api/v1/animation-library/gamelab/xb8zpsiPZ5SI98yOhX1InKeDnBSCd57./category_faces/kidportrait_04.png","frameSize":{"x":267,"y":357},"frameCount":1,"looping":true,"frameDelay":2,"version":"xb8zpsiPZ5SI98yOhX1InKeDnBSCd57.","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":267,"y":357},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xb8zpsiPZ5SI98yOhX1InKeDnBSCd57./category_faces/kidportrait_04.png"},"1d8cc444-8a42-4764-99de-8a747dcdb23e":{"name":"dog","sourceUrl":"assets/api/v1/animation-library/gamelab/BzbzQtqOkkbSME1dIq4WjHKFpIjRrE9f/category_animals/dalmatian.png","frameSize":{"x":265,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"BzbzQtqOkkbSME1dIq4WjHKFpIjRrE9f","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":265,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BzbzQtqOkkbSME1dIq4WjHKFpIjRrE9f/category_animals/dalmatian.png"}}};
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

  var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(42,120,45,3);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(337,210,50,3);
  var wall8 = createSprite(337,170,50,3);
  var wall9 = createSprite(18,148,3,60);
  var wall10 = createSprite(361,190,3,40);
  
  var daughter = createSprite(335,190);
  daughter.setAnimation("daughter");
  daughter.height=30;
  daughter.width=30;
  
 var dog1=createSprite(200,180);
 dog1.setAnimation("dog");
 dog1.height=30;
 dog1.width=30;
 
 var dog2=createSprite(70,41);
 dog2.setAnimation("dog");
 dog2.height=30;
 dog2.width=30;

 var dog3=createSprite(300,34);
 dog3.setAnimation("dog");
 dog3.height=30;
 dog3.width=30;
 
 var dog4=createSprite(14,356);
 dog4.setAnimation("dog");
 dog4.height=30;
 dog4.width=30;
 
 var dog5=createSprite(100,364);
 dog5.setAnimation("dog");
 dog5.height=30;
 dog5.width=30;
 
 var dog6=createSprite(269,385);
 dog6.setAnimation("dog");
 dog6.height=30;
 dog6.width=30;
 
 var dog7=createSprite(290,330);
 dog7.setAnimation("dog");
 dog7.height=30;
 dog7.width=30;
 
 var dog8=createSprite(180,60);
 dog8.setAnimation("dog");
 dog8.height=30;
 dog8.width=30;
 
 var dog9=createSprite(240,240);
 dog9.setAnimation("dog");
 dog9.height=30;
 dog9.width=30;
 
 var dog10=createSprite(130,240);
 dog10.setAnimation("dog");
 dog10.height=30;
 dog10.width=30;
 
 var dog11=createSprite(41,140);
 dog11.setAnimation("dog");
 dog11.height=30;
 dog11.width=30;

 var dog12=createSprite(188,290);
 dog12.setAnimation("dog");
 dog12.height=30;
 dog12.width=30;

 var dog13=createSprite(368,131);
 dog13.setAnimation("dog");
 dog13.height=30;
 dog13.width=30;

var dog14=createSprite(360,230);
 dog14.setAnimation("dog");
 dog14.height=30;
 dog14.width=30;  

var mom=createSprite(350,360);
 mom.setAnimation("mom");
 mom.height=90;
 mom.width=90; 

function draw() {
 background("pink");
  
 fill("lightblue");
 rect(308,170,52,40);
  
  if (keyDown("up")) {
  daughter.y = daughter.y-3;
}

if (keyDown("down")) {
  daughter.y = daughter.y+2;
}

if (keyDown("right")) {
  daughter.x = daughter.x+3;
}

if (keyDown("left")) {
  daughter.x= daughter.x-3;
}

if (daughter.isTouching(mom)) {
  textSize(70);
  text("YouWin",30,200);
}
 
 if (daughter.isTouching(mom)) {
   playSound("assets/category_achievements/vibrant_game_achievement_4.mp3");
 }
 
 if (daughter.isTouching(wall1)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall2)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall3)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall4)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall5)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall6)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall7)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall8)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall9)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(wall10)) {
   playSound("assets/category_hits/vibrant_game_game_box_hit_1.mp3");
 }
 
 if (daughter.isTouching(dog1)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog2)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog3)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog4)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog5)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog6)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog7)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog8)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog9)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog10)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog11)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog12)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog13)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 if (daughter.isTouching(dog14)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_1.mp3");
 }
 
 daughter.bounceOff(wall1);
 daughter.bounceOff(wall2);
 daughter.bounceOff(wall3);
 daughter.bounceOff(wall4);
 daughter.bounceOff(wall5);
 daughter.bounceOff(wall6);
 daughter.bounceOff(wall7);
 daughter.bounceOff(wall8);
 daughter.bounceOff(wall9);
 daughter.bounceOff(wall10);
 daughter.bounceOff(dog1);
 daughter.bounceOff(dog2); 
 daughter.bounceOff(dog3);
 daughter.bounceOff(dog4);
 daughter.bounceOff(dog5);
 daughter.bounceOff(dog6);
 daughter.bounceOff(dog7);
 daughter.bounceOff(dog8);
 daughter.bounceOff(dog9);
 daughter.bounceOff(dog10); 
 daughter.bounceOff(dog11);  
 daughter.bounceOff(dog12);
 daughter.bounceOff(dog13);
 daughter.bounceOff(dog14);
  
  drawSprites();
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
