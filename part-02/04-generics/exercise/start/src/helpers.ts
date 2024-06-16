export function renderPost(title: string, body: string) {
  const $postTitle = document.getElementById("post-title");
  const $postBody = document.getElementById("post-body");

  if (!$postTitle || !$postBody) {
    throw new Error("Post elements not found");
  }

  $postTitle.textContent = title;
  $postBody.textContent = body;
}

export function renderComment(name: string, body: string) {
  const commentsList = document.getElementById("comments-list");

  if (!commentsList) {
    throw new Error("Comments list not found");
  }

  const commentElement = document.createElement("li");
  commentElement.textContent = `${name} commented: "${body}"`;
  commentsList.appendChild(commentElement);
}
