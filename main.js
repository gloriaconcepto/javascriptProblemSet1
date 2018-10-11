//var guessField = document.querySelector('.guessField');
//var customName=document.querySelector('.customname');
var customName=document.getElementById('customname');
//variable for the randomize class
var randomize=document.querySelector('.randomize');
//variable for the story class 
var story=document.querySelector('.story');

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
  }

 let storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

 let insertX=['Willy the Goblin','Big Daddy','Father Christmas'];
 
 let insertY=['the soup kitchen','Disneyland','the White House'];

 let insertZ=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];


 
//function to convert from fahrenheit to centigrade
 function fahrenheitToCentigrade(fahrenheit){
   //this function return centigrade in a string data type
   var centiGrade=Math.round((fahrenheit-32) * (5/9) );
   return centiGrade.toString(); 

 } 

 //function to convert from pounds to stone
 function poundsToStone(pounds){
     //this function return pounds in a string data type
    var stone =Math.round((pounds)/14);
    return stone.toString();
 } 

 randomize.addEventListener('click', result);
 function result() {
    newStory = storyText;
    xItem=randomValueFromArray(insertX);
    yItem=randomValueFromArray(insertY);
    zItem=randomValueFromArray(insertZ);
    //place the random string in the storyText file.
    newStory=newStory.replace(/:insertx:/g,xItem); 
   // newStory=newStory.replace('insertx',xItem); 
    newStory=newStory.replace(/:inserty:/g,yItem); 
    newStory=newStory.replace(/:insertz:/g,zItem); 

    //condition here to change name from the default name setting.
    if(customName.value !== '') {
      var name = customName.value;
      //replace bob here
      storyText=storyText.replace(/Bob/g,name);
    }
  
    if(document.getElementById("uk").checked) {
      var weight = Math.round(300);
      var temperature =  Math.round(94);
      //convert from pounds to stone
      var weightInStone=poundsToStone(weight);
      //replace it to the story text
      newStory=newStory.replace(/300/g,weightInStone);
      newStory=newStory.replace(/pounds/g,'stone');
      //convert from fahrenheit to centigrade
      var tempInCentigrade=fahrenheitToCentigrade(temperature); 
      newStory=newStory.replace(/94/g,tempInCentigrade);
      newStory=newStory.replace(/fahrenheit/g,'centigrade');
    }

    
  
    story.textContent =newStory ;
    story.style.visibility = 'visible';
  }
  