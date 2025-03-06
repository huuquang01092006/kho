let numberArr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 5, 5, 5, 7];
for (let i = 0; i < numberArr.length ; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
        if (numberArr[i] == numberArr[j]) {
            numberArr.splice(j,1);
            j--;
        }
    }
}
numberArr.sort();
console.log(numberArr);