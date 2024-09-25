 /* swap open/close side menu icons */
$("[data-bs-toggle=collapse]").click(function () {
    $(this).find("i").toggleClass("bi-chevron-right bi-chevron-down");
});