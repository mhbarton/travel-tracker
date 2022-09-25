const fetchData = (dataFileName) => {
return fetch(`http://localhost:3001/api/v1/${dataFileName}`)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log("Oh no! There\'s an error!"))
};

// const fetchPost = (url, initObject) => {
//   return fetch(`http://localhost:3001/api/v1/${url}`, {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(initObject)
//   })
//     .then(response => handleErrors(response))
//     .then(response => response.json())
//     .catch(err => showErrorMessage())
// };
//
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   } else {
//   return response;
//   }
// }
//
// function showErrorMessage() {
//  alert('There was an error!')
// }

export { fetchData }

// export { fetchData, fetchPost }
