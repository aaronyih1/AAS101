
var fortunesList = [
    "My Chinese friend died recently, So Yung.",
    "How do you blind an Asian? Put a windshield in front of them.",
    "How do Asians name their children? They drop silverware down the stairs",
    "What do Japanese men do when they have an erection? They go vote.",
    "Q. Why do the Japs have such squinty eyes? A. Atomic bombs are really bright.",
    "Why can't two asians have a white baby? Two wongs don't make a white.",
    "I don't like telling jokes to Asians, especially Japanese. Whenever I tell them a joke, I have to drop the bomb twice.",
    "how do you blind fold an Asian? with dental floss",
    "Q: How many Japanese does it take to screw in a light bulb? A: It doesn't matter because they're all to short."
];

$(function(){
   console.log("heyyya");
   var flag = true;
   var tl = new TimelineMax({ paused:true});
   
   
   //tl.set($('.fortune-message'),{opacity:0});
   tl.to($('.fortune'),0.1,{rotation:-5, delay:1});
   tl.to($('.fortune'),0.1,{rotation:5});
   tl.to($('.fortune'),0.1,{rotation:-5});
   tl.to($('.fortune'),0.1,{rotation:5});
   tl.to($('.fortune'),0.1,{rotation:-5});
   tl.to($('.fortune'),0.1,{rotation:0});
   tl.addLabel("break", "+=0.3");
   tl.to($('.fortune-left'),0.5,{rotation:-45, x:-70, y:70},"break");
   tl.to($('.fortune-right'),0.5,{rotation:45, x:70, y:70},"break");
   console.log(tl.time());
   //tl.set($('.fortune-message'),{opacity:1});
   tl.from($('.fortune-message span'),1,{x:'110%'},"break");
   $('.fortune').click(function(){
      if(flag){ 
         generateFortune();
         tl.play();
         flag = false;
      }
      else{
         tl.reverse();
         flag = true;
      }

   });
   
});

function generateFortune(){
   var temp = Math.abs(Math.floor(Math.random()*fortunesList.length-1));
   // console.log(temp);
   document.getElementById("fortune-text").innerHTML = fortunesList[temp];
}