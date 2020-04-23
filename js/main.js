$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleIcon = $('.toggle-icons i');
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
        $toggleIcon.toggleClass('border');
    })
});