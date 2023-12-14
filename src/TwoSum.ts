
function twoSum(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[j] === diff) {
                return [i, j]
            }
        }
    }

    return undefined;

};


const nums: number[] = [3,2,4]
const target: number = 6

console.log(twoSum(nums, target))