function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
    console.log(ev.target)
  ev.dataTransfer.setData("text", ev.target.classList[2]);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data)
  ev.target.appendChild(document.querySelector('.'+data));
}