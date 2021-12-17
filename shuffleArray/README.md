1. Clarify the problem

input               |              output
                    |
[1, 2, 5, 19]       |       [2, 19, 1, 5]
["Simon", 3, "cat"] | ["Simon", "cat", 3]

2. Think about how you would do this, given this task in real life.

take a deck of cards
10 cards 
would divide them into little decks 
and would add them on top of each other randomly 

3. Write down each step in plain English

we could take an array of elements like [1, 2, "Brown", 29];
and have two empty arrays [];
then randomly populate the starter array with a range of the two arrays

4.  If it is possible directly translate each of the steps into code:
myArray = [1, 2, "Brown", 29];

const shuffle = (arrayToShuffle) => {
  newArray = []

  while(myArray.length !== 0){
    newArray.push(
      myArray.splice(Math.floor(myArray.length * Math.random()), 1)[0]
    );
  }
  return newArray;
}
