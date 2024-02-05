const fs = require("fs");

const deleteFile = (filename) => {
  try {
    fs.unlinkSync(filename);
    console.log(`File ${filename} berhasil dihapus.`);
  } catch (err) {
    console.error(`Error saat menghapus file ${filename}: ${err.message}`);
  }
};

module.exports = {
  deleteFile,
};
