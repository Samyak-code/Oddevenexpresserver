const express = require('express');
const app = express();

app.get('/', (req,res) =>   {
    res.send("Odd or even express server");
});
app.get('/number/:num', (req,res) => {

var numberid = req.params.num;
if( numberid % 2 == 0) {
    var evennumber = 1;
}

else {
     var oddnumber = "The number is odd.";
}

if(evennumber == 1){
    res.send("The number "+req.params.num+" is even.");
}
else{
    res.send("The number "+req.params.num+" is odd.");
}
});

app.listen(3000, () => console.log('Listening on port  3000'));