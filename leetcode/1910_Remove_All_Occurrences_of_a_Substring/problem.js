/* Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".
Example 2:

Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".
 

Constraints:

1 <= s.length <= 1000
1 <= part.length <= 1000
s​​​​​​ and part consists of lowercase English letters. */

// URL: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

const removeOccurrences = (s, part) => {
  // find the first occurence of the substring
  // remove the occurence using the index
  // return the new substring
  // repeat until the find returns false
  let foundIndex = s.indexOf(part);
  let nSubString = s;
  while (foundIndex !== -1) { 
    console.log("foundIndex is: " + foundIndex);
    nSubString = nSubString.substring(0, foundIndex) + nSubString.substring(foundIndex + part.length);
    console.log("substring is: " + nSubString);
    foundIndex = nSubString.indexOf(part);
    console.log("foundIndex is: " + foundIndex);
  }
  console.log(nSubString);
  return nSubString;
};

removeOccurrences("daabcbaabcbc", "abc"); // "dab"
