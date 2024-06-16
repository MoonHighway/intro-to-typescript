import { renderPost, renderComment } from "./helpers.js";

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

async function makeApiRequest<ResponseDataType extends ApiEntity | ApiEntity[]>(
  url: string
) {
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
