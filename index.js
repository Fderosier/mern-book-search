const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
// Replace the following variables with your actual MongoDB connection details
const username = "derosierfrankie";
const password = "mydogdiesel";
const hostname = "mern-book-search.a8hpqxi.mongodb.net";
const databaseName = "mern-book-search";

const uri = "mongodb+srv://derosierfrankie:mydogdiesel@mern-book-search.a8hpqxi.mongodb.net/mern-book-search?retryWrites=true&w=majority&appName=mern-book-search";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

