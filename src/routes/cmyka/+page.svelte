<script lang="ts">
    import { onMount } from "svelte";
    import * as BABYLON from "@babylonjs/core";
    import "@babylonjs/loaders/glTF";

 
  
    onMount(() => {
      // Create a Babylon.js scene
      const canvas = document.getElementById("babylon-canvas");
      // @ts-ignore
      const engine = new BABYLON.Engine(canvas, true);
      
 

      const createScene = function () {
        const scene = new BABYLON.Scene(engine);
  
        scene.clearColor = new BABYLON.Color4(0.5, 0.2, 0, 0);

   
  
        const camera = new BABYLON.ArcRotateCamera(
          "Camera",
          Math.PI / 2,
          Math.PI / 2,
          2,
          new BABYLON.Vector3(0,0,0),
          scene
        );
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);

        console.log(camera.position);


        var light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
        light2.intensity = 0.97;




// https://playground.babylonjs.com/#UU7RQ#4
	
	// Skybox
	// var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:3000.0}, scene);
	// var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	// skyboxMaterial.backFaceCulling = false;
	// // skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	// // skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	// skyboxMaterial.diffuseColor = new BABYLON.Color3(2, 3, 0);
	// skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	// skybox.material = skyboxMaterial;	

	    
  


        BABYLON.SceneLoader.Append("", "cmyka.glb", scene, function () {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true, true, true);

    scene.meshes.forEach(mesh => {
        if (mesh.material && mesh.material instanceof BABYLON.StandardMaterial) {
          const material = mesh.material as BABYLON.StandardMaterial;
     
          mesh.scaling = new BABYLON.Vector3(5, 5, 5); // A
        }
      });

  });


  scene.registerBeforeRender(function () {
        light2.position = camera.position;
    });


  engine.hideLoadingUI(); // Hide the loading UI
        return scene;
      };
  


      const scene = createScene();
  
      engine.runRenderLoop(() => {
        scene.render();
      });
  
      window.addEventListener("resize", () => {
        engine.resize();
      });
  


    });
  </script>
  
  <main class ="overflow-hidden"> 
    <canvas class ="w-full h-screen" id="babylon-canvas" />

  </main>

 