var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e147ecfb-0af8-4042-a36f-de59ba9b2d12","7141900d-53ee-4584-b731-91fa075bbb9a","4e3110bc-89e9-4ff0-be7f-44e8bb28c278","a9338080-e355-4ee3-b371-e6e66a7d97ed","4389cfe9-6ac1-48c0-b459-c019f61159d6","6fec1237-1c75-47f2-adad-2b0656afe17d","e7010f8f-99bc-4e1a-add1-166649ebc21a","163446fe-e362-4846-a694-15afd3e7794a","a72487f0-c37a-4b8b-9efe-99e908c7d670","e94348fc-5cca-46bc-a0bd-9b9778f6991b","b2b27f4c-1fb9-4f87-98d4-dc54224c9244","7c196d52-9033-4086-aff3-6bc0ee0426f1"],"propsByKey":{"e147ecfb-0af8-4042-a36f-de59ba9b2d12":{"name":"Bg","sourceUrl":"assets/v3/animations/TqlCkD4rtY7CmdmzzNTibFHmfkzG8uPesm1Hl9u5eWY/e147ecfb-0af8-4042-a36f-de59ba9b2d12.png","frameSize":{"x":626,"y":417},"frameCount":1,"looping":true,"frameDelay":4,"version":"d2eO7_x6v9h2Z3QCrg8vdvOz56m1jG6f","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":417},"rootRelativePath":"assets/v3/animations/TqlCkD4rtY7CmdmzzNTibFHmfkzG8uPesm1Hl9u5eWY/e147ecfb-0af8-4042-a36f-de59ba9b2d12.png"},"7141900d-53ee-4584-b731-91fa075bbb9a":{"name":"play","sourceUrl":null,"frameSize":{"x":384,"y":384},"frameCount":2,"looping":true,"frameDelay":12,"version":"3EHvpApNKpL4jP7cZScndMHAPsTRW4Uj","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":768},"rootRelativePath":"assets/7141900d-53ee-4584-b731-91fa075bbb9a.png"},"4e3110bc-89e9-4ff0-be7f-44e8bb28c278":{"name":"bg2","sourceUrl":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png"},"a9338080-e355-4ee3-b371-e6e66a7d97ed":{"name":"paper","sourceUrl":"assets/v3/animations/CH3tGTQrGXkkFHEM6T12H1c3NLnfWw5uNZz7TRYHIls/a9338080-e355-4ee3-b371-e6e66a7d97ed.png","frameSize":{"x":562,"y":444},"frameCount":1,"looping":true,"frameDelay":4,"version":"_CAmub5okHzdlRO..7FdiXfLlReUm6kD","loadedFromSource":true,"saved":true,"sourceSize":{"x":562,"y":444},"rootRelativePath":"assets/v3/animations/CH3tGTQrGXkkFHEM6T12H1c3NLnfWw5uNZz7TRYHIls/a9338080-e355-4ee3-b371-e6e66a7d97ed.png"},"4389cfe9-6ac1-48c0-b459-c019f61159d6":{"name":"stack","sourceUrl":"assets/v3/animations/CH3tGTQrGXkkFHEM6T12H1c3NLnfWw5uNZz7TRYHIls/4389cfe9-6ac1-48c0-b459-c019f61159d6.png","frameSize":{"x":395,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"CGnD_P0sSHOR34Ax_COEk2MnL5NXIsIo","loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":512},"rootRelativePath":"assets/v3/animations/CH3tGTQrGXkkFHEM6T12H1c3NLnfWw5uNZz7TRYHIls/4389cfe9-6ac1-48c0-b459-c019f61159d6.png"},"6fec1237-1c75-47f2-adad-2b0656afe17d":{"name":"player1","sourceUrl":"assets/api/v1/animation-library/gamelab/HY0ksD67_FK4.xt16upg8TXBqk1OJR5N/category_people/kid_36.png","frameSize":{"x":239,"y":340},"frameCount":1,"looping":true,"frameDelay":2,"version":"HY0ksD67_FK4.xt16upg8TXBqk1OJR5N","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":340},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HY0ksD67_FK4.xt16upg8TXBqk1OJR5N/category_people/kid_36.png"},"e7010f8f-99bc-4e1a-add1-166649ebc21a":{"name":"player2","sourceUrl":"assets/api/v1/animation-library/gamelab/AKnIi4fARdbZ_jONkZ4dRc4pyeaD_Gwc/category_people/kid_36_side.png","frameSize":{"x":225,"y":335},"frameCount":1,"looping":true,"frameDelay":2,"version":"AKnIi4fARdbZ_jONkZ4dRc4pyeaD_Gwc","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":335},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AKnIi4fARdbZ_jONkZ4dRc4pyeaD_Gwc/category_people/kid_36_side.png"},"163446fe-e362-4846-a694-15afd3e7794a":{"name":"nextL","sourceUrl":"assets/api/v1/animation-library/gamelab/6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a/category_icons/goldui16_result.png","frameSize":{"x":396,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6NYfpZPLRo55E4BW8CrSBVVDlWAP4h5a/category_icons/goldui16_result.png"},"a72487f0-c37a-4b8b-9efe-99e908c7d670":{"name":"water ","sourceUrl":"assets/v3/animations/KfooZILbuktkA5TBaRBiJuuySixWzK3zLUwPLc5Cau0/a72487f0-c37a-4b8b-9efe-99e908c7d670.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"jFfEWPicqDF9OTh7HmMbnJxFan6LDNR0","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/KfooZILbuktkA5TBaRBiJuuySixWzK3zLUwPLc5Cau0/a72487f0-c37a-4b8b-9efe-99e908c7d670.png"},"e94348fc-5cca-46bc-a0bd-9b9778f6991b":{"name":"pieces","sourceUrl":"assets/v3/animations/KfooZILbuktkA5TBaRBiJuuySixWzK3zLUwPLc5Cau0/e94348fc-5cca-46bc-a0bd-9b9778f6991b.png","frameSize":{"x":481,"y":519},"frameCount":1,"looping":true,"frameDelay":4,"version":"oWluy1bfxya1K2eyhHHFhvpVwMUWDZW9","loadedFromSource":true,"saved":true,"sourceSize":{"x":481,"y":519},"rootRelativePath":"assets/v3/animations/KfooZILbuktkA5TBaRBiJuuySixWzK3zLUwPLc5Cau0/e94348fc-5cca-46bc-a0bd-9b9778f6991b.png"},"b2b27f4c-1fb9-4f87-98d4-dc54224c9244":{"name":"bg3","sourceUrl":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png"},"7c196d52-9033-4086-aff3-6bc0ee0426f1":{"name":"stone","sourceUrl":"assets/api/v1/animation-library/gamelab/EXwnEiZdteOE6ff6APB3RBor0vYegUVU/category_video_games/ore_coal.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"EXwnEiZdteOE6ff6APB3RBor0vYegUVU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EXwnEiZdteOE6ff6APB3RBor0vYegUVU/category_video_games/ore_coal.png"}}};
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

