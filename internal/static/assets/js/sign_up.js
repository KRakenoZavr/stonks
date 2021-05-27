// document.addEventListener("DOMContentLoaded", function () {
//   var step_id = 1;
//   var post_data = new FormData();

//   $(".sign_up_btn").on("click", function () {
//     var sign_up_btn = $(this);
//     var is_correct = true;
//     $(".career-box")
//       .find("input")
//       .each(function () {
//         if ("required" === $(this).attr("required")) {
//           var field = $(this).attr("id");
//           var value = $(this).val().trim();
//           var limit = parseInt($(this).attr("limit"));
//           limit = isNaN(limit) ? 3 : limit;
//           if (value.length >= limit) {
//             post_data.append(field, value);
//           } else {
//             is_correct = false;
//             var err_text = $(this).attr("placeholder");
//             if (limit > 3) {
//               err_text += " Мин. " + limit + " символ";
//             }
//             $(this).focus();
//             $(this).addClass("err");
//             $(sign_up_btn).next().text(err_text);
//             setTimeout(function () {
//               $(sign_up_btn).next().text("");
//             }, 2500);
//             return false;
//           }
//         }
//       });
//     is_correct = $("#password").val() === $("#password2").val();
//     if (is_correct === false) {
//       $(sign_up_btn).next().text("Пароли не совпадает");
//       setTimeout(function () {
//         $(sign_up_btn).next().text("");
//       }, 2500);
//     }

//     if (is_correct) {
//       is_correct = parseInt($("#kato_id").val()) > 0;
//       if (is_correct === false) {
//         $(sign_up_btn).next().text("Выберите область/район");
//         setTimeout(function () {
//           $(sign_up_btn).next().text("");
//         }, 2500);
//       }
//     }

//     if (is_correct) {
//       $(".career-box select").each(function () {
//         var field = $(this).attr("id");
//         var value = $(this).val().trim();
//         post_data.append(field, value);
//       });
//       $.ajax({
//         url: "/new_client",
//         type: "post",
//         async: true,
//         data: post_data,
//         cache: false,
//         contentType: false,
//         processData: false,
//       }).done(function (result) {
//         var msg = JSON.parse(result);
//         if (msg.result === "error") {
//           $(sign_up_btn).next().text(msg.message);
//           setTimeout(function () {
//             $(sign_up_btn).next().text("");
//           }, 2500);
//         }
//         if (msg.result === "success") {
//           Swal.fire({
//             title: "Регистрация",
//             text: "Вы успешно зарегистрировались",
//             icon: "success",
//           }).then((result) => {
//             location.href = "/";
//           });
//         }
//       });
//     }
//   });
//   $(".content-box input").on("keyup", function () {
//     $(this).removeClass("err");
//   });
//   $("#kato_parent_id").on("change", function () {
//     let parent_id = $(this).val();
//     $("#kato_id option").removeClass("showed");
//     $("#kato_id .parent_" + parent_id).addClass("showed");
//     $("#kato_id").val(-1);
//   });
//   $("#fact_kato_parent_id").on("change", function () {
//     let parent_id = $(this).val();
//     $("#fact_kato_id option").removeClass("showed");
//     $("#fact_kato_id .parent_" + parent_id).addClass("showed");
//     $("#fact_kato_id").val(-1);
//   });
//   $("#country_id").selectize({
//     create: false,
//     sortField: {
//       field: "text",
//       direction: "asc",
//     },
//   });
//   $("#fact_country_id").selectize({
//     create: false,
//     sortField: {
//       field: "text",
//       direction: "asc",
//     },
//   });
// });
