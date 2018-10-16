$(document).ready(() => {
    let arr = [0];
    if (arr.length == true) {
        console.log('true');
    } else {
        console.log('nope');
    }
});

$('.arr1').click(function () {
    let arr = [3];
    if (arr == true || arr === true) {
        $(this).text('true');
    } else {
        $(this).prev().css('border', '2px solid #dc3545');
        $(this).prev().css('border-radius', '2px');
        $(this).css('border', '2px solid #dc3545');
        $(this).css('background', '#dc3545');
        $(this).text('false');
    }
});

$('.arr2').click(function () {
    let arr = [3];
    if (arr.length) {
        $(this).prev().css('border', '2px solid #28a745');
        $(this).prev().css('border-radius', '2px');
        $(this).css('border', '2px solid #28a745');
        $(this).css('background', '#28a745');
        $(this).text('true');
    } else {
        $(this).text('true');
    }
});

$('.arr3').click(function () {
    let arr = [];
    if (arr) {
        $(this).text('true');
    } else {
        $(this).prev().css('border', '2px solid #dc3545');
        $(this).prev().css('border-radius', '2px');
        $(this).css('border', '2px solid #dc3545');
        $(this).css('background', '#dc3545');
        $(this).text('false');
    }
});

$('.arr4').click(function () {
    let arr = [];
    if (arr.length) {
    } else {
        $(this).prev().css('border', '2px solid #28a745');
        $(this).prev().css('border-radius', '2px');
        $(this).css('border', '2px solid #28a745');
        $(this).css('background', '#28a745');
        $(this).text('false');
    }
});

$('.ab').click(function () {
    var a = [1,2,3];
    var b = [1,2,3];
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(a == b);
});

$('.ab2').click(function () {
    var a = [1,2,3];
    var b = [1,2,3];
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(a === b);
});

$('.ab3').click(function () {
    var a = [1,2,3];
    var b = [1,2,3];
    var c = a;
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(c == a);
});

$('.ab4').click(function () {
    var a = [1,2,3];
    var b = [1,2,3];
    var c = a;
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(c === a);
});

$('.cd').click(function () {
    var c = { x: 1, y: 2 };
    var d = { x: 1, y: 2 };
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(c == d);
});

$('.cd2').click(function () {
    var c = { x: 1, y: 2 };
    var d = { x: 1, y: 2 };
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(c === d);
});

$('.cd3').click(function () {
    var d = { x: 1, y: 2 };
    var e = { x: 1, y: 2 };
    var f = d;
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(f == d);
});

$('.cd4').click(function () {
    var d = { x: 1, y: 2 };
    var e = { x: 1, y: 2 };
    var f = d;
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(f === d);
});

$('.kont1').click(function () {
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(`"${1 + "1"}"`);
});

$('.kont2').click(function () {
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(`"${0.5 + "1"}"`);
});

$('.kont3').click(function () {
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(`"${-3 + "1"}"`);
});

$('.kont4').click(function () {
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(`${1 + +"1"}`);
});

$('.z1').click(function () {
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(+0 === -0);
});

$('.z2').click(function () {
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(-0 === -0);
});

$('.z3').click(function () {
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(+0 === +0);
});

$('.z4').click(function () {
    $(this).prev().css('border', '2px solid #dc3545');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #dc3545');
    $(this).css('background', '#dc3545');
    $(this).text(Object.is(+0, -0));
});

$('.z5').click(function () {
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(Object.is(-0, -0));
});

$('.z6').click(function () {
    $(this).prev().css('border', '2px solid #28a745');
    $(this).prev().css('border-radius', '2px');
    $(this).css('border', '2px solid #28a745');
    $(this).css('background', '#28a745');
    $(this).text(Object.is(+0, +0));
});

