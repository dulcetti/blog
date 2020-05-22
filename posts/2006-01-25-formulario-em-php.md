---
category: 'Back-End'
date: '2006-01-25'
description: ''
featuredImage: '/assets/images/bgs/backend.jpg'
title: 'Formulario em PHP'
---

Estava eu tranquilo, quando Leandro Cunha, camaradassa meu me perguntou sobre como fazer um formulário via PHP. Como estava no [meebo](http://www.meebo.com) e odeio esses IM via browser, achei melhor postar algo no Blog, com isso, posso ajudar possíveis pessoas que tenham dúvidas sobre o assunto.

É muito simples sua implementação, pra quem já conhece PHP legal, já mexe, isso é mole, mas pro pessoal que tah começando agora, tah no básico ainda, vale ler (eu acho :P)

## Primeira Parte - HTML

Primeiramente, lógico, vou postar um código html de um formulário (lembrando que não coloquei nenhum estilo pro formulário, isso fica com vocês ok? ;) ) ver exemplo online:

```html
<form action="enviar_formulario.php" method="post">
  Nome:<br />
  <input type="text" name="nome" /> E-mail:<br />
  <input type="text" name="email" /> Mensagem:<br />
  <textarea name="mensagem" cols="32" rows="8"></textarea><br />
  <input type="submit" value="Enviar" />
  <form></form>
</form>
```

Como podemos ver, um simples formulário, muito feio, sem estilo nenhum. Caso queiram modificar, fiquem à vontade, coloquem fieldset, legend, labels, etc... Vou ver se em breve eu crio um tutorial de como criar um formulário estilizado e nos padrões ;)

Creio que não precise comentar sobre o código acima, todos que estiverem lendo devem conhecer html (pelo menos espero), mas darei uma comentada:

### `<form action="enviar\_formulario.php" method="post">`

Nesta linha, criei a tag form, essencial, e nela coloquei o atributo action que recebe o a página onde o formulário enviará as informações dispostas nos campos do formulário. A página utilizada foi a enviar_formulario.php, mas o nome fica a critério de vocês, contanto que mude também quando criarem-na ok? ;)

### `Nome:<br /> <input type="text" name="nome" />`

Um texto Nome:, indicando que o próximo campo é para colocar o nome, um pulo de linha, para o campo vir abaixo do texto e o input que cria o campo de texto chamado nome, que vai ser enviado pelo formulário e o arquivo php receberá como variável.

### `E-mail:<br /> <input type="text" name="email" />`

Idem ao item anterior, só mudando para E-mail.

### `Mensagem:<br /> <textarea name="mensagem" cols="32" rows="8"></textarea><br />`

Semelhante aos anteriores, mas ao invés de input, é um textarea, para receber mais informações, pois geralmente mensagens são maiores. E nele, têm 32 colunas de largura e 8 linhas de altura.

### `<input type="submit" value="Enviar" />`

Um input com o botão de envio do formulário. É através dele que o formulário será enviado para a página php setada no action da tag form.

Espero que tenham entendido essa parte, acho que deu pra dar uma explicadinha legalzinha sobre cada parte. Agora vamos cair dentro do arquivo php.

## Arquivo `enviar_formulario.php`

```php
<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
$msg = "<font face='Verdana' size='1'><b>Nome:</b> \t$nome</font><br>";
$msg .= "<font face='Verdana' size='1'><b>E-mail:</b> \t$email</font><br>";
$msg .= "<font face='Verdana' size='1'><b>Mensagem:</b> \t$mensagem</font>";
$mensagem = "$msg";
$remetente = "$email";
$destinatario = "bruno@brunodulcetti.com";
$assunto = "Tutorial de Formulário BrunoDulcetti.com";
$headers = "From: ".$remetente."\nContent-type: text/html";
# o 'text/html' é o tipo mime da mensagem
if (!mail($destinatario,$assunto,$mensagem,$headers)) {
  print "falha no envio da mensagem";
} else {
  echo "<script>window.location.href='obrigado.htm'</script>";
}
?>
```

Bom, vamos lá, agora explicarei as linhas desse arquivo:

### `<?php`

Linha de abertura de código php, sem isso, nada de php funcionando :D

### `$nome = $_POST['nome'];`

