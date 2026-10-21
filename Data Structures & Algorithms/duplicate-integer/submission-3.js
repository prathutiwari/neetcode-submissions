class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let newObj = {};

        for(let i = 0; i < nums.length; i++){
            if(newObj[nums[i]]){
                newObj[nums[i]]++;
                return true;
            }else{
                newObj[nums[i]] = 1;
            }
        }

        return false;
    }
}
