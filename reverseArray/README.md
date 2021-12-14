For each algorithm you write, you should:

 - Write a few tests (covering different cases)
 - Implement them
 - Run your timing framework
 - Plot their curves

Once you have written a few, compare the shapes of different curves.

 - How can you characterise the complexity of different algorithms?
 - Which algorithms are more efficient?

**Reversing**

1. Clarify the problem

input     |     output
[1,2]     |  [2,1]
[1,2,3]   |  [3,2,1]
[]        |  error 'cannot reverse empty array'


2. Think about how you would do this, given this task in real life.
3. Write down each step in plain English
4. If it is possible directly:
  * translate each of the steps into code otherwise:
  * think about each step separately, and break them down further following     steps 2 to 4.

// check for the first element and make it last 
// making the first element last means that [0] becomes [array.length - 1]
// and [array.length - 1] becomes [0]
// [array.length - 2]  becomes [1]
// [array.length - (i + 1)] becomes [i]
// we can just push them in a new array and return that array 
// check for the second element and make it second to last
// [1] becomes [array.length - 2]
// [i] becomes [array.length - (i+1)]
// 
// for(i = 0; i < array1.legnth; i++)
// array2.push(array[array.length - (i+1)])
// return array2
// check for the i element and make it i to last 
// check for the last element and make it first

5. Once everything is translated to code, run your test cases

Time : 

Input Size   |    Time

5000         | around 0.5 ms
10000        | around 3 ms
100000       | around 5 ms
1000000      | around 30 ms
