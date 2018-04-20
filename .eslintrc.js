module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "semi": 0,
        'react/jsx-filename-extension': 0,
        'jsx-a11y/anchor-is-valid': 0,
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
    }
}
