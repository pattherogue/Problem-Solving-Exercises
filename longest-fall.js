// add whatever parameters you deem necessary
function longestFall(nums) {
    if (!nums.length) {
        return 0;
    }
    
    let maxFall = 1;
    let currentFall = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            currentFall++;
            maxFall = Math.max(maxFall, currentFall);
        } else {
            currentFall = 1;
        }
    }
    
    return maxFall;
}
