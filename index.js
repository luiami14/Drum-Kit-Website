$("button").click(audioClick);
document.addEventListener("keydown", function(event)
{
  audioPress(event.key);
  buttonAnimation(event.key);
});

function audioClick(event)
{
  var buttonInnerHTML = this.innerHTML;
  audioPress(this.innerHTML);
  buttonAnimation(buttonInnerHTML);
}

function buttonAnimation(key)
{
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout
  (
    function()
    {
      activeButton.classList.remove("pressed");
    },
    100 //second parameter 0.1 seconds
  );
}

function handleClick()
{
  alert("Just got clicked");
}

function audioPress(character)
{
  if(character === 'w')
  {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if(character === 'a')
  {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else if(character === 's')
  {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if(character === 'd')
  {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if(character === 'j')
  {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if(character === 'k')
  {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if(character === 'l')
  {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}
