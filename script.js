const projects = [
  { title: "Sora Archive", type: "Branding", year: "2025", art: "sora" },
  { title: "Momo Studio", type: "Digital", year: "2025", art: "momo" },
  { title: "No. 47", type: "Visual", year: "2024", art: "mono" },
  { title: "Luna Objects", type: "Branding", year: "2024", art: "luna" },
  { title: "Play, Again", type: "Digital", year: "2024", art: "play" },
  { title: "Edge of Summer", type: "Visual", year: "2023", art: "edge" },
];

const projectsElement = document.querySelector("#projects");
const template = document.querySelector("#project-template");

function renderProjects(filter = "all") {
  projectsElement.replaceChildren();

  projects
    .filter((project) => filter === "all" || project.type === filter)
    .forEach((project) => {
      const item = template.content.cloneNode(true);
      const art = item.querySelector(".art");
      art.classList.add(`art--${project.art}`);
      item.querySelector("h3").textContent = project.title;
      item.querySelector(".project-type").textContent = project.type;
      item.querySelector(".project-year").textContent = project.year;
      projectsElement.append(item);
    });
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
