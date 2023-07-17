const app = express();
// set port
const port = 3000;
// set view engine
app.set('view engine', 'pug');
// set views directory
app.set('views', './views');
// set static file directory
app.use(express.static('public'));
// set route
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});