// add whatever parameters you deem necessary
function countPairs(nums, target) {
    const numSet = new Set(nums);
    let count = 0;
    for (const num of nums) {
        const complement = target - num;
        if (complement !== num && numSet.has(complement)) {
            count++;
        }
    }
    return Math.floor(count / 2);
}
