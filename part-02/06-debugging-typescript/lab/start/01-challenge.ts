function getFilenames() {
  return ["app.ts", "index.html", false, "styles.css"];
}

function handleFiles(files: string[]) {
  files.forEach((file) => {
    console.log(`Processing file '${file}'...`);
  });
}

const files = getFilenames();

handleFiles(files);
