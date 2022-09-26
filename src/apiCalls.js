const fetchData = (dataFileName) => {
return fetch(`http://localhost:3001/api/v1/${dataFileName}`)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log("Oh no! There\'s an error!"))
};

const fetchPost = (newData, initObject) => {
  return fetch(`http://localhost:3001/api/v1/${newData}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(initObject)
  })
    .then(response => handleErrors(response))
    .then(response => response.json())
    .catch(err => showErrorMessage())
};

function handleErrors(response) {
  if (!response.ok) {
    throw new Error(
      "Uh oh, it looks like we are having some difficulty with your request!"
    );
  } else {
    return response;
  }
}

function showErrorMessage() {
  console.log("Oops, it looks like there's an error")
}

export { fetchData, fetchPost }
