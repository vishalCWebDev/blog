$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    //ajax request
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/blog",
      data: new FormData(this),
      processData: false,
      contentType: false,
      success: function (response) {
        $("form").trigger('reset');
        console.log(response)
      },
      error: function (error) {
        const err = error.responseJSON;
        if (err.type == "unique") {
           $(`.${err.field}`).addClass("set-error");
           $(`.${err.field}-error`).html(err.message);
        } else if (err.type == "required") {
          for (let data of err.field) {
            $(`.${data.name}`).addClass("set-error"); //.content class 
            $(`.${data.name}-error`).html(data
              .message); //.content-error class
          }
        } else {
          $(`.${err.field}`).addClass("set-error"); 
          $(`.${err.field}-error`).html(err.message);
        }
      }
    });
  });

});


$(document).ready(function () {
  const url = "http://localhost:8080/blog";
  blog(url, '#home');
});

const blog = (url, element) => {
  $.ajax({
    type: "GET",
    url: url,
    success: function (response) {
      response.forEach(function (data) {
        const content = `
                            <small style="text-transform:capitalize;">${data.category}</small>
                            <h1 class="display-3" style='font-size:30px;text-transform:capitalize;'>${data.title}</h1>
                            <small class="d-block mb-4">${formateDate(data.createdAt)}</small>
                            <img src='http://localhost:8080/${data.image}' width='80%'class="mb-4" />
                            <p class="text-justify mb-5">${data.content}</p>
                        `;
        $(element).append(content);
      });
    },
    error: function (error) {
      if (error.responseJSON) {
        alert(JSON.stringify(error.responseJSON.message));
      }
    }
  });
}

const formateDate = (date) => {
  const dateRes = new Date(date);
  const dd = dateRes.getDate();
  const mm = dateRes.getMonth() + 1;
  const year = dateRes.getFullYear();
  return `${dd}/${mm}/${year}   ${dateRes.toLocaleTimeString()}`;
}