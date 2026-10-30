const header = document.querySelector('header');
const sideBar = document.querySelector('#sidebar');
const sidebarToggleOpen = document.querySelector(
  '#sidebar-toggle-open'
);
const sidebarToggleClose = document.querySelector(
  '#sidebar-toggle-close'
);
const main = document.querySelector('main');

const toggleSideBar = () => {
  sidebarToggleOpen.addEventListener('click', (event) => {
    event.stopPropagation();
    sideBar.classList.toggle('open');
  });

  sidebarToggleClose.addEventListener('click', (event) => {
    event.stopPropagation();
    sideBar.classList.toggle('open');
  });

  header.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    sideBar.classList.remove('open');
  });

  main.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    sideBar.classList.remove('open');
  });
};

toggleSideBar();
