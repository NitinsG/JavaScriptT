/*

In JavaScript, there are the following primitive data types:

1. Number—this includes floating point numbers as well as integers, for example 1, 100, 3.14. 

2. String—any number of characters, for example "a", "one", "one 2 three". 

3. Boolean—can be either true or false.

4. Undefined—when you try to access a variable that doesn't exist, you get the special value undefined. 
   The same will happen when you have declared a variable, but not given it a value yet. 
   JavaScript will initialize it behind the scenes, with the value undefined. 

5. Null—this is another special data type that can have only one value, the have only one value, the only one value, the null value. 
   It means no value, an empty value, nothing. The difference with undefined is that if a variable has a value null, 
   it is still defined, it only happens that its value is nothing.

*/

/*

NaN

You get NaN when you try to perform an operation that assumes numbers but the operation fails. 
For example, if you try to multiply 10 by the character "f", the result is NaN, because "f" is obviously not a valid operand for a multiplication.

*/

/*

Falsey in JavaScript

Most values convert to true with the exception of the following (which convert to false): 

1. The empty string "" 
2. null 
3. undefined 
4. The number 0 
5. The number NaN 
6. The boolean false

These six values are sometimes referred to as being falsy, while all others are truthy (including, for example, the strings "0", " ", and "false"). 

Note : Permitive Datatypes are passed by value, while other datatypes are passed by reference. This can cause some unexpected side effects if you are not aware of.
*/



