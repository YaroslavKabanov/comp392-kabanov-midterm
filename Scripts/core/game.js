/// <reference path="_reference.ts"/>
// ********************************************
// * Source file : game.ts                    *
// * Author name : Yaroslav Kabanov           *
// * Last Modified by : Yaroslav Kabanov      *
// * Last Date Modified : March 2th, 2016     *
// * Program Description : Tapered Tower      * 
// * Version: 1.0                             * 
// ********************************************
// Git Link : https://github.com/YaroslavKabanov/comp392-kabanov-midterm.git
// Live Link : http://comp392-midterm-kabanov.azurewebsites.net 
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var HemisphereLight = THREE.HemisphereLight;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var hemLight;
    var spotLight;
    var ambientLight;
    var cubeMaterial;
    var cubeGeometry;
    var scene;
    var renderer;
    var camera;
    var control;
    var gui;
    var stats;
    var axis;
    var plane;
    var cube1;
    var cube2;
    var cube3;
    var cube4;
    var cube5;
    var cube6;
    var cube7;
    function init() {
        // Instantiate a new Scene object
        scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        /* ENTER CODE HERE */
        axis = new AxisHelper(50);
        scene.add(axis);
        // Add a plane to the scene
        plane = new gameObject(new PlaneGeometry(100, 100, 1, 1), new LambertMaterial({ color: 0x01FF3E }), 0, 0, 0);
        plane.rotation.x = -0.5 * Math.PI;
        scene.add(plane);
        // Added Cube 1 to the scene (bottom)
        cubeMaterial = new LambertMaterial({ color: Math.floor(Math.random() * 16777215) });
        cubeGeometry = new CubeGeometry(10, 2, 10);
        cube1 = new Mesh(cubeGeometry, cubeMaterial);
        cube1.castShadow = true;
        cube1.receiveShadow = true;
        scene.add(cube1);
        // Added Cube 2 to the scene 
        cubeMaterial = new LambertMaterial({ color: Math.floor(Math.random() * 16777215) });
        cubeGeometry = new CubeGeometry(8, 2, 8);
        cube2 = new Mesh(cubeGeometry, cubeMaterial);
        cube2.position.y = 2;
        cube2.castShadow = true;
        cube2.receiveShadow = true;
        scene.add(cube2);
        // Added Cube 3 to the scene 
        cubeMaterial = new LambertMaterial({ color: Math.floor(Math.random() * 16777215) });
        cubeGeometry = new CubeGeometry(7, 2, 7);
        cube3 = new Mesh(cubeGeometry, cubeMaterial);
        cube3.position.y = 4;
        cube3.castShadow = true;
        cube3.receiveShadow = true;
        scene.add(cube3);
        // Added Cube 4 to the scene 
        cubeMaterial = new LambertMaterial({ color: Math.floor(Math.random() * 16777215) });
        cubeGeometry = new CubeGeometry(5, 2, 5);
        cube4 = new Mesh(cubeGeometry, cubeMaterial);
        cube4.position.y = 6;
        cube4.castShadow = true;
        cube4.receiveShadow = true;
        scene.add(cube4);
        // Added Cube 5 to the scene 
        cubeMaterial = new LambertMaterial({ color: Math.floor(Math.random() * 16777215) });
        cubeGeometry = new CubeGeometry(4, 2, 4);
        cube5 = new Mesh(cubeGeometry, cubeMaterial);
        cube5.position.y = 8;
        cube5.castShadow = true;
        cube5.receiveShadow = true;
        scene.add(cube5);
        // Added Cube 6 to the scene 
        cubeMaterial = new LambertMaterial({ color: Math.floor(Math.random() * 16777215) });
        cubeGeometry = new CubeGeometry(3, 2, 3);
        cube6 = new Mesh(cubeGeometry, cubeMaterial);
        cube6.position.y = 10;
        cube6.castShadow = true;
        cube6.receiveShadow = true;
        scene.add(cube6);
        // Added Cube 7 to the scene  
        cubeMaterial = new LambertMaterial({ color: Math.floor(Math.random() * 16777215) });
        cubeGeometry = new CubeGeometry(2, 2, 2);
        cube7 = new Mesh(cubeGeometry, cubeMaterial);
        cube7.position.y = 12;
        cube7.castShadow = true;
        cube7.receiveShadow = true;
        scene.add(cube7);
        // Adeed an ambient light 
        ambientLight = new AmbientLight(0x090909);
        scene.add(ambientLight);
        hemlLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
        scene.add(hemlLight);
        //Added a spot light 
        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(80, 40, 60);
        spotLight.rotation.set(0, 0, 0);
        spotLight.castShadow = true;
        spotLight.intensity = 1.5;
        scene.add(spotLight);
        // add controls
        gui = new GUI();
        control = new Control(0.00001);
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        /* ENTER CODE for the GUI CONTROL HERE */
        gui.add(controlObject, 'rotatationCube1', -0.5, 0.5);
        gui.add(controlObject, 'rotatationCube2', -0.5, 0.5);
        gui.add(controlObject, 'rotatationCube3', -0.5, 0.5);
        gui.add(controlObject, 'rotatationCube4', -0.5, 0.5);
        gui.add(controlObject, 'rotatationCube5', -0.5, 0.5);
        gui.add(controlObject, 'rotatationCube6', -0.5, 0.5);
        gui.add(controlObject, 'rotatationCube7', -0.5, 0.5);
    }
    // Added a staty to the scene 
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        cube1.rotation.y += control.rotatationCube1;
        cube2.rotation.y += control.rotatationCube2;
        cube3.rotation.y += control.rotatationCube3;
        cube4.rotation.y += control.rotatationCube4;
        cube5.rotation.y += control.rotatationCube5;
        cube6.rotation.y += control.rotatationCube6;
        cube7.rotation.y += control.rotatationCube7;
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(55, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();
//# sourceMappingURL=game.js.map