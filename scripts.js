// $('#btn').on('click', function () {
//     $('#one').hide();
//     $('#two').fadeIn();
// });

$("#clickme").click(function () {
    $("#book").show("slow", function () {
        // Animation complete.
    });
});



// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }