class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0;
        let j = 0
        let map = {};
        let maxWindow = 0;
        map[s[0]] = 1;

        while(j < s.length){
            if(this.isWindowValid(map, k)){
                maxWindow = Math.max(maxWindow, j-i+1);
                ++j;
                map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
            }
            else {
                --map[s[i]];
                ++i;
            }
        }
        return maxWindow;
    }

    isWindowValid(map, k){
        let totalCount = 0;
        let maxCount = 0;
        for(let i = 0; i < 26; i++){
            let char = String.fromCharCode(i + 65);
            if(map[char]){
                totalCount = totalCount + map[char];
                maxCount = Math.max(maxCount, map[char]);
            }
        }
        return (totalCount - maxCount <= k)
    }
}
