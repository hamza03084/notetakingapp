addbtn.addEventListener("click", function (e) {
  let addtext = document.getElementById("addtext");
  let notesinls = localStorage.getItem("notes");
  if (notesinls) {
    notesinls = JSON.parse(notesinls);
    const data = {
      id: notesinls.length + 1,
      note: addtext.value,
    };
    notesinls.push(data);
    localStorage.setItem("notes", JSON.stringify(notesinls));
  } else {
    notesinls = [];
    const data = {
      id: 1,
      note: addtext.value,
    };
    notesinls.push(data);
    localStorage.setItem("notes", JSON.stringify(notesinls));
  }

  addtext.value = "";
  location.reload();
});

let showdata = () => {
  let data = localStorage.getItem("notes");
  data = JSON.parse(data);
  data.forEach((main, a) => {
    let paralem = document.getElementById("notes1");
    paralem.innerHTML += `<div  class="my-2 mx-2 notecard card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${a + 1}</h5>
      <p class="card-text" id="addtxt">${main.note}</p>
      <a class="btn btn-primary" onclick='remoNote(${a})'>Delete Note</a>
      </div>
      </div>`;
  });
};
showdata();

let remoNote = (id) => {
  console.log(id, "id");
  data = localStorage.getItem("notes");
  data = JSON.parse(data);
  data.splice(id, 1);
  localStorage.setItem("notes", JSON.stringify(data));
  location.reload();
};

let search = document.getElementById("typing");
search.addEventListener(
  "input",
  (find = () => {
    let input = search.value.toLowerCase();
    // console.log("event fire", input);
    let notecards = document.getElementsByClassName("notecard");
    console.log(notecards);
    Array.from(notecards).forEach((match) => {
      let cardtext = match.getElementsByTagName("p")[0].innerText;
      if (cardtext.toLowerCase().includes(input)) {
        match.style.display = "block";
      } else {
        match.style.display = "none";
      }
    });
  })
);

let updatedata = () => {};
