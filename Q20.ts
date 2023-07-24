interface Mountain {
    name : string 
    hieght : number 
    location: string 
}
const everest :Mountain = {
    name : "Everest",
    height : 8848,
    location : "Nepal/China"
}
const k2:Mountain = {
    name:"k2",
    height : 8611,
    location:"pakistan/China"

}
const NangaParbat:Mountain = {
    name:"Nanga Parbat",
    height : 8126,
    location : "Pakistan"
}
const TirichiMir:Mountain = {
    name:"Tirich Mir",
    hieght : 7708,
    location: "pakistan"
}
const makalu: Mountain = {
    name: "Makalu",
    hieght : 8463,
    location: "Nepal/China"
}
const mountain: Mountain[] = [everest, k2, NangaParbat, TirchiMir, makalu]
console.log("the list of mountains:");
console.log(mountains);