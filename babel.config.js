const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                edge:"17",
                firefox:"60",
                chrome:"67",
                safari:"11.1",
            },
        },
    ],
];

const plugins = [
    [
        "@babel/plugin-proposal-json-strings",
        "@babel/plugin-proposal-unicode-property-regex",
        {
            "plugins": ["@babel/plugin-proposal-json-strings", "@babel/plugin-proposal-unicode-property-regex", "@babel/plugin-transform-runtime"]
        },
    ],

];


module.exports = {presets};