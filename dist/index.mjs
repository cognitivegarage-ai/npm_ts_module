function sum(...nums) {
    let i = 0, total = 0;
    for (; i < nums.length; i++)
        total += nums[i];
    return total;
}
function substract(...nums) {
    let i = 0, total = nums[i++] | 0;
    for (; i < nums.length; i++)
        total -= nums[i];
    return total;
}
function average(...nums) {
    let i = 0, len = nums.length, total = 0;
    for (; i < len; i++)
        total += nums[i];
    return total / len;
}
function special() {
    return Math.random() * 1000;
}

export { average, special, substract, sum };
