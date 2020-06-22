
// setting up game canvas // 
var gameArea = document.getElementById('gameArea');
var canvas = document.getElementById('game');

var resizeGame = function() { 
    var widthToHeight = 4 / 3; 
    var newWidth = window.innerWidth; 
    var newHeight = window.innerHeight;  
 
    var newWidthToHeight = newWidth / newHeight; 
     
    if (newWidthToHeight > widthToHeight) { 
        newWidth = newHeight * widthToHeight; 
        gameArea.style.height = newHeight + 'px'; 
        gameArea.style.width = newWidth + 'px'; 
    } else { 
        newHeight = newWidth / widthToHeight; 
        gameArea.style.width = newWidth + 'px'; 
        gameArea.style.height = newHeight + 'px'; 
    } 
     
    gameArea.style.marginTop = (-newHeight / 2) + 'px'; 
    gameArea.style.marginLeft = (-newWidth / 2) + 'px'; 
     
    canvas.width = newWidth; 
    canvas.height = newHeight;
}  
gGameEngine.canvasResize = resizeGame;

////////////////////////////////////////// LOADER && INTRO IMAGES ////////////////////////////////////////////////////           
var spritesFiles = [  ["Media/Images/background01.png"], ["Media/Images/DoorLocked.png"], ["Media/Images/DoorLocked.png"], 
					  ["Media/Images/Box.png"], ["Media/Images/lifeBarFull.png"], ["Media/Images/lifeBarEmpty2.png"], 
					  ["Media/Images/intro/frame1.jpg"], [ "Media/Images/intro/frame2.jpg"], [ "Media/Images/intro/frame3.jpg"], 
					  [ "Media/Images/intro/frame4.jpg"], [ "Media/Images/intro/frame5.jpg"], [ "Media/Images/intro/frame6.jpg"], 
					  [ "Media/Images/intro/frame7.jpg"], [ "Media/Images/intro/frame8.jpg"], [ "Media/Images/intro/frame9.jpg"], 
					  ["Media/Images/intro/frame10.jpg"], [ "Media/Images/intro/frame11.jpg"], [ "Media/Images/intro/frame12.jpg"], 
					  [ "Media/Images/intro/frame13.jpg"], [ "Media/Images/intro/frame14.jpg"], [ "Media/Images/intro/frame15.jpg"], 
					  [ "Media/Images/intro/frame16.jpg"], ["Media/Images/intro/frame17.jpg"], [ "Media/Images/intro/frame18.jpg"], 
					  [ "Media/Images/intro/frame19.jpg"], [ "Media/Images/intro/frame20.jpg"], [ "Media/Images/intro/frame21.jpg"], 
					  [ "Media/Images/intro/frame22.jpg"], [ "Media/Images/intro/frame23.jpg"], [ "Media/Images/intro/frame24.jpg"], 
					  [ "Media/Images/intro/frame25.jpg"], [ "Media/Images/intro/frame26.jpg"], [ "Media/Images/intro/frame27.jpg"], 
					  [ "Media/Images/intro/frame28.jpg"], ["Media/Images/intro/frame29.jpg"], [ "Media/Images/intro/frame30.jpg"], 
					  [ "Media/Images/intro/frame31.jpg"], [ "Media/Images/intro/frame32.jpg"], [ "Media/Images/intro/frame33.jpg"], 
					  [ "Media/Images/intro/frame34.jpg"], [ "Media/Images/intro/frame35.jpg"], [ "Media/Images/intro/frame36.jpg"], 
					  [ "Media/Images/intro/frame37.jpg"], [ "Media/Images/intro/frame38.jpg"], [ "Media/Images/intro/frame39.jpg"], 
					  [ "Media/Images/intro/frame40.jpg" ], [ "Media/Images/intro/frame41.jpg" ], [ "Media/Images/intro/frame42.jpg" ], 
					  [ "Media/Images/intro/frame43.jpg" ], [ "Media/Images/intro/frame44.jpg" ], [ "Media/Images/intro/frame45.jpg" ], 
					  [ "Media/Images/intro/frame46.jpg" ], [ "Media/Images/intro/frame47.jpg" ], [ "Media/Images/intro/frame48.jpg" ], 
					  [ "Media/Images/intro/frame49.jpg" ], [ "Media/Images/intro/frame50.jpg" ]
				   ];
HFunctions.loadSprites(spritesFiles);  // Start loading sprites 

////////////////////////////////////////// INTRO //////////////////////////////////////////////////// 
gSM.loadAsync("Media/Audio/GenerisIntro.mp3"); // load intro sound 
var intro = gGameEngine.newScene("intro", canvas, 1696, 1184, 0, 0, 1696, 1184, 0, 0); // create intro scene
//intro.gPhysicsEngine.debugDraw = true;

//////////////////  Creating An Entity. In This case, The intro animation  /////////////////////////// 	
var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
            imageSizeFx: function(x, y) { return [1696, 1184] },	  // The width and height of the animation
              imagePosFx: function(x, y) { return [0, 0] },            // The x and y position of the animation
           };
