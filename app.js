$(document).ready(function() {
    $("#btnSubmit").on('click', function() {
        alert('The button has been clicked');
        let str = $(':text').val();
        if (str != "") {
            alert(str);
        }
    })
})