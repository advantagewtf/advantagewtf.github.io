jQuery(document).ready(function ($) {
  var rotateDelay = 2500;
  var loadingDelay = 3800;

  function nextWord(current) {
    var next = getNext(current);

    var headline = current.closest(".cd-headline");

    if (headline.hasClass("type")) {
      var wrapper = current.parent(".cd-words-wrapper");
      wrapper.addClass("selected").removeClass("waiting");

      setTimeout(function () {
        wrapper.removeClass("selected");
        current
          .removeClass("is-visible")
          .addClass("is-hidden")
          .children("i")
          .removeClass("in")
          .addClass("out");
      }, 500);

      setTimeout(function () {
        showWord(next, 150);
      }, 1300);
    } else if (headline.hasClass("letters")) {
      var sameLength = current.children("i").length >= next.children("i").length;
      hideLetter(current.find("i").eq(0), current, sameLength, 50);
      showLetter(next.find("i").eq(0), next, sameLength, 50);
    } else if (headline.hasClass("clip")) {
      current.closest(".cd-words-wrapper").animate({ width: "2px" }, 600, function () {
        swapWords(current, next);
        showWord(next);
      });
    } else if (headline.hasClass("loading-bar")) {
      var wrapper = current.closest(".cd-words-wrapper");
      wrapper.removeClass("is-loading");
      swapWords(current, next);

      setTimeout(function () {
        nextWord(next);
      }, loadingDelay);

      setTimeout(function () {
        wrapper.addClass("is-loading");
      }, 800);
    } else {
      swapWords(current, next);
      setTimeout(function () {
        nextWord(next);
      }, rotateDelay);
    }
  }

  function showWord(word, speed) {
    speed = speed || 0;
    var headline = word.closest(".cd-headline");

    if (headline.hasClass("type")) {
      showLetter(word.find("i").eq(0), word, false, speed);
      word.addClass("is-visible").removeClass("is-hidden");
    } else if (headline.hasClass("clip")) {
      var wrapper = word.closest(".cd-words-wrapper");
      wrapper.animate({ width: word.width() + 10 }, 600, function () {
        setTimeout(function () {
          nextWord(word);
        }, 1500);
      });
    }
  }

  function hideLetter(letter, word, sameLength, speed) {
    speed = speed || 0;
    letter.removeClass("in").addClass("out");

    if (letter.is(":last-child")) {
      if (sameLength) {
        setTimeout(function () {
          nextWord(getNext(word));
        }, rotateDelay);
      }
    } else {
      setTimeout(function () {
        hideLetter(letter.next(), word, sameLength, speed);
      }, speed);
    }
  }

  function showLetter(letter, word, sameLength, speed) {
    speed = speed || 0;
    letter.addClass("in").removeClass("out");

    if (letter.is(":last-child")) {
      var headline = word.closest(".cd-headline");
      if (headline.hasClass("type")) {
        setTimeout(function () {
          word.closest(".cd-words-wrapper").addClass("waiting");
        }, 200);
      }
      if (!sameLength) {
        setTimeout(function () {
          nextWord(word);
        }, rotateDelay);
      }
    } else {
      setTimeout(function () {
        showLetter(letter.next(), word, sameLength, speed);
      }, speed);
    }
  }

  function getNext(word) {
    return word.is(":last-child") ? word.parent().children().eq(0) : word.next();
  }

  function swapWords(current, next) {
    current.removeClass("is-visible").addClass("is-hidden");
    next.removeClass("is-hidden").addClass("is-visible");
  }

  // Initialize letters for animation
  $(".cd-headline.letters b").each(function () {
    var $b = $(this);
    var letters = $b.text().split("");
    var visible = $b.hasClass("is-visible");

    letters = letters.map(function (letter) {
      if ($b.closest(".rotate-2").length > 0) letter = "<em>" + letter + "</em>";
      return visible ? '<i class="in">' + letter + "</i>" : "<i>" + letter + "</i>";
    });

    $b.html(letters.join(""));
  });

  // Start headline animations
  var headlines = $(".cd-headline");

  headlines.each(function () {
    var $headline = $(this);

    if ($headline.hasClass("loading-bar")) {
      setTimeout(function () {
        $headline.find(".cd-words-wrapper").addClass("is-loading");
      }, 800);
    } else if ($headline.hasClass("clip")) {
      var wrapper = $headline.find(".cd-words-wrapper");
      wrapper.css("width", wrapper.width() + 10);
    } else if (!$headline.hasClass("type")) {
      var wrapper = $headline.find(".cd-words-wrapper");
      var maxWidth = 0;
      wrapper.find("b").each(function () {
        var w = $(this).width();
        if (w > maxWidth) maxWidth = w;
      });
      wrapper.css("width", maxWidth);
    }

    setTimeout(function () {
      nextWord($headline.find(".is-visible").eq(0));
    }, rotateDelay);
  });
});
