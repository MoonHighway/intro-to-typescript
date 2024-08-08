# Lab: Userland 🧑

> **Part 1: Section 3: Flexible Types**

Your challenge is to create interfaces which allow for detailed user profiles with dynamic object keys.

## Requirements

1. **Create an interface for user profiles.** It should allow for the `username`, `email` and `premiumMember` properties in the `userProfile` object.

2. **Create another interface for detailed user profiles.** It should allow for the same properties as the interface you just created, but also allow for other properties which contain miscellaneous user profile data i.e. `age` and `country` in the `userProfile` object.

3. **Apply the second interface to the `userProfile` object.** You shouldn't have any type errors in your code.

4. **Create an `updateProfile()` function.**
    1. It should should accept a user profile object, the name of a user profile property to update, and a new value for the property.
    2. It should return a copy of the user profile object where the specified property has the new value.

5. **Call your `updateProfile()` function**. After you call it, output the new user profile object to confirm that the property you specified has been correctly updated.

6. **Test your code.** Run it with `npx tsx userland.ts`.

### Extra credit

5. **Create an array containing two user profile objects.** Ensure that the user objects in the array are type checked against your detailed user profile interface.

6. **Loop through the array and use your `updateProfile()` function to update each profile.** Output the updated user profile objects to check things are behaving as you expect.

7. **Test your code.** Run it with `npx tsx userland.ts`.
