const header = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  nav.id = 'nav';
  const title = document.createElement('a');
  title.href ='#';
  title.id = 'title';
  title.textContent = 'JsPortfolio';
  nav.appendChild(title);
  const ul = document.createElement('ul');
  const li = '<li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li>';
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
      navToggleBtn.style.color = '#000';
    }else {
      ul.style.height = ulHeight + 'px';
      navToggleBtn.style.color = 'lightseagreen';
    }
    navOpen = !navOpen;

    ul.onclick = () => {
      if(navOpen){
        ul.style.height = 0;
        navToggleBtn.style.color = '#000';
      }else {
        ul.style.height = ulHeight + 'px';
        navToggleBtn.style.color = 'lightseagreen';
      }
      navOpen = !navOpen;
    }
  }
  nav.appendChild(navToggleBtn);
  header.appendChild(nav);

  return header;
}

export default header;