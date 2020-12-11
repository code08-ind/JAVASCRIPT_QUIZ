var startingMinutes = 5;
var time = startingMinutes * 60;
var count = 0;

// var countdown = document.getElementById('countdown');

// function updateCountdown() {
//     var minutes = Math.floor(time / 60);
//     var seconds = time % 60;

//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     countdown.innerHTML = 'Time Left &rArr; ' + '0' + minutes + " : " + seconds;

//     time--;
// }

// if (countdown.innerHTML == '0' + 0 + ' : ' + 0) {
//     minutes = '0' + 0;
//     seconds = '0' + 0;
// }

// function run() {
//     setInterval(updateCountdown, 1000);
//     countdown.style.opacity = '1';
// }

$('#one').click(function () {
    $('#one').toggleClass('alert-danger');
    $('#one>i').css('opacity', '1');
    $('#two').attr('disabled', 'disabled');
    $('#three').attr('disabled', 'disabled');
    $('#four').toggleClass('alert-success');
    $('#four>i').css('opacity', '1');
});

$('#two').click(function () {
    $('#two').toggleClass('alert-danger');
    $('#two>i').css('opacity', '1');
    $('#one').attr('disabled', 'disabled');
    $('#three').attr('disabled', 'disabled');
    $('#four').toggleClass('alert-success');
    $('#four>i').css('opacity', '1');
});

$('#three').click(function () {
    $('#three').toggleClass('alert-danger');
    $('#three>i').css('opacity', '1');
    $('#one').attr('disabled', 'disabled');
    $('#two').attr('disabled', 'disabled');
    $('#four').toggleClass('alert-success');
    $('#four>i').css('opacity', '1');
});

$('#four').click(function () {
    $('#one').attr('disabled', 'disabled');
    $('#two').attr('disabled', 'disabled');
    $('#three').attr('disabled', 'disabled');
    $('#four').toggleClass('alert-success');
    $('#four>i').css('opacity', '1');
    count = count + 1;
});

$('#five').click(function () {
    $('#five').toggleClass('alert-danger');
    $('#five>i').css('opacity', '1');
    $('#six').attr('disabled', 'disabled');
    $('#seven').attr('disabled', 'disabled');
    $('#eight').toggleClass('alert-success');
    $('#eight>i').css('opacity', '1');
});

$('#six').click(function () {
    $('#six').toggleClass('alert-danger');
    $('#six>i').css('opacity', '1');
    $('#five').attr('disabled', 'disabled');
    $('#seven').attr('disabled', 'disabled');
    $('#eight').toggleClass('alert-success');
    $('#eight>i').css('opacity', '1');
});

$('#seven').click(function () {
    $('#seven').toggleClass('alert-danger');
    $('#seven>i').css('opacity', '1');
    $('#five').attr('disabled', 'disabled');
    $('#six').attr('disabled', 'disabled');
    $('#eight').toggleClass('alert-success');
    $('#eight>i').css('opacity', '1');
});

$('#eight').click(function () {
    $('#five').attr('disabled', 'disabled');
    $('#six').attr('disabled', 'disabled');
    $('#seven').attr('disabled', 'disabled');
    $('#eight').toggleClass('alert-success');
    $('#eight>i').css('opacity', '1');
    count = count + 1;
});

$('#nine').click(function () {
    $('#nine').toggleClass('alert-danger');
    $('#nine>i').css('opacity', '1');
    $('#ten').attr('disabled', 'disabled');
    $('#twelve').attr('disabled', 'disabled');
    $('#eleven').toggleClass('alert-success');
    $('#eleven>i').css('opacity', '1');
});

$('#ten').click(function () {
    $('#ten').toggleClass('alert-danger');
    $('#ten>i').css('opacity', '1');
    $('#nine').attr('disabled', 'disabled');
    $('#twelve').attr('disabled', 'disabled');
    $('#eleven').toggleClass('alert-success');
    $('#eleven>i').css('opacity', '1');
});