var animBs = { idle: sets, intro: sets };  // 2 Animation bodies.
var animationFs = [ [ "idle", ["Media/Images/intro/frame1.jpg"]], 
					[ "intro", [ "Media/Images/intro/frame1.jpg","Media/Images/intro/frame2.jpg","Media/Images/intro/frame3.jpg",
					"Media/Images/intro/frame4.jpg","Media/Images/intro/frame5.jpg","Media/Images/intro/frame6.jpg","Media/Images/intro/frame7.jpg",
					"Media/Images/intro/frame8.jpg","Media/Images/intro/frame9.jpg", "Media/Images/intro/frame10.jpg","Media/Images/intro/frame11.jpg",
					"Media/Images/intro/frame12.jpg","Media/Images/intro/frame13.jpg","Media/Images/intro/frame14.jpg","Media/Images/intro/frame15.jpg",
					"Media/Images/intro/frame16.jpg", "Media/Images/intro/frame17.jpg","Media/Images/intro/frame18.jpg","Media/Images/intro/frame19.jpg",
					"Media/Images/intro/frame20.jpg","Media/Images/intro/frame21.jpg","Media/Images/intro/frame22.jpg","Media/Images/intro/frame23.jpg",
					"Media/Images/intro/frame24.jpg","Media/Images/intro/frame25.jpg","Media/Images/intro/frame26.jpg","Media/Images/intro/frame27.jpg",
					"Media/Images/intro/frame28.jpg", "Media/Images/intro/frame29.jpg","Media/Images/intro/frame30.jpg","Media/Images/intro/frame31.jpg",
					"Media/Images/intro/frame32.jpg","Media/Images/intro/frame33.jpg","Media/Images/intro/frame34.jpg","Media/Images/intro/frame35.jpg",
					"Media/Images/intro/frame36.jpg","Media/Images/intro/frame37.jpg","Media/Images/intro/frame38.jpg","Media/Images/intro/frame39.jpg",
					"Media/Images/intro/frame40.jpg" ,"Media/Images/intro/frame41.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,
					"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,
					"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,
					"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,
					"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,
					"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame42.jpg" ,"Media/Images/intro/frame43.jpg" ,"Media/Images/intro/frame44.jpg" ,
					"Media/Images/intro/frame45.jpg" ,"Media/Images/intro/frame46.jpg" ,"Media/Images/intro/frame47.jpg" ,"Media/Images/intro/frame48.jpg" ,
					"Media/Images/intro/frame49.jpg" ,"Media/Images/intro/frame50.jpg" 
				  ] ], ];
var charPs = { id: 'introBack', animBodies: animBs, animFrames: animationFs, initBody: "idle", zIndex: 0 }  // Properties of the Entity. Initial body is "idle".
introA = intro.spawnEntity(charPs); // creating our Entity in the intro scene    


var introOn = true; 
	var soundLoaded = false;
	introA.additionalUpdate = function() {  
			if (!soundLoaded && introOn && gGameEngine.loaded == 56 ) {
				playSoundInstance( "Media/Audio/GenerisIntro.mp3", false );
				this.changeCurrentAnimation("intro");
				soundLoaded = true;
			}
			if (introOn && gGameEngine.loaded == 56 && this.frame == 65 ) introOn = false; 
			if (!introOn) {   
				 intro.close(); 
				 gGameEngine.startScene("loader"); 
				 introOn = false;  
			}    
	};  
	
////////////////////////////////////////// LOADING //////////////////////////////////////////////////// 
var loader = gGameEngine.newScene("loader", canvas, 1696, 1184, 0, 0, 1696, 1184, 0, 0);

