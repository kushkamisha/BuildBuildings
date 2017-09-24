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

// var arr1 = ['4%', '21°C', '24°C', '900', '58', '60%', '150', '7', '25%', '30%', '80%', '50%']
// var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13]
// var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13]

for (var i = 0; i < arr.length; i++) {
    $('#numbers div:nth-child(' + i + ')').text(arr[i])
    // $('#numbers div:nth-child(' + i + ')').css('left', i*20 + 'px')
    // $('#numbers div:nth-child(' + i + ')').css('top', i*20 + 'px')
}