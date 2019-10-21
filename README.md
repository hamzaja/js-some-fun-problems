# js-some-fun-problems
Code Optimization
Different ways to solve a problem depending on the time it takes to execute a code

1. charCount : JS function that counts the number of characters in a string and returns an object with total numbers of each character from 0-9 and a-z.
    I have compared the two Different methods to do this problem. One is where I check every character using /[a-z0-9]/ test and the other one is Checking each character using their ASCII value.
At the end , it shows that Using ASCII code is faster using performance.now()

2. squareOfAnArray : Js function that accept two arrays, returns true if every value in the array has its corresponding value squared in second array. Frequency must be same.
    I have compared two Different methods. One is using iteration. Other one is by using Objects. At the end i am using performance hook to show the execution time of each method.
  Array length = 100 :
    square Array Using Objects: performance time = 0.3156939968466759MS
    square Array Using iteration : performance time = 0.3382740020751953MS

  Array length = 1000 :
    square Array Using Objects: performance time = 1.3280899971723557MS
    square Array Using iteration : performance time = 0.5822420045733452MS

  Array length = 10,000 :
    square Array Using Objects: performance time = 15.831486999988556MS
    square Array Using iteration : performance time = 20.17586299777031MS

  Array length = 100,000 :  
    square Array Using Objects: performance time = 158.87104500085115MS
    square Array Using iteration : performance time = 2009.6876490041614MS

From the following results its very clear that if we have large number of array then the best practice is to avoid iteration
