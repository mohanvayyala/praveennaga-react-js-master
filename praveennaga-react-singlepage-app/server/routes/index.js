module.exports =(app) =>{
    app.get("/testAPI", function(req, res) {
        res.send("Praveen Oruganti API");
    });
}


