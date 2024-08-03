import header from "./header.js";
import footer from "./footer.js";
import contents from "./contents.js";


const root = document.getElementById('root');

root.appendChild(header());

root.appendChild(contents());

root.appendChild(footer());