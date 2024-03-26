const projects = [
  {
    title: "My Cart",
    githubLink: "https://github.com/tabdurahmon/profil",
    vercelLink: "https://profil-rose.vercel.app/",
  },
  {
    title: "Blog preview",
    githubLink: "https://github.com/tabdurahmon/block-preview",
    vercelLink: "https://blog-preview-two.vercel.app/",
  },
  {
    title: "Pixer",
    githubLink: "https://github.com/tabdurahmon/Pixer",
    vercelLink: "https://pixer-two-lilac.vercel.app/",
  },
  {
    title: "Products",
    githubLink: "https://github.com/tabdurahmon/Product",
    vercelLink: "https://product-gules.vercel.app/",
  },
  {
    title: "Snap",
    githubLink: "https://github.com/tabdurahmon/snap",
    vercelLink: "https://snap-kappa-nine.vercel.app/",
  },
  {
    title: "Calculator",
    githubLink: "https://github.com/tabdurahmon/tip-colculator",
    vercelLink: "https://tip-colculator.vercel.app/",
  },

  {
    title: "Bacground-video",
    githubLink: "https://github.com/tabdurahmon/tip-colculator",
    vercelLink:
      "https://vercel.com/abdurahmons-projects-67cedc3c/bacroud-video",
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
