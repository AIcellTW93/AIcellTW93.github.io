const projects = [
  {
    title: "Pickleball Bag / Blue",
    type: "Pickleball",
    year: "2026",
    image: "https://aicelltw93-portfolio-images-20260724.oss-cn-shanghai.aliyuncs.com/pickleball-bag-blue.jpg",
    alt: "蓝色匹克球包的商品详情视觉稿。",
  },
  {
    title: "Pickleball Bag / Black",
    type: "Pickleball",
    year: "2026",
    image: "https://aicelltw93-portfolio-images-20260724.oss-cn-shanghai.aliyuncs.com/pickleball-bag-black.jpg",
    alt: "黑色匹克球包的商品详情视觉稿。",
  },
  {
    title: "Military Duffel / Overview",
    type: "Travel",
    year: "2026",
    image: "https://aicelltw93-portfolio-images-20260724.oss-cn-shanghai.aliyuncs.com/military-duffel-01.jpg",
    alt: "军绿色拉杆旅行包的商品详情视觉稿。",
  },
  {
    title: "Military Duffel / Details",
    type: "Travel",
    year: "2026",
    image: "https://aicelltw93-portfolio-images-20260724.oss-cn-shanghai.aliyuncs.com/military-duffel-02.jpg",
    alt: "军绿色拉杆旅行包的细节展示视觉稿。",
  },
  {
    title: "Commuter Backpack / Details",
    type: "Backpack",
    year: "2026",
    image: "https://aicelltw93-portfolio-images-20260724.oss-cn-shanghai.aliyuncs.com/commuter-backpack-01.jpg",
    alt: "黑色通勤背包的细节展示视觉稿。",
  },
  {
    title: "Commuter Backpack / Campaign",
    type: "Backpack",
    year: "2026",
    image: "https://aicelltw93-portfolio-images-20260724.oss-cn-shanghai.aliyuncs.com/commuter-backpack-02.jpg",
    alt: "黑色通勤背包的商品详情视觉稿。",
  },
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
      const image = document.createElement("img");
      image.className = "art art--image";
      image.src = project.image;
      image.alt = project.alt;
      image.loading = "lazy";
      image.decoding = "async";
      art.replaceWith(image);
      item.querySelector(".project-link").href = project.image;
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
