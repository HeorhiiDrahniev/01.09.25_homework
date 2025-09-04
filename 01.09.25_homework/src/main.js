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

// GET request function
async function getPostRequest(id) {
  try {
    const post = await apiRequest(`${requestURLPosts}${id}`);
    console.log(post.title);
  } catch (error) {
    console.error("Ошибка запроса", error);
  }
}

// POST request function
async function postRequest(post) {
  try {
    const newPost = await apiRequest(requestURLPosts, "POST", post);
    console.log("Создан пост:", newPost.id);
  } catch (error) {
    console.error("Ошибка создания поста:", error);
  }
}

// PUT request function
async function putRequest(id, post) {
  try {
    const replacedPost = await apiRequest(
      `${requestURLPosts}${id}`,
      "PUT",
      post,
    );
    console.log("Полностью заменён пост:", replacedPost.title);
  } catch (error) {
    console.error("Ошибка обновления поста:", error);
  }
}

// PATCH request function
async function patchRequest(id, post) {
  try {
    const patchedPost = await apiRequest(
      `${requestURLPosts}${id}`,
      "PATCH",
      post,
    );
    console.log("Обновлён пост:", patchedPost.title);
  } catch (error) {
    console.error("Ошибка изменения поста:", error);
  }
}

// DELETE request function

async function deleteRequest(id) {
  try {
    const delatedPost = await apiRequest(`${requestURLPosts}${id}`, "DELETE");
    console.log("Пост удалён");
  } catch (error) {
    console.error("Ошибка удаления поста:", error);
  }
}

// Call all requests functions
getPostRequest(postIdString);
postRequest(postBody);
putRequest(postIdString, updatedPostBody);
patchRequest(postIdString, patchedTitle);
deleteRequest(postIdString);
