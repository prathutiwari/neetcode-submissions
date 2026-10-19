class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let j = 0;
        let map = {};
        let currWS = 0;
        let maxWS = 0;

        for(j = 0; j < s.length; j++){
            if(map[s[j]] !== undefined && map[s[j]] >= i){
                i = map[s[j]] + 1;
            }
            map[s[j]] = j;
            currWS = j - i + 1;
            maxWS = Math.max(currWS, maxWS);
        }

        return maxWS;
    }
}
