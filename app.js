import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const port = 3000;
//--nav bar--//
app.get('/', (req, res) => {
    res.render('home');  //home
});
app.get('/addStudent', (req, res) => {
    res.render('add');  //add student
});
app.get('/searchStudent', (req, res) => {
    res.render('search');  //search student
});
app.get('/displaystudents', (req, res) => {
    res.render('display');  //display students
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});