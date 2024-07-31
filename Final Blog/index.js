import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const blogs = [];


app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.get("/addBlog", (req, res) => {
    res.render("addBlog.ejs");
  });

app.get("/viewBlog", (req,res) => {
    res.render("viewBlog.ejs");
})

app.post("/submit", (req,res) => {
  
  const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }

    const newBlog = { title, description };
    blogs.push(newBlog);

    res.render("viewBlog.ejs", {blogs});

})





app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})