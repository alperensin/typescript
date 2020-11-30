// boolean (true / false)

let isOpen: boolean;
isOpen = false;

// string ( "foo",'foo', `foo`)

let message: string;
message = "foo";
message = 'foo';
message = `foo ${isOpen}`;

// number ( int, float, hex, binary )

let total: number;
total = 30;
total = 30.5;
total = 0xFFFFFF;

// array ( type[] )

let itens: number[]
let mercado: string[]
itens = [1, 2, 3, 0xFFFFFF];
mercado = ['1', '2', '3', '0xFFFFFF'];

let values: Array<number>;
values = [1, 2, 3, 4, 1000];

// tuple 

let title: [number, string];
title = [1, 'foo'];

// enum

enum Colors {
  white = '#ffffff',
  black = '#000000',
  green = '#00FF00',
  blue = '#0000FF',
  red = '#FF0000'
}

// any ( qualquer coisa ) Não é legal!

let coisa: any;
coisa = 1;
coisa = 'teste';
coisa = true;
coisa = [1, 'Teste', true];

// void ( vazio )

function logger (): void {
  console.log('foo');
  
}

// null | undefined

type Bla = string | undefined;

// never

function error (): never {
  throw new Error("error");
}

// object ( Qualquer coisa que não seja string, array, boolean ou número )

let cart: object;
cart = {
  key: 'fi'
}

// Type Inference

let label = 'mensagem definida';
label = 'string nova';

window.addEventListener('click', (e) => {
  console.log(e.target);
});