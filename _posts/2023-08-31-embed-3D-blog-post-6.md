---
title: 'Computer Vision with Open Vocabulary'
date: 2023-05-23
permalink: /posts/2023/05/blog-post-3/
tags:
  - Interactive 3D viewer
  - Smithsonian 3D object collection
  - Jekyll Embed 3D objects
  - Creative Commons Assets
---

##### Embed 3D assets interactively into a webpage. 

[Smithsonian](https://registry.opendata.aws/smithsonian-open-access/) recently shared a large number of 2D and 3D (approximately 4000 folders in recent pull) assets publicly. I wanted to try these out for training Foundation models and as part of it tried out this interactive visualization feature. 

<div>
    <script
      type="module"
      src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
    <style>
    model-viewer {
    width: 800px;
    height: 600px;
    }
</style>
      <model-viewer
   src="https://rawcdn.githack.com/BabylonJS/Exporters/422493778d6ffbc2980e83e46eb94729bbeada0c/Maya/Samples/glTF%202.0/T-Rex/trex_running.gltf"
        alt="dragon"
        auto-rotate
        camera-controls
      ></model-viewer>
</div>

