const arr = ["1", "2", "3", "4,5", "6,7"];
const sliceNumber = [3];
let newArr = [];

for (let j = 0; j < arr.length; j++) {
    if (sliceNumber[j] === undefined) {
        continue;
    }
    
    // slice the number to sum the number in sliceNumber arr value (front)
    const frontBreakSliceNumber = sliceNumber.slice(0, j) == '' ? [0] : sliceNumber.slice(0, j);
    const frontSlice = frontBreakSliceNumber.reduce((c, d) => c + d);
    
    // slice the number to sum the number in sliceNumber arr value (back)
    const backBreakSliceNumber = sliceNumber.slice(0, j + 1);
    const backSlice = backBreakSliceNumber.reduce((a, b) => a + b);

    // slice for responsive array
    const sliceNumbers = arr.slice(frontSlice, backSlice);

    newArr.push(sliceNumbers);
}

console.log(newArr);