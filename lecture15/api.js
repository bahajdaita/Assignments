import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
const app = express();
const port = 9103;

const db=new pg.Client({

user:"postgres",
host:"localhost",
database:"blog",
password:"transolation",
port:5432


})


db.connect().then(()=>{console.log("connected succesfult")}).catch(()=>{})







app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*const posts = [
  {
    id: 1,
    post: "The Rise of AI",
    description: "An overview of how artificial intelligence is transforming industries.",
    writer: "Alice Johnson",
    date: "2025-05-01"
  },
  {
    id: 2,
    post: "Healthy Eating Tips",
    description: "Simple and effective ways to maintain a balanced diet.",
    writer: "David Lee",
    date: "2025-04-28"
  },
  {
    id: 3,
    post: "Traveling on a Budget",
    description: "How to explore the world without breaking the bank.How to explore the world without breaking the bank.How to explore the world without breaking the bank.How to explore the world without breaking the bank.How to explore the world without breaking the bank.How to explore the world without breaking the bank.",
    writer: "Samantha Chen",
    date: "2025-03-15"
  }
];*/

let lastId = 3;

// Get all posts
app.get("/posts", async(req, res) => {
  

try{  

const result= await db.query("SELECT * FROM posts ORDER BY id")

res.json(result.rows)


}catch(error){

res.status(500).json({error:error.message})



}



});

// Get single post
app.get("/posts/:id", async(req, res) => {
  const id = parseInt(req.params.id);
 
try{

const result=await db.query("SELECT * FROM posts WHERE id=$1",[id]);


if(result.rows.length>0) 

res.json(result.rows[0])

else
res.status(404).json({error:error.message})



}catch(error){

res.status(500).json({error:error.message})



}


});




// Create new post
app.post("/posts", async(req, res) => {
 
const {title,content,author}=req.body

console.log(req.body)

try{

const result= await db.query("INSERT INTO posts(title,content,author) VALUES($1,$2,$3) RETURNING *",
[title, content, author]

);

res.status(201).json(result.rows[0])

}




catch(error){

res.status(500).json({error: error.message})





}




});

// Update post (PATCH)
app.patch("/posts/:id", async(req, res) => {
 
const id=parseInt(req.params.id)
const {title,content,author}=req.body

try{

const fields=[]
const values=[]
let count=1

if(title){

fields.push(`title=$${count++}`)
values.push(title)


}
if(content){

fields.push(`content=$${count++}`)
values.push(content)


}
if(author){

fields.push(`author=$${count++}`)
values.push(author)


}

values.push(id)

const result=await db.query(

`UPDATE posts SET ${fields.join(", ")}, date = NOW() WHERE id = $${count} RETURNING *`,
values



)
if(result.rows.length > 0) {

res.status(200).json(result.rows[0])

}else{

res.status(404).json({error:error.message})



}





}catch(error){

res.status(500).json({error:error.message})



}



});

// Replace post (PUT)
app.put("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Post not found" });

  const updatedPost = {
    id,
    post: req.body.post,
    description: req.body.description,
    writer: req.body.writer,
    date: new Date().toISOString().slice(0, 10)
  };
  posts[index] = updatedPost;
  res.json(updatedPost);
});

// Delete post
app.delete("/posts/:id", async(req, res) => {
 
const id=parseInt(req.params.id)

try{

const result= await db.query("DELETE FROM posts WHERE id =$1 RETURNING *",[id])

if(result.rows.length > 0) {

res.sendStatus(200)

}

else 

res.status(404).json({error:error.message})


}catch(error){

res.status(500).json({error:error.message})




}



});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});