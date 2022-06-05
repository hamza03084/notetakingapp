let input = document.getElementById("addtext");
let addnote = () => {
  let noteIns = localStorage.getItem("notes");
  if (noteIns) {
    noteIns = JSON.parse(noteIns);
    let data = {
      id: noteIns.length + 1,
      note: input.value,
    };
    noteIns.push(data);
    localStorage.setItem("notes", JSON.stringify(noteIns));
  } else {
    let notes = [];
    let data = {
      id: 1,
      note: input.value,
    };
    notes.push(data);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  input.value = "";
  Location.reload();
};
let addbn = document.getElementById("addbtn");
addbn.addEventListener("click", addnote);
const showData = () => {
  let data = localStorage.getItem("notes");
  data = JSON.parse(data);
  data.forEach((note, i) => {
    console.log(i);
    let parentElem = document.querySelector("#notes1");
    parentElem.innerHTML += `<div  class="my-2 mx-2 notecard card" style="width: 18rem">
       <div class="card-body">
         <h5 class="card-title"></h5>
         <p class="card-text" id="addtxt">${note.note}</p>
         <a class="btn btn-primary" onclick='delNote(${i})'>delete note</a>
       </div>
     </div>`;
  });
};
showData();
let delNote = (note_id) => {
  // console.log(note_id);
  let data = localStorage.getItem("notes");
  data = JSON.parse(data);

  data.splice(note_id, 1);
  localStorage.setItem("notes", JSON.stringify(data));

  location.reload();
  // console.log(data);
};
