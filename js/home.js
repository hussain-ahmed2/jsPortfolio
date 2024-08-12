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
  svgIcon.setAttribute('fill', rgb());
  const avatar = document.getElementById('avatar');
  avatar.style.borderColor = rgb();
}

const home = () => {

  const home = document.createElement('div');
  home.id = 'home';
  const welcomeText = document.createElement('p');
  const text = 'Hi there, Welcome to my Portfolio.';
  const textArr = text.split('');
  textArr.forEach(el => {
    const span = document.createElement('span');
    span.innerText = el;
    span.className = 'welcomeTextSpan';
    welcomeText.appendChild(span);
  })
  welcomeText.id = 'welcomeText';

  const svg = document.createElement('div');
  svg.id = 'avatar';
  svg.innerHTML = '<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0" fill="#2e3436"/></svg>'

  home.appendChild(welcomeText);
  home.appendChild(svg);

  setInterval(spanColorChanger, 1000);

  return home;
}

export default home;