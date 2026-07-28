class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let filterStr = '';
        let revStr = '';

        for(let i = 0; i < s.length; i++){
            if(s[i].match(/[a-z0-9]/)){
                filterStr = filterStr + s[i];
                revStr = s[i] + revStr;
            }
        }

        return filterStr === revStr;
    }
}
