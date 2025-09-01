export async function apiRequest(url, method = "GET", body = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Ошибка запроса. Статус: ${response.status}`);
  }

  return response.json();
}
