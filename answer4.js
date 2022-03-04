const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

const diagonal = (Matrix) => {
    const dimension = Matrix.length;

    let toRightDiagonalSum = 0;
    let toLeftDiagonalSum = 0;


    for (let index = 0; index < dimension; index++) {
        toRightDiagonalSum = toRightDiagonalSum + Matrix[index][index];
    }

    for (let index = 0; index < dimension; index++) {
        toLeftDiagonalSum = toLeftDiagonalSum + Matrix[index][dimension - 1 - index];
    }


    return toRightDiagonalSum - toLeftDiagonalSum;
}

console.log(diagonal(Matrix));