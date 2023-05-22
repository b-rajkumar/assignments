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

  return { startPoint: data[0], grid };
};

const getPoints = (pointsInside, point, grid, coveredPoints) => {
  const [y, x] = point;
  if(grid[y][x] === 1 || coveredPoints[y][x] === 1) return;
  coveredPoints[y][x] = 1;
  pointsInside.push(point);
  getPoints(pointsInside, [y + 1, x], grid, coveredPoints);
  getPoints(pointsInside, [y, x + 1], grid, coveredPoints);
  getPoints(pointsInside, [y - 1, x], grid, coveredPoints);
  getPoints(pointsInside, [y, x - 1], grid, coveredPoints);
};

const main = () => {
  const inputPoints = [
    [1, 3],
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

  const { startPoint, grid } = makeGrid(inputPoints);
  const coveredPoints = Array(grid.length).fill(0).map(() => Array(grid[0].length).fill(0));

  getPoints(pointsInside, startPoint, grid, coveredPoints);
  console.log(pointsInside);
}

main();
