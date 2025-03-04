document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { name: "Operações -Infra", description: "Máquinas Virtuais, Redes, Cloud", link: "#" },
        { name: "Linux Enginner", description: "Shell - Bash - Sysadmin.", link: "#" },
        { name: "I.A. - DevOps", description: "LLM - Python - Docker - Git.", link: "#" }
    ];

    const projectList = document.querySelector(".project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.link}">Ver Projeto</a>`;
        projectList.appendChild(projectDiv);
    });
});


