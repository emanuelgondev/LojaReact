Alunos: 
Emanuel Gonçalves Ferreira - 6924106574
Rafael Vieira Gogge - 6922203723 

# MedQuest UI

Interface web em React inspirada em um aplicativo de acompanhamento de saude, consultas e medicamentos.

O projeto reproduz visualmente as telas enviadas como referencia:

- Dashboard inicial
- Lista de consultas
- Controle de medicamentos
- Perfil do usuario

## Tecnologias

- React
- Vite
- Lucide React
- CSS puro

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://127.0.0.1:5173
```

## Build

Para gerar a versao de producao:

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## Estrutura

```text
src/
  app/
    App.jsx

  components/
    common/
    navigation/

  data/
    mockData.js

  screens/
    appointments/
    home/
    medicines/
    profile/

  main.jsx
  styles.css
```

## Organizacao

- `src/app/App.jsx`: controla a tela ativa e monta a estrutura principal do app.
- `src/data/mockData.js`: centraliza os dados mocados usados na interface.
- `src/components/common`: componentes reutilizaveis compartilhados.
- `src/components/navigation`: barra superior e navegacao inferior.
- `src/screens`: telas separadas por funcionalidade.

Cada tela possui seus proprios componentes internos na pasta `components`, mantendo os arquivos menores e mais faceis de evoluir.

## Dados mocados

Os dados visuais do app estao em:

```text
src/data/mockData.js
```

Ali ficam:

- usuario
- consultas
- medicamentos
- resumo do dia
- atalhos do dashboard
- itens do menu de perfil

Essa organizacao facilita substituir os dados mocados por uma API futuramente.

## Observacoes

Este projeto ainda e uma interface visual. Os botoes, menus e a navegacao inferior estao preparados para demonstracao de tela, mas ainda nao possuem integracao com backend.
