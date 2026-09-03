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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
 toggleGrid();
createPlatform(650, 630, 20, 290);
createPlatform(650, 630, 600, 20);
createPlatform(200, 200, 400, 20);
createPlatform(600, 300, 90, 20);
createPlatform(900, 500, 90, 20);
createPlatform(715, 390, 90, 20);
createPlatform(1050, 165, 20, 200);
createPlatform(975, 275, 330, 20);
createPlatform(1230, 165, 20, 200);
createBadPlatform(1055, 260, 180, 20);




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons
  createCannon("right",595,950);
  createCannon("right",450,900);
  createCannon("top",450,920);
  createCannon("top",200,525);
  createCannon("bottom",350,920);
  createCannon("left", 100, 900, 20, 10, 0, 100, 2)
  createCannon("top",1200,1000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
