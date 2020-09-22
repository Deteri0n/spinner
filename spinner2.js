let characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let timer = 0;
for (let character of characters) {
  setTimeout(() => {
    process.stdout.write(character);
  }, timer);
  timer += 200;
};