const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskroutes");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // Allow all origins
mongoose
  .connect('mongodb+srv://aayirathiloruvan20:viswaDbPwd@cluster0.vxtrh.mongodb.net/offlineApp?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API! Use /tasks to access tasks.");
});

app.use("/tasks", taskRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});