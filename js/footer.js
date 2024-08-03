const footer = () => {
  const footer = document.createElement('footer');
  const date = new Date();
  const year = date.getFullYear();
  const text = document.createElement('p');
  text.innerHTML = `Copyright &copy; ${year} All Right Reserved`;

  footer.appendChild(text);

  return footer;
}

export default footer;