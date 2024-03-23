const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
// Replace the following variables with your actual MongoDB connection details
const username = "frankiederosier2727";
const password = "<Briar122!>";
const hostname = "mern-book-search.xdfcw97.mongodb.net";
const databaseName = "sample_mflix";

// Construct the MongoDB connection URI
const uri = `mongodb+srv://${username}:${password}@${hostname}/${databaseName}?retryWrites=true&w=majority`;
//const uri = "mongodb+srv://frankiederosier2727:<Briar122!>@mern-book-search.xdfcw97.mongodb.net/?retryWrites=true&w=majority&appName=mern-book-search";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

