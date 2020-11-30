"use strict";
// boolean (true / false)
var isOpen;
isOpen = false;
// string ( "foo",'foo', `foo`)
var message;
message = "foo";
message = 'foo';
message = "foo " + isOpen;
// number ( int, float, hex, binary )
var total;
total = 30;
total = 30.5;
total = 0xFFFFFF;
// array ( type[] )
var itens;
var mercado;
itens = [1, 2, 3, 0xFFFFFF];
mercado = ['1', '2', '3', '0xFFFFFF'];
var values;
values = [1, 2, 3, 4, 1000];
// tuple 
var title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#ffffff";
    Colors["black"] = "#000000";
    Colors["green"] = "#00FF00";
    Colors["blue"] = "#0000FF";
    Colors["red"] = "#FF0000";
})(Colors || (Colors = {}));
// any ( qualquer coisa ) Não é legal!
var coisa;
coisa = 1;
coisa = 'teste';
coisa = true;
coisa = [1, 'Teste', true];
// void ( vazio )
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error("error");
}
// object ( Qualquer coisa que não seja string, array, boolean ou número )
var cart;
cart = {
    key: 'fi'
};
// Type Inference
var label = 'mensagem definida';
label = 'string nova';
window.addEventListener('click', function (e) {
    console.log(e.target);
});
