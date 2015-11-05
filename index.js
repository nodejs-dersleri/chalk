
'use strict';

/**
 * Bağımlılıkları tanımlıyoruz
 */
var chalk = require('chalk');
var renk = require('./module.js');


console.log(
  renk('Bu bizim module.js\'ten dönen renklendirilmiş veri :)','bgBlue') + '\n'  +
  renk('Aşağıdakiler ise chalk\'tan alınan çıktılar','green')
)

/**
 * Aşağıda Niteleyiciler, Renkler ve Arkaplan renklerini bulabilirsiniz
 * Bir kaç örnekle başlayalım.
 */
console.log(
  chalk.blue.bold('1. Nodejs için')
)

/**
 * Inverse: atanan rengi tersine çevirir.
 */
console.log(
  chalk.blue('2. Türkçe') + ' Kaynak' + chalk.inverse.red('!')
)

/**
 * birdern fazla niteleyici ve rengi ard arda kullanabilirsiniz
 */
console.log(
  chalk.blue.magenta.dim.bold('3. Notlar')
)

console.log(
  chalk.black('5. Örnek', chalk.underline.bgGreen(' uygulamalar') + '!')
)

console.log(
  chalk.green(
      'Nodejs Dersleri ' +
      chalk.blue.underline.bold('nodejs-dersleri.github.io') +
      ' ziyaret edin'
  )
);
