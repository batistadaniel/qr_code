document.getElementById('qrcodeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    // gera o qr code
    generateQRCode();
});

function generateQRCode() {

    // obtem o link digitado pelo usuario
    var conteudo = document.getElementById('conteudo').value;

    // valida se o conteudo nao esta vazio
    if (conteudo) {
        
        // limpa o conteudo anterior
        document.getElementById('qrcode').innerHTML = '';

        QRCode.toDataURL(conteudo, function (error, url) {

            if (error) {
                console.error(error);
            } else {
                // mostra o qr code
                // document.getElementById('qrcode').innerHTML = '<img src="' + url + '" alt="QR Code">';
                // document.getElementById('conteudo').value = ''; // limpa o campo de entrada
                // sugestao da extencao

                // adiciona a imagem do qr code a pagina
                var img = document.createElement('img');
                img.src = url;
                document.getElementById('qrcode').appendChild(img);
            }
        });
    } else {
        alert("Por favor, insira um link para gerar o QR Code.");
    }
};