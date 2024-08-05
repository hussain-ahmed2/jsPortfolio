import home from './home.js';
import about from './about.js';
import contact from './contact.js';
import projects from './projects.js';

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

  if (path == 'home') {
    contents.innerHTML = home();
  }else if (path == 'about') {
    contents.innerHTML = about(); 
  }else if (path == 'projects') {
    contents.innerHTML = projects(); 
  }else if (path == 'contact') {
    contents.innerHTML = contact();
  }

  document.getElementById('title').onclick = () => {
    sessionStorage.removeItem('jsPortfolioPath');
    path = 'home';
    contents.innerHTML = home();
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
      contents.innerHTML = content;
    }
  });

  return contents;
}

export default contents;