const input = $("input");
const addBtn = $(".new");
const ul = $("ul");
const empty = $(".empty");

addBtn.on("click", (e) => {
  e.preventDefault();

  const text = input.val();

  if (text !== "") {
    const li = $("<li></li>");
    const p = $("<p></p>").text(text);

    li.append(p);
    li.append(addDeleteBtn());
    ul.append(li);

    input.val("");
    empty.hide();
  }
});

function addDeleteBtn() {
  const deleteBtn = $("<button></button>");

  deleteBtn.text("X");
  deleteBtn.addClass("btn-delete");

  deleteBtn.on("click", (e) => {
    const item = $(e.target).parent();
    item.remove();  // aquí se utiliza el método remove de jQuery en lugar de removeChild

    const items = $("li");
    confirm("Do you want delete this task ", item);

    if (items.length === 0) {
      empty.show();
    }
  });

  return deleteBtn;
}