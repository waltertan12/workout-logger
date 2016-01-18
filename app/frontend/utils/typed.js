var Typed = function (id, phrases) {
  this.el = document.getElementById(id);
  this.phrases = phrases;
  this.run = false;
};

Typed.prototype.typePhrase = function (phrase, backspace) {   
    var len = phrase.length,
        timeOut,
        letter = 0;

    this.el.textContent = '|';

    var _typePhrase = () => {
      var humanize = Math.round(Math.random() * (200 - 30)) + 30;

      timeOut = setTimeout(() => {
          letter++;
          var type = phrase.substring(0, letter);
          this.el.textContent = type + '|';
          _typePhrase();

          if (letter == len) {
              // remove the '|'
              this.el.textContent = this.el.textContent.slice(0, -1);
              if (backspace) backspace();
              clearTimeout(timeOut);
          }

      }, humanize);
    }

    _typePhrase();
};

Typed.prototype.removePhrase = function (phrase, typeCallback) {
  var len = phrase.length,
      timeOut,
      letter = len;

  this.el.textContent = phrase + '|';

  var _removePhrase = () => {
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;

    timeOut = setTimeout(() => {
        letter--;
        var type = phrase.substring(0, letter);
        this.el.textContent = type + '|';
        _removePhrase();

        if (letter == 0) {
            // remove the '|'
            this.el.textContent = '';
            typeCallback();
            clearTimeout(timeOut);
        }

    }, humanize);
  }

  _removePhrase();
};

Typed.prototype.typePhrases = function () {
  this.run = true;
  
  var len = this.phrases.length,
      phraseIndex = -1,
      backspace, typeCallback;


  var _typePhrases = () => {
    if (phraseIndex < len - 1) {
      phraseIndex++;

      typeCallback = () => {
        setTimeout(() => {
          _typePhrases();
        }, 500)
      };


      if (phraseIndex !== len - 1) {
        backspace = () => {
          setTimeout(() => {
            this.removePhrase(this.phrases[phraseIndex], typeCallback);
          }, 500)
        };
      } else {
        backspace = null;
      }

      this.typePhrase(this.phrases[phraseIndex], backspace);
    }
  };

  _typePhrases();
};

module.exports = Typed;