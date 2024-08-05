import home from './home.js';
import about from './about.js';
import contact from './contact.js';
import projects from './projects.js';

const contents = () => {
  const contents = document.createElement('div');
  contents.id = 'contents';
  contents.innerHTML = home();

  const items = document.querySelectorAll('#nav ul li');
  items.forEach(item => {
    item.onclick = () => {
      document.querySelector('.active').classList.remove('active');
      item.classList.add('active');
      let content;
      if (item.innerHTML.toLowerCase() == 'home') content = home(); 
      else if (item.innerHTML.toLowerCase() == 'about') content = about(); 
      else if (item.innerHTML.toLowerCase() == 'projects') content = projects(); 
      else if (item.innerHTML.toLowerCase() == 'contact') content = contact(); 
      contents.innerHTML = content;
    }
  })

  return contents;
}

export default contents;