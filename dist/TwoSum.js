"use strict";
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === diff) {
                return [i, j];
            }
        }
    }
    return undefined;
}
;
const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));
//# sourceMappingURL=TwoSum.js.map