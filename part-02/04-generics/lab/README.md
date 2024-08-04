# Lab: Bad Data 🙈

> **Part 2: Section 4: Generics**

## Requirements

1. Implement the `ValidAirport` object type. It should have all the properties of
the `InvalidAirport` object type, and an additional `original` property that contains
the original `InvalidAirport` object.

2. The `transformData` function accepts an array of `data` and a `transform` callback
function. It then creates and returns a new array by passing each item of the `data`
array through the `transform` callback function. Change this function into a generic
function so that:
    1. It can accept a `data` array with elements of a specific type.
    2. The `transform` callback function accepts a value with one specific type, and
    returns a value with another specific type.

3. Use the `transformData()` function to transform the `airports` array. Each object
in the array should match the `ValidAirport` object type. The `code` property of each
airport should be converted to uppercase.

4. In the `start` directory, run `npx tsc` and `node dist/start.js` to check that your
code compiles and runs correctly.

### Extra credit

5. Uncomment the code under 'Extra credit' in `start.ts`.

6. We've got more invalid airports data, but it looks like we're accidentally adding one
of the airports to the wrong array. Whoops! Make the array of valid airports immutable (readonly)
so it's not possible to add elements to it, then fix the code so the invalid airport is being added
to the correct array.
