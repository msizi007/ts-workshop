let characters: any[];

async function getUser(): Promise<void> {
  let res = await fetch("http://localhost:3000/items");

  let data: any[] = await res.json();
  characters = data;
  console.log(characters[0]);
}
getUser();

let root = document.getElementById("root") as HTMLElement;
function noCharacterData(rootElement: HTMLElement, msg: string): void {
  rootElement!.innerHTML = msg;
}
noCharacterData(root, "No data to display");
