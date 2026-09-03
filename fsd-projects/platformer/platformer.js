$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(11, 10, 12)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
 //toggleGrid();
createPlatform(650, 630, 20, 290);
createPlatform(650, 630, 600, 20);
createPlatform(200, 200, 400, 20);
createPlatform(600, 300, 90, 20);
createPlatform(900, 500, 90, 20);
createPlatform(715, 390, 90, 20);
createPlatform(1050, 180, 20, 200);
createPlatform(975, 300, 330, 20);
createPlatform(1230, 180, 20, 130);
createBadPlatform(1055, 295, 180, 20,"red");
createFakePlatform(1050, 300, 20, 800);
createFakePlatform(1050, 300, 500, 20);
createFakePlatform(200, 0, 20, 200);
createFakePlatform(600, 0, 20, 220);
createFakePlatform(1100, 630, 300, 20,"red");




    // TODO 3 - Create Collectables
createCollectable("database", 400, 130,)
createCollectable("database", 1350, 200,)
createCollectable("database", 700, 700,)


    
    // TODO 4 - Create Cannons
  createCannon("right",595,950);
  createCannon("right",450,900);
  createCannon("top",400,920);
  createCannon("top",200,525);
  createCannon("bottom",300,950);
  createCannon("left", 100, 950, 20, 10, 0, 100, 2)
  createCannon("top",1200,1000);
  createCannon("top",950,1100);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
