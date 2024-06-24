# App

GymPass style app.

## RFs (Requisitos funcionais) - são as funcionalidades da aplicação, o que é possível o user fazer no app

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possivel obter o perfil de um user logado;
- [x] Deve ser possivel obter o número de check-ins realizados pelo user logadod;
- [x] Deve ser possivel o user obter seu histórico de check-ins;
- [x] Deve ser possivel o user buscar academias próximas até 10km;
- [x] Deve ser possível o user buscar academias pelo nome;
- [x] Deve ser possível o user realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um user;
- [x] Deve ser possível cadastrar uma academia

## RNs (Regras de negócio) - os caminhos que cada requisito pode tomar. Ex: user só pode fazer checkin se tiver em um raio de 10km da academia x

- [x] O user não pode se cadastrar com email duplicado;
- [x] O user não pode fazer 2 check-in no mesmo dia;
- [x] O user não pode fazer checkin se não estiver em um raio de 100m da academia;
- [ ] O check-in só pode ser validado após 20 min de ser criado;
- [ ] O check-in só pode ser validado por admins;
- [ ] A academia só pode ser cadastrada por admins;

## RNFs (Requisitos não-funcionais) - Requisitos técnicos. Ex: qual db, qual framerok a ser usado, qual estratégia o que melhor se adequa.

- [x] A senha do user precisa estar criptografada;
- [x] O dados da aplicação precisam estar persistidos em um banco de dados;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por page;
- [ ] O user deve ser identificado por um JWT (JSON Web Token);