    // تابع برای سیاه کردن صفحه
    function lockWebsite() {
        document.body.style.backgroundColor = "white";
        document.body.style.fontSize ="48px"
        document.body.innerHTML = "<h2>close door </h2> <span> &#x1F603; &#x1F603; &#x1F603; &#x1F603; </span>";
      }
      
      // زمانبندی برای فراخوانی تابع lockWebsite در عرض یک دقیقه
      setTimeout(function() {
        lockWebsite();
      }, 7800);
          var attempt = 3; // Variable to count number of attempts.
          // Below function Executes on click of login button.
          function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
             if (username == "reza1386s" && password == "@ss1234" || username == "mamadcayber" && password == "@mm1234" || username =="abc01234" && password =="1234xss" ) {
              alert("Welcome ribugsup github https://github.com/xroyal00zero"); 
              return false;
            } else {
              attempt--; // Decrementing by one.
              alert(" son " + attempt + " forset baraye to ;");
              // Disabling fields after 3 attempts.
              if (attempt == 0) {
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
              }
            }
          }
          document.getElementById("log").addEventListener("click", validate);