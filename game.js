let play;
function start() {
  const target = document.getElementById("target").value;
  if (!(parseInt(target) > 0))
    return alert("Please enter a target number greater than 0.");
  const score = document.getElementById("score");
  score.innerText = target;
  play = setInterval(generateBug, 2000);
}

function generateBug() {
  const random = Math.floor(Math.random() * 8) + 1;
  console.log(random);
  const box = document.getElementById(`${random}`);
  if (box.innerHTML) generateBug();
  box.innerHTML = `<img class="bug" src="./img/bug.png" onclick="smash(${random})">`;
}

function smash(num) {
  const score = document.getElementById("score");
  score.innerText = parseInt(score.innerText) - 1;
  if (parseInt(score.innerText) == 0) end();
  const box = document.getElementById(`${num}`);
  box.innerHTML = `<img class="bug" src="./img/squish.png">`;
  setTimeout(clear, 2000, num);
}

function clear(num) {
  const box = document.getElementById(`${num}`);
  box.innerHTML = "";
}

function end() {
  clearInterval(play);
  alert(
    "You squashed all the bugs! Now go squash the real bugs in your code ;)"
  );
}