var level = 0;
var gText = "Let's Save Paper";
var desc = "Everyday, every moment many papers are being wasted."
var desc2  ="Papers are obtained from wood pulp i.e, trees."
var desc3 = "If we throw old paper, we are wasting a tree."
var desc4 ="So instead we could actually make a cup out of old paper." 
var desc5 ="In this way, we could reuse the paper, thus saving a tree." 
var desc6 ="This problem is often ignored, but yet it's a big problem."
var desc7 ="Click space to press button to start."

var bg2,stack,paper1,paper2,paper3;
var bg = createSprite(200,200);bg.setAnimation("Bg");

var water,pieces,stones;

var player = createSprite(40,160,10,10);player.setAnimation("player1");
player.visible= false;player.scale = 0.17;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;

var pButton = createSprite(190,310);pButton.setAnimation("play");pButton.scale = 0.2;

createMaze() ; createPapers()



function draw()   {
 background(0) 
  
    if(keyDown("space")&& level==0){
     level = 1;   pButton.visible = false;  showMaze();
    }  

  
 drawSprites() 
   if(level==0){    showText();  }

if(level == 1)  
{
 level1();
 showPapers()
  if(player.isTouching(paper1)){paper1.destroy()}
  if(player.isTouching(paper3)){paper3.destroy()}
   if(player.isTouching(paper2)){paper2.destroy()}
  
  
  // if(player.isTouching(paper2)){}
  if(player.isTouching(stack)){
   
   fill(rgb(229, 37, 174))
  textSize(30)
  text("You Win",160,170);
   fill(rgb(193, 106, 193))
   textSize(20)
  text("Step1: Collect some waste papers",70,200);
  pButton.setAnimation("nextL")
  pButton.visible =true
  stack.setAnimation("nextL")
  }
 }
 
 if(level == 2){
  level2();

 }


}


if(level == 0){

}

if(level == 1) {
  fill("black")
  textSize(14)
  text("Stack",355,390)
  
  
}
 

if(mousePressedOver(pButton)&& level==1){
   level =2;  level2();
}

