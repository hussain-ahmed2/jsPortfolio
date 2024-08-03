const contents = () => {
  const contents = document.createElement('div');
  contents.id = 'contents';
  contents.innerText = 'contents section, where all the contents are held';

  return contents;
}

export default contents;