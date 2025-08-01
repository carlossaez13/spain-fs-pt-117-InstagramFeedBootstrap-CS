function mostrarVista(vista) {
  const gridView = document.getElementById("gridView");
  const listView = document.getElementById("listView");
  const botones = document.querySelectorAll(".botones-vista button");

  if (vista === "grid") {
    gridView.classList.remove("d-none");
    listView.classList.add("d-none");
  } else if (vista === "list") {
    listView.classList.remove("d-none");
    gridView.classList.add("d-none");
  }
  botones.forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.botones-vista button[onclick="mostrarVista('${vista}')"]`)
    .classList.add("active");
}

function toggleConfigMenu() {
  const menu = document.getElementById("configMenu");
  menu.classList.toggle("d-none");
}

const modal = new bootstrap.Modal(document.getElementById("newPostModal"));

document.getElementById("newPostBtn").addEventListener("click", () => {
  modal.show();
});

document.getElementById("postForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const imageUrl = document.getElementById("imageUrl").value.trim();
  const description = document.getElementById("description").value.trim();

  const newPost = document.createElement("div");
  newPost.className = "card mb-4";

  newPost.innerHTML = `
    <div class="card-header d-flex justify-content-between">
      <span><strong>NuevoUsuario</strong></span>
      <span>Ahora mismo</span>
    </div>
    <img src="${imageUrl}" class="card-img-top" alt="Imagen del post" />
    <div class="card-body">
      <p class="card-text">${description}</p>
    </div>
  `;

  const listView = document.getElementById("listView");
  listView.prepend(newPost);

  e.target.reset();
  modal.hide();

  mostrarVista("list");
});
