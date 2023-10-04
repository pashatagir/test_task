const surveyData = {};
// Add click event listeners to each survey button
$(".survey_button").click(function () {
  const buttonText = $(this).text().trim();
  const key = $(this).closest("div[id]").find("span").text().trim();

  surveyData[key] = buttonText;
  localStorage.setItem("survey_data", JSON.stringify(surveyData));
});

// Output information to the console, clean LocalStorage and reload page
$("#p_modal_button3").click(function () {
  console.log(surveyData);
  setTimeout(function () {
    localStorage.clear();
    location.reload();
  }, 5000);
});

// Add click event listener to publicButton and insert markup before other comments
$(".comments_button").click(function () {
  const inputVal = $(".comments_input").val();

  if (inputVal.length > 3) {
    $(this).after(markup(inputVal));
    $(".comments_input").val("");
  } else {
    alert("O comentário deve conter pelo menos 6 caracteres!");
  }
});

// Returns the markup of a single comment
function markup(comment) {
  return `<div class="comments" id="comment0" style="display: block">
            <div class="profile">
              <img src="./assets/images/anonym.webp" />
            </div>
            <div class="comment-content">
              <p class="name">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Anônimo</font>
                </font>
              </p>
              <p>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">${comment}</font>
                </font>
              </p>
            </div>
            <div class="clr"></div>
            <div class="comment-status">
              <span>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Curte·comente</font>
                </font>
                <img src="./assets/images/like.png" width="15px" height="15px" />
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">0</font>
                </font>
              </span>
              <font style="vertical-align: inherit">
                <small>
                  <font style="vertical-align: inherit">·</font>
                </small>
                <small>
                  <u>
                    <font style="vertical-align: inherit">0 minutos antes</font>
                  </u>
                </small>
              </font>
              <small>
                <font style="vertical-align: inherit"></font>
                <u>
                  <font style="vertical-align: inherit"></font>
                </u>
              </small>
            </div>
          </div>`;
}
