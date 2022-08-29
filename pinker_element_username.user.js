// ==UserScript==
// @name         Make username pinker in Element Web!
// @version      0.1
// @description  Make username pinker in Element Web!
// @author       柏园猫
// @match        https://app.element.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
        for(let i=1;i<9;i++){
            for(let j=0;j<document.getElementsByClassName("mx_Username_color"+i).length;j++){
                try{
                    document.getElementsByClassName("mx_Username_color"+i)[j].setAttribute("class",document.getElementsByClassName("mx_Username_color"+i)[j].getAttribute("class").replace("mx_Username_color"+i,"mx_Username_color4"));
                }catch(error){
                    console.log("喵！");
                }
            }
        }
    }
    ,1000)
})();