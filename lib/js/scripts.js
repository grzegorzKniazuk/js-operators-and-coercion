function isTrue(thisElement) {
    thisElement.prev().css('border', '2px solid #28a745');
    thisElement.prev().css('border-radius', '2px');
    thisElement.css('border', '2px solid #28a745');
    thisElement.css('background', '#28a745');
}

function isFalse(thisElement) {
    thisElement.prev().css('border', '2px solid #dc3545');
    thisElement.prev().css('border-radius', '2px');
    thisElement.css('border', '2px solid #dc3545');
    thisElement.css('background', '#dc3545');
}

$('.ab').click(function () {
    var a = [1,2,3];
    var b = [1,2,3];
    isFalse($(this));
    $(this).text(a == b);
});

$('.ab2').click(function () {
    var a = [1,2,3];
    var b = [1,2,3];
    isFalse($(this));
    $(this).text(a === b);
});

$('.ab3').click(function () {
    var a = [1,2,3];
    var c = a;
    isTrue($(this));
    $(this).text(c == a);
});

$('.ab4').click(function () {
    var a = [1,2,3];
    var c = a;
    isTrue($(this));
    $(this).text(c === a);
});

$('.cd').click(function () {
    var c = { x: 1, y: 2 };
    var d = { x: 1, y: 2 };
    isFalse($(this));
    $(this).text(c == d);
});

$('.cd2').click(function () {
    var c = { x: 1, y: 2 };
    var d = { x: 1, y: 2 };
    isFalse($(this));
    $(this).text(c === d);
});

$('.cd3').click(function () {
    var d = { x: 1, y: 2 };
    var f = d;
    isTrue($(this));
    $(this).text(f == d);
});

$('.cd4').click(function () {
    var d = { x: 1, y: 2 };
    var f = d;
    isTrue($(this));
    $(this).text(f === d);
});

// operator dodawania
$('.dod1').click(function () {
    isTrue($(this));
    $(this).text(`"${false + "1"}"`);
});

$('.dod2').click(function () {
    isTrue($(this));
    $(this).text(`${false + false}`);
});

$('.dod3').click(function () {
    isTrue($(this));
    $(this).text(`${true + true}`);
});

$('.dod4').click(function () {
    isTrue($(this));
    $(this).text(`"${5 + "Britenet"}"`);
});

$('.dod5').click(function () {
    isTrue($(this));
    $(this).text(`"${true + "Britenet"}"`);
});

$('.dod6').click(function () {
    isTrue($(this));
    $(this).text(`"${true + "true"}"`);
});

$('.dod7').click(function () {
    isTrue($(this));
    $(this).text(`"${5 + "5"}"`);
});

$('.dod8').click(function () {
    isTrue($(this));
    $(this).text(`${-3 + true}`);
});

// operator odejmowania
$('.od1').click(function () {
    isTrue($(this));
    $(this).text(6 - "2");
});

$('.od2').click(function () {
    isTrue($(this));
    $(this).text(6 - false);
});

$('.od3').click(function () {
    isTrue($(this));
    $(this).text(6 - true);
});

$('.od4').click(function () {
    isFalse($(this));
    $(this).text("Britenet" - 6);
});

$('.od5').click(function () {
    isFalse($(this));
    $(this).text(true - "Britenet");
});

$('.od6').click(function () {
    isTrue($(this));
    $(this).text(false - true);
});

$('.od7').click(function () {
    isTrue($(this));
    $(this).text(true - false);
});

$('.od8').click(function () {
    isTrue($(this));
    $(this).text(-3 - true);
});

// operator dzielenia
$('.dz1').click(function () {
    isTrue($(this));
    $(this).text(6 / "2");
});

$('.dz2').click(function () {
    isTrue($(this));
    $(this).text(6 / false);
});

$('.dz3').click(function () {
    isTrue($(this));
    $(this).text(6 / true);
});

$('.dz4').click(function () {
    isFalse($(this));
    $(this).text("Britenet" / 6);
});

$('.dz5').click(function () {
    isFalse($(this));
    $(this).text(true / "Britenet");
});

$('.dz6').click(function () {
    isTrue($(this));
    $(this).text(false / true);
});

$('.dz7').click(function () {
    isTrue($(this));
    $(this).text(true / false);
});

$('.dz8').click(function () {
    isTrue($(this));
    $(this).text(-3 / true);
});

// operator mnozenia
$('.mn1').click(function () {
    isTrue($(this));
    $(this).text(6 * "2");
});

$('.mn2').click(function () {
    isTrue($(this));
    $(this).text(6 * false);
});

$('.mn3').click(function () {
    isTrue($(this));
    $(this).text(6 * true);
});

$('.mn4').click(function () {
    isFalse($(this));
    $(this).text("Britenet" * 6);
});

$('.mn5').click(function () {
    isTrue($(this));
    $(this).text(true * false);
});

$('.mn6').click(function () {
    isFalse($(this));
    $(this).text(true * "true");
});

$('.mn7').click(function () {
    isTrue($(this));
    $(this).text(7 * "-5");
});

$('.mn8').click(function () {
    isTrue($(this));
    $(this).text(-3 * true);
});