$('#twelve').click(function () {
    $('#twelve').toggleClass('alert-danger');
    $('#twelve>i').css('opacity', '1');
    $('#nine').attr('disabled', 'disabled');
    $('#ten').attr('disabled', 'disabled');
    $('#eleven').toggleClass('alert-success');
    $('#eleven>i').css('opacity', '1');
});

$('#eleven').click(function () {
    $('#nine').attr('disabled', 'disabled');
    $('#ten').attr('disabled', 'disabled');
    $('#twelve').attr('disabled', 'disabled');
    $('#eleven').toggleClass('alert-success');
    $('#eleven>i').css('opacity', '1');
    count = count + 1;
});

$('#thirteen').click(function () {
    $('#thirteen').toggleClass('alert-danger');
    $('#thirteen>i').css('opacity', '1');
    $('#fourteen').attr('disabled', 'disabled');
    $('#sixteen').attr('disabled', 'disabled');
    $('#fifteen').toggleClass('alert-success');
    $('#fifteen>i').css('opacity', '1');
});

$('#fourteen').click(function () {
    $('#fourteen').toggleClass('alert-danger');
    $('#fourteen>i').css('opacity', '1');
    $('#thirteen').attr('disabled', 'disabled');
    $('#sixteen').attr('disabled', 'disabled');
    $('#fifteen').toggleClass('alert-success');
    $('#fifteen>i').css('opacity', '1');
});

$('#sixteen').click(function () {
    $('#sixteen').toggleClass('alert-danger');
    $('#sixteen>i').css('opacity', '1');
    $('#thirteen').attr('disabled', 'disabled');
    $('#fourteen').attr('disabled', 'disabled');
    $('#fifteen').toggleClass('alert-success');
    $('#fifteen>i').css('opacity', '1');
});

$('#fifteen').click(function () {
    $('#thirteen').attr('disabled', 'disabled');
    $('#fourteen').attr('disabled', 'disabled');
    $('#sixteen').attr('disabled', 'disabled');
    $('#fifteen').toggleClass('alert-success');
    $('#fifteen>i').css('opacity', '1');
    count = count + 1;
});

$('#eighteen').click(function () {
    $('#eighteen').toggleClass('alert-danger');
    $('#eighteen>i').css('opacity', '1');
    $('#nineteen').attr('disabled', 'disabled');
    $('#twenty').attr('disabled', 'disabled');
    $('#seventeen').toggleClass('alert-success');
    $('#seventeen>i').css('opacity', '1');
});

$('#nineteen').click(function () {
    $('#nineteen').toggleClass('alert-danger');
    $('#nineteen>i').css('opacity', '1');
    $('#eighteen').attr('disabled', 'disabled');
    $('#twenty').attr('disabled', 'disabled');
    $('#seventeen').toggleClass('alert-success');
    $('#seventeen>i').css('opacity', '1');
});

$('#twenty').click(function () {
    $('#twenty').toggleClass('alert-danger');
    $('#twenty>i').css('opacity', '1');
    $('#eighteen').attr('disabled', 'disabled');
    $('#nineteen').attr('disabled', 'disabled');
    $('#seventeen').toggleClass('alert-success');
    $('#seventeen>i').css('opacity', '1');
});

$('#seventeen').click(function () {
    $('#eighteen').attr('disabled', 'disabled');
    $('#nineteen').attr('disabled', 'disabled');
    $('#twenty').attr('disabled', 'disabled');
    $('#seventeen').toggleClass('alert-success');
    $('#seventeen>i').css('opacity', '1');
    count = count + 1;
});

$('#twentyone').click(function () {
    $('#twentyone').toggleClass('alert-danger');
    $('#twentyone>i').css('opacity', '1');
    $('#twentythree').attr('disabled', 'disabled');
    $('#twentyfour').attr('disabled', 'disabled');
    $('#twentytwo').toggleClass('alert-success');
    $('#twentytwo>i').css('opacity', '1');
});

