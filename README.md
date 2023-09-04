# Curso Full Cycle

## Módulo Docker

Aqui estão os fontes para os exercícios do primeiro módulo do curso Full Cycle - Daniel Lourenço Curado

Em cada sessão deixarei um pouco da experiência que tive e assim podendo coletar feedbacks de como poderia fazer diferente

### 2º Exercício

As maiores dificuldades e duvidas neste exercicio foram:

1. Conectar ao banco para execução dos SLQs pois a versão do módulo /mysql atualmente parece conflitar com a versão do próprio MySql, não permitindo a conexão do root como no exemplo da aula.
   Então eu tive que migrar para um módulo mysql2 usando promise para operacionalizar as atomicidades no banco.
2. Compor o projeto todo para preparam o ambiente somente com a subida do composer. Se eu não posso subir os módulos e nem um banco inteiro (boas práticas de versionamento e compartilhamento de código), como fazer:
   - Execução do script da tabela people;
   - Baixar todos os módulos necessários para dentro dos containers. Tive dificuldades em baixar o próprio mysql2 via docker composer 

Obrigado
