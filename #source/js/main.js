$(function () {
   let headerBtn = $("#header__btn");
   let headerBottom = $("#header__bottom");
   let header = $("#header")

   headerBtn.on("click", function (event) {
      event.preventDefault()

      headerBottom.toggleClass('show');
      headerBtn.toggleClass('cross');
      header.toggleClass('fixed');

   })

})