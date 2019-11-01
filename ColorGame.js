var numSquares=6;
var colors=generateColorArray(numSquares);
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#Message");
var colorDisplay=document.querySelector(" h1 span");
var h1color=document.querySelector("h1");
var newColorbtn=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

var PickedColor=pickcolor();
colorDisplay.textContent=" "+ PickedColor;

easybtn.addEventListener("click",function(){
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  numSquares=3;
  colors=generateColorArray(numSquares);
  PickedColor=pickcolor();
  colorDisplay.textContent=" "+ PickedColor;
  for(var i=0;i<squares.length;i++)
  {
    if(colors[i])
    squares[i].style.backgroundColor=colors[i];
    else
    squares[i].style.display="none";
  }
  h1color.style.backgroundColor="steelblue";
  newColorbtn.textContent="New Colors";
  messageDisplay.textContent="";
});

hardbtn.addEventListener("click",function(){
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  numSquares=6;
  colors=generateColorArray(numSquares);
  PickedColor=pickcolor();
  colorDisplay.textContent=" "+ PickedColor;
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="block";
  }
  h1color.style.backgroundColor="steelblue";
  newColorbtn.textContent="New Colors";
  messageDisplay.textContent="";
});

for(var i=0;i<squares.length;i++)
{
  squares[i].style.backgroundColor=colors[i];
  squares[i].addEventListener("click",function(){
    var ClickedColor=this.style.backgroundColor;
    if(ClickedColor===PickedColor)
    {
      messageDisplay.textContent="Correct Choice!";
      h1color.style.backgroundColor=PickedColor;
      changeColor(PickedColor);
      newColorbtn.textContent="Play Again?";
    }
    else
    {
      this.style.backgroundColor="#232323";
      messageDisplay.textContent="Try Again!";
    }
  });
}

function changeColor(color)
{
  for(var j=0;j<squares.length;j++)
    {
      squares[j].style.backgroundColor=color;
    }
}

function pickcolor()
{
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateColorArray(num)
{
  var arr=[];
  for(var i=0;i<num;i++)
  {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    arr[i]="rgb("+r+", "+g+", "+b+")";
  }
  return arr;
}

newColorbtn.addEventListener("click",function(){
  //Generate new array of colors
  colors=generateColorArray(numSquares);
  //Pick a new random color;
  PickedColor=pickcolor();
  //Change the display according to the new picked color
  colorDisplay.textContent=" "+ PickedColor;
  //Changing the colors of the whole available squares
  for(var i=0;i<squares.length;i++)
    squares[i].style.backgroundColor=colors[i];

  h1color.style.backgroundColor="steelblue";
  newColorbtn.textContent="New Colors";
  messageDisplay.textContent="";

});
