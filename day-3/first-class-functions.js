// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function with a given value
    return function(value) {
        // return whether a given value is greater than the base
        return value > base;
    }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function with a given value
    return function(value) {
        // return whether a given value is less than the base
        return value < base;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // Ensure the startsWith character is in lowercase
    const lowerCaseChar = startsWith.toLowerCase();
    // Return a new function that takes a string to test as its parameter
    return function(stringToTest) {
        // Ensure the string to test is also in lowercase
        const lowerCaseString = stringToTest.toLowerCase();
        // Use the startsWith() method to check if the string starts with the specified character
       return lowerCaseString.startsWith(lowerCaseChar);
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
        // Ensure the endsWith character is in lowercase
        const lowerCaseChar = endsWith.toLowerCase();
        // Return a new function that takes a string to test as its parameter
        return function(stringToTest) {
            // Ensure the string to test is also in lowercase
            const lowerCaseString = stringToTest.toLowerCase();
            // Use the endsWith() method to check if the string ends with the specified character
           return lowerCaseString.endsWith(lowerCaseChar);
        }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
      // Initialize an empty array to hold the modified strings
  let modifiedStrings = [];

  // Use a traditional for loop to iterate over each string
  for (let i = 0; i < strings.length; i++) {
    // Call the modify function on each string and add the result to the new array
    modifiedStrings.push(modify(strings[i]));
  }

  // Return the new array containing the modified strings
  return modifiedStrings;
}

// Define the modify function that converts a string to uppercase
function toUpperCase(string) {
  return string.toUpperCase();
    
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
        // Loop through all strings in the array
        for (let i = 0; i < strings.length; i++) {
            // If the current string does not pass the test, return false
            if (!test(strings[i])) {
                return false;
            }
        }
        // If all strings pass the test, return true
        return true;
    }
    
    // Test function to check if a string starts with 'C'
    function startsWithC(string) {
        return string.startsWith('C');
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}