# Exercise: Blog API 📝

> **Part 2: Section 4: Generics**

## Setup

Change into the start directory:

```bash
cd part-02/04-generics/exercise/start
```

Start the web server:

```bash
npm run serve
```

Open [`http://127.0.0.1:8000/`](http://127.0.0.1:8000/) in your web browser.

## Retrieve and render a blog post

Open up `src/app.ts` and add a function for making API requests:

```typescript
async function makeApiRequest(url: string) {
  const response = await fetch(url);
  const responseData = await response.json();

  return responseData;
}
```

Make an API request using the new function and log the return value:

```typescript
const post = await makeApiRequest(
  "https://jsonplaceholder.typicode.com/posts/1"
);

console.log({ post });
```

Hover over the `post` variable and notice how its type is `any`.

Because it has a type of `any`, TypeScript allows us to do this, which blows up at run time!

```typescript
console.log(post.something.toUpperCase());
```

To fix this, we can make the `makeApiRequest()` function generic:

Add a type parameter to the function and use it to annotate the `responseData` variable:

```diff
-async function makeApiRequest(url: string) {
+async function makeApiRequest<ResponseDataType>(url: string) {
   const response = await fetch(url);
-  const responseData = await response.json();
+  const responseData: ResponseDataType = await response.json();
   return responseData;
 }
```

Hover over the `post` variable and notice how its type is now `unknown`.

Add a `Post` type based on the data in the `post` object:

```typescript
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
```

Add a type argument to the `makeApiRequest()` function call:

```diff
-const post = await makeApiRequest(
+const post = await makeApiRequest<Post>(
   "https://jsonplaceholder.typicode.com/posts/1"
 );
```

Hover over the `post` variable and notice how its type is now `Post`.

We can now safely access the properties on the `post` object and render the blog post:

```typescript
renderPost(post.title, post.body);
```

Remove the call `console.log({ post })` and any other debug code.

## Retrieve and render blog post comments

Now let's follow similar steps to build up the retrieval and rendering of comments.

Add an API request to retrieve the blog post comments and log out the response:

```typescript
const comments = await makeApiRequest(
  "https://jsonplaceholder.typicode.com/posts/1/comments"
);

console.log({ comments });
```

Add a new `Comment` type:

```typescript
type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
```

Add a type argument to the `makeApiRequest()` function call:

```diff
-const comments = await makeApiRequest(
+const comments = await makeApiRequest<Comment[]>(
   "https://jsonplaceholder.typicode.com/posts/1/comments"
 );
```

Hover over the `comments` variable and notice how its type is now `Comment[]`.

Remove the call `console.log({ comments })`.

Loop through all of the comments and render them:

```typescript
for (const comment of comments) {
  renderComment(comment.name, comment.body);
}
```

## Add generic constraints

We can pass _any_ type we want as the type argument for `makeApiRequest()`. To see this in action, change the `comments` API call:

```diff
-const comments = await makeApiRequest<Comment[]>(
+const comments = await makeApiRequest<{ name: string }[]>(
   "https://jsonplaceholder.typicode.com/posts/1/comments"
 );
```

We can restrict the types which can be used as an argument with `makeApiRequest()` by adding a constraint to the generic parameter.

First, let's create a new interface:

```typescript
interface ApiEntity {
  id: number;
}
```

Then let's change our `Post` and `Comment` types to interfaces which extend from the `ApiEntity` type, and remove their `id` fields:

```diff
-type Post = {
+interface Post extends ApiEntity {
-  id: number;
```

```diff
-type Comment = {
+interface Comment extends ApiEntity {
-  id: number;
```

Now we can add the constraint to the `ResponseDataType` generic parameter on our `makeApiRequest()` function:

```diff
-async function makeApiRequest<ResponseDataType>(url: string) {
+async function makeApiRequest<ResponseDataType extends ApiEntity | ApiEntity[]>( url: string ) {
```

This constraint allows for an object with a type which extends the `ApiEntity` type, or an array of objects which extend the `ApiEntity` type.

Notice how if we hover over the call to `makeApiRequest()` that we're making to retrieve comments, we now see this error:

```plaintext
Type '{ name: string; }[]' does not satisfy the constraint 'ApiEntity | ApiEntity[]'.
```

Let's fix this error by changing the type parameter back to `Comment[]`:

```diff
-const comments = await makeApiRequest<{ name: string }[]>(
+const comments = await makeApiRequest<Comment[]>(
   "https://jsonplaceholder.typicode.com/posts/1/comments"
 );
```

We've now restricted the types which can be used with the `makeApiRequest()` function.
