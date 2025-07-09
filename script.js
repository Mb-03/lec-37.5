// function fetchAPI(url) {
//   return fetch(url).then((res) => {
//     if (!res.ok) throw new Error("Error fetching", url);
//     return res.json();
//   });
// }

// function fetchAll() {
//   console.log("Fetching all APIS....");

//   const api1 = document.querySelector("#api-1").value;
//   const api2 = document.querySelector("#api-2").value;
//   const api3 = document.querySelector("#api-3").value;

//   const promise1 = fetchAPI(api1);
//   const promise2 = fetchAPI(api2);
//   const promise3 = fetchAPI(api3);

//   Promise.all([promise1, promise2, promise3])
//     .then((res) => console.log("Promise All results: ", res))
//     .catch((err) => console.log(err));
// }

// function fetchAny() {
//   console.log("Fetching any APIS....");

//   const api1 = document.querySelector("#api-1").value;
//   const api2 = document.querySelector("#api-2").value;
//   const api3 = document.querySelector("#api-3").value;

//   const promise1 = fetchAPI(api1);
//   const promise2 = fetchAPI(api2);
//   const promise3 = fetchAPI(api3);

//   Promise.any([promise1, promise2, promise3])
//     .then((res) => console.log("Promise any results: ", res))
//     .catch((err) => console.log(err));
// }

// function fetchRace() {
//   console.log("Fetching race APIS....");

//   const api1 = document.querySelector("#api-1").value;
//   const api2 = document.querySelector("#api-2").value;
//   const api3 = document.querySelector("#api-3").value;

//   const promise1 = fetchAPI(api1);
//   const promise2 = fetchAPI(api2);
//   const promise3 = fetchAPI(api3);

//   Promise.race([promise1, promise2, promise3])
//     .then((res) => console.log("Promise race results: ", res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("congratualtions, fetch completed"))
// }


const profile = {
    name: "a",
    age: 10,
    password: "abc"
}

const profile2 = {...profile}

profile2.name = "giorgi"