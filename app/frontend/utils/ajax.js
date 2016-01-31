var ajax = (options) => {
  var data;

  if (typeof options.method === 'undefined')
    options.method = 'GET';
  if (typeof options.success === 'undefined')
    options.success = () => {};
  if (typeof options.error === 'undefined') 
    options.error = () => {};
  if (typeof options.data !== 'undefined')
    data = JSON.stringify(options.data);


  console.log(data);
  var req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    var data, csrfToken;
    switch (req.readyState) {
      case 1:
        // Set CSRF token if url matches same-origin
        if (options.url.match(/^\/?api\//)) {
          csrfToken = document.getElementsByName('csrf-token')[0].content;
          req.setRequestHeader('X-CSRF-Token', csrfToken);
        }
        // Check for data
        if (typeof options.data !== 'undefined') {
          req.setRequestHeader(
            'Content-Type', 
            'application/json;charset=UTF-8'
          );
        }
        break;
      case 4:
        data = JSON.parse(req.response);
        switch(req.status) {
          case 200:
            options.success(data);
            return req;
          default: 
            options.error(req);
            return req;
        }
        break;
    }
  };

  req.open(options.method, options.url, true);
  req.send(data);
};

module.exports = ajax;