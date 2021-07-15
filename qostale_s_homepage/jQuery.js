$(function () {
  $(".qostale1").hide().fadeIn(3000);
  $(".member-list-item").click(function () {
    var $profile = $(this).find(".profile");
    if ($profile.hasClass("open")) {
      $profile.removeClass("open");
      $profile.slideUp();
      $(this).find("span").text("+");
    } else {
      $profile.addClass("open");
      $profile.slideDown();
      $(this).find("span").text("-");
    }
  });
  $(".member-Gt").hover(
    function () {
      $(this)
        .stop()
        .animate(
          { zIndex: 1 },
          {
            duration: 800,
            step: function (now) {
              $(this).css({ transform: "rotateX(" + now * 720 + "deg)" });
            },
            complete: function () {
              $(this).css("zIndex", 0);
            },
          }
        );
    },
    function () {
      $(this).css({ transform: "rotateX(0deg)" });
    }
  );
  $(".member-Ba").hover(
    function () {
      $(this)
        .stop()
        .animate(
          { zIndex: 1 },
          {
            duration: 800,
            step: function (now) {
              $(this).css({ transform: "rotateX(" + now * 720 + "deg)" });
            },
            complete: function () {
              $(this).css("zIndex", 0);
            },
          }
        );
    },
    function () {
      $(this).css({ transform: "rotateX(0deg)" });
    }
  );
  $(".member-Dr").hover(
    function () {
      $(this)
        .stop()
        .animate(
          { zIndex: 1 },
          {
            duration: 800,
            step: function (now) {
              $(this).css({ transform: "rotateX(" + now * 720 + "deg)" });
            },
            complete: function () {
              $(this).css("zIndex", 0);
            },
          }
        );
    },
    function () {
      $(this).css({ transform: "rotateX(0deg)" });
    }
  );
  $(".profile-twitter").hover(
    function () {
      $(this)
        .stop()
        .animate(
          { zIndex: 1 },
          {
            duration: 800,
            step: function (now) {
              $(this).css({ transform: "rotateX(" + now * 720 + "deg)" });
            },
            complete: function () {
              $(this).css("zIndex", 0);
            },
          }
        );
    },
    function () {
      $(this).css({ transform: "rotateX(0deg)" });
    }
  );
  $(".profile-note").hover(
    function () {
      $(this)
        .stop()
        .animate(
          { zIndex: 1 },
          {
            duration: 800,
            step: function (now) {
              $(this).css({ transform: "rotateX(" + now * 720 + "deg)" });
            },
            complete: function () {
              $(this).css("zIndex", 0);
            },
          }
        );
    },
    function () {
      $(this).css({ transform: "rotateX(0deg)" });
    }
  );

  $("#edit").click(function () {
    $("#cover, #modal").fadeTo(200, 1);
  });

  $("#close, #cover").click(function () {
    $("#cover, #modal").fadeTo(200, 0).hide();
  });
  $("#edit").hover(
    function () {
      $(this)
        .stop()
        .animate(
          { zIndex: 1 },
          {
            duration: 800,
            step: function (now) {
              $(this).css({ transform: "rotateX(" + now * 720 + "deg)" });
            },
            complete: function () {
              $(this).css("zIndex", 0);
            },
          }
        );
    },
    function () {
      $(this).css({ transform: "rotateX(0deg)" });
    }
  );
});
