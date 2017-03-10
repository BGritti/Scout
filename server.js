/**
 * Created by Bruno on 10/03/2017.
 */
//Requires--------------------------------------------------------------------------------------------------
var http = require("http");
var express = require("express");
var ejs = require ("ejs");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var colors = require("colors");
var session = require('express-session');
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://127.0.0.1/AgesDB";


//App Sets--------------------------------------------------------------------------------------------------

var app = express();
app.set("view engine", "ejs");
app.use(bodyparser());
app.use(express.static('static'));
app.use(session({
    secret: 'Eras'
}));

//Servidor--------------------------------------------------------------------------------------------------

var server = http.createServer(app);
server.listen(8080);
console.log("O Servidor está ONLINE!".green);

//Banco de Dados--------------------------------------------------------------------------------------------

mongoose.connect("mongodb://127.0.0.1/ScoutDB");

//Schemas & Models------------------------------------------------------------------------------------------

var usuarioSchema = new mongoose.Schema({
    usuario: "object"
});
var usuarioModel = mongoose.model('Usuarios', usuarioSchema);

//Controllers (Get)-----------------------------------------------------------------------------------------

app.get("/", function(req,resp){
        resp.render("Index");
});

app.get("/SobreNos", function(req,resp){
    resp.render("Index");
});

app.get("/MyPage", function(req,resp){
    resp.render("MyPageA");
});

// Página de Erro
app.use(function(req, res){
    res.render("resp", {mensagem: "Ops! O link que você tentou acessar não existe"})
});