Essa linha, a variavel nome é criada e ela recebe o campo de texto nome, que foi enviado via método post pelo formulário, lembra? method="post no form, agora lembra não é? ;)

### `$email = $_POST['email'];`

Igual ao nome, mas mudando a variável para email e o `$_POST['']` recebe o campo email enviado pelo formulário.

### `$mensagem = $_POST['mensagem'];`

Igual aos anteriores, mas mudando a variável para mensagem e o `$_POST['']` recebe o campo mensagem enviado pelo formulário.

### `$msg = "<font face='Verdana' size='1'><b>Nome:</b> \t$nome</font><br>";`

Aqui é criada uma variável msg, onde ela recebe a variável nome, que declaramos e demos o valor à ela anteriormente. A grande sacada e diferença, foi que eu usei uma tag font com a fonte Verdana como fonte padrão e tamanho 1. Fiz somente para o formulário ser enviado com mais estilo, ficar um pouco mais bonito, senão fica aquela fonte padrão feia. Mas isso fica a critério de vocês. E coloquei um br no final, para pular de linha.

### `$msg .= "<font face='Verdana' size='1'><b>E-mail:</b> \t$email</font><br>";`

Idêntico ao anterior, mudando somente para variável email e a variável msg recebe o valor anterior mais esse, não sobrescrevendo o valor anterior.

### `$msg .= "<font face='Verdana' size='1'><b>Mensagem:</b> \t$mensagem</font>";`

Idêntico aos anteriores, mudando somente para variável mensagem e a variável msg recebe os valores anteriores mais esse, não sobrescrevendo o valores anteriores.

### `$mensagem = "$msg";`

Variável mensagem recebendo todo o conteúdo da variável msg.

### `$remetente = "$email";`

Variável remetente recebendo a variavel email, que contém o email preenchido no formulário, que aparecerá como o remetente no webmail.

### `\$destinatario = "bruno@brunodulcetti.com";`

Aqui temos uma variável destinatario, que é onde você colocará o email para onde o conteúdo será enviado.

### `\$assunto = "Tutorial de Formulário BrunoDulcetti.com";`

Variável assunto, que receberá um assunto especificado por você que aparecerá como título, assunto do email que chegará para você.

### `$headers = "From: ".$remetente."\nContent-type: text/html"; # o 'text/html' é o tipo mime da mensagem`

Variável headers que será enviado junto com o email, dizendo o mime da mensagem.

### `if(!mail($destinatario,$assunto,$mensagem,$headers)){`

Eu poderia pular essa parte, não colocar um if, mas coloquei, para caso dê algum problema no envio, apareça um aviso. Neste if, temos um mail, que é a variável do php de envio de emails feitos por ele. Em ordem, colocamos as variáveis destinatario que é seu email, assunto que é o título, assunto do email, mensagem que é o conteúdo do email enviado pelo formulário e o headers. Neste if ele diz resumidamente "Se (o email não foi enviado) fazer". O símbolo de ! significa negação no php e o { significa o início das funções dentro do if.

### `print "falha no envio da mensagem";`

Como disse acima, caso o email não seja enviado, apareçe esta mensagem de erro, avisando que houve uma falha.

### `} else {`

Aqui temos o fechamento do if, que é simbolizado pelo `}` e temos o else, que significa "então" e um símbolo de { indicando que haverá outra função ou funções.

### `echo "<script>window.location.href='obrigado.htm'</script>";`

Aqui nós temos a função que redireciona para uma nova página, de obrigado, que vocês podem modificá-la como quiserem, tanto nome, layout, etc. Havendo mudança no nome, modifiquem aqui também para que não haja erro 404.

### `}`

Fechamento do else, fechamento definitivo do laço if.

No geral, traduzindo, seria: "Se (o email não foi enviado) faça" "falha no envio" "senão (se o email foi enviado corretamente) faça" "redirecionamento e obrigado" "fim do if"

### `?>`

Aqui temos o fechamento do php.

Temos esse script funcionando na [seção contato do meu site](/contato).

Espero que tenham gostado e que tenha sido de fácil compreensão. Aos avançados, desculpem, mas preferi colocar algo básico agora, pro pessoal que tá começando... Em breve posto algo mais avançado ok?

Aquele abraço galera.