$('.play').on('click', function () {
    let evaluation = eval($(this).prev().text());

    if ($(this).prev().text().includes('+')) {
        inputEvaluate($(this).prev().text(), '+', $(this));
        return;
    }

    if ($(this).prev().text().includes('-')) {
        inputEvaluate($(this).prev().text(), '-', $(this));
        return;
    }

    if ($(this).prev().text().includes('*')) {
        inputEvaluate($(this).prev().text(), '*', $(this));
        return;
    }

    if ($(this).prev().text().includes('/')) {
        inputEvaluate($(this).prev().text(), '/', $(this));
        return;
    }

    if (evaluation) {
        $(this).prev().css('border', '2px solid #28a745');
        $(this).prev().css('border-radius', '2px');
        $(this).css('border', '2px solid #28a745');
        $(this).css('background', '#28a745');
    } else {
        $(this).prev().css('border', '2px solid #dc3545');
        $(this).prev().css('border-radius', '2px');
        $(this).css('border', '2px solid #dc3545');
        $(this).css('background', '#dc3545');
    }
    $(this).css('color', '#ffffff');
    $(this).text(evaluation);
});

$('code').on('keypress', function () {
    $(this).parent().css('border', "2px solid #222222");
    $(this).parent().next().css('border', '2px solid #ffc40b');
    $(this).parent().next().css('border-radius', '2px');
    $(this).parent().next().css('background', '#222222');
    $(this).parent().next().css('color', '#ffffff');
    $(this).parent().next().text('Sprawdź');
});

$('p input').on('blur', function () {
    $(this).parent().next().find('pre code').append($(this).val());
});

$('p input').on('focus', function () {
    $(this).parent().next().find('pre code').eq(0).text("10 + ");
    $(this).parent().next().find('pre').eq(0).css('border', '2px solid #222222');
    $(this).parent().next().find('pre code').eq(1).text("10 - ");
    $(this).parent().next().find('pre').eq(1).css('border', '2px solid #222222');
    $(this).parent().next().find('pre code').eq(2).text("10 * ");
    $(this).parent().next().find('pre').eq(2).css('border', '2px solid #222222');
    $(this).parent().next().find('pre code').eq(3).text("10 / ");
    $(this).parent().next().find('pre').eq(3).css('border', '2px solid #222222');
    $(this).parent().next().find('button').css('background-color', '#222222');
    $(this).parent().next().find('button').css('border', '2px solid #ffc40b');
    $(this).parent().next().find('button').css('color', '#ffffff');
    $(this).parent().next().find('button').text('Sprawdź');
});

function inputEvaluate(number, operation, button) {
    let left;
    let right;
    let evaluation;
    let numberEvaluation;

    if (operation === '+') {
        left = parseInt(number.split('+')[0].trim());
        right = number.split('+')[1].trim().toString();
        numberEvaluation = left + parseInt(right);
        evaluation = left + right;
    }

    if (operation === '-') {
        left = parseInt(number.split('-')[0].trim());
        right = number.split('-')[1].trim().toString();
        numberEvaluation = left - parseInt(right);
        evaluation = left - right;
    }

    if (operation === '*') {
        left = parseInt(number.split('*')[0].trim());
        right = number.split('*')[1].trim().toString();
        numberEvaluation = left * parseInt(right);
        evaluation = left * right;
    }

    if (operation === '/') {
        left = parseInt(number.split('/')[0].trim());
        right = number.split('/')[1].trim().toString();
        numberEvaluation = left / parseInt(right);
        evaluation = left / right;
    }

    if (evaluation === numberEvaluation) {
        button.prev().css('border', '2px solid #28a745');
        button.prev().css('border-radius', '2px');
        button.css('border', '2px solid #28a745');
        button.css('background', '#28a745');
    } else {
        button.prev().css('border', '2px solid #dc3545');
        button.prev().css('border-radius', '2px');
        button.css('border', '2px solid #dc3545');
        button.css('background', '#dc3545');
    }
    button.css('color', '#ffffff');
    button.text(evaluation);
}