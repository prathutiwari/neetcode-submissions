class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let newArr = [];
        let fast = nums[1];
        let slow = nums[0];

        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                let sum = nums[i] + nums[j];
                if(sum == target){
                    newArr.push(i, j);
                }
            }
        }
        return newArr;
    }
}
