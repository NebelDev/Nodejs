# Node.js - The simplest way to create a web server
In this project I use Node.js and Express module to create a simplest web server. <br>
The web server is listening on the port <b><i>3000</i></b> and will show you the "index.html" as hompage.<br>
You can change the listening port editing the line <b><i>"app.listen(process.env.PORT || 3000)"</i></b> and set 80 instead of 3000.<br>
The directory <b><i>"html"</i></b> is important to place static web pages that won't be process as script page.<br>

<p><b>Static HTML files</b></p>
Inside the folder html you can place your static html/ javascript files. For an advanced webserver we should use templates.

<p><b>Default homepage</b></p>

```javascript
var options = {
  index: "index.html"
};
```

Change the index var with your static homepage file.
