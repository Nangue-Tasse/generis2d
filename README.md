# Generis2d

[Generis2d](http://generisengine.appspot.com/) is a free open source game engine that allows novice to proffesional 2D web game development entirely online.


### Prerequisities

Generis2d is a standalone library and hence requires no other library or plugin to be installed.

### Installing

Using generis2d is very simple and intuitively easy.

First add the library to your html file
```html
<script src="https://cdn.rawgit.com/Nangue-Tasse/generis2d/master/generis2d.min.js"></script>
```
Disclaimer: It's a free service, so there are [no uptime or support guarantees]().

### Getting Started

Here is a minimum example for a game with generis2d

```html
<!DOCTYPE html>
<html>
  <head> 
    <script type="text/javascript" src="https://cdn.rawgit.com/Nangue-Tasse/generis2d/master/generis2d.min.js"></script>   
  </head>
  <body>   
    <script> 
            var scene = G.new("scene"); // New Scene
            var camera = scene.new("camera"); // New Scene Camera

            // Bodies definition
            var box = { idle: { x:200, y:300, z:0, width: 200, height: 200, type:"static",
                        frames: ["http://www.udellgames.com/wp-content/uploads/2013/07/box2.png"] } 
                      };
            var sphere = { idle: { x:200, y:200, z:0, radius: 50, type:"dynamic",
                        frames: ["https://mobilegamegraphics.com/wp-content/uploads/2015/06/Coin_spin.gif"] } 
                      };

            // New entities
            scene.new( "entity", { id:"box", idleBody: "idle", bodies: box } );   
            scene.new( "entity", { id:"sphere", idleBody: "idle", bodies: sphere } ); 
                                     
            scene.start(); // Start Scene

    </script> 
  </body>
</html>
```
## Basic API
### GameEngineClass
#### Properties
* GameEngineClass.Scenes
* GameEngineClass.canvas
* GameEngineClass.activeScene
* GameEngineClass.loaded
* GameEngineClass.WtoH
#### Functions
* GameEngineClass.new(type, params)

## Built With

* Pure Javascript
* Box2d

## Authors

* **Geraud NT** - (https://github.com/Nangue-Tasse)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration from Udacity course: HTML5 Game Developement
* Box2d great physics library
