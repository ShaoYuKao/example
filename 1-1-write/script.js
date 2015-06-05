// JavaScript Document
 window.onload=function(){
 function dogOver(){
	document.myDog.src="dogOver.jpg"; 
 }
 
  function dogOut(){
	document.myDog.src="dog.jpg"; 
 }
 document.myDog.onmouseover=dogOver;
 document.myDog.onmouseout=dogOut;
 }