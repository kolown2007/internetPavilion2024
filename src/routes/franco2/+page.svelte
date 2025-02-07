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
          
      //BABYLON.MeshBuilder.CreateGround("ground", {height: 100, width: 100, subdivisions: 4});
  
        scene.clearColor = new BABYLON.Color4(0.5, 0.6, 0.5, 1);

   
  
        const camera = new BABYLON.ArcRotateCamera(
          "Camera",
          Math.PI / 2,
          Math.PI / 2,
          2,
          new BABYLON.Vector3(0,0,56),
          scene
        );
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);

        console.log(camera.position);


        var light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
        light2.intensity = 0.97;

       

        BABYLON.SceneLoader.Append("", "compressed.glb", scene, function () {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true, true, true);

    scene.meshes.forEach(mesh => {
        if (mesh.material && mesh.material instanceof BABYLON.StandardMaterial) {
          const material = mesh.material as BABYLON.StandardMaterial;
          mesh.position.x = 5; 
        mesh.scaling = new BABYLON.Vector3(.2, .2, .2); // A
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

 