import home from './home.js';
import about from './about.js';
import contact from './contact.js';
import projects from './projects.js';

const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

const spanColorChanger = () => {
  const span = document.querySelectorAll('.welcomeTextSpan');
  span.forEach(el => el.style.color = rgb());
  const svgIcon = document.querySelector('#avatar svg path');
  const color = rgb();
  svgIcon.setAttribute('fill', color);
  const avatar = document.getElementById('avatar');
  avatar.style.borderColor = color;
}

const setPath = (path) => {
  sessionStorage.setItem('jsPortfolioPath', path);
}

const contents = () => {
  const contents = document.createElement('div');
  contents.id = 'contents';
  let path;

  if (sessionStorage.getItem('jsPortfolioPath')) {
    path = sessionStorage.getItem('jsPortfolioPath');
  }else {
    path = 'home';
  }

  let homeInterval;

  if (path == 'home') {
    contents.innerHTML = '';
    contents.appendChild(home());
    homeInterval = setInterval(spanColorChanger, 1000);
  }else if (path == 'about') {
    contents.innerHTML = '';
    contents.appendChild(about()); 
  }else if (path == 'projects') {
    contents.innerHTML = '';
    contents.appendChild(projects()); 
  }else if (path == 'contact') {
    contents.innerHTML = '';
    contents.appendChild(contact());
  }

  document.getElementById('title').onclick = () => {
    sessionStorage.removeItem('jsPortfolioPath');
    path = 'home';
    contents.innerHTML = '';
    contents.appendChild(home());
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#nav ul li').classList.add('active');

  }

  const items = document.querySelectorAll('#nav ul li');
  items.forEach(item => {

    if (item.innerHTML.toLowerCase() === path){
      item.classList.add('active');
    }

    item.onclick = () => {
      document.querySelector('.active').classList.remove('active');
      item.classList.add('active');
      let content;
      if (item.innerHTML.toLowerCase() == 'home') content = home(); 
      else if (item.innerHTML.toLowerCase() == 'about') content = about(); 
      else if (item.innerHTML.toLowerCase() == 'projects') content = projects(); 
      else if (item.innerHTML.toLowerCase() == 'contact') content = contact(); 
      setPath(item.innerHTML.toLowerCase())
      contents.innerHTML = '';
      contents.appendChild(content);
      if (item.innerHTML.toLowerCase() == 'home') {
        homeInterval = setInterval(spanColorChanger, 1000);
      }
      else clearInterval(homeInterval); 
    }
  });

  return contents;
}

export default contents;