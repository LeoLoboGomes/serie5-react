Sistema Operacional utilizado: Ubuntu 20.04

Para executar a aplicação utilizar o seguinte comando:

![Imagem do comando de inicio](images/start_server_react.png)

Durante a execução em **http://localhost:3000/** aparecerá a seguinte tela inicial:

![Imagem da tela de inicio](images/tela_inicial.png)

Na imagem abaixo, foi testado o uso de uma idade menor que 18 anos:

![Imagem de envio de form errado](images/form_error.png)

Após o envio do formulário, o seguinte alerta aparecerá, apontando o fato que a idade é menor que 18:

![Imagem de alerta de erro](images/resp_error.png)

Na imagem abaixo, foi testado o uso de um valor não numerico no campo de idade:

![Imagem de envio de form errado 2](images/form_error2.png)

Após o envio do formulário, o seguinte alerta aparecerá, apontando que o valor de idade colocado não é numérico:

![Imagem de alerta de erro 2](images/resp_error2.png)

As imagens a seguir mostram dois formulários enviados com sucesso:

![Imagem de envio de form com sucesso](images/right_form.png)

![Imagem de envio de form com sucesso](images/right_form2.png)

Dessa maneira, essas informações foram armazenadas em um file .json acessado pelo back-end, agora, clicando no botão **Pegar valores** a lista com os dados armazenadas será apresentada, como na figura abaixo:

![Imagem de teste da lista](images/com_lista.png)
