document.addEventListener("DOMContentLoaded", () => {
  const inputTarefa = document.getElementById("nova-tarefa");
  const btnAdicionar = document.querySelector(".btn.enviar");
  const listaTarefas = document.getElementById("lista-tarefas");

  inputTarefa.disabled = false;
  btnAdicionar.disabled = false;

  function adicionarTarefa() {
    const valor = inputTarefa.value.trim();
    if(valor === "") return;

    const li = document.createElement("li");
    li.textContent = valor;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "❌";
    btnRemover.classList.add("btn", "cancelar");
    btnRemover.style.float = "right";
    btnRemover.addEventListener("click", () => {
      listaTarefas.removeChild(li);
    });

    li.addEventListener("click", () => {
      li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
      li.style.opacity = li.style.opacity === "0.6" ? "1" : "0.6";
    });

    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);
    inputTarefa.value = "";
  }

  btnAdicionar.addEventListener("click", adicionarTarefa);

  inputTarefa.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      adicionarTarefa();
    }
  });
});