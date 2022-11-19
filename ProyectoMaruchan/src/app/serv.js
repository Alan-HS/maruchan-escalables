var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var cors = require('cors');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/MaruchanShop");
var respuesta;
var nameSchema = new mongoose.Schema({
  nombre: String,
  precio: String
 });

 var Maruchan = mongoose.model("Maruchan", nameSchema);

// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Init the server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("MaruchanShop");//Nombre base de datos
    // var myobj = { nombre: "Torta de lomo", precio: "15" };
    // var myobj2 = { nombre: "Torta de huevo", precio: "20" };
    // var myobj3 = { nombre: "Torta de jamon", precio: "30" };
    // var myobj4 = [
    //   { nombre: "Torta cubana", precio: "16" },
    //   { nombre: "Torta especial", precio: "8" },
    //   { nombre: "Torta de la barda", precio: "4" },
    //   { nombre: "Torta de queso", precio: "8" }
    //     ];
    // dbo.createCollection("tortas", function(err, res) {//Crear coleccion
    //   if (err) throw err;
    //   console.log("Collection created!");
    //   db.close();
    // });
    // dbo.collection("tortas").insertOne(myobj, function(err, res) {
    //       if (err) throw err;
    //       console.log("1 document inserted");
    //       db.close();
    // });
    // dbo.collection("tortas").insertOne(myobj2, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   db.close();
    // });
    // dbo.collection("tortas").insertOne(myobj3, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   db.close();
    // });
    // dbo.collection("tortas").insertMany(myobj4, function(err, res) {
    //   if (err) throw err;
    //   console.log("Number of documents inserted: " + res.insertedCount);
    //   db.close();
    // });
    // var query = { nombre: "Torta de jamon" };
    // dbo.collection("tortas").find(query).toArray(function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   respuesta = result;
    //   db.close();
    // });

    //ESTO ES PARA SACAR TODOS
    dbo.collection("maruchans").find({}).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result);
        respuesta = result;
        db.close();
    });



    // var query2 = { precio: /^8/ };
    // dbo.collection("tortas").find(query2).toArray(function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   db.close();
    // });
    // var query3 = { nombre: 'Torta de huevo' };
    // dbo.collection("tortas").deleteOne(query3, function(err, obj) {
    //   if (err) throw err;
    //   console.log("1 document deleted");
    //   db.close();
    // });
    // var query4 = { nombre: "Torta de la barda" };
    // var newvalues = { $set: {nombre: "Torta del chavo", precio: "6" } };
    // dbo.collection("tortas").updateOne(query4, newvalues, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document updated");
    //   db.close();
    // });
  
  
  });
  

/*  "/"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/", function (req, res) {
    res.status(200).json({ status: "UP" });
});
app.get("/maruchans", function (req, res) {
    res.status(200).json(respuesta);
}); 

app.get("/obtener", function(req,res){
  Maruchan.find({}).exec(function(err,maruchans){
    if(err){
      console.log("Error retrieving data");
    }else{
      res.json(maruchans);
      console.log(maruchans);
    }
  });
});

app.post("/agregar", (req, res) => {
  console.log(req.body);
  var myData = new Maruchan(req.body);
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 });

 app.delete('/:id', (req, res) => {
  console.log(req.params.id);
  
  Maruchan.findByIdAndDelete(req.params.id,function(err,response){
    if(err){
      res.send("Error deleting");
    }else{
      res.send(response);
    }
  });
});

app.put('/actualizar', (req, res) => {
  console.log(req.body);
  console.log(req.body._id);
  console.log(req.body.nombre);
  console.log(req.body.precio);
  // console.log(req.body.__v);
  
  Maruchan.findByIdAndUpdate(req.body._id,
    {
      $set: {nombre: req.body.nombre,precio:req.body.precio,
        __v:0}
    },
    {
      new:true
    },
    function(err, response2){
      if(err){
        res.send("Error updating");
      }else{
        res.send(response2);
      }
    }
  );
  // Maruchan.findByIdAndDelete(req.params.id,function(err,response){
  //   if(err){
  //     res.send("Error deleting");
  //   }else{
  //     res.send(response);
  //   }
  // });
});


// app.post("/agregar", function(req,res){
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("Restaurante");//Nombre base de datos
  //   var myobj = { nombre: "Torta de lomo", precio: "1500" };
  //   dbo.collection("tortas").insertOne(myobj, function(err, res) {
  //         if (err) throw err;
  //         console.log("1 document inserted");
  //         db.close();
  //   });  
  
  // });
// });
  
  
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var myobj = { name: "Company Inc", clave: "Highway 37" };
  //   dbo.collection("customers").insertOne(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close();
  //   });
  // });
  
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var myobj = [
  //     { name: 'John', clave: 'Highway 71'},
  //     { name: 'Peter', clave: 'Lowstreet 4'},
  //     { name: 'Amy', clave: 'Apple st 652'},
  //     { name: 'Hannah', clave: 'Mountain 21'},
  //     { name: 'Michael', clave: 'Valley 345'},
  //     { name: 'Sandy', clave: 'Ocean blvd 2'},
  //     { name: 'Betty', clave: 'Green Grass 1'},
  //     { name: 'Richard', clave: 'Sky st 331'},
  //     { name: 'Susan', clave: 'One way 98'},
  //     { name: 'Vicky', clave: 'Yellow Garden 2'},
  //     { name: 'Ben', clave: 'Park Lane 38'},
  //     { name: 'William', clave: 'Central st 954'},
  //     { name: 'Chuck', clave: 'Main Road 989'},
  //     { name: 'Viola', clave: 'Sideway 1633'}
  //   ];
  //   dbo.collection("customers").insertMany(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("Number of documents inserted: " + res.insertedCount);
  //     db.close();
  //   });
  // });