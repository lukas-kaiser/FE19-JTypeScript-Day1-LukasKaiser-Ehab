let names: string[] = ["Hansfried", "Peterich", "Franzunder", "Alfonshelm"];

for (let index in names) {
  console.log(index);
}

for (let name of names) {
    console.log(name);
    
}

for (let i = 0; i < names.length; i++) {
    console.log(i  + " " + names[i]);
}