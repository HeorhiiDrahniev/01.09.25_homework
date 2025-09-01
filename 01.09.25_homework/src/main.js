import { apiRequest } from "./api/request.js";

// URL
const requestURLPosts = "https://jsonplaceholder.typicode.com/posts/";
let postId = 1;
const postIdString = postId.toString();

// POST constant
const postBody = {
  title: "My homework post",
  body: "This is a test post",
  userId: 1,
};
// PUT constant
const updatedPostBody = {
  id: 1,
  title: "Updated title",
  body: "Updated body",
  userId: 1,
};
// PATCH constant
const patchedTitle = {
  title: "Patched title",
};

// GET request
apiRequest(`${requestURLPosts}${postIdString}`)
  .then((post) => console.log(post.title))
  .catch((err) => console.error("Ошибка запроса", err));

// POST request
apiRequest(requestURLPosts, "POST", postBody)
  .then((newPost) => console.log("Создан пост:", newPost.id))
  .catch((err) => console.error("Ошибка создания поста:", err));

// PUT request
apiRequest(`${requestURLPosts}${postIdString}`, "PUT", updatedPostBody)
  .then((updatedPost) =>
    console.log("Полностью заменён пост:", updatedPost.title),
  )
  .catch((err) => console.error("Ошибка обновления поста:", err));

// PATCH request
apiRequest(`${requestURLPosts}${postIdString}`, "PATCH", patchedTitle)
  .then((updatedPost) => console.log("Обновлён пост:", updatedPost.title))
  .catch((err) => console.error("Ошибка изменения поста:", err));

// DELETE request
apiRequest(`${requestURLPosts}${postIdString}`, "DELETE")
  .then((deletedPost) => console.log("Пост удалён", deletedPost))
  .catch((err) => console.error("Ошибка удаления поста:", err));
