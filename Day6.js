function groupSeats(arr, numberseats) {
    var result = 0;
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length - numberseats+1; j++) {
            sum = 0;
            for (let k = 0; k < numberseats; k++) {
                sum = sum + arr[i][j + k];
            }
            if (sum === 0) {
                result = result + 1;
            }

        }
    }
    return result;
}
console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
    ], 2))