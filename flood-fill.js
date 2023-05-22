const makeGrid = (data) => {
  let maxX = 0;
  let maxY = 0;

  data.map((point) => {
    const [y, x] = point;
    maxX = Math.max(x, maxX);
    maxY = Math.max(y, maxY);
  })

  const grid = Array(maxY + 1).fill(0).map(() => Array(maxX + 1).fill(0));

  data.slice(1).map((point) => {
    const [y, x] = point;
    grid[y][x] = 1;
  })

  return grid;
};

const isPointInside = (point, grid) => {
  let boundaries = 0;
  const [y, x] = point;
  const maxY = grid.length;
  const maxX = grid[0].length;

  for(let i = y - 1; i >= 0; i--) {
    if(grid[i][x] === 1) {
      boundaries += 1;
      break;
    }
  }

  for(let i = x - 1; i >= 0; i--) {
    if(grid[y][i] === 1) {
      boundaries += 1;
      break;
    }
  }

  for(let i = y + 1; i < maxY; i++) {
    if(grid[i][x] === 1) {
      boundaries += 1;
      break;
    }
  }

  for(let i = x + 1; i < maxX; i++) {
    if(grid[y][i] === 1) {
      boundaries += 1;
      break;
    }
  }

  return boundaries === 4;
};

const main = () => {
  const inputPoints = [[1, 3],
  [0, 3],
  [1, 2],
  [1, 4],
  [2, 1],
  [2, 5],
  [3, 1],
  [3, 6],
  [4, 2],
  [4, 5],
  [5, 3],
  [5, 4]];
  const pointsInside = [];
  const grid = makeGrid(inputPoints);
  const maxY = grid.length;
  const maxX = grid[0].length;

  for(let y = 0; y < maxY; y++) {
    for(let x = 0; x < maxX; x++) {
      if(isPointInside([y, x], grid)) pointsInside.push([y, x]);
    }
  }

  console.log(pointsInside);
}

main();
