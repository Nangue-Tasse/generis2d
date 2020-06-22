
// setting up game canvas // 
var gameArea = document.getElementById('gameArea'); 
var canvas = document.getElementById('game'); 
 
var resizeGame = function() { 
    var widthToHeight = 8 / 10; 
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
////////////////////////////////////////// INTRO //////////////////////////////////////////////////// 
//gSM.loadAsync("Media/Audio/GenerisIntro.mp3"); // load intro sound 
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
var charPs = { id: 'introBack', animBodies: animBs, animFrames: animationFs, initBody: "intro", zIndex: 0 }  // Properties of the Entity. Initial body is "idle".
introA = intro.spawnEntity(charPs); // creating our Entity in the intro scene    

introA.additionalUpdate = function() { 
	if ( this.frame == 65) {    
		intro.close();
		$("body").css("background-image", "url('Media/Images/TetrisImg.jpg') "); 
		playSoundInstance( "Media/Audio/Tetris.mp3", true );
		gGameEngine.startScene("scene1");
	}    
};  
	
////////////////////////////////////////// LOADING //////////////////////////////////////////////////// 
var loader = gGameEngine.newScene("loader", canvas, 1696, 1184, 0, 0, 1696, 1184, 0, 0);
	//loader.gPhysicsEngine.debugDraw = true; 
    //////////////////////////////////////// 
	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [200, 200] },
  	            imagePosFx: function(x, y) { return [1696/2-100, 400] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/iconT.png"    ] ], ];
	var charPs = { id: 'stageBack4', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	loader.spawnEntity(charPs);    
    ////////////////////////////////////////
    var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
                imageSizeFx: function(x, y) { return [980, 114] },
  	            imagePosFx: function(x, y) { return [380, 620] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/loading.png"    ] ], ];
	var charPs = { id: 'stageBack5', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	loader.spawnEntity(charPs); 
	//////////////////////////////////////// 
    var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false, orient:"right",           
                imageSizeFx: function(x, y) { return [980, 114] },
  	            imagePosFx: function(x, y) { return [380, 620] },
               };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/loading2.png"    ] ], ];
	var charPs = { id: 'stageBack6', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	var loadImg = loader.spawnEntity(charPs);	 
///////////////////////////////////////////////////////////////////////////////////////////// 
 
var loading = false; 
loadImg.additionalUpdate = function() {  
		//if (gGameEngine.loaded == 6) loading = false; 
		if (!loading) { 
			var allSprites= []; 
			var spritesFiles = [["Media/Images/tetrisSprites.png", "Media/Images/tetrisSprites.json"],
                     ["Media/Images/options1Img.png"], ["Media/Images/replay1Img.png"], ["Media/Images/TetrisImg.png"],
                     ["Media/Images/tetrisGame1Img.png"], ["Media/Images/tetrisGame2Img.png"],

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
			HFunctions.loadSprites(spritesFiles, allSprites); 
			loading = true;
		}
		try{
			HFunctions.barUpdate( "loader", loadImg, "right", 580, 100-((gGameEngine.loaded/57)*100), "cutting", 100 );
		} catch(e) {}
		  
		if( gGameEngine.loaded >= 57 ) { 
			 // playSoundInstance( "Media/Audio/Tetris.mp3", true );
			 loader.close();  
			$("body").css("background-image", "none"); 
			playSoundInstance( "Media/Audio/GenerisIntro.mp3", false );
			gGameEngine.startScene("intro");	
		}
		   
		//  console.log(gGameEngine.loaded);
		
};  
//////////////////////////////////////////////////////////////////////////////////////////////
		
	var scene = gGameEngine.newScene("scene1", canvas, 1696, 1184, 0, 0, 1696, 1184, 0, 0);  
	scene.gPhysicsEngine.debugDraw = false;
	gSM.volume = 0.01; 

	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
	            imageSizeFx: function(x, y) { return [1696, 1184] },
		            imagePosFx: function(x, y) { return [0, 0] },
	           };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/TetrisImg.png"] ], ];
	var charPs = { id: 'stageBack1', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	scene.spawnEntity(charPs);  
	////////////////////////////////////////

	var sets = { useImageSize: false, pos: { x: 200 , y: 750 } , size: { height: 250 , width: 250 } }; 
	var animBs = { animationIdle: sets, animationClickDown: sets };
	var animationFs = [ [ "animationIdle", [ "menu3.png" ] ], [ "animationClickDown", [ "menu31.png" ] ], ];
	var charPs = { id: 'playB', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 1 };
	var playB = scene.spawnEntity(charPs); 
	playB.onMouseDown = function(event) { 
		playSoundInstance( "Media/Audio/cursord.wav", false );
		this.changeCurrentAnimation("animationClickDown"); 
	}
	playB.onMouseUp = function(event) {
		this.changeCurrentAnimation("animationIdle");  
		scene.close(); 
		create();   
		gGameEngine.startScene("scene2");
	}  
	//////////////////////////////////////// 

	var sets = { useImageSize: false, pos: { x: 1200 , y: 750 } , size: { height: 250 , width: 250 } }; 
	var animBs = { volume: sets, volumeClick : sets };
	var animationFs = [ [ "volume", [ "menu01.png" ] ], [ "volumeClick", [ "menu011.png" ] ], ];
	var charPs = { id: 'volume', animBodies: animBs, animFrames: animationFs, initBody: "volume", zIndex: 1 };
	var playB = scene.spawnEntity(charPs); 
	playB.onMouseDown = function(event) { 
		playSoundInstance( "Media/Audio/cursord.wav", false ); 
		
		if(this.currentAnimation == "volume") { 
		        gSM.togglemute();
		        this.changeCurrentAnimation("volumeClick");  
		}
		else {
		     gSM.togglemute();
		     this.changeCurrentAnimation("volume");  
		}
	}  
	playB.onMouseUp = function(event) { 
	     this.changeCurrentAnimation("volume");   
	}  
	var created;
function create( ) { 	  
	 
	 if(created) {
		gGameEngine.startScene("scene2");  
	 	return;
	 }
	 created = true; 	  
	 

	//////////////////////////////////////////////////////////////////////////////////////////////
		
	var scene2 = gGameEngine.newScene("scene2", canvas, 1696, 1786, 0, 0, 1696, 1786, 0, 0); 
	scene2.setGravity(0, 3);
	scene2.gPhysicsEngine.debugDraw = false;
	 
	//////////////////////////////////////// 
	var font="50px Verdana";  
	var gradient=scene2.gRenderEngine.context.createLinearGradient(0,0,scene2.gRenderEngine.canvas.width,0);
	gradient.addColorStop("0","yellow");
	gradient.addColorStop("0.5","yellow");
	gradient.addColorStop("1.0","red");  
	//////////////////////////////////////// 
	var sets = { enablePhysBody: true, useTextImage: true, font: font, fillStyle: gradient,            
	            imageSizeFx: function(x, y) { return [400, 100] },
		            imagePosFx: function(x, y) { return [ 700 , 1600] },
	           };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["SCORE: 0"    ] ], ];
	var charPs = { id: 'score', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 5 } 
	 scene2.spawnEntity(charPs);     
	//////////////////////////////////////// 
	var sets = { enablePhysBody: true, useTextImage: true, font: "35px Verdana", fillStyle: gradient,            
	            imageSizeFx: function(x, y) { return [400, 100] },
		            imagePosFx: function(x, y) { return [ 700 , 120] },
	           };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["TIME: 00: 00: 00"    ] ], ];
	var charPs = { id: 'time', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 5 } 
	 scene2.spawnEntity(charPs);      
	////////////////////////////////////////

	var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
	            imageSizeFx: function(x, y) { return [1696, 1786] },
		            imagePosFx: function(x, y) { return [0, 0] },
	           };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/tetrisGame2Img.png"    ] ], ];
	var charPs = { id: 'stageBack2', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 2 } 
	scene2.spawnEntity(charPs);  
	 ////////////////////////////////////////
	 
	 var sets = { enablePhysBody: false, useImageSize: false,  useSpriteSheet: false,            
	            imageSizeFx: function(x, y) { return [1696, 1786] }, 
		            imagePosFx: function(x, y) { return [0, 0] },
	           };
	var animBs = { animationIdle: sets };
	var animationFs = [ [ "animationIdle", ["Media/Images/tetrisGame1Img.png"    ] ], ];
	var charPs = { id: 'stageBack3', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 0 } 
	scene2.spawnEntity(charPs); 
	////////////////////////////////////////

	var sets = { useImageSize: false, pos: { x: 50 , y: 20 } , size: { height: 100 , width: 100 } }; 
	var animBs = { pause: sets, pauseClick : sets };
	var animationFs = [ [ "pause", [ "menu1.png" ] ], [ "pauseClick", [ "menu11.png" ] ], ];
	var charPs = { id: 'pause', animBodies: animBs, animFrames: animationFs, initBody: "pause", zIndex: 1 };
	var pauseA = scene2.spawnEntity(charPs); 
	pauseA.onMouseDown = function(event) { 
		playSoundInstance( "Media/Audio/cursord.wav", false );
		this.changeCurrentAnimation("pauseClick"); 
	}
	pauseA.onMouseUp = function(event) {
		this.changeCurrentAnimation("pause");   
		 createRestart(scene2);
	}   
	////////////////////////////////////////

	var sets = { useImageSize: false, pos: { x: 170 , y: 20 } , size: { height: 100 , width: 100 } }; 
	var animBs = { volume: sets, volumeClick : sets };
	var animationFs = [ [ "volume", [ "menu01.png" ] ], [ "volumeClick", [ "menu011.png" ] ], ];
	var charPs = { id: 'volume1', animBodies: animBs, animFrames: animationFs, initBody: "volume", zIndex: 1 };
	var volumeB = scene2.spawnEntity(charPs); 
	volumeB.onMouseDown = function(event) { 
		playSoundInstance( "Media/Audio/cursord.wav", false );  
		if(this.currentAnimation == "volume") { 
		         gSM.togglemute();
		        this.changeCurrentAnimation("volumeClick");  
		}
		else {
		     gSM.togglemute();
		    this.changeCurrentAnimation("volume");  
		}
	}
	volumeB.onMouseUp = function(event) { 
	     this.changeCurrentAnimation("volume");   
	}


	////////////////////////////////////////

	 
	////////////////////////////////////////

	var sets = { useImageSize: false, pos: { x: 450 , y: 120 } , size: { height: 1600 , width: 60 } }; 
	var animBs = { gameB: sets,  };
	var animationFs = [ [ "gameB", [  ] ] ];
	var charPs = { id: 'gameB1', animBodies: animBs, animFrames: animationFs, initBody: "gameB", zIndex: 1 };
	scene2.spawnEntity(charPs);   
	////////////////////////////////////////

	var sets = { useImageSize: false, pos: { x: 1170 , y: 120 } , size: { height: 1600 , width: 60 } }; 
	var animBs = { gameB: sets,  };
	var animationFs = [ [ "gameB", [  ] ] ];
	var charPs = { id: 'gameB2', animBodies: animBs, animFrames: animationFs, initBody: "gameB", zIndex: 1 };
	scene2.spawnEntity(charPs);    
	////////////////////////////////////////

	var sets = { useImageSize: false, pos: { x: 500 , y: 1625 } , size: { height: 100 , width: 680 } }; 
	var animBs = { gameB: sets,  };
	var animationFs = [ [ "gameB", [  ] ] ];
	var charPs = { id: 'gameB3', animBodies: animBs, animFrames: animationFs, initBody: "gameB", zIndex: 1 };
	scene2.spawnEntity(charPs);   
	////////////////////////////////////////

	var sets = { useImageSize: false, pos: { x: 1320 , y: 1543 } , size: { height: 50 , width: 260 } }; 
	var animBs = { gameB: sets,  };
	var animationFs = [ [ "gameB", [  ] ] ];
	var charPs = { id: 'gameB3', animBodies: animBs, animFrames: animationFs, initBody: "gameB", zIndex: 1 };
	scene2.spawnEntity(charPs);   
	////////////////////////////////////////
	var nextPiece, curPiece, gamePause, gameOver, score=0, board = [], onKeyDown, timer, time;     

	/////////////////////////////////////// timer ///////////////////////////////////////////////////////
	function pad ( val ) { return val > 9 ? val : "0" + val; } // used for timer
	var sec = 0; 
	timer = setInterval( function(){ 
			if (gamePause || gameOver) return;
		    time = pad(parseInt(sec/3600,10))+": "+pad(parseInt(sec/60,10))+": "+pad(++sec%60);
		    var timeObj = scene2.objects["time"];
			timeObj.animationFrames = [ [ "animationIdle", ["TIME: "+ time] ], ];
			timeObj.loadText(timeObj.animationFrames, timeObj.settings); 
		}, 1000);
		//////////////////////////////////////////////////////////////////////////////////////////////

	function startGame() { 
	    
	    sec = 0; 
	    //if(timer) timer.clearInterval(); 
	    playSoundInstance( "Media/Audio/explo.mp3", false );
	    for ( var i = 0; i < scene2.entities.length; i++) { 
	    if(scene2.entities[i].id.substring(0, 3) == "cur" || scene2.entities[i].id.substring(0, 3) == "nex") 
	    { 
	        scene2.entities[i].changeCurrentAnimation("explode"); 
	    }   
	}

	score = 0;
	var scr = scene2.objects["score"];
	scr.animationFrames = [ [ "animationIdle", ["SCORE: "+ score] ], ];
	scr.loadText(scr.animationFrames, scr.settings); 

	var boardSize = [(10*66),(21*66)]; 
	    board = [];
	    for(var i=0;i<21;i++){
	        board.push([]);
	        for(var j=0;j<10;j++){
		        board[i].push(0);
		    }
	    }   

	    var texCtg = Math.floor((Math.random() * 3) + 1);
	    var nextPTex = Math.floor((Math.random() * 3) + 1);
	    var nextPType = Math.floor((Math.random() * 7) + 1); 
	    var curPTex = Math.floor((Math.random() * 3) + 1);
	    var curPType = Math.floor((Math.random() * 7) + 1); 
	    var iPos = Math.round((Math.random() * 9) + 0);
	    gameOver = false;
	    gamePause = false;
	    score = 0;
	    
	    var tileSize = 66;
	    var tiles = [["tetrisTiles1.png", "tetrisTiles2.png", "tetrisTiles3.png",],
	                 ["tetrisTiles4.png", "tetrisTiles5.png", "tetrisTiles6.png",],
	                 ["tetrisTiles7.png", "tetrisTiles8.png", "tetrisTiles9.png",],
	                ];
	    var pieceTypes = [ [[0*66, 0*66],[0*66, 1*66],[0*66, 2*66],[0*66, 3*66]], // ----
	                       [[1*66, 0*66],[1*66, 1*66],[1*66, 2*66],[0*66, 2*66]], // L mirror
	                       [[0*66, 0*66],[0*66, 1*66],[0*66, 2*66],[1*66, 2*66]], // L
	                       [[0*66, 0*66],[0*66, 1*66],[1*66, 0*66],[1*66, 1*66]], // == 
	                       [[0*66, 0*66],[1*66, 0*66],[1*66, 1*66],[2*66, 1*66]], // -:_
	                       [[0*66, 1*66],[1*66, 0*66],[1*66, 1*66],[2*66, 1*66]], // _:_
	                       [[0*66, 1*66],[1*66, 0*66],[1*66, 1*66],[2*66, 0*66]], //  _:-
	                     ];
	     
	    nextPiece = createPiece( "nexpiece", nextPTex , nextPType, [ 1400, 1280] );
	    curPiece = createPiece( "curpiece", curPTex , curPType, [ 543+(iPos*66), 80] );
	    
	    var sets = { useImageSize: false, pos: { x: 0 , y: 0 } , size: { height: 0 , width: 0 } }; 
	var animBs = { gameU: sets,  };
	var animationFs = [ [ "gameU", [  ] ] ];
	var charPs = { id: 'gameU', animBodies: animBs, animFrames: animationFs, initBody: "gameU", zIndex: 1 };
	var gameUpd = scene2.spawnEntity(charPs); 
	gameUpd.update = function(){
	    if ( gameOver ) return;
	    if ( gamePause ) return;
	    
	    if (curPiece[0].active && curPiece[0].physBody.GetLinearVelocity().y<1) { 
	    	playSoundInstance( "Media/Audio/impact.mp3", false ); 
	    	curPTex = nextPTex;  
			curPType = nextPType; 
			nextPTex = Math.floor((Math.random() * 3) + 1);
			nextPType = Math.floor((Math.random() * 7) + 1);  
			iPos = Math.round((Math.random() * 6) + 0); 
			playSoundInstance( "Media/Audio/explo.mp3", false );
			for(var i=0;i<4;i++){ 
	            nextPiece[i].changeCurrentAnimation("explode"); 
	            curPiece[i].active = false; 
	        }  
	        if( curPiece[0].boardPos[0]-1 < 0 ||curPiece[1].boardPos[0]-1 < 0 || 
	    		curPiece[2].boardPos[0]-1 < 0  || curPiece[3].boardPos[0]-1 < 0  ) { 
	            createRestart(scene2);
	            gameOver = true;
	            return;
	        }
			curPiece = createPiece( "curpiece", curPTex , curPType, [ 543+(iPos*66), 80] );
			nextPiece = createPiece( "nexpiece", nextPTex , nextPType, [ 1400, 1280] ); 
	    }

	    for(var i=0;i<21;i++){   
	        var n = 0; 
	        var nn = [];
	        for(var j=0;j<10;j++){ 
	        	if(!board[i][j].physBody) { 
	        		continue;
	        	}
	            if( board[i][j].boardPos[0] == i && board[i][j].boardPos[1] == j) n += 1;  
	            if(i==20) nn.push(board[i][j].boardPos);
		    }   
		    //if(i==20) console.log(JSON.stringify(nn));
		    if (n == 10) { 
		    	playSoundInstance( "Media/Audio/explo.mp3", false );
		        for(var j=0;j<10;j++){
		        	if(board[i][j].zIndex==2) continue; 
		            try{ 
			              board[i][j].changeCurrentAnimation("explode"); 
			              board[i][j] = 0;
			              score +=  5;
			              var scr = scene2.objects["score"];
			              scr.animationFrames = [ [ "animationIdle", ["SCORE: "+ score] ], ];
			              scr.loadText(scr.animationFrames, scr.settings);  
		              } catch(e) {}
			    }
		    }
	    }    
	}

	if(!onKeyDown) {
	    onKeyDown = function(event){
	        for ( var i = 0; i < curPiece.length; i++) {
	            var block = curPiece[i];
	            if(block.physBody.GetLinearVelocity().y<1) return;

	            if( event.keyCode == 37 ){
	                var pos1 = block.physBody.GetPosition();
	                if( pos1.x-66/30 >= 543/30) pos1.x -= 66/30;
	                block.physBody.SetPosition(pos1);
	            }
	            if( event.keyCode == 39 ){
	                var pos1 = block.physBody.GetPosition();
	                var x = (pos1.x * 30) + 66; 
	                if( x <= 1170 ) pos1.x += 66/30;
	                block.physBody.SetPosition(pos1);
	            }
	            if( event.keyCode == 40 ){
	                scene2.gPhysicsEngine.applyImpulse(block.id, 90 , 10 ); 
	            }
	            if( event.keyCode == 38 ){
	                var x = block.physBody.GetAngle();  
	                block.physBody.SetAngle(x+(Math.PI/2));  
	            	var pos1 = block.physBody.GetPosition();
	                if( block.nType == 1 ) {
	                	if( block.boardPos[1] == 0 ) pos1.x += (66/30);
	                	if( block.boardPos[1] == 8 ) pos1.x -= (66/30); 
	                	console.log(block.boardPos[1]);
	                }
	                block.physBody.SetPosition(pos1);
	             
	            }
	        
	        } 
	    }

	     onMouseDown = function(event){  
			var rWidth = scene2.gRenderEngine.canvas.width/scene2.camera.width; 
			var rect = scene2.gRenderEngine.canvas.getBoundingClientRect();
		    var posx = event.clientX - rect.left;  
	        for ( var i = 0; i < curPiece.length; i++) {
	            var block = curPiece[i];
	            if(block.physBody.GetLinearVelocity().y<1) return;

	            if( posx/30/rWidth  < scene2.objects["gameB1"].pos.x ){
	                var pos1 = block.physBody.GetPosition();
	                if( pos1.x-66/30 >= 543/30) pos1.x -= 66/30;
	                block.physBody.SetPosition(pos1);
	            }
	            if( posx/30/rWidth > scene2.objects["gameB1"].pos.x && posx/30/rWidth < scene2.objects["gameB2"].pos.x ){
	                var x = block.physBody.GetAngle();  
	                block.physBody.SetAngle(x+(Math.PI/2));  
	            	var pos1 = block.physBody.GetPosition();
	                if( block.nType == 1 ) {
	                	if( block.boardPos[1] == 0 ) pos1.x += (66/30);
	                	if( block.boardPos[1] == 8 ) pos1.x -= (66/30); 
	                	console.log(block.boardPos[1]);
	                }
	                block.physBody.SetPosition(pos1);
	            } 
	            if( posx/30/rWidth > scene2.objects["gameB2"].pos.x ){
	                var pos1 = block.physBody.GetPosition();
	                var x = (pos1.x * 30) + 66; 
	                if( x <= 1170 ) pos1.x += 66/30;
	                block.physBody.SetPosition(pos1);
	            } 
	        } 
	    }  
	    
	    window.addEventListener('keydown', onKeyDown ); 
	    window.addEventListener('mousedown', onMouseDown ); 

	}

	    function createPiece(t, nTex, nType, pos){
	        
	        var piece = [];
	        if ( t ==  "curpiece" ) {
	        var x = pos[0] + pieceTypes[nType-1][3][0] +  66;
	        while(x > 1170){
	            pos[0] -= 66; 
	            x = pos[0] + pieceTypes[nType-1][3][0] +  66;
	        } 
	    }
	    Fid = "";
	        for(var i=0;i<4;i++){ 
	        var today = new Date();
	        var time = today.getHours(); 
	        time += today.getMinutes(); 
	        time +=  today.getSeconds(); 
	        time +=  Math.random();
	        
		        var sets = { type:"dynamic", useImageSize: false, size: { height: 66 , width: 66 }, 
		                     pos: { x: pos[0] + pieceTypes[nType-1][i][0] , y: pos[1] + pieceTypes[nType-1][i][1] } ,   
		                   };  
	        var animBs = { piece: sets, explode: sets }; 
	        var animFs = [ [ "piece", [ tiles[texCtg-1][nTex-1]  ] ], 
	                       [ "explode", [ "explode1.png","explode2.png","explode3.png",
	                                      "explode4.png","explode5.png","explode6.png"  ] ],
	                     ];
	        var charPs = {id:t+i+time,animBodies: animBs,animFrames: animFs,initBody:"piece",zIndex:1 };
	        var block = scene2.spawnEntity(charPs);
	        if ( t == "curpiece" ) block.nType = nType; 
	        block.active = true;
	        block.curPiece = true;
	        var vel = block.physBody.GetLinearVelocity();
	        vel.y = 1;
	        block.physBody.SetLinearVelocity(vel);
	        block.additionalUpdate = function() {
	            var pos = this.physBody.GetPosition();
	            var posx = Math.round(((pos.x*30) - 543)/66);
	            var posy = Math.floor(((pos.y*30) - 80)/66) ;  
	            try{  
	            	if(this.id.substring(0, 3) == "cur") { 
	                    pos.x = (543+(posx*66))/30; 
	                    this.physBody.SetPosition(pos); 
	                    this.boardPos = [posy-2, posx];
	                    board[posy-2][posx] = this;
	                }
	            } catch(e) {}
	            if(this.currentAnimation == "explode") this.zIndex = 2;
	            if(this.currentAnimation == "explode" && this.frame == 5) {
	            	try{
	                	board[this.boardPos[0]][this.boardPos[1]] = 0;
	            	} catch(e) {}
	            	scene2.removeEntity(this.id);
	            }

	        };
	        block.onMouseDown = function(){
	        	if(!this.active && this.id.substring(0, 3) == "cur") return;
	        	for(var i=0;i<4;i++){
	                var x = curPiece[i].physBody.GetAngle();  
	                curPiece[i].physBody.SetAngle(x+(Math.PI/2));  
	            	var pos1 = curPiece[i].physBody.GetPosition();
	                if( curPiece[i].nType == 1 ) {
	                	if( curPiece[i].boardPos[1] == 0 ) pos1.x += (66/30);
	                	if( curPiece[i].boardPos[1] == 8 ) pos1.x -= (66/30);  
	                }
	                curPiece[i].physBody.SetPosition(pos1);
	            }
	        };
	        if(i>0) scene2.gPhysicsEngine.addJoint(Fid, t+i+time)
	        else Fid = t+i+time
	        piece.push(block); 
	    }
	    return piece;
	    
	    } 
	    
	}


	//////////////////////////////////////////////////////////////////////////////////////////////

	function createRestart(Scene){
	    gamePause = true;
	    gSM.togglemute();
	var sets = { useImageSize: false,  useSpriteSheet: false, pos: { x:  0 , y: 0 } , size: { height: 1786, width: 1696 } };
	var animBs = { animationIdle: sets, };
	var animationFs = [ [ "animationIdle", [ "Media/Images/replay1Img.png" ] ], ];
	var charPs = { id: 'RestartD', animBodies: animBs, animFrames: animationFs, initBody: "animationIdle", zIndex: 5 };
	Scene.spawnEntity(charPs);

	var sets = { useImageSize: false, pos: { x:  490 , y: 1160 } , size: { height:  140 , width: 300 }   }; 
	var animBs = { yes: sets };
	var animationFs = [ [ "yes", [ "menu42.png" ] ], ];
	var charPs = { id: 'yes', animBodies: animBs, animFrames: animationFs, initBody: "yes", zIndex: 6 };
	var yes = Scene.spawnEntity(charPs);
	yes.onMouseDown = function(event) { 
	playSoundInstance( "Media/Audio/cursord.wav", false );
	    //Scene.removeEntity('close'); 
	    Scene.removeEntity('RestartD');
	    Scene.removeEntity('yes');
	    Scene.removeEntity('no');  
	    for ( var i = 0; i < scene2.entities.length; i++) { 
	        if(scene2.entities[i].id.substring(0, 3) == "cur" || scene2.entities[i].id.substring(0, 3) == "nex") 
	        {
	            scene2.entities[i].changeCurrentAnimation("explode"); 
	        }   
	    }
	    curPiece = [];
	    nextPiece = [];
 
	    startGame(); 
	    gSM.togglemute();
	}

	var sets = { useImageSize: false, pos: { x:  890 , y: 1160 } , size: { height: 140 , width: 300 }   }; 
	var animBs = { no: sets };
	var animationFs = [ [ "no", [ "menu43.png" ] ], ];
	var charPs = { id: 'no', animBodies: animBs, animFrames: animationFs, initBody: "no", zIndex: 6 };
	var no = Scene.spawnEntity(charPs);
	no.onMouseDown = function(event) { 
	playSoundInstance( "Media/Audio/cursord.wav", false );
	    //Scene.removeEntity('close'); 
	    Scene.removeEntity('RestartD');
	    Scene.removeEntity('no');
	    Scene.removeEntity('yes');
	    gamePause = false; 
	    gSM.togglemute();
	}
	} 
 
	startGame();
	console.log("yes");
}







 /*
var allSprites= []; 
var spritesFiles = [["Media/Images/tetrisSprites.png", "Media/Images/tetrisSprites.json"],
         ["Media/Images/options1Img.png"], ["Media/Images/replay1Img.png"], ["Media/Images/TetrisImg.png"],
         ["Media/Images/tetrisGame1Img.png"], ["Media/Images/tetrisGame2Img.png"],
       ]; 
HFunctions.loadSprites(spritesFiles, allSprites); 
 */
	///////////////////////////////////////// START LOADER //////////////////////////////////////////////
gSM.volume = 0.1; 
 
// starting intro scene // 
 gGameEngine.startScene('loader'); 
// startGame(); 



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
 