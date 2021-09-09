# Install

```
yarn add eslint@7 eslint-config-ape
```

# Usage General

.eslintrc.json
```
{
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

# Commit hook setup

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