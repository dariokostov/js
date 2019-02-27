$(document).ready(function () {
  let userData = [{
      email: 'knorr@live.com',
      password: 'afasfasij'
    },
    {
      email: 'rddesign@msn.com',
      password: '9Q6urHqy'
    },
    {
      email: 'chaffar@yahoo.ca',
      password: '4xaz2pyk'
    },
    {
      email: 'fatelk@mac.com',
      password: 'TAePJSb2ACX'
    },
    {
      email: 'luebke@me.com',
      password: 'EyFY8uhX'
    },
    {
      email: 'amichalo@mac.com',
      password: 'c7muQ6bxcA9QJKS'
    },
    {
      email: 'mallanmba@yahoo.ca',
      password: 'NqCGLmGtcFU'
    },
    {
      email: 'isaacson@att.net',
      password: 'PMjRGUug7Ff73Kt'
    },
    {
      email: 'aracne@aol.com',
      password: 'sBJU7JJR7Qx6f55'
    },
    {
      email: 'boser@comcast.net',
      password: 'DMXQRNj7BHZ'
    },
    {
      email: 'gtaylor@verizon.net',
      password: 'AbefrKfkbxHbP3u'
    },
    {
      email: 'firstpr@comcast.net',
      password: 'PGWPUtcwP'
    },
    {
      email: 'sumdumass@sbcglobal.net',
      password: '2DrCpjkk9mm8bjW'
    },
    {
      email: 'campbell@yahoo.com',
      password: 'ZmYZgaDq6'
    },
    {
      email: 'wetter@me.com',
      password: 'ppTG3pGAe'
    },
    {
      email: 'british@verizon.net',
      password: '67SbpGYvPJ2'
    }
  ]

  $("#loginBtn").on("click", function () {
    let email = $("#email").val();
    let password = $("#pass").val();
    for (var i = 0; i < userData.length; i++) {
      if (email === userData[i].email) {
        if (password === userData[i].password) {
          $("p").text("logged in")
          break;
        } else if (password !== userData[i].password) {
          $("p").text("incorect passwrord")
        }
      } else {
        $("p").text("incorect email")
      }
    }
  })
})