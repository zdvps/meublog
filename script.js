document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { name: "Sistema de Gestão", description: "Um sistema para gerenciar clientes e vendas.", link: "#" },
        { name: "App Mobile", description: "Aplicativo para controle de tarefas.", link: "#" },
        { name: "Dashboard de Dados", description: "Dashboard interativo para visualização de métricas.", link: "#" }
    ];

    const projectList = document.querySelector(".project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.link}">Ver Projeto</a>`;
        projectList.appendChild(projectDiv);
    });
});