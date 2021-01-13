import express from 'express';

export const app = express()
import mysql from 'mysql';

const connection = mysql.createConnection({
  // host: 'localhost',
  host: 'db',
  user: 'counter',
  password: 'password',
  database: 'counter_app'
});

const getCount = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT count from counter', (error, results) => {
      if (error) return reject(error);

      if (results.length !== 1) {
        throw new Error(`expected 1 row, but got ${ results.length } rows`);
      }

      resolve(results[0].count)
    });
  })
}

app.get('/', (req, res) => {
  getCount()
    .then((count) => res.send(`count is ${ count }`))
    .catch((e) => {
      console.error(e)
      res.send(`error occurred ${ e }`)
    })
})
