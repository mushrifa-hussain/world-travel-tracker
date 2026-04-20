import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({ 
  user: "postgres", 
  host: "localhost", 
  database: "world", 
  password: "your_password", 
  port: 5432 
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let visited_countries = [];

app.get("/", async (req, res) => {
  //Write your code here.
  visited_countries = [];
  const result = await db.query("SELECT country_code FROM visited_countries;");
  const country_codes = result.rows;
  country_codes.forEach(code => {
      visited_countries.push(code.country_code);
  });
  console.log(visited_countries);    
  res.render("index.ejs", {
    countries: visited_countries,
    total: visited_countries.length
  });
});

app.post("/add", async (req, res) => {
  const userCountry = req.body.country;
  try{
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) = $1;", [userCountry.toLowerCase()]);
    if(result.rows.length === 0){
      console.log("Country Not Found");
      res.render("index.ejs", {
        error: "Country Not Found",
        countries: visited_countries,
        total: visited_countries.length
      })
    }else{
      const userCode = result.rows[0].country_code;
      const codeExists = await db.query("SELECT country_code FROM visited_countries WHERE country_code = $1;", [userCode]);
      if(codeExists.rows.length === 0){
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [userCode]);
        res.redirect("/");
      }else{
        console.log("Country code already exists");
        res.render("index.ejs", {
        error: "Country Code already exists.",
        countries: visited_countries,
        total: visited_countries.length
      });
      }
    } 
  }catch(e){
    console.log(e);
    res.redirect("index.ejs", {
      error: "Unable to connect to database"
    })
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})
