const sideBar = document.querySelector('#sidebar');
const sidebarToggleOpen = document.querySelector(
  '#sidebar-toggle-open'
);
const sidebarToggleClose = document.querySelector(
  '#sidebar-toggle-close'
);

const toggleSidebar = () => {
  sideBar.classList.toggle('open');
};

const closeSidebar = () => {
  sideBar.classList.remove('open');
};

sidebarToggleOpen.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleSidebar();
});

sidebarToggleClose.addEventListener('click', (event) => {
  closeSidebar();
});

document.addEventListener('click', (event) => {
  if (
    sideBar.classList.contains('open') &&
    !sideBar.contains(event.target)
  ) {
    closeSidebar();
  }
});
