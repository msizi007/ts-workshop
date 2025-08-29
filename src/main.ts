let characters: any[];

async function getUser() {
  let res = await fetch("http://localhost:3000/items");

  let data = await res.json();
  console.log(data);
}
getUser();
