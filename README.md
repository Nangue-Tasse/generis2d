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

Here is a minimum example using generis2d

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
### GameEngine
#### Properties
* GameEngine.Scenes // dictionary
* GameEngine.canvas // object
* GameEngine.activeScene // string
* GameEngine.loaded // integer
* GameEngine.WtoH // float

#### Functions
* **GameEngine.new(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **canvas**   | {id:[canvas id], container: [canvas container], width: [canvas width], height: [canvas height]} |
| **scene**   | {id:[scene id], canvas: [scene canvas], width: [scene width], height: [scene height]} |

* **GameEngine.start(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| scene   | {id:[scene id]} |


### SceneEngine
#### Properties
  * SceneEngine.id // string
  * SceneEngine.width // float
  * SceneEngine.height // float
  * SceneEngine.entities // dictionary
  * SceneEngine.cameras: // dictionary
  * SceneEngine.activeCamera // string 
  * SceneEngine.events // dictionary
  * SceneEngine.eventListeners // dictionary
  * SceneEngine.time // integer,
  * SceneEngine.pause // boolean 
  * SceneEngine.entityParams // dictionary 
  * SceneEngine.time // int

#### Functions
* **SceneEngine.new(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **camera**   | {id:[camera id], x:x, y:y, z:z, width: [camera width], height: camera height]} |
| **entity**   | {id:[entity id], idle: [entity idle body], zIndex: [entity zIndex], bodies: [entity bodies deffinition]} |

* **SceneEngine.add(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **enventListener**   | {id:[enventListener id], pre: [ function ], post: [ function ]} |

* **SceneEngine.set(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **gravity**   | {x:[ x component], y:[ y component]} |
| **sort**   | {type:[ascend or decend], sort:[ function ]} |

* **SceneEngine.start()**
* **SceneEngine.close()**


### CameraEngine
#### Properties
  * CameraEngine.id // string
  * CameraeEngine.width // float
  * CameraEngine.height // float
  * CameraEngine.Position // dictionary
  * CameraEngine.Size // dictionary
  * CameraEngine.events // dictionary
  * CameraEngine.eventListeners // dictionary
  * CameraEngine.time // int

#### Functions
* **CameraEngine.add(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **enventListener**   | {id:[enventListener id], pre: [ function ], post: [ function ]} |

* **CameraEngine.set(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **position**   | {x:[ x component], y:[ y component], z:[ z component]} |
| **size**   | {width:[ camera width], height:[ camera height]} |

* **CameraEngine.get(type)**  

### EntityEngine
#### Properties
  * EntityEngine.id // string
  * EntityEngine.body // box2d object
  * EntityEngine.bodies // dictionary
  * EntityEngine.activeBody // string
  * EntityEngine.idleBody // string
  * EntityEngine.zIndex // int
  * EntityEngine.frame // int
  * EntityEngine.eDraw // int
  * EntityEngine.eDebugDraw // int
  * EntityEngine.offset // dictionary
  * EntityEngine.alpha // 0 <= float <=1
  * EntityeEngine.width // float
  * EntityEngine.height // float
  * EntityEngine.Position // dictionary
  * EntityEngine.Size // dictionary
  * EntityEngine.events // dictionary
  * EntityEngine.eventListeners // dictionary
  * EntityEngine.time // int

#### Functions
* **EntityEngine.add(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **enventListener**   | {id:[enventListener id], pre: [ function ], post: [ function ]} |
| **body**   | {body:[body definition]} |
| **frame**   | {frame:[frame url]} |

* **EntityEngine.set(type, params)** // params optional

| type       | params        |
| -----------|:-------------:|
| **position**   | {x:[ x component], y:[ y component], z:[ z component]} |
| **size**   | {width:[ Entity width], height:[ Entity height]} |
| **offset**   | {position:{x:x,y:y,z:z}, size:{width:width,height:height}} |
| **alpha**   | {alpha:[ alpha]} |
| **frames**   | {frames:[frames url array]} |
| **body**   | {x:x,y:y,z:z,width:width,height:height,groupIndex:groupIndex,offset:offset,alpha:alpha} |

* **EntityEngine.get(type)** 

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
