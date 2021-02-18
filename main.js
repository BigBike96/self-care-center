var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var receiveMessageButton = document.querySelector('#btn');
var iconMessageArea = document.querySelector('.icon');

var affirmations = [
  "I can whistle with my fingers, especially if I have a whistle.",
  "I wish I could play little league now. I'd be way better than before.",
  "I used to be a hot-tar roofer. Yeah, I remember that... day.",
  "I love blackjack. But I'm not addicted to gambling. I'm addicted to sitting in a semi circle.",
  "A waffle is like a pancake with a syrup trap.",
  "Why are there no during pictures.",
  "I drank some boiling water because I wanted to whistle.",
  "I'm against picketing, but I don't know how to show it.",
  "If my kid couldn't draw I'd make sure that my kitchen magnets didn't work.",
  "When someone hands you a flyer, it's like they're saying here you throw this away.",
  "My belt holds my pants up, but the belt loops hold my belt up. So which one is the real hero?",
  "I saw a human pyramid once. It was very unnecessary.",
  "Fettucini alfredo is macaroni and cheese for adults.",
  "I haven't slept for ten days, because that would be too long.",
  "All these jokes have been pre-approved as funny by me."
];
var mantras = [
  "My fake plants died because I did not pretend to water them.",
  "The depressing thing about tennis is that no matter how good I get, I'll never be as good as a wall.",
  "Dogs are forever in the push up postion.",
  "I wanted to buy a candle holder, but the store didn't have one. So I got a cake.",
  "It's weird, people say they're not like apes. Now how do you explain football then?",
  "I'm sick of following my dreams. I'm just going to ask them where they're going and hook up with them later.",
  "Every book is a children's book if the kid can read!",
  "I remixed a remix, it was back to normal.",
  "I think foosball is a combination of soccer and shish kabobs.",
  "I'm gonna fix that last joke by taking out all the words and adding new ones.",
  "If carrots got you drunk, rabbits would be messed-up.",
  "A severed foot is the ultimate stocking stuffer.",
  "I'd like to get four people who do cart wheels very good, and make a cart.",
  "I like Kit-Kat, unless I'm with four or more people.",
  "This shirt is dry clean only. Which means, it's dirty.",
  "Rice is great if you're really hungry and want to eat two thousand of something."
];
var message;

receiveMessageButton.addEventListener('click', prepareMessage);

function prepareMessage() {
  if (affirmationButton.checked) {
    message = affirmations[randomizer(affirmations)];
  }
  if (mantraButton.checked) {
    message = mantras[randomizer(mantras)];
  }
  displayMessage();
}

function displayMessage() {
  iconMessageArea.innerText = message;
}

function randomizer(array) {
  return Math.floor(Math.random() * array.length);
}
