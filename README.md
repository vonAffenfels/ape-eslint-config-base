


# Setup
### Install

```
yarn add eslint@7 eslint-config-ape
```

### Config

.eslintrc.json
```
{
    "ignorePatterns": [
        "**/node_modules/**/*.js"
    ],
    "extends": [
        "eslint-config-ape"
    ],
    "settings": {
        "next": {
            "rootDir": "/for/monorepos"
        },
        "tailwindcss": {
            "config": "/for/monorepos"
        }
    }
}
```

### Run
Alle js Files, behebe alle fehler und zeige keine warnings an
```
    yarn eslint **/*.js --fix --quiet
```

Alle js Files, zeige alle fehler und warnings an, keine automatischen fixes
```
    yarn eslint **/*.js
```

# Commit hook setup

Um automatisch alle Dateien die comitted werden zu prüfen:

```
yarn add husky lint-staged
```

In package.json
```
{
    "scripts": {
        "postinstall": "husky install && husky set .husky/pre-commit \"yarn lint-staged\"",
    },
    "lint-staged": {
        "*.js": "eslint --config .eslintrc.json --fix --quiet",
        "*.jsx": "eslint --config .eslintrc.json --fix --quiet",
        "*.json": "eslint --config .eslintrc.json --fix --quiet"
    }
}
```