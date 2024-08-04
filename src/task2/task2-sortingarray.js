function sortByAsc(inputArray) {
    if (inputArray.length <= 1) {
        return inputArray;
    }

    const pivot = inputArray[0];
    const leftSubArray = [];
    const rightSubArray = [];

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] < pivot) {
            leftSubArray.push(inputArray[i]);
        } else {
            rightSubArray.push(inputArray[i]);
        }
    }

    return [...sortByAsc(leftSubArray), pivot, ...sortByAsc(rightSubArray)];
}

function sortByDesc(inputArray) {
    if (inputArray.length <= 1) {
        return inputArray;
    }

    const pivot = inputArray[0];
    const leftSubArray = [];
    const rightSubArray = [];

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] > pivot) {
            leftSubArray.push(inputArray[i]);
        } else {
            rightSubArray.push(inputArray[i]);
        }
    }

    return [...sortByDesc(leftSubArray, 'desc'), pivot, ...sortByDesc(rightSubArray, 'desc')];
}

module.exports = {
    sortByAsc,
    sortByDesc
}