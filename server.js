const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 6969;

app.use(express.json());

/* routes:
 * 1. login page
 * 2. profile page
 * 3. marketplace page
 * 4. bidding page // with an extra section for the seller to choose bids
 * 5. admins page (list of users and respective activity)
 * 6. if possible, intro page too
 *
 */
app.use("/api/login", require("./routes/login.js"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/feed", require("./routes/marketplace"));
app.use('/api/marketplace/bidding', require('./routes/bidding'));
// app.use('/admins', require('./routes/admins'));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
