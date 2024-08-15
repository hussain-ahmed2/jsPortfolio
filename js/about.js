const about = () => {
  const about = document.createElement('div');
  about.id = 'about';
  const aboutMe = document.createElement('div');
  const aboutMeText = document.createElement('p');
  aboutMeText.innerHTML = 'This is about me...<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maiores tempore laboriosam ratione vero accusamus quaerat qui unde? Molestiae earum voluptatem aperiam harum repudiandae perferendis exercitationem repellendus, nulla recusandae? Culpa!';
  aboutMeText.id = 'aboutMeText';
  aboutMe.appendChild(aboutMeText);
  aboutMe.id = 'aboutMe';
  const resume = document.createElement('a');
  resume.href = 'files/Resume.pdf';
  resume.textContent = 'Download Resume';
  resume.id = 'resume';
  aboutMe.appendChild(resume);

  about.appendChild(aboutMe);

  const svg = document.createElement('div');
  svg.id = 'avatar';
  svg.innerHTML = '<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0" fill="#2e3436"/></svg>'

  about.appendChild(svg);

  return about;
}

export default about;