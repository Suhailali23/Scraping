$(document).ready(function () {
    $('#submit').on('click', function () {
        //if the text box is empty
        if (!$('#urlText').val() || $('#urlText').val() === ''){
            //warn the user
            $('#submit').text('Please enter a URL!');
            $('#submit').addClass('error');

            //re-set the button
            setTimeout(function () {
                $('#submit').text('GO');
                $('#submit').removeClass('error');
            }, 2000);

            return;
        }

        $('#data-result').html('');

        $.ajax({
            url:  '/scrape',
            type: 'POST',
            data: {url:  $('#urlText').val() },
            success (jsonData) {
                $('#ajax-loader-container').hide();

                console.warn('HERE SUCCESS: ');
                console.dir(jsonData);

                $('#data-result').JSONView(jsonData);
            },
            error (err) {
                console.error('HERE error: ' + err);
            }
        });

    });
});