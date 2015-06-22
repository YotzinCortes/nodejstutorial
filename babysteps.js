var resultado = 0;

for (var i = 2; i < process.argv.length; i++) {
	resultado = resultado + Number(process.argv[i])
}

console.log(resultado)