$('#twentythree').click(function () {
    $('#twentythree').toggleClass('alert-danger');
    $('#twentythree>i').css('opacity', '1');
    $('#twentyone').attr('disabled', 'disabled');
    $('#twentyfour').attr('disabled', 'disabled');
    $('#twentytwo').toggleClass('alert-success');
    $('#twentytwo>i').css('opacity', '1');
});

$('#twentyfour').click(function () {
    $('#twentyfour').toggleClass('alert-danger');
    $('#twentyfour>i').css('opacity', '1');
    $('#twentyone').attr('disabled', 'disabled');
    $('#twentythree').attr('disabled', 'disabled');
    $('#twentytwo').toggleClass('alert-success');
    $('#twentytwo>i').css('opacity', '1');
});

$('#twentytwo').click(function () {
    $('#twentyone').attr('disabled', 'disabled');
    $('#twentythree').attr('disabled', 'disabled');
    $('#twentyfour').attr('disabled', 'disabled');
    $('#twentytwo').toggleClass('alert-success');
    $('#twentytwo>i').css('opacity', '1');
    count = count + 1;
});

$('#twentyfive').click(function () {
    $('#twentyfive').toggleClass('alert-danger');
    $('#twentyfive>i').css('opacity', '1');
    $('#twentysix').attr('disabled', 'disabled');
    $('#twentyseven').attr('disabled', 'disabled');
    $('#twentyeight').toggleClass('alert-success');
    $('#twentyeight>i').css('opacity', '1');
});

$('#twentysix').click(function () {
    $('#twentysix').toggleClass('alert-danger');
    $('#twentysix>i').css('opacity', '1');
    $('#twentyfive').attr('disabled', 'disabled');
    $('#twentyseven').attr('disabled', 'disabled');
    $('#twentyeight').toggleClass('alert-success');
    $('#twentyeight>i').css('opacity', '1');
});

$('#twentyseven').click(function () {
    $('#twentyseven').toggleClass('alert-danger');
    $('#twentyseven>i').css('opacity', '1');
    $('#twentyfive').attr('disabled', 'disabled');
    $('#twentysix').attr('disabled', 'disabled');
    $('#twentyeight').toggleClass('alert-success');
    $('#twentyeight>i').css('opacity', '1');
});

$('#twentyeight').click(function () {
    $('#twentyfive').attr('disabled', 'disabled');
    $('#twentysix').attr('disabled', 'disabled');
    $('#twentyseven').attr('disabled', 'disabled');
    $('#twentyeight').toggleClass('alert-success');
    $('#twentyeight>i').css('opacity', '1');
    count = count + 1;
});

$('#twentynine').click(function () {
    $('#twentynine').toggleClass('alert-danger');
    $('#twentynine>i').css('opacity', '1');
    $('#thirty').attr('disabled', 'disabled');
    $('#thirtyone').attr('disabled', 'disabled');
    $('#thirtytwo').toggleClass('alert-success');
    $('#thirtytwo>i').css('opacity', '1');
});

$('#thirty').click(function () {
    $('#thirty').toggleClass('alert-danger');
    $('#thirty>i').css('opacity', '1');
    $('#twentynine').attr('disabled', 'disabled');
    $('#thirtyone').attr('disabled', 'disabled');
    $('#thirtytwo').toggleClass('alert-success');
    $('#thirtytwo>i').css('opacity', '1');
});

$('#thirtyone').click(function () {
    $('#thirtyone').toggleClass('alert-danger');
    $('#thirtyone>i').css('opacity', '1');
    $('#twentynine').attr('disabled', 'disabled');
    $('#thirty').attr('disabled', 'disabled');
    $('#thirtytwo').toggleClass('alert-success');
    $('#thirtytwo>i').css('opacity', '1');
});

$('#thirtytwo').click(function () {
    $('#twentynine').attr('disabled', 'disabled');
    $('#thirty').attr('disabled', 'disabled');
    $('#thirtyone').attr('disabled', 'disabled');
    $('#thirtytwo').toggleClass('alert-success');
    $('#thirtytwo>i').css('opacity', '1');
    count = count + 1;
});

$('#sub').click(function () {
    $('span').replaceWith(count);
    $('p').css('opacity', '1');
})


