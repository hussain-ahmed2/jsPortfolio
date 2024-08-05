

const header = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  nav.id = 'nav';
  const title = document.createElement('h1');
  title.id = 'title';
  title.textContent = 'JsPortfolio';
  nav.appendChild(title);
  const ul = document.createElement('ul');
  const li = '<li>Home</li><li>About</li><li>Projects</li><li>Contact</li>';
  ul.innerHTML = li;
  nav.appendChild(ul);
  const navToggleBtn = document.createElement('button');
  navToggleBtn.innerHTML = '&#9776;'
  navToggleBtn.id = 'nav-toggle-btn';
  let navOpen = false;
  navToggleBtn.onclick = () => {
    const ul = document.querySelector('#nav ul');
    const ulHeight = ul.scrollHeight;
    if(navOpen){
      ul.style.height = 0; 
      navToggleBtn.innerHTML = '&#9776;'
    }else {
      ul.style.height = ulHeight + 'px';
      navToggleBtn.innerHTML = '&#10005;' 
    }
    navOpen = !navOpen;

    ul.onclick = () => {
      if(navOpen){
        ul.style.height = 0;
        navToggleBtn.innerHTML = '&#9776;'
      }else {
        ul.style.height = ulHeight + 'px';
        navToggleBtn.innerHTML = '&#10005;'
      }
      navOpen = !navOpen;
    }
  }

  nav.appendChild(navToggleBtn);
  header.appendChild(nav);

  title.addEventListener('click',() => {
    ul.style.height = 0;
    navToggleBtn.innerHTML = '&#9776;'
    navOpen = false;
  })

  return header;
}

export default header;