// operator modulo
$('.mo1').click(function () {
    isTrue($(this));
    $(this).text(6 % "2");
});

$('.mo2').click(function () {
    isFalse($(this));
    $(this).text(6 % false);
});

$('.mo3').click(function () {
    isTrue($(this));
    $(this).text(6 % true);
});

$('.mo4').click(function () {
    isFalse($(this));
    $(this).text("Britenet" % 6);
});

$('.mo5').click(function () {
    isFalse($(this));
    $(this).text(true % false);
});

$('.mo6').click(function () {
    isFalse($(this));
    $(this).text(true % "true");
});

$('.mo7').click(function () {
    isTrue($(this));
    $(this).text(7 % "5");
});

$('.mo8').click(function () {
    isTrue($(this));
    $(this).text(-3 % true);
});

// operator potegowania
$('.po1').click(function () {
    isTrue($(this));
    $(this).text(6 ** "2");
});

$('.po2').click(function () {
    isFalse($(this));
    $(this).text(6 ** false);
});

$('.po3').click(function () {
    isTrue($(this));
    $(this).text(6 ** true);
});

$('.po4').click(function () {
    isFalse($(this));
    $(this).text("Britenet" ** 6);
});

$('.po5').click(function () {
    isTrue($(this));
    $(this).text(true ** false);
});

$('.po6').click(function () {
    isFalse($(this));
    $(this).text(true ** "true");
});

$('.po7').click(function () {
    isTrue($(this));
    $(this).text(7 ** "5");
});

$('.po8').click(function () {
    isTrue($(this));
    $(this).text(3 ** true);
});

// operatory mniejszy wiekszy
$('.wimn1').click(function () {
    isFalse($(this));
    $(this).text(6 < "2");
});

$('.wimn2').click(function () {
    isTrue($(this));
    $(this).text(6 > false);
});

$('.wimn3').click(function () {
    isFalse($(this));
    $(this).text(6 < true);
});

$('.wimn4').click(function () {
    isFalse($(this));
    $(this).text("Britenet" < 6);
});

$('.wimn5').click(function () {
    isTrue($(this));
    $(this).text(true > false);
});

$('.wimn6').click(function () {
    isFalse($(this));
    $(this).text(true > "true");
});

$('.wimn7').click(function () {
    isTrue($(this));
    $(this).text(7 < "8");
});

$('.wimn8').click(function () {
    isFalse($(this));
    $(this).text(3 < true);
});

// operatory jednoargumentowe
$('.jed1').click(function () {
    isTrue($(this));
    $(this).text(+"2");
});

$('.jed2').click(function () {
    isTrue($(this));
    $(this).text(+"-3");
});

$('.jed3').click(function () {
    isTrue($(this));
    $(this).text(+true);
});

$('.jed4').click(function () {
    isFalse($(this));
    $(this).text(+"Britenet");
});

$('.jed5').click(function () {
    isTrue($(this));
    $(this).text(-"2");
});

$('.jed6').click(function () {
    isTrue($(this));
    $(this).text(-"-3");
});

$('.jed7').click(function () {
    isTrue($(this));
    $(this).text(`-${-false}`);
});

$('.jed8').click(function () {
    isTrue($(this));
    $(this).text(`-${-true}`);
});

// typy proste i referencyjne a +
$('.prref1').click(function () {
    isTrue($(this));
    $(this).text(`"${[ 3 ] + "4"}"`);
});

$('.prref2').click(function () {
    isTrue($(this));
    $(this).text(`"${[ 1, 2, 3 ] + 4}"`);
});

$('.prref3').click(function () {
    isTrue($(this));
    $(this).text(`"${{} + "4"}"`);
});

$('.prref4').click(function () {
    isTrue($(this));
    $(this).text(`"${[ 4 ] + 4}"`);
});

$('.prref5').click(function () {
    isTrue($(this));
    $(this).text(`"${[] + "Britenet"}"`);
});

$('.prref6').click(function () {
    isTrue($(this));
    $(this).text(`"${{} + true}"`);
});

$('.prref7').click(function () {
    isTrue($(this));
    $(this).text(`"${[ 2 ] + true}"`);
});

$('.prref8').click(function () {
    isTrue($(this));
    $(this).text(`"${[ 1, 2, 3 ] + false}"`);
});

$('.prref9').click(function () {
    isTrue($(this));
    $(this).text(`"${[ true ] + false}"`);
});

$('.prref10').click(function () {
    isTrue($(this));
    $(this).text(`"${[ -1 ] + true}"`);
});

$('.z1').click(function () {
    isTrue($(this));
    $(this).text(+0 === -0);
});

$('.z2').click(function () {
    isTrue($(this));
    $(this).text(-0 === -0);
});

$('.z3').click(function () {
    isTrue($(this));
    $(this).text(+0 === +0);
});

$('.z4').click(function () {
    isFalse($(this));
    $(this).text(Object.is(+0, -0));
});

$('.z5').click(function () {
    isTrue($(this));
    $(this).text(Object.is(-0, -0));
});

$('.z6').click(function () {
    isTrue($(this));
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
        isTrue($(this));
    } else {
        isFalse($(this));
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