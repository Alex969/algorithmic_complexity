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

we would take an input array 
check for the first element and make it last 
check for the second element and make it second to last
check for the i element and make it i to last 
check for the last element and make it first
return the array 
 
4. If it is possible directly:
  * translate each of the steps into code otherwise:
  * think about each step separately, and break them down further following     steps 2 to 4.
5. Once everything is translated to code, run your test cases
