"use strict"

// I used javascript to make check colors on the board


const tds =document.querySelectorAll("td")

// Empty arrays to store the table datas
const oddTd = []
let evenTd = []


// Looped through it to map the tds in the empty arrays
tds.forEach((e,i)=>{
    if ( i % 2 == 0){
    evenTd.push(e)
    }else{
        oddTd.push(e)
    }
})

// Styling the table datas
evenTd.forEach(e=>{
    e.style.background = "white"
})
oddTd.forEach(e=>{
    e.style.background = "black"
})