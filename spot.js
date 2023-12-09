var openSetx = [];
var closeSetx = [];

function setup() {
    createCanvas(400, 400);

    console.log("A*");

    w = width / cols;
    h = height / rows;

    // 2D Array
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = new Spot(i, j);
        }
    }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];

    openSetx.push(start);

    console.log(grid);
    console.log(openSetx);
}

function draw() {
    if (openSetx.length > 0) {
        // keep going
    } else {
        // no solution
    }

    background(51); // Set background color to white

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }

    for (let i = 0; i < closeSet.length; i++) {
        closeSet[i].color(255, 0, 0);
    }

    for (let i = 0; i < openSetx.length; i++) {
        openSetx[i].show(color(0, 255, 0));
    }
}

function Spot(i, j) {
    this.x = i;
    this.y = j;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function (color=255) {
        fill(color);
        noStroke();
        rect(this.x * w, this.y * h, w - 1, h - 1);
    };
}