/////////////////////////////////////////////
	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [1696, 1184] },
  	            imagePosFx: function(x, y) { return [0 , 0] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/background01.png"    ] ], ];
	var charPs = { id: 'stageBack1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	loader.spawnEntity(charPs); 
	


/////////////////////////////////////////////
	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [200, 400] },
  	            imagePosFx: function(x, y) { return [1696/2-80, 480] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/DoorLocked.png"    ] ], ];
	var charPs = { id: 'stageBack2', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	loader.spawnEntity(charPs); 
	/////////////////////////////////////////////
	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [150, 150] },
  	            imagePosFx: function(x, y) { return [1696/2-200-30, 730] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/Box.png"    ] ], ];
	var charPs = { id: 'stageBack1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	loader.spawnEntity(charPs);    
	/////////////////////////////////////////////
	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [150, 150] },
  	            imagePosFx: function(x, y) { return [1696/2+150-30, 730] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/Box.png"    ] ], ];
	var charPs = { id: 'stageBack1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	loader.spawnEntity(charPs);    	
    //////////////////////////////////////// 
    var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [580*2, 114*1.5 +100] },
  	            imagePosFx: function(x, y) { return [580/2, 520*1.5 +100 ] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/lifeBarFull.png"    ] ], ];
	var charPs = { id: 'stageBack1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	loader.spawnEntity(charPs); 
	//////////////////////////////////////// 
    var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false, orient:"right",           
                imageSizeFx: function(x, y) { return [580*2, 114*1.5 +100] },
  	            imagePosFx: function(x, y) { return [580/2, 520*1.5 +100 ] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/lifeBarEmpty2.png"    ] ], ];
	var charPs = { id: 'stageBack1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	var loadImg = loader.spawnEntity(charPs);  
	
	
	
	///////////////////////////////////////////////////////////////////////////////////////////// 
    var allMaps= [];
    var settings = {
		2: {
			physBody: true,
			"8,4": {
				  settings:{ updBdByImgSize: true, radius: 5.5, 
				  size: { height: 245 , width: 245 },
					offsetBdPos: {x: -100,y: 50},
					offsetImgPos: {x: 100,y: -50},
					offsetBdSz: {x:0,y:0},
					offsetImgSz: {x:1,y:1},									  
				  }, 
				},
			"9,4": { 
				  settings:{ updBdByImgSize: true, radius: 5.5,  
				  size: { height: 245 , width: 245 }, 
				    offsetBdPos: {x:150,y:50},
					offsetImgPos: {x:-150,y:-50},
					offsetBdSz: {x:0,y:0},
					offsetImgSz: {x:1,y:1},
				  }, 
				},
			"1,5": { 
				  settings:{ type:"dynamic", 
				  size: { height: 130 , width: 245 }, 
				  },
				    offsetBdPos: {x:0,y:0},
					offsetImgPos: {x:0,y:0},
					offsetBdSz: {x:0,y:0},
					offsetImgSz: {x:1.2,y:1.2},
				},
			"7,4": { 
				  settings:{ 
				  size: { height: 245 , width: 200 }, 
				  },
				    offsetBdPos: {x:0,y:0},
					offsetImgPos: {x:0,y:0},
					offsetBdSz: {x:0,y:0},
					offsetImgSz: {x:1,y:1},
				},
		}
	};     
	
	
var loading = false;
loadImg.additionalUpdate = function() {

		//if (gGameEngine.loaded == 6) loading = false; 
		if (!loading) {
			var mapFiles = [ ["Media/Images/gameTileMap.json", settings] ];
			maps = HFunctions.spawnMaps("GLAND", mapFiles, allMaps);
			////////////////////////////////////////////////////////////////////////////////////////////// 
			var allSprites= []; 
			var spritesFiles = [ [" Media/Images/ioriSprites1.png", "Media/Images/ioriSprites1.json"], ["Media/Images/backImg1.png"],
								  ["Media/Images/background002.png"], ["Media/Images/foreground1.png"], ["Media/Images/foreground1.png"],
								  ["Media/Images/foreground2.png"], ["Media/Images/lifeBarEmpty.png"], ["Media/Images/lifeBarFull2.png"],
								  ["Media/Images/gameOver01.png"], [ "Media/Images/restart.png" ],  [ "Media/Images/restartHover.png" ],
								  [ "Media/Images/restartClick.png" ], ["Media/Images/coin.png"], ["Media/Images/volume.png"], ["Media/Images/volumeClick.png"],["Media/Images/volumeHover.png"],["Media/Images/bomb.png"],["Media/Images/win.png"],
								  [ "Media/Images/explode1.png"], ["Media/Images/explode2.png"], ["Media/Images/explode3.png"], 
								  ["Media/Images/explode4.png"], ["Media/Images/explode5.png"], ["Media/Images/explode6.png"  ]
							   ];
			HFunctions.loadSprites(spritesFiles, allSprites); 
			loading = true;
		}
		try{
			HFunctions.barUpdate( "loader", loadImg, "right", 580, 100-((gGameEngine.loaded/122)*100), "cutting", 100 );
		} catch(e) {}
 
		if( gGameEngine.loaded >= 122 ) { 
			 loader.close(); 
			 scene1Start(); 
		}
		//console.log(gGameEngine.loaded);
		
};  
	

//////////////////////////////////////////// GAME SETUP //////////////////////////////////////////////////  
 /////////////////////////////////////// 
var scene = gGameEngine.newScene("GLAND", canvas, 245*50, 245*50, 0, 0, 15*245, 8*245, 18*245, 25*245);  
/////////////////////////////////////// 
function scene1Start() {    
     
	 playSoundInstance( "Media/Audio/Eerie-Cyber-World.mp3", true ); 
	/////////////////////////////////////// 
	
        /////////////////////////////////////// 
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 18*245, y: 25*245 }, size: { height: 245*8 , width: 245*15},           
	               };
		var animBs = { animationIdle: sets };
		var animationFs = [ [ "animationIdle", ["Media/Images/backImg1.png"] ], ];
		var charPs = { id: 'backImg1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: -2 } 
		var backImg1 = scene.spawnEntity(charPs);  
		//////////////////////////////////////// 
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 0, y: 0 }, size: { height: 245*50 , width: 245*50},           
	               };
		var animBs = { animationIdle: sets };
		var animationFs = [ [ "animationIdle", ["Media/Images/background002.png"] ], ];
		var charPs = { id: 'backImg2', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: -1 } 
		var backImg2 = scene.spawnEntity(charPs);  
		////////////////////////////////////////
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 0, y: 0 }, size: { height: 245*50 , width: 245*50},           
	               };
		var animBs = { animationIdle: sets };
		var animationFs = [ [ "animationIdle", ["Media/Images/foreground1.png"] ], ];
		var charPs = { id: 'foreground1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 5 } 
		var foreground1 = scene.spawnEntity(charPs);  
		////////////////////////////////////////
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 18*245, y: 25*245 }, size: { height: 245*8 , width: 245*15},           
	               };
		var animBs = { animationIdle: sets };
		var animationFs = [ [ "animationIdle", ["Media/Images/foreground2.png"] ], ];
		var charPs = { id: 'foreground2', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 6 } 
		var foreground2 = scene.spawnEntity(charPs);  
		////////////////////////////////////////   
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 26*245, y: 25.3*245 }, size: { height: 1*245 , width: 245*6.7},           
	               };
		var animBs = { animationIdle: sets };
		var animationFs = [ [ "animationIdle", ["Media/Images/lifeBarEmpty.png"] ], ];
		var charPs = { id: 'lifeBarEmpty', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 7 } 
		var lifeBarEmpty = scene.spawnEntity(charPs); 
		//////////////////////////////////////// 
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 26*245, y: 25.3*245 }, size: { height: 1*245 , width: 245*6.7},           
	               };
		var animBs = { animationIdle: sets };
		var animationFs = [ [ "animationIdle", ["Media/Images/lifeBarFull2.png"] ], ];
		var charPs = { id: 'lifeBarFull', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 8 } 
		var lifeBarFull = scene.spawnEntity(charPs); 
		//////////////////////////////////////// 
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 18.3*245, y: 25.3*245 }, size: { height: 0.8*245 , width: 245*0.8},           
	               };
		var animBs = { bomb: sets };
		var animationFs = [ [ "bomb", ["Media/Images/bomb.png"] ], ];
		var charPs = { id: 'bomb', animBodies: animBs, animFrames: animationFs, initBody: "bomb", zIndex: 7 } 
		var playerBomb = scene.spawnEntity(charPs);  
		//////////////////////////////////////// 
		var sets = {enablePhysBody: false, useImageSize: false, useSpriteSheet: false, 
					pos: { x: 20.3*245, y: 25.3*245 }, size: { height: 0.8*245 , width: 245*0.8},           
	               };
		var animBs = { coin: sets };
		var animationFs = [ [ "coin", ["Media/Images/coin.png"] ], ];
		var charPs = { id: 'coin', animBodies: animBs, animFrames: animationFs, initBody: "coin", zIndex: 7 } 
		var playerCoin = scene.spawnEntity(charPs);  
		////////////////////////////////////////	
		
		////////////////////////////////////////
		var sets = { useImageSize: false, useSpriteSheet: false, 
					 pos: { x: 31.5*245 , y: 32*245 } , size: { height: 0.8*245 , width: 0.8*245 } }; 
		var animBs = { volume: sets, volumeClick : sets , volumeHover: sets};
		var animationFs = [ [ "volume", [ "Media/Images/volume.png" ] ], [ "volumeHover", [ "Media/Images/volumeHover.png" ] ], [ "volumeClick", [ "Media/Images/volumeClick.png" ] ], ];
		var charPs = { id: 'volume', animBodies: animBs, animFrames: animationFs, initBody: "volume", zIndex: 7 };
		var volume = scene.spawnEntity(charPs); 
		volume.onMouseDown = function(event) { 
			playSoundInstance( "Media/Audio/cursord.wav", false );   
	        gSM.togglemute();
	        this.changeCurrentAnimation("volumeClick");    
		}
		volume.onMouseUp = function(event) { 
		     this.changeCurrentAnimation("volume");   
		} 
		volume.onMouseHover = function(event) {
			 this.changeCurrentAnimation("volumeHover"); 
		}
		////////////////////////////////////////
	    var font="bold 100px Verdana";  
		var gradient=scene.gRenderEngine.context.createLinearGradient(0,0,scene.gRenderEngine.canvas.width,0);
		gradient.addColorStop("0","yellow");
		gradient.addColorStop("0.5","green");
		gradient.addColorStop("1.0","yellow");  
	    //////////////////////////////////////// 
		var sets = { enablePhysBody: false, useTextImage: true, font: font, fillStyle: gradient,  
					pos: { x: 19.2*245, y: 25.2*245 }, size: { height: 0.8*245 , width: 245*1}, 
	               };
		var animBs = { bombCnt: sets };
		var animationFs = [ [ "bombCnt", ["x0"    ] ], ];
		var charPs = { id: 'bombCnt', animBodies: animBs, animFrames: animationFs, initBody: "bombCnt", zIndex: 7 } 
		bombCnt = scene.spawnEntity(charPs);     
		//////////////////////////////////////// 
		var sets = { enablePhysBody: false, useTextImage: true, font: font, fillStyle: gradient, 
					pos: { x: 21.3*245, y: 25.2*245 }, size: { height: 0.8*245 , width: 245*1}, 
	               };
		var animBs = { coinCnt: sets };
		var animationFs = [ [ "coinCnt", ["x0"    ] ], ];
		var charPs = { id: 'coinCnt', animBodies: animBs, animFrames: animationFs, initBody: "coinCnt", zIndex: 7 } 
		var coinsCnt = scene.spawnEntity(charPs);          
		//////////////////////////////////////// 
		var sets = { enablePhysBody: false, useTextImage: true, font: "90px Verdana", fillStyle: gradient,    
					pos: { x: 22.6*245, y: 25.2*245 }, size: { height: 0.8*245 , width: 245*4.8},  
	               };
		var animBs = { time: sets };
		var animationFs = [ [ "time", ["TIME: 00: 00: 00"    ] ], ];
		var charPs = { id: 'time', animBodies: animBs, animFrames: animationFs, initBody: "time", zIndex: 7 } 
		var timeCnt = scene.spawnEntity(charPs);  
	    ////////////////////////////////////////
	    /////////////////////////////////////// timer ///////////////////////////////////////////////////////
		function pad ( val ) { return val > 9 ? val : "0" + val; } // used for timer
		var sec = 0, timer, time;
		timer = setInterval( function(){
				//if (gamePause || gameOver) return;
			    time = pad(parseInt(sec/3600,10))+": "+pad(parseInt(sec/60,10))+": "+pad(++sec%60); 
			    timeCnt.animationFrames = [ [ "time", ["TIME: "+ time] ], ];
				timeCnt.loadText(timeCnt.animationFrames, timeCnt.settings); 
			}, 1000);
	 	//////////////////////////////////////////////////////////////////////////////////////////////	
	 	var toReSpawn = {};
	 	/////////////////////////////////////////////////////////////////////////////////////////////
	 	
	 	var settings = { updBdByImgSize: true,  type:"dynamic", pos: { x: 23*245, y: 30*245 } , size: { height: 224 , width: 169 } }; 
		var animBodies = { animationIdle: settings ,animationWalk: settings, animationCrouch: settings,
						   animationJumpStart: settings, animationJumpMain: settings, animationFall: settings,
			}; 
		var animFrames = ioriActions;
		var keys = [ "Left", "Right", "Down", "Up", "Q", "W" , "E", "A", "S", "D"]; 
		var charProps = { id: "player", animBodies: animBodies, initBody: "animationIdle", animFrames: animFrames, keys: keys, zIndex: 2 } 
		var player = scene.spawnEntity(charProps);
		player.offsetImgSz = {x:1.3, y:1.3}; 
		player.offsetBdSz = {x:2,y:2}; 
		player.moveSpeedX = 30;
		var playerCoins = 0;
		var playerBombs = 0;
		player.onKeyDown = function ( event ) { 
				if(event.toString()=="Q") console.log(this.curTch)
				if(event.toString()=="A") {
					/////////////////////////////////////////////////////////////////////
					if(this.curTch && playerBombs>0) {
						var curTchObj = scene.objects[this.curTch];
						var curTch = this.curTch.split("_");
						if( (curTch[3]== 0 && curTch[4]== 0) || (curTch[3]== 0 && curTch[4]== 1) || (curTch[3]== 0 && curTch[4]== 2)
							|| (curTch[3]== 1 && curTch[4]== 0) || (curTch[3]== 1 && curTch[4]== 1) || (curTch[3]== 1 && curTch[4]== 2)
							|| (curTch[3]== 2 && curTch[4]== 0) || (curTch[3]== 2 && curTch[4]== 1) || (curTch[3]== 2 && curTch[4]== 2)
							|| (curTch[3]== 7 && curTch[4]== 0)
							) {
							var sets = { type:"static", useImageSize: false, 
										 size: { height: curTchObj.imageSize.height , width: curTchObj.imageSize.width }, 
			 		                     pos: { x: curTchObj.imagePos.x , y: curTchObj.imagePos.y } ,   
			 		                   };  
				            curTchObj.animation["explode"] = [ "Media/Images/explode1.png","Media/Images/explode2.png","Media/Images/explode3.png",
				                                          "Media/Images/explode4.png","Media/Images/explode5.png","Media/Images/explode6.png"  ];
							curTchObj.animationBodies["explode"] = sets;
							playSoundInstance( "Media/Audio/explo.mp3", false ); 
							curTchObj.changeCurrentAnimation("explode");
							curTchObj.additionalUpdate = function() {
								if(this.currentAnimation == "explode" && this.frame == 5) scene.removeEntity(this.id);
							}
							playerBombs -= 1;  
							bombCnt.animationFrames = [ [ "bombCnt", ["x"+playerBombs] ], ];
							bombCnt.loadText(bombCnt.animationFrames, bombCnt.settings);           
	                    }
	                }
                    /////////////////////////////////////////////////////////////////////
                }
				HFunctions.moveRight( "GLAND", this, event, charProps, "animationWalk", ["Right"],  this.moveSpeedX/30  );
				HFunctions.moveLeft( "GLAND", this, event, charProps, "animationWalk", ["Left"],  this.moveSpeedX/30  ); 
				HFunctions.crouch( "GLAND", this, event, charProps, "animationCrouch", ["Down"] ); 
				HFunctions.doubleJump( "GLAND", this, event, charProps,["animationJumpStart", "animationJumpMain", "animationFall"], ["Up"], -90, 100);   
				HFunctions.doubleJump( "GLAND", this, event, charProps,["animationJumpStart", "animationJumpMain", "animationFall"], ["Up", "Left"], -110, 160);  
				HFunctions.doubleJump( "GLAND", this, event, charProps,["animationJumpStart", "animationJumpMain", "animationFall"], [ "Left","Up"], -110, 160);   
				HFunctions.doubleJump( "GLAND", this, event, charProps,["animationJumpStart", "animationJumpMain", "animationFall"], [ "Right","Up"], -70, 160);  
				HFunctions.doubleJump( "GLAND", this, event, charProps,["animationJumpStart", "animationJumpMain", "animationFall"], ["Up", "Right"], -70, 160);
			};
		
		player.addOnTouch = function ( otherBody, point, impulse, physOwner ) { 

				var curTch = physOwner.id.split("_");
				if(curTch[2]==2 && curTch[3]==1  && curTch[4]==5) { 
					this.lifetime -= 5;
				}
				if(curTch[2]==2 && curTch[3]==8  && curTch[4]==4) { 
					this.lifetime -= 5;
				}
				if(curTch[2]==2 && curTch[3]==6  && curTch[4]==0) { 
					if(this.lifetime<100)this.lifetime += 20;
					scene.removeEntity(this.curTch);
				}
				if(curTch[2]==2 && curTch[3]==6  && curTch[4]==1) { 
					playerCoins += 1;
					toReSpawn[this.curTch] = scene.objects[this.curTch].entityProps;
					scene.removeEntity(this.curTch);
					coinsCnt.animationFrames = [ [ "coinCnt", ["x"+playerCoins] ], ];
					coinsCnt.loadText(coinsCnt.animationFrames, coinsCnt.settings); 
				}
				if(curTch[2]==2 && curTch[3]==6  && curTch[4]==2) { 
					playerBombs += 1;
					toReSpawn[this.curTch] = scene.objects[this.curTch].entityProps;
					scene.removeEntity(this.curTch); 
					bombCnt.animationFrames = [ [ "bombCnt", ["x"+playerBombs] ], ];
					bombCnt.loadText(bombCnt.animationFrames, bombCnt.settings); 
				}
			 
		};

		player.additionalUpdate = function ( event ) {

				// console.log(scene.entities.length);

				var pos = this.physBody.GetPosition();
				
				if(pos.y*30>=245*50){        
					scene.close();   
					gGameEngine.startScene("gameover"); 
				}
				if(this.lifetime<=0){ 
					scene.close();  
					gGameEngine.startScene("gameover"); 
				}
				if(playerCoins>=95){ 
					scene.close();  
					gGameEngine.startScene("win"); 
				}
				 // console.log(scene.objects["tile_526_2_8_4"].offsetBdPos);
				 var vel = this.physBody.GetLinearVelocity();
				if ( vel.y > 50 && this.currentAnimType != "fallMain" ) { 
					  this.jumpState = ["falling", keys].toString(); 
					  this.changeCurrentAnimation("animationFall"); 
					  this.currentActions.push("animationFall");
					  this.currentAnimType = "fallMain";  
				  }
				
				//scene.camera.width = (scene.camera.height)*(window.innerWidth/window.innerHeight) ; 
				var oldCamX = scene.camera.x;
				var oldCamY = scene.camera.y;
				scene.camera.x = this.imagePos.x - (scene.camera.width/2 );
				scene.camera.y = this.imagePos.y - (scene.camera.height/2 );  

				playerCoin.imagePos.x = playerCoin.imagePos.x + (scene.camera.x-oldCamX);
				playerCoin.imagePos.y = playerCoin.imagePos.y + (scene.camera.y-oldCamY);
				playerBomb.imagePos.x = playerBomb.imagePos.x + (scene.camera.x-oldCamX);
				playerBomb.imagePos.y = playerBomb.imagePos.y + (scene.camera.y-oldCamY);
				coinsCnt.imagePos.x = coinsCnt.imagePos.x + (scene.camera.x-oldCamX);
				coinsCnt.imagePos.y = coinsCnt.imagePos.y + (scene.camera.y-oldCamY);
				bombCnt.imagePos.x = bombCnt.imagePos.x + (scene.camera.x-oldCamX);
				bombCnt.imagePos.y = bombCnt.imagePos.y + (scene.camera.y-oldCamY);
				timeCnt.imagePos.x = timeCnt.imagePos.x + (scene.camera.x-oldCamX);
				timeCnt.imagePos.y = timeCnt.imagePos.y + (scene.camera.y-oldCamY);
				var volumePos = volume.physBody.GetPosition();
				volumePos.x = volumePos.x + (scene.camera.x-oldCamX)/30;
				volumePos.y = volumePos.y + (scene.camera.y-oldCamY)/30;
				volume.physBody.SetPosition(volumePos);

				backImg1.imagePos.x = backImg1.imagePos.x + (scene.camera.x-oldCamX);
				backImg1.imagePos.y = backImg1.imagePos.y + (scene.camera.y-oldCamY);
				backImg2.imagePos.x = backImg2.imagePos.x + (scene.camera.x-oldCamX)/2;
				backImg2.imagePos.y = backImg2.imagePos.y + (scene.camera.y-oldCamY)/2;
				foreground1.imagePos.x = foreground1.imagePos.x - (scene.camera.x-oldCamX)/2;
				foreground1.imagePos.y = foreground1.imagePos.y - (scene.camera.y-oldCamY)/2;
				foreground2.imagePos.x = foreground2.imagePos.x + (scene.camera.x-oldCamX) ;
				foreground2.imagePos.y = foreground2.imagePos.y + (scene.camera.y-oldCamY) ;

				lifeBarEmpty.imagePos.x = lifeBarEmpty.imagePos.x + (scene.camera.x-oldCamX);
				lifeBarEmpty.imagePos.y = lifeBarEmpty.imagePos.y + (scene.camera.y-oldCamY);
				lifeBarFull.imagePos.x = lifeBarFull.imagePos.x + (scene.camera.x-oldCamX);
				lifeBarFull.imagePos.y = lifeBarFull.imagePos.y + (scene.camera.y-oldCamY); 
				
				HFunctions.barUpdate( "lifeBarFull", lifeBarFull, "right", lifeBarFull.imageSize.width, ((this.lifetime/100)*100), "cutting", 100 );
								
			};
 
	
	///////////////////////////////////////// 
	gGameEngine.startScene("GLAND");
}
	///////////////////////////////////////// GAME OVER /////////////////////////////////////////////////////
	
	var gameover = gGameEngine.newScene("gameover", canvas, 1696, 1184, 0, 0, 1696, 1184, 0, 0); 
	
	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [1696, 1184] },// 1250
  	            imagePosFx: function(x, y) { return [0 , 0] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/gameOver01.png"] ], ];
	var charPs = { id: 'gameover', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	gameover.spawnEntity(charPs); 
	 ////////////////////////////////////////
    
	var sets = { enablePhysBody: true, useImageSize: false,  useSpriteSheet: false,  
				 pos: { x: 1500/2 , y: 1090 } , size: { height: 80 , width: 300 } }; 
	var animBs = { animIdle: sets, animHover: sets, animClick: sets };
	var animationFs = [ [ "animIdle", [ "Media/Images/restart.png" ] ], [ "animHover", [ "Media/Images/restartHover.png" ] ], [ "animClick", [ "Media/Images/restartClick.png" ] ], ];
	var charPs = { id: 'restart', animBodies: animBs, animFrames: animationFs, initBody: "animIdle", zIndex: 5 };
	var restart = gameover.spawnEntity(charPs); 
	restart.onMouseHover = function(event) {  
		//playSoundInstance( "Media/Audio/cursord.wav", false );
		 this.changeCurrentAnimation("animHover"); 
	}
	restart.onMouseDown = function(event) {  
		 playSoundInstance( "Media/Audio/cursord.wav", false );
		 this.changeCurrentAnimation("animClick"); 
	}
	restart.onMouseUp = function(event) { 
		this.changeCurrentAnimation("animIdle");  
		gameover.close();
		//for(var i in toReSpawn){ scene.spawnEntity(toReSpawn[i]);} 
		gGameEngine.startScene("GLAND");
		var ent = scene.objects["player"];
		ent.lifetime = 100;
		var pos = ent.physBody.GetPosition();
		ent.pos.x = (23*245)/30;
		ent.pos.y = (30*245)/30; 
		playerCoins = 0;
		playerBombs = 0;
		ent.physBody.SetPosition(pos);
	}  
	///////////////////////////////////////// WIN /////////////////////////////////////////////////////
	
	var win = gGameEngine.newScene("win", canvas, 1696, 1184, 0, 0, 1696, 1184, 0, 0); 
	
	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [1696, 1184] },// 1250
  	            imagePosFx: function(x, y) { return [0 , 0] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/win.png"] ], ];
	var charPs = { id: 'win', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	win.spawnEntity(charPs); 
	 ////////////////////////////////////////
    
	var sets = { enablePhysBody: true, useImageSize: false,  useSpriteSheet: false,  
				 pos: { x: 1500/2 , y: 1090 } , size: { height: 80 , width: 300 } }; 
	var animBs = { animIdle: sets, animHover: sets, animClick: sets };
	var animationFs = [ [ "animIdle", [ "Media/Images/restart.png" ] ], [ "animHover", [ "Media/Images/restartHover.png" ] ], [ "animClick", [ "Media/Images/restartClick.png" ] ], ];
	var charPs = { id: 'restart', animBodies: animBs, animFrames: animationFs, initBody: "animIdle", zIndex: 5 };
	var winRestart = win.spawnEntity(charPs); 
	winRestart.onMouseHover = function(event) {  
		//playSoundInstance( "Media/Audio/cursord.wav", false );
		 this.changeCurrentAnimation("animHover");
	}
	winRestart.onMouseDown = function(event) {  
		//playSoundInstance( "Media/Audio/cursord.wav", false );
		 this.changeCurrentAnimation("animClick"); 
	}
	winRestart.onMouseUp = function(event) { 
		 this.changeCurrentAnimation("animIdle");  
		 win.close();  
		//for(var i in toReSpawn){ scene.spawnEntity(toReSpawn[i]);} 
		gGameEngine.startScene("GLAND");
		var ent = scene.objects["player"];
		ent.lifetime = 100;
		var pos = ent.physBody.GetPosition();
		ent.pos.x = (23*245)/30;
		ent.pos.y = (30*245)/30;
		playerCoins = 0;
		playerBombs = 0;
		ent.physBody.SetPosition(pos);
	}   

 
// starting intro scene // 
gGameEngine.startScene('intro'); 




	function toggleFull() {
       if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
         if (document.documentElement.requestFullscreen) {
           document.documentElement.requestFullscreen();
         } else if (document.documentElement.mozRequestFullScreen) {
           document.documentElement.mozRequestFullScreen();
         } else if (document.documentElement.webkitRequestFullscreen) {
           document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
       } else {
          if (document.cancelFullScreen) {
             document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
             document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
       }
     }
     
     



    
var ioriActions = [ 
					 [
						"animationIdle",
						['iori_Kof000.png',
						'iori_Kof002.png',
						'iori_Kof003.png',
						'iori_Kof004.png',
						'iori_Kof005.png',
						'iori_Kof006.png',
						'iori_Kof007.png',
						'iori_Kof008.png',
						'iori_Kof009.png',
						'iori_Kof010.png',
						'iori_Kof011.png',
						'iori_Kof012.png',
						'iori_Kof013.png',
						'iori_Kof014.png',
						'iori_Kof015.png',
						'iori_Kof016.png',
						'iori_Kof017.png',
						'iori_Kof018.png',
						'iori_Kof019.png',
						'iori_Kof020.png',
						 ],
						 ["",
						  ""
						 ]
						  
					],

					[
						"animationWalk",
						['iori_Kof047.png',
						'iori_Kof048.png',
						'iori_Kof049.png',
						'iori_Kof050.png',
						'iori_Kof051.png',
						'iori_Kof052.png',
						'iori_Kof053.png',
						'iori_Kof054.png',
						'iori_Kof055.png',
						'iori_Kof056.png',
						'iori_Kof057.png',
						'iori_Kof058.png'
						 ],
						 ["",
						  ""
						 ]
						  
					],

					[
						"animationCrouch",
						[
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png', 
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof029.png',
						'iori_Kof030.png',
						'iori_Kof031.png',
						'iori_Kof032.png',
						'iori_Kof033.png',
						'iori_Kof034.png',
						'iori_Kof035.png',
						'iori_Kof036.png',
						'iori_Kof037.png',
						'iori_Kof038.png',
						'iori_Kof039.png',
						'iori_Kof040.png',
	
						 ],
						 ["",
						  ""
						 ]
						  
					],
				
					[
						"animationJumpStart__",
						[ 
						'iori_Kof072.png',
						'iori_Kof073.png',
						'iori_Kof089.png',
						'iori_Kof088.png',
						'iori_Kof087.png',
						'iori_Kof086.png', 
						 ],
						 ["",
						  ""
						 ]
						  
					],
				
					[
						"animationJumpMain__",
						[ 
						'iori_Kof074.png', 
						'iori_Kof075.png', 
						'iori_Kof076.png', 
						'iori_Kof077.png', 
						'iori_Kof078.png', 
						'iori_Kof079.png', 
						'iori_Kof080.png', 
						'iori_Kof081.png', 
						'iori_Kof082.png',
						'iori_Kof083.png', 
						'iori_Kof084.png',  
						],
						 ["",
						  ""
						 ]
						  
					],  
					
					[
						"animationJumpStart",
						[ 
						'iori_Kof072.png', 
						 ],
						 ["",
						  ""
						 ]
						  
					],
				
					[
						"animationJumpMain",
						[  
						'iori_Kof079.png',   
						],
						 ["",
						  ""
						 ]
						  
					],  
				
					[
						"animationFall",
						[  
						'iori_Kof079.png',   
						],
						 ["",
						  ""
						 ]
						  
					], 
					 


 ];


 
















			 