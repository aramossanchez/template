# Autoformateo al guardar archivos:

- Instalar extension prettier en visual studio code

- settings.json de visual studio code:

  ´´´
  {
  "workbench.editor.empty.hint": "hidden",
  "workbench.colorTheme": "Atomify",
  "workbench.iconTheme": "a-file-icon-vscode",
  "editor.fontLigatures": false,
  "editor.tabSize": 2,
  "cSpell.language": "en,es-ES",
  "cSpell.userWords": ["Buildable"],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
  },
  "files.eol": "\n"
  }
  ´´´
