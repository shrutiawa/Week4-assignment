const fs = require("node:fs");
const herolist=require("./assets/heroes-list.json")
const city=require("./assets/city.json")
const data=require("./data/data.json");

var selectedTitle= herolist[Math.round(Math.random()*herolist.length)]
var selectedCity= city[Math.round(Math.random()*city.length)]
var selectedPower= Math.round(Math.random()*10)

var newdata={
    avengers : [
        {
    title: selectedTitle,
    city: selectedCity,
    power: selectedPower
  }
    ]}
    data.avengers.push(...newdata.avengers)
    fs.writeFileSync("data/data.json",JSON.stringify(data),"utf-8");




