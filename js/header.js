const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

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
  const li = '<li class="active">Home</li><li>About</li><li>Projects</li><li>Contact</li>';
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

  setInterval(() => {
    const color = rgb();
    title.style.color = color;
    header.style.borderBottomColor = color;
    navToggleBtn.style.color = color;
    const items = document.querySelectorAll('#nav ul li');
    items.forEach(item => {
      const color = rgb();
      item.style.color = color;
      if (item.classList.contains('active')){
        item.style.borderColor = color;
      }
    });
  }, 1000);

  return header;
}

export default header;