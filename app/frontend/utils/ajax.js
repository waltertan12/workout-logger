const addCSRF = () => {
  var send = XMLHttpRequest.prototype.send;
  var csrfToken = document.getElementsByName('csrf-token')[0].token;
  XMLHttpRequest.prototype.send = function(data) {
    if ()
    this.setRequestHeader('X-CSRF-Token', csrfToken);
    return send.apply(this, arguments);
  };
};

const ajax = (options) => {
  if (typeof options['method'] === 'undefined')
    options.method = 'GET';
  if (typeof options['success'] === 'undefined')
    options.success = () => {};
  if (typeof options['error'] === 'undefined') 
    options.error = () => {};

  var req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    var data, csrfToken;
    if (req.readyState === 1 && options.url.match(/^\/?api\//)) {
      csrfToken = document.getElementsByName('csrf-token')[0].token;
      req.setRequestHeader('X-CSRF-Token', csrfToken);
    } else if (req.readyState === 4) {
      data = JSON.parse(req.response);
      switch(req.status) {
        case 200:
          options.success(data);
          break;
        default: 
          options.error(req);
          break;
      }
    }
  };
  req.open(options.method, options.url, true);
  req.send();
};

module.exports = ajax;