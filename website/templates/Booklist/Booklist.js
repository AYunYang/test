async function togglePopup() {
  try {
    const response = await fetch(
      "https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/"
    );
    const data = await response.json();

    const activeEntry = data.data.find((entry) => entry.active === 1);

    if (activeEntry) {
      const reservedBookCount = Object.keys(activeEntry).filter(
        (key) => key.startsWith("Book") && activeEntry[key] !== ""
      ).length;

      if (reservedBookCount > 9) {
        console.log("invalid");
        // Any other code to happen if they cannot book
      } else {
        console.log("valid");
        document.getElementById("popup-1").classList.toggle("active");
        console.log("success");
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function subform() {
  const dropdownvalue = document.getElementById("dropdown").value;
  const bookId = document.getElementById("bookid").innerText; // Extracting book ID from HTML
  console.log(bookId);

  let new_bar = [];
  let temp = [];
  let props = [temp];

  temp.push(bookId); // Book ID to be nested in individual HTML page

  new_bar.push(bookId); // Name of book, follows bookId, can be changed
  new_bar.push("5"); // Reserved period when the book is not taken yet
  new_bar.push("18"); // Loan period when the book is taken
  new_bar.push(dropdownvalue);
  temp.push(new_bar.join());

  let data = Object.fromEntries(props);
  let payload = {
    data,
    query: "select * from tqDVavbc09WjAg9o where active=1",
  };

  fetch("https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/", {
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => {
    if (res.status === 201) {
      console.log("Request successful");
      document.getElementById("show").innerHTML = "Successful";
      setTimeout(function () {
        window.location.href = "../index.html";
      }, 2000);
    } else {
      console.error("Request failed");
    }
  });
}
