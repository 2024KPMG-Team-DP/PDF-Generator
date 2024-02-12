const pdf = require("pdf-creator-node");
const fs = require("fs");
const data = require("./datas/data.json");

// Read HTML Template
const html = fs.readFileSync("template.html", "utf8");
// console.log(data);

const options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
};

const document = {
  html: html,
  data: {
    info: data.info,
    result: data.result,
  },
  path: "./result/output.pdf",
  type: "",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
