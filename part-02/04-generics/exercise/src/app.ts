function renderPost(title: string, body: string) {
  const $postTitle = document.getElementById("post-title");
  const $postBody = document.getElementById("post-body");

  if (!$postTitle || !$postBody) {
    throw new Error("Post elements not found");
  }

  $postTitle.textContent = title;
  $postBody.textContent = body;
}

function renderComment(name: string, body: string) {
  const commentsList = document.getElementById("comments-list");

  if (!commentsList) {
    throw new Error("Comments list not found");
  }

  const commentElement = document.createElement("li");
  commentElement.textContent = `${name} commented: "${body}"`;
  commentsList.appendChild(commentElement);
}

{
  // No generic constraints
  // type Post = {
  //   id: number;
  //   title: string;
  //   body: string;
  //   userId: number;
  // };
  // type Comment = {
  //   id: number;
  //   postId: number;
  //   name: string;
  //   email: string;
  //   body: string;
  // };
  // async function makeApiRequest<ResponseDataType>(url: string) {
  //   const response = await fetch(url);
  //   const responseData: ResponseDataType = await response.json();
  //   return responseData;
  // }
  // const post = await makeApiRequest<Post>(
  //   "https://jsonplaceholder.typicode.com/posts/1"
  // );
  // const comments = await makeApiRequest<Comment[]>(
  //   "https://jsonplaceholder.typicode.com/posts/1/comments"
  // );
  // for (const comment of comments) {
  //   console.log("COMMENT:");
  //   console.log(comment.name);
  //   console.log(comment.body);
  // }
}

{
  // Generic constraints

  interface ApiEntity {
    id: number;
  }

  interface Post extends ApiEntity {
    title: string;
    body: string;
    userId: number;
  }

  interface Comment extends ApiEntity {
    postId: number;
    name: string;
    email: string;
    body: string;
  }

  async function makeApiRequest<
    ResponseDataType extends ApiEntity | ApiEntity[]
  >(url: string) {
    const response = await fetch(url);
    const responseData: ResponseDataType = await response.json();

    return responseData;
  }

  const post = await makeApiRequest<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  renderPost(post.title, post.body);

  const comments = await makeApiRequest<Comment[]>(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  for (const comment of comments) {
    renderComment(comment.name, comment.body);
  }
}
