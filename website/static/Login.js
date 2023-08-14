function compareAdminNumberAndPassword(admin_number, check_pass) {
  fetch("https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/")
    .then((res) => {
      if (res.status === 200) {
        return res.text();
      } else {
        throw new Error("Failed to fetch data from the API.");
      }
    })
    .then((data) => {
      console.log(data);

      try {
        const parsedData = JSON.parse(data);

        function findAdminNumber(adminNo) {
          const numericAdminNo = parseInt(adminNo, 10);
          for (const item of parsedData.data) {
            if (item.admin_no === numericAdminNo) {
              return item;
            }
          }
          return null;
        }

        const matchedItem = findAdminNumber(admin_number);

        if (matchedItem) {
          const storedPassword = matchedItem.password.toString();

          if (check_pass === storedPassword) {

            document.getElementById('show').innerHTML = "Successful! Please Wait...";
            console.log("password match");
            setTimeout(function (){ window.location.href = "index.html";},2000);

          } else {
            console.log("password not match");
            document.getElementById('show').innerHTML = "Password incorrect";
            setTimeout(function (){ window.location.href = "Login.html";},2000);
          }
        } else {
          console.log("Admin number not found in the data.");
          document.getElementById('show').innerHTML = "User not found";
        }
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    })
    .catch((err) => {
      console.error("Error:", err.message);
    });
}

const submitButton = document.getElementById("btn_submit");

submitButton.addEventListener("click", function () {
  event.preventDefault();
  const admin_number = document.getElementById("admin_no").value;
  const check_pass = document.getElementById("password").value;
  console.log("Admin Number:", admin_number);
  console.log("Password:", check_pass);

  compareAdminNumberAndPassword(admin_number, check_pass);

  fetch("https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/", {
        method: "POST",
        body: JSON.stringify({
          "data": {
            "active": "1"
          },
          "query": `select *
                    from tqDVavbc09WjAg9o
                    where admin_no = ${admin_number}`
        }),
      }).then(res => {
        if (res.status === 201) {
          console.log("Request successful");
        } else {
          console.error("Request failed");
        }
      }).catch(error => {
        console.error("An error occurred:", error);
      });

});








