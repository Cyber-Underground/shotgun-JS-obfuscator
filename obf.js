const JavaScriptObfuscator = require('javascript-obfuscator');
data = "console.log('Data here');"
let obfuscationResult = JavaScriptObfuscator.obfuscate(data);
let Bullet = obfuscationResult.getObfuscatedCode();
console.log(Bullet);