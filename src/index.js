// import express 
const express =  require('express');
const path =  require('path');

// create a new app using express as a function
const app = express();
//declare a PORt to connect my server to
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../')));

const renderPaths = (req,res) => {
    const filePath = path.join(__dirname, '../paths.html');
    res.sendFile(filePath);
}
const renderSend = (req,res) => {
    const filePath = path.join(__dirname, '../send.html');
    res.sendFile(filePath);
}
const renderHome = (req,res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);
}
//register our paths
app.get('/paths', renderPaths);

app.get('/send',renderSend);

app.get('/',renderHome)

//connect my app to the PORT and listen to requests
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})