$('.our_serivce').hover(function () {

    var hover = $(this).attr('data-hover');

    $(this).addClass('active-tab').siblings().removeClass('active-tab');

    $('#hover_' + hover).addClass('active-hover-img', 2000).siblings().removeClass('active-hover-img', 2000);
});


$(".openmenu-btn").click(function () {
    $(".h-full-Menu").addClass("Menu-open");
})

$(".closemenu-btn").click(function () {
    $(".h-full-Menu").removeClass("Menu-open");
})