# IDO
Project Report
Group 9: Roberto Batista Teixeira NUSP:4896539


Contexto mais geral:

Trata-se de um Laboratório Público do Estado de São Paulo que possui duas unidades fabris (uma na Grande São Paulo e outra no Interior), sendo que para a Unidade do Interior foi estabelecida uma Parceria Público Privada para a gestão operação e manutenção da unidade. Esta Parceria está sujeita a fiscalizações mensais por parte do Poder Concedente, sendo que estas fiscalizações geram um índice numérico que interfere na remuneração do Parceiro Privado (Índice de Desempenho Operacional – IDO).


Contexto específico ao projeto:

Trata-se de um grupo de fiscais (01 Coordenador e 06 Fiscais), que são alocados em uma pequena sala na área administrativa da Unidade Fabril do Interior. Cada fiscal possui um desktop com acesso à rede da Unidade Matriz, sendo que esta conexão é estabelecida via link Intragov.
O grupo de fiscalização é composto por uma equipe multidisciplinar com a tarefa de fiscalizar questões de diversas áreas do conhecimento como: Farmácia, Logística, Engenharia, Contabilidade, Financeiro, entre outros.
O ambiente onde são realizadas as tarefas pelos usuários é o ambiente de uma Indústria Farmacêutica, portanto é um ambiente muito diversificado, com uma ampla diversidade de ambientes: salas limpas, laboratórios, área administrativa, área produtiva, setor de tratamento de água, ETE, central de GLP, caldeiras, oficinas mecânicas, subestações elétricas, pisos técnicos, sala de servidores de informática, sala de telefonia, ambulatório, entre diversas outras.
O processo de fiscalização atual é feito de forma manual, e gera diversos documentos impressos. A ideia básica do projeto consiste em automatizar o processo de fiscalização e eliminar documentos impressos no processo de fiscalização. O nome escolhido para o projeto é "IDO SEM PAPEL".


1) Requirements:
 
O Sistema deve ter dois tipos de usuários: Fiscais e Coordenador
O Coordenador é responsável por finalizar o processo de fiscalização gerando o RAD (Relatório de Avaliação de Desempenho).
Customers are users who access the system to buy products/services.
The admin record includes, at least: name, id, phone, email.
Each customer's record includes, at least: name, id, address, phone, email
Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
Your store may sell products, services or both (you decide)
Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   
The system must provide accessibility requirements and provide good usability. The system must be responsive.


2) Project Description: 

Análise de Tarefas: ANTES

As tarefas são atualmente realizadas basicamente da seguinte forma:
•	O Fiscal imprime planilha dos itens a serem verificados (em torno de 400 itens);
•	Existem itens que são verificados em campo e itens que exigem a análise de documentos;
•	Para os itens de campo é necessário solicitar a autorização e acompanhamento para acesso ao local
•	Para os itens de verificação de documentos é necessário solicitar os documentos ao responsável;
•	Para cada item verificado o fiscal preenche de forma manual a planilha impressa com:        C-CONFORME, NC-NÃO CONFORME, NA-NÃO APLICA.
•	Após a verificação de todos itens por todos os fiscais, esses dados são compilados em um documento impresso (REQUISITOS) de forma manual, onde o fiscal insere o status do item (C, NC ou NA), data e assinatura.
•	Com o documento preenchido, apenas um dos fiscais transfere todos os dados para uma planilha do Excel (esta planilha foi criada pelos próprios fiscais) que calcula o IDO de acordo com a métrica estabelecida no contrato.
•	Com a geração do IDO é gerado um documento oficial (RELATÓRIO DE AVALIAÇÃO DE DESEMPENHO - RAD) com todos os dados da Fiscalização realizada, que recebe vistos de todos os fiscais em todas as folhas, com exceção da última folha que recebe o carimbo e assinatura dos fiscais.

![image](https://user-images.githubusercontent.com/92594329/137530224-d3bf2000-3a94-4638-94d6-3984120035bf.png)

Análise de Tarefas: DEPOIS

![image](https://user-images.githubusercontent.com/92594329/137531261-8005c660-1796-4af2-84f7-07e5da09c354.png)


3) Comments About the Code: 
Any comment you may want to add to help understand your code. This is good programming practice.

4) Test Plan:
Text describing the tests that will be performed. If an automatic test tool/framework is used (ex: Selenium, jUnit, Spock), the code for the tests can be used.

5) Test Results: 
Text describing the test results. If an automatic test tool/framework is used, its output can be used.

6) Build Procedures: 
A step-by-step guide to run your code. You should start telling how to install whatever software you need, then how to download/build your program, and finally how to set up the environment to run it. Imagine that someone installing will just follow these commands (nothing more).

7) Problems: 
List any major problems you had.

8) Comments: 
Any comments you wish to add.



