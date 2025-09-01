import "./style.css";

// GET
// Сделать запрос на https://jsonplaceholder.typicode.com/posts/1.
// Вывести в консоль заголовок поста (title).
// Если запрос завершился ошибкой, вывести "Ошибка запроса".

function responseChecker(response) {
  if (!response.ok) {
    throw new Error(`"Ошибка запроса". Cтатус сервера: ${response.status}`);
  } else {
    return response.json();
  }
}

const requestURLPosts = "https://jsonplaceholder.typicode.com/posts/";
let postId = 1;
const postIdString = postId.toString();

fetch(`${requestURLPosts}${postIdString}`)
  .then(responseChecker)
  .then((data) => {
    console.log("1:", data.id);
  })
  .catch((error) => {
    console.error("Ошибка запроса", error);
  });

// POST
// Отправить запрос POST на https://jsonplaceholder.typicode.com/posts с телом:
// {
// "title": "My homework post",
// "body": "This is a test post",
// "userId": 1
// }
// Получить ответ и вывести в консоль id созданного поста.
// Если сервер вернул ошибку (!response.ok), вывести "Ошибка создания поста".

const postBody = {
  title: "My homework post",
  body: "This is a test post",
  userId: 1,
};

fetch(`${requestURLPosts}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(postBody),
})
  .then(responseChecker)
  .then((result) => {
    console.log("2:", result.id);
  })
  .catch((error) => {
    console.log("Ошибка создания поста", error);
  });

// PUT
// Обновить пост с id=1 (адрес: https://jsonplaceholder.typicode.com/posts/1) методом PUT.
// Тело запроса:
// {
// "id": 1,
// "title": "Updated title",
// "body": "Updated body",
// "userId": 1
// }
// Вывести в консоль обновлённый заголовок (title).
// Если запрос неудачный, вывести "Ошибка обновления поста".

const updatedPostBody = {
  id: 1,
  title: "Updated title",
  body: "Updated body",
  userId: 1,
};

fetch(`${requestURLPosts}${postIdString}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(updatedPostBody),
})
  .then(responseChecker)
  .then((result) => {
    console.log("3:", result.title);
  })
  .catch((error) => {
    console.log("Ошибка обновления поста", error);
  });

// PATCH
// Изменить только поле title у поста с id=1 методом PATCH.
// Запрос:
// {
// "title": "Patched title"
// }
// Вывести в консоль новый title.
// В случае ошибки — вывести "Ошибка изменения поста".

const patchedTitle = {
  title: "Patched title",
};

fetch(`${requestURLPosts}${postIdString}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(patchedTitle),
})
  .then(responseChecker)
  .then((result) => {
    console.log("4:", result.title);
  })
  .catch((error) => {
    console.log("Ошибка изменения поста", error);
  });

// DELETE
// Удалить пост с id=1 (адрес: https://jsonplaceholder.typicode.com/posts/1).
// Если ответ успешный (status === 200), вывести "Пост удалён".
// Если нет — вывести "Ошибка удаления поста".

fetch(`${requestURLPosts}${postIdString}`, {
  method: "DELETE",
})
  .then(responseChecker)
  .then((result) => {
    console.log("Пост удалён", result);
  })
  .catch((error) => {
    console.log("Ошибка удаления поста", error);
  });
