let cols , rows;
let scl = 20;
let pi = Math.PI;
let w = 900;
let h = 900;
var terrain = [];
var move = 0;
//var terrain = new Float32Array(30);

function setup()
{
    createCanvas(w,h,WEBGL);
    cols = w / scl;
    rows = h / scl;
    //terrain = new Array([cols][rows]);
    
    /*for(let row = 0; row < rows ; row++ ){
        //terrain[row] = [];
        //for(let x = 0; x < cols; x++)
        //{
        terrain.push(new Float32Array(cols).fill(random(-10,10)));
        //    terrain[x][y] = random(-10,10);
        //}
    }
    console.log(terrain);*/
    
}

function draw()
{
    move -= 0.04;
    var yoff = 0;
    for(let i = 0; i < cols; i++){
        var xoff = move;
        //terrain[i] = new Float32Array(30);
        terrain[i] = [];
        for(let j = 0; j < rows; j++){
            //terrain[i][j] = random(-10, 10);
            terrain[i][j] = map(noise(xoff, yoff), 0, 1, -150, 150);
            xoff += 0.1;
        }
        yoff += 0.1;
    }


    background(0);
    translate(0,h/4,0);
    translate(-w/2,-h/2,0);
    rotateX(pi/3);

    stroke(255);
    noFill();
    for(let y =0; y < rows-1 ; y++ )
    {
        beginShape(TRIANGLE_STRIP);
        for(let x = 0; x < cols; x++)
        {
            vertex(x*scl, y*scl, terrain[x][y]);
            vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
        }
        endShape(CLOSE);
    }
}