document.addEventListener("DOMContentLoaded", function () {
  const btnGrid = document.getElementById("btnGrid");
  const btnSingle = document.getElementById("btnSingle");
  const imageRow = document.getElementById("imageRow");

  btnGrid.addEventListener("click", function () {
    imageRow.classList.add("grid-view");

    const columnas = imageRow.querySelectorAll(".col-12, .col-md-4");
    columnas.forEach(function (col) {
      col.classList.remove("col-12");
      col.classList.add("col-md-4");
    });
  });

  btnSingle.addEventListener("click", function () {
    imageRow.classList.remove("grid-view");

    const columnas = imageRow.querySelectorAll(".col-12, .col-md-4");
    columnas.forEach(function (col) {
      col.classList.remove("col-md-4");
      col.classList.add("col-12");
    });
  });
});