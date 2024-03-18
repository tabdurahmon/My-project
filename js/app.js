const projects = [
  {
    title: "My Cart",
    githubLink: "https://github.com/tabdurahmon/profil",
    vercelLink: "https://vercel.com/abdurahmons-projects-67cedc3c/profil",
  },
  {
    title: "Blog preview",
    githubLink: "https://github.com/tabdurahmon/block-preview",
    vercelLink: "https://vercel.com/abdurahmons-projects-67cedc3c/blog-preview",
  },
  {
    title: "Pixer",
    githubLink: "https://github.com/tabdurahmon/Pixer",
    vercelLink: "https://vercel.com/abdurahmons-projects-67cedc3c/pixer",
  },
  {
    title: "Products",
    githubLink: "https://github.com/tabdurahmon/Product",
    vercelLink: "https://vercel.com/abdurahmons-projects-67cedc3c/product",
  },
  {
    title: "Snap",
    githubLink: "https://github.com/tabdurahmon/snap",
    vercelLink: "https://vercel.com/abdurahmons-projects-67cedc3c/snap",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
