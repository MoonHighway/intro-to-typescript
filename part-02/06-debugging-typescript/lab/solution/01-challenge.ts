function getFilenames(): string[] {
  return ["app.ts", "index.html", "styles.css"];
}

function handleFiles(files: string[]) {
  files.forEach((file) => {
    console.log(`Processing file '${file}'...`);
  });
}

const files = getFilenames();

handleFiles(files);
