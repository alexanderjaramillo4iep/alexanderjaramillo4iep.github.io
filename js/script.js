/*
* Copyright (C) 2020 Alexander Jaramillo <http://alexanderjaramillo.com>
* License: MIT
*/

['constants.js', 'fn.js', 'load-info.js'].forEach( (file) => {
    tag_script = document.createElement('script');
    tag_script.setAttribute('type', 'text/javascript');
    tag_script.setAttribute('src', `js/${file}?version=${version}`);
    tag_hdr.appendChild(tag_script);
});
