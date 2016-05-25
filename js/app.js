$(function() {
    $(".mouse a").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 500, function() {
            window.location.hash = hash;
        });
    });

    $('.img-slide a').click(function(e) {
        e.preventDefault();
    })


    // first-demo
    var $main1 = $('#shuffle-wrapper-1');
    $main1.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });


    /* reshuffle when user clicks a filter item */
    $('#filter-1 a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter-1 a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $main1.shuffle('shuffle', groupName );
    });


    // second-demo
    var $main2 = $('#shuffle-wrapper-2');
    $main2.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });


    /* reshuffle when user clicks a filter item */
    $('#filter-2 a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter-2 a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $main2.shuffle('shuffle', groupName );
    });


});