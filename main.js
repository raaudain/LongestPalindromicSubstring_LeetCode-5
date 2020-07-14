// Given a string s, find the longest palindromic substring in a s.s
// Example:
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

// Technique: Expand around the center

function longestPalindrome(s){
    let startIndex = 0;
    let maxLength = 1; // Length can't be less than 1
    
    function expandAroundMiddle(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const currentLength = right - left + 1;
            
            // Used in the slice method for return
            if (currentLength > maxLength){
                maxLength = currentLength;
                startIndex = left;
            }
            
            console.log(left, right)
            
            left--;
            right++;
        }
    }
    
    
    for (let i = 0; i < s.length; i++){
        
        // For odd length, checks characters to the left and right
        expandAroundMiddle(i-1, i+1)
        
        // For even length, checks characters
        expandAroundMiddle(i, i+1)

        console.log(s.slice(startIndex, startIndex+maxLength))
    }
    
    console.log("start", startIndex, "max", maxLength)
    
    return s.slice(startIndex, startIndex+maxLength);
}


// longestPalindrome("cbbd");
// longestPalindrome("abba");
longestPalindrome("asadljfslajfsaljfl;kk;kkjjjjjhhhhggbajfsaljfdsaljfddrpotfsrsa");