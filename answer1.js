// Assume this function is only receive "NEGIE1" as a string given for param.

const reverseEigen1 = (string = "NEGIE1") => {
    if (string !== "NEGIE1") throw new Error('String is not NEGIE1')

    const textOnlyString = string.slice(0, 5);
    const numberOnlyString = string.slice(5, 6);

    return `${textOnlyString.split('').reverse().join('')}${numberOnlyString}`
}

console.log(reverseEigen1());