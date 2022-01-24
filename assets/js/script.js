function clock(seconds, minutes, hourse) {
    $('.seconds-arrow').css('transform', `rotate(${ seconds }deg)`);
    $('.minutes-arrow').css('transform', `rotate(${ minutes }deg)`);
    $('.hourse-arrow').css('transform', `rotate(${ hourse }deg)`);

    $('.seconds-arrow').css('display', 'block');
    $('.minutes-arrow').css('display', 'block');
    $('.hourse-arrow').css('display', 'block');

}

setInterval(() => {
    let minutes = Number(moment().format('mm'));
    let seconds = Number(moment().format('ss'));

    clock(seconds * 6, (minutes * 6) + (seconds / 10), Number(moment().format('h')) * 30 + (minutes / 2) + (seconds / 2 / 60));
}, 1000)