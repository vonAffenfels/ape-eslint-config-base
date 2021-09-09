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
        "semi": ["error", "always"],
        "semi-style": ["error", "last"],
        "tailwindcss/classnames-order": "error",
        "json/*": ["error", {"allowComments": true}],
        "no-trailing-spaces": ["error"],
        "no-multiple-empty-lines": ["error"],
        "no-multi-spaces": ["error"],
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
            "error",
            {
                "blocks": "never",
                "classes": "always",
                "switches": "never"
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "comma-spacing": [
            "error",
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
            "error",
            {
                "multiline": true,
                "minProperties": 2
            }
        ],
        "brace-style": ["error", "1tbs"],
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": false,
                "allowMultiplePropertiesPerLine": false
            }
        ],
        "function-paren-newline": ["error", {"minItems": 4}],
        "function-call-argument-newline": ["error", "consistent"],
        "array-element-newline": ["error", "consistent"],
        "array-bracket-newline": ["error", "consistent"],
        "react/no-unescaped-entities": [0],
        "no-mixed-spaces-and-tabs": "error",
        "space-infix-ops": "error",
        "spaced-comment": "error",
        "max-len": [1, {"code": 80}],
        "newline-destructuring/newline": [
            "error",
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