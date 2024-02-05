const fs = require("fs");

const renameFile = (oldPath, newPath) => {
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`File has been renamed from ${oldPath} to ${newPath}`);
  } catch (err) {
    console.error(`Error occurred while renaming the file: ${err.message}`);
  }
};

module.exports = {
  renameFile,
};
