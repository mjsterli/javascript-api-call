const http = require('https');

http
  .get('https://www.random.org/integers/?num=7&min=1&max=52&col=7&base=10&format=plain&rnd=new', resp => {
    let data = '';

    resp.on('data', chunk => {
      data += chunk;
    });

    resp.on('end', ()=>{
      console.log(data);
    });
  });

  //.get('http://api.open-notify.org/astros.json', 