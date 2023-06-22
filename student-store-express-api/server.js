const app = require("./app");

const port = process.env.PORT || 3001;

app.get("/");

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port);
});
