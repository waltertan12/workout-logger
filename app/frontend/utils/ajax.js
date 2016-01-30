const jsonToQueryString = (object) => {
  return '?' + Object.keys(object).map((key) => {
      return encodeURIComponent(key) + '=' +
          encodeURIComponent(object[key]);
  }).join('&');
};

const ajax = (options) => {
  var params = '';

  if (typeof options['method'] === 'undefined')
    options.method = 'GET';
  if (typeof options['success'] === 'undefined')
    options.success = () => {};
  if (typeof options['error'] === 'undefined') 
    options.error = () => {};
  if (typeof options['data'] !== undefined)
    params = jsonToQueryString(options['data']);

  var req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    var data, csrfToken;
    if (req.readyState === 1 && options.url.match(/^\/?api\//)) {
      csrfToken = document.getElementsByName('csrf-token')[0].content;
      req.setRequestHeader('X-CSRF-Token', csrfToken);
    } else if (req.readyState === 4) {
      data = JSON.parse(req.response);
      switch(req.status) {
        case 200:
          options.success(data);
          return req;
        default: 
          options.error(req);
          return req;
      }
    }
  };
  req.open(options.method, options.url + params, true);
  req.send();
};

module.exports = ajax;