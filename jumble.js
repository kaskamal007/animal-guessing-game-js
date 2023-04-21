
let text1=0;
var words = ['HORSE','LION','TIGER','ELEPHANT','DEER','BISON','GIRAFFE','MONKEY','ZEBRA','LEOPARD','WOLF'];
     

function randomWord(arr) {
      
          let tempText = arr[Math.floor(Math.random() * arr.length)];
          return(tempText);
      }

function appStart()
      {
        text1 =  randomWord(words);
        console.log(text1);
  

       let displayText = shuffleWord(text1);
       document.getElementById("question").innerHTML =displayText;

       document.getElementById("word").value = '';

      }
      
       
function appEnd()
      {
        text1 =  randomWord(words);
        console.log(text1);
  

       let displayText = shuffleWord(text1);
       document.getElementById("question").innerHTML =displayText;

       document.getElementById("word").value = '';

      }

function displayAnswer(){
  let text2 = document.getElementById("word").value;
       console.log(text2);

       let value1 = compareStrings(text1.toUpperCase(),text2.toUpperCase());
       console.log(value1);
        if(value1==0)
        {
          document.getElementById("demo").innerHTML ="WRONG ANSWER";
        }
       else{
        document.getElementById("demo").innerHTML ="CORRECT ANSWER";
       }
       

}


function compareStrings(s1,s2){
  if(s1 == s2){
    return 1;
    
  }
  return 0;
}

function shuffleWord (word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}