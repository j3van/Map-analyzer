// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column <= 4) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level2Solution() {
  if (column >= 8) {
    tile.innerHTML = "WATER";
  } else if (column >= 4) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level3Solution() {
  if (column >= 3 && column <= 7) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level4Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level5Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else if (row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level6Solution() {
  if (row >= 2 && row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level7Solution() {
  if (row == 4 && column == 7) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level8Solution() {
  if (row == 5 || column == 2) {
    tile.innerHTML = "TREE";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level9Solution() {
  if (row < 6 && column < 6) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level10Solution() {
  if (column <= 1) {
    tile.innerHTML = "HILLS";
  } else if (column <= 3) {
    tile.innerHTML = "TREE";
  } else if (column <= 7) {
    tile.innerHTML = "SAND";
  } else if (column <= 11) {
    tile.innerHTML = "WATER";
  }
}

function level11Solution() {
  if (row <= 3 && column <= 5) {
    tile.innerHTML = "WATER";
  } else if (row >= 4 && column <= 5) {
    tile.innerHTML = "SAND";
  } else if (row >= 3 && column >= 6) {
    tile.innerHTML = "TREE";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level12Solution() {
  if ((row <= 4 && column <= 5) || (row >= 5 && column >= 6)) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level13Solution() {
  if (row >= 2 && row <= 5 && column >= 4 && column <= 9) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "TREE";
  }
}

function level14Solution() {
  if (row >= 1 && row <= 5 && column >= 2 && column <= 4) {
    tile.innerHTML = "TREE";
  } else if (row >= 3 && row <= 5 && column >= 7 && column <= 10) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}
