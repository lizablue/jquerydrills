$(document).ready(function () {
    let str = $(':text').val();
    $('#btnSubmit').prop('disabled', true);
    $(':text').keyup(function() {
        if($('str') != '') {
            $('#btnSubmit').prop('disabled', false);
            $('#btnSubmit').on('click', function () {
                alert('The button has been clicked');
                alert(str);
            })
        }
    })
})