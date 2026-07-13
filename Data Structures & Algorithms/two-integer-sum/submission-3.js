class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Brute force approach
            // for(let i = 0; i < nums.length; i++){
            //     for(let j = i+1; j < nums.length; j++){
            //         let sum = nums[i] + nums[j];
            //         if(sum == target){
            //             return [i, j]
            //         }
            //     }
            // }

        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            let need = target - nums[i];

            if(map.has(need)){
                return [map.get(need), i];
            }

            map.set(nums[i], i)
        }

    }
}
