module.exports = {
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {"jsx": true}
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@next/next/recommended"
    ],
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "plugins": ["tailwindcss", "react", "json", "newline-destructuring"],
    "rules": {
        "semi": [1, "always"],
        "semi-style": [1, "last"],
        "tailwindcss/classnames-order": 1,
        "json/*": ["error", {"allowComments": true}],
        "no-trailing-spaces": 1,
        "no-multiple-empty-lines": 1,
        "no-multi-spaces": 1,
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "MemberExpression": 1,
                "ArrayExpression": 1,
                "ObjectExpression": 1,
                "ImportDeclaration": 1,
                "flatTernaryExpressions": false,
                "ignoreComments": false,
                "FunctionDeclaration": {
                    "body": 1,
                    "parameters": 2
                }
            }
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "space-in-parens": ["error", "never"],
        "one-var-declaration-per-line": ["error", "always"],
        "rest-spread-spacing": ["error", "never"],
        "padded-blocks": [
            1,
            {
                "blocks": "never",
                "classes": "always",
                "switches": "never"
            }
        ],
        "space-before-function-paren": [
            1,
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "comma-spacing": [
            1,
            {
                "before": false,
                "after": true
            }
        ],
        "@next/next/no-document-import-in-page": [0],
        "@next/next/no-html-link-for-pages": [0],
        "space-before-blocks": "error",
        "computed-property-spacing": ["error", "never"],
        "template-curly-spacing": ["error", "never"],
        "arrow-spacing": "error",
        "keyword-spacing": "error",
        "object-curly-spacing": [2, "never"],
        "react/self-closing-comp": "error",
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": [
            2,
            {
                "maximum": 1,
                "when": "multiline"
            }
        ],
        "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
        "react/react-in-jsx-scope": [0],
        "react/prop-types": [0],
        "no-unused-vars": [1],
        "object-curly-newline": [
            1,
            {
                "multiline": true,
                "minProperties": 2
            }
        ],
        "brace-style": [1, "1tbs"],
        "object-property-newline": [
            1,
            {
                "allowAllPropertiesOnSameLine": false,
                "allowMultiplePropertiesPerLine": false
            }
        ],
        "function-paren-newline": [1, {"minItems": 4}],
        "function-call-argument-newline": [1, "consistent"],
        "array-element-newline": [1, "consistent"],
        "array-bracket-newline": [1, "consistent"],
        "react/no-unescaped-entities": [0],
        "no-mixed-spaces-and-tabs": 1,
        "space-infix-ops": "error",
        "spaced-comment": 1,
        "max-len": [
            1, {
                "code": 160,
                tabWidth: 4,
                comments: 300,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        "newline-destructuring/newline": [
            1,
            {
                "items": 1,
                "itemsWithRest": 2
            }
        ]
    },
    "settings": {
        "react": {"version": "detect"},
        "tailwindcss": {
            "callees": ["classnames", "classNames", "clsx", "ctl"],
            "config": "tailwind.config.js",
            "cssFiles": ["**/*.css", "!**/node_modules"],
            "groupByResponsive": false,
            "prependCustom": true,
            "removeDuplicates": true,
            "whitelist": []
        }
    }
};