$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#btn-resetar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        const resposta = $('#resposta');
        const campoA = parseInt($('#campo-A').val());
        const campoB = parseInt($('#campo-B').val());
        const soma = campoA + campoB;
        const media = soma / 2


        if (isNaN(campoA) || isNaN(campoB)) {
            resposta.empty();
            return;
        }

        resposta.html(`O resultado da sua soma é <strong>${soma}</strong>, e a média <strong>${media}</strong>`);
    });


    $('form').validate({
        rules: {
            campoA: {
                required: true
            },
            campoB: {
                required: true
            }
        },
        messages: {
            campoA: "Por favor insira um número",
            campoB: "Por favor insira um número"
        },
        errorClass: 'error-message'
    });
});