$('#one').click(function() {
    $('#diagram').attr('src','img/1.png');
})
$('#two').click(function() {
    $('#diagram').attr('src','img/2.png');
})
$('#three').click(function() {
    $('#diagram').attr('src','img/3.png');
})

// Fill div's with numbers.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13]
for (var i = 0; i < arr.length; i++) {
    $('#numbers div:nth-child(' + i + ')').text(arr[i])
    // $('#numbers div:nth-child(' + i + ')').css('left', i*20 + 'px')
    // $('#numbers div:nth-child(' + i + ')').css('top', i*20 + 'px')
}