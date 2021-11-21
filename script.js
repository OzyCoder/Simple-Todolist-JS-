let list = [];
let addBtn = document.getElementById("btn");
let input = document.getElementById("input");
let show = document.getElementById("todolist");

addBtn.addEventListener("click", function () {
  inputValidate();
  list.push(input.value);
  input.value = "";
  showList();
});

// fungsi untuk menampilkan list dari array
function showList() {
  show.innerHTML = "";
  list.forEach(function (n, i) {
    show.innerHTML += "<li>" + n + "<a onClick = 'editList(" + i + ")'>Edit</a><a onclick = 'deleteList(" + i + ")'>Done</a></li>";
  });
}

// fungsi untuk menghapus list
function deleteList(i) {
  list.splice(i, 1);
  showList();
}

// fungsi untuk edit list
function editList(i) {
  let newList = prompt("Write your new plan, please");
  list.splice(i, 1, newList);
  showList();
}

// fungsi validasi
function inputValidate() {
  if (input.value === "") {
    alert("You must write something");
    addBtn.removeEventListener("click");
  }
}
