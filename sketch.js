const cols = 5;
const rows = 5;

const grid = new Array(rows);

const openSet = [];
const closeSet = [];

let start;
let end;

let w, h;

function setup() {
    createCanvas(400, 400);

    console.log("A*");

    w = width / cols;
    h = height / rows;

    // 2D Array
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(rows);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = new Spot(i, j);
        }
    }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];

    openSet.push(start);

    console.log(grid);
}

function Spot(i, j) {
    this.x = i;
    this.y = j;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function () {
        fill(0);  // Set fill color to black
        stroke(255);  // Set stroke color to white
        rect(this.x * w, this.y * h, w, h);
    };
}


function draw() {
    if (openSet.length > 0) {
        // keep going
    } else {
        // no solution
    }

    background(51);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }
}
