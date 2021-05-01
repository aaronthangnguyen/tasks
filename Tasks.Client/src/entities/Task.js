const apiUrl = "https://localhost:5001/api/tasks";

export const getTasksAsync = async () => {
  return await fetch(apiUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const deleteTaskAsync = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
    mode: "cors",
  }).catch((error) => console.log(error));
};

export const postTaskAsync = async () => {
  const data = {
    title: "",
    isDone: false,
  };
  await fetch(apiUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));
};

export const putTaskAsync = async (data) => {
  await fetch(`${apiUrl}/${data.id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));
};
