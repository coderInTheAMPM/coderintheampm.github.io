import {Square} from "./square.js";

let xEdgeSum = 27; // Broj kocki po širini, što mi pomaže u računanju dužine ivice kocke, kako bi stalo na ekran
let squareEdge = window.innerWidth / (xEdgeSum + 2); // +2 za dodatan prazan prostor sa leve i desne

let squares;

let indexCoords = [ // Hard-kodirao koordinate svog indeksa

    // 1
    {x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3}, {x: 2, y: 4},

    // 6
    {x: 4, y: 0}, {x: 4, y: 1}, {x: 4, y: 2}, {x: 4, y: 3}, {x: 4, y: 4}, {x: 6, y: 0},
    {x: 5, y: 0}, {x: 5, y: 2}, {x: 5, y: 4}, {x: 6, y: 2}, {x: 6, y: 3}, {x: 6, y: 4},

    // /
    {x: 8, y: 3}, {x: 8, y: 4}, {x: 9, y: 2}, {x: 10, y: 0}, {x: 10, y: 1},

    // 2
    {x: 12, y: 0}, {x: 13, y: 0}, {x: 14, y: 0}, {x: 14, y: 1}, {x: 14, y: 2}, {x: 13, y: 2},
    {x: 12, y: 2}, {x: 12, y: 3}, {x: 12, y: 4}, {x: 13, y: 4}, {x: 14, y: 4},

    // 0
    {x: 16, y: 0}, {x: 17, y: 0}, {x: 18, y: 0}, {x: 16, y: 1}, {x: 16, y: 2}, {x: 16, y: 3},
    {x: 16, y: 4}, {x: 17, y: 4}, {x: 18, y: 1}, {x: 18, y: 2}, {x: 18, y: 3}, {x: 18, y: 4},

    // 2
    {x: 20, y: 0}, {x: 21, y: 0}, {x: 22, y: 0}, {x: 22, y: 1}, {x: 22, y: 2}, {x: 21, y: 2},
    {x: 20, y: 2}, {x: 20, y: 3}, {x: 20, y: 4}, {x: 21, y: 4}, {x: 22, y: 4},

    // 0
    {x: 24, y: 0}, {x: 25, y: 0}, {x: 26, y: 0}, {x: 24, y: 1}, {x: 24, y: 2}, {x: 24, y: 3},
    {x: 24, y: 4}, {x: 25, y: 4}, {x: 26, y: 1}, {x: 26, y: 2}, {x: 26, y: 3}, {x: 26, y: 4}
];

let xOffset = 1, yOffset = 3; // Da ne bude skroz gore levo nego da ga malo gurnem

export function initialize(){
    clear();
    addSquares();
}

function clear(){ squares = []; }

function addSquares()
{
    for(let i = 0; i < indexCoords.length; i++)
        addSquare(i);
}

function addSquare(i)
{
    squares.push(new Square((indexCoords[i].x + xOffset) * squareEdge, 
                            (indexCoords[i].y + yOffset) * squareEdge, 
                            squareEdge));
}

export function update()
{
    squares.forEach(square => { square.update(); });
}
