const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8001;

const urlRoute = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRoute = require('./routes/user');
const {checkForAuthentication, restrictTo} = require("./middleware/auth");

const {connectToMongoDB} = require("./connection");
const URL  =require("./models/url");

//connection to DB
connectToMongoDB("mongodb://localhost:27017/shortURL")
.then(()=>console.log("Connected to MongoDB"));

//setting a view engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use('/url', restrictTo(["NORMAL","ADMIN"]), urlRoute);
app.use('/',staticRouter);
app.use('/user',userRoute);

app.get('/url/:shortId',async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timeStamp : Date.now()
                },
            }
        }
    );
    if (!entry) {
        return res.status(404).send("Short URL not found");
    }
    res.redirect(entry.redirectURL);
});

app.listen(PORT,() => console.log(`Server Started at PORT ${PORT}`));