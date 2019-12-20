const db = require("../database/db-config.js");

module.exports = {
  addJoke,
  findJoke,
  findJokeBy,
  findJokeById
};

function findJoke() {
  return db("jokes").select("id", "question", "punchline");
}

function findJokeBy(filter) {
  return db("jokes").where(filter);
}

async function addJoke(joke) {
  const [id] = await db("jokes").insert(joke);

  return findById(id);
}

function findJokeById(id) {
  return db("jokes")
    .where({ id })
    .first();
}