function level1(){
  bg.setAnimation("bg2");
 
   if(keyDown("UP_ARROW"))
 {
   
player.y = player.y-10
player.setAnimation("player1")
 
 }
    if(keyDown("LEFT_ARROW"))
    
 {
   
player.x = player.x-10
 player.setAnimation("player2")
 }
    if(keyDown("RIGHT_ARROW"))
     
 {
   
player.x = player.x+10
 player.setAnimation("player2")
 
 }
    if(keyDown("DOWN_ARROW"))
 {
player.setAnimation("player1")
player.y = player.y+10
 
 }
 createEdgeSprites()
 player.bounceOff(edges); player.bounceOff(block1); player.bounceOff(block2)
 player.bounceOff(block3); player.bounceOff(block4); player.bounceOff(block5)
 player.bounceOff(block6);player.bounceOff(block7); player.bounceOff(block8)
 player.bounceOff(block9); player.bounceOff(block10); player.bounceOff(block11)
 player.bounceOff(block12); player.bounceOff(block13); player.bounceOff(block14)
 player.bounceOff(block15); player.bounceOff(block16); player.bounceOff(block17)
 player.bounceOff(block18); player.bounceOff(block19); player.bounceOff(block20)
}

function level2(){
  bg.setAnimation("bg3")
    
}


function createMaze()
{
  block1 = createSprite(80,11,15,200);block1.shapeColor = "turquoise"
 block2 = createSprite(80,395,15,350);block2.shapeColor = "turquoise"
 block3 = createSprite(145,210,80,15);block3.shapeColor = "turquoise"
 block4 = createSprite(142,40,15,70);block4.shapeColor = "turquoise"
 block5 = createSprite(177,235,15,60);block5.shapeColor = "turquoise"
 block6 = createSprite(110,308,60,15);block6.shapeColor = "turquoise"
 block7 = createSprite(240,310,70,15);block7.shapeColor = "turquoise"
 block8 = createSprite(271,390,15,55);block8.shapeColor = "turquoise"
 block9 = createSprite(176,352,15,40);block9.shapeColor = "turquoise"
 block10= createSprite(281,122,15,58);block10.shapeColor = "turquoise"
 block11= createSprite(260,100,40,15);block11.shapeColor = "turquoise"
 block12= createSprite(260,215,15,58);block12.shapeColor = "turquoise"
 block13= createSprite(385,190,58,15);block13.shapeColor = "turquoise"
 block14= createSprite(140,130,58,15);block14.shapeColor = "turquoise"
 block15= createSprite(238,250,58,15);block15.shapeColor = "turquoise"
 block16= createSprite(385,56,58,15);block16.shapeColor = "turquoise"
 block17= createSprite(30,254,60,15);block17.shapeColor = "turquoise"
 block18= createSprite(170,43,60,15);block18.shapeColor = "turquoise"
 block19= createSprite(354,194,15,60);block19.shapeColor = "turquoise"
 block20= createSprite(295,0,15,40);block20.shapeColor = "turquoise"
block1.visible=false;block2.visible=false;block3.visible=false;block4.visible=false;
block5.visible=false;block6.visible=false;block7.visible=false;block8.visible=false;
block9.visible=false;block10.visible=false;block11.visible=false;block12.visible=false;
block13.visible=false;block14.visible=false;block15.visible=false;block16.visible=false;
block17.visible=false;block18.visible=false;block19.visible=false;block20.visible=false;
}

function createPapers()
{
   paper1 = createSprite(240,50); paper1.setAnimation("paper")
 paper1.scale = 0.1; paper1.visible =false
   paper2 = createSprite(130,180);  paper2.setAnimation("paper")
  paper2.scale = 0.1;  paper2.visible =false
   paper3 = createSprite(310,240);  paper3.setAnimation("paper")
  paper3.scale = 0.1;  paper3.visible =false
  stack = createSprite(370,345);stack.setAnimation("stack")
stack.scale = 0.15; stack.visible=false;
}

function showMaze(){
block1.visible=true;block2.visible=true;block3.visible=true;block4.visible=true;
block5.visible=true;block6.visible=true;block7.visible=true;block8.visible=true;
block9.visible=true;block10.visible=true;block11.visible=true;block12.visible=true;
block13.visible=true;block14.visible=true;block15.visible=true;block16.visible=true;
block17.visible=true;block18.visible=true;block19.visible=true;block20.visible=true;
stack.visible=true;
}

function showPapers()
{
  if(level == 1){
    paper1.visible =true; paper2.visible =true; paper3.visible =true; player.visible= true
    }else {  
           paper1.visible =false;paper2.visible =false;paper3.visible =false; player.visible= false
           }
}

function showText()
{
  textFont("ITALIC");fill("pink")
stroke("black")
strokeWeight(2)
textSize(15)
text(desc,10,100);text(desc6,10,125);text(desc2,10,150);text(desc3,10,175);text(desc4,10,200);
text(desc5,10,225);text(desc7,10,250);

push()
fill("turquoise")
stroke("brown");
strokeWeight(4)
textSize(30)
textFont("BOLD");
text(gText,90,55);
pop()
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
