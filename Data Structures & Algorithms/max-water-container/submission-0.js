class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let mostWater = 0;

        while(i < j){
            let area = Math.min(heights[i], heights[j]) * (j-i);
            mostWater = Math.max(area, mostWater);

            if(heights[i] > heights[j]){
                --j;
            } else {
                ++i;
            }
        }
        return mostWater
    }
}
