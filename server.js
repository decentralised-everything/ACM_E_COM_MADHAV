const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
const app = express();

const PORT = process.env.PORT || 6969;
const connection_url =
  "mongodb+srv://madhav:madhav@cluster0.tlg4k.mongodb.net/marketplace?retryWrites=true&w=majority";
app.use(express.json());

/* routes:
 * 1. login page
 * 2. profile page
 * 3. marketplace page
 * 4. bidding page // with an extra section for the seller to choose bids
 * 5. admins page (list of users and respective activity)
 * 6. if possible, intro page too
 */
app.get("/", (req, res) => {
  res.send("hello!");
});
app.use("/join", require("./routes/join.js"));
app.use("/profile", require("./routes/profile"));
app.use("/feed", require("./routes/marketplace"));
app.use("/feed", require("./routes/bidding"));
// app.use('/admins', require('./routes/admins'));

mongoose
  .connect(connection_url, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}...`);
    })
  );
