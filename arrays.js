var friends = ["Elias", "Cody", "Bryer", "Kie"];
var numbers = [1, 2, 3, 4]
var boolean = [true, false, true, false]

//the push method adds any number of elements following the last element in an array
friends.push("Mitch", "Eddie");

console.log(friends);

//the pop method removes the last element in an array
numbers.pop();

console.log(numbers);

//the shift method will remove the first element of an array
boolean.shift();

console.log(boolean);

//In this array there are 4 elements; [1, 2, 3, 4]. Counting in an array starts with 0.
//In this case 0 = 1, 1 = 2, 2 = 3, and 3 = 4. 
//We do this to count more effeciently. If I were to tell you grab element 0 it would be 1 meaning you move 0 times.
//If I ask you to grab element 3 you would grab 4 because you move over three times.
//We call this form of counting Index Position.
var integers = [1, 2, 3, 4];