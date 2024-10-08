import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "book_db",
    password: "12345",
    port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkRead(orderBy = '') {
    let query = `
        SELECT id, title, author, date, recommendation, summary, olid
        FROM book_info
    `;

    switch (orderBy) {
        case 'title':
            query += ' ORDER BY title ASC';
            break;
        case 'author':
            query += ' ORDER BY author ASC';
            break;
        case 'date':
            query += ' ORDER BY date DESC';
            break;
        case 'recommendation':
            query += ' ORDER BY recommendation DESC';
            break;
        default:
            // If no ordering is specified, you might want to add a default order
            // For example, order by date added (assuming you have such a field)
            // query += ' ORDER BY date_added DESC';
            break;
    }

    try {
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error in checkRead function:', error);
        throw error; // Re-throw the error so it can be handled by the caller
    }
}

app.get('/', async (req, res) => {
    try {
        const orderBy = req.query.orderBy || ''; // Get the orderBy parameter from the query string
        const books = await checkRead(orderBy);
        res.render('index.ejs', { books: books });
    } catch (error) {
        console.error('Error in root route:', error);
        res.status(500).send('An error occurred while fetching books');
    }
});

app.post("/add", async (req, res) => {
    const { title, date, recommendation, summary } = req.body;
    try {
        const encodedTitle = encodeURIComponent(title);
        console.log(encodedTitle);
        const result = await axios.get(`https://openlibrary.org/search.json?title=${encodedTitle}&fields=key,title,author_name,editions`);
        const firstDoc = result.data.docs[0];
        const firstEdition = firstDoc.editions.docs[0];
        const OLID = firstEdition.key.split('/')[2];
        const author_name = firstDoc["author_name"]
        await db.query(
            "INSERT INTO book_info (title, author, date, recommendation, summary, olid) VALUES ($1, $2, $3, $4, $5, $6)",
            [title, author_name, date, recommendation, summary, OLID]
        );
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error adding book");
    }

});

app.post("/update", async (req, res) => {
    const { id, title, date, recommendation, summary } = req.body;
    try {
        const encodedTitle = encodeURIComponent(title);
        console.log(encodedTitle);
        const result = await axios.get(`https://openlibrary.org/search.json?title=${encodedTitle}&fields=key,title,author_name,editions`);
        const firstDoc = result.data.docs[0];
        const firstEdition = firstDoc.editions.docs[0];
        const OLID = firstEdition.key.split('/')[2];
        const author_name = firstDoc["author_name"]
        await db.query(
            "UPDATE book_info SET title = $1, author = $2, date = $3, recommendation = $4, summary = $5, olid=$6 WHERE id = $7",
            [title, author_name, date, recommendation, summary, OLID, id]
        );
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error updating book");
    }
});

app.post("/delete", async (req, res) => {
    const id = req.body.deleteBookId;
    try {
        await db.query("DELETE FROM book_info WHERE id = ($1)", [id]);
        res.redirect("/");
    } catch (err) {
        res.status(500).send("Error updating book");
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});