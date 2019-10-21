# js-some-fun-problems
Code Optimization
Different ways to solve a problem depending on the time it takes to execute a code

1. charCount : JS function that counts the number of characters in a string and returns an object with total numbers of each character from 0-9 and a-z.
    I have compared the two Different methods to do this problem. One is where I check every character using /[a-z0-9]/ test and the other one is Checking each character using their ASCII value.
At the end , it shows that Using ASCII code is faster using performance.now()

2. squareOfAnArray : Js function that accept two arrays, returns true if every value in the array has its corresponding value squared in second array. Frequency must be same.
