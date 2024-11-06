// tslint:disable
const propertiesOrder = [
    'composes',
    'all',
    'position',
    'z-index',
    'top',
    'right',
    'left',
    'bottom',
    'margin',
    'margin-x',
    'margin-y',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'padding',
    'padding-x',
    'padding-y',
    'padding-top',
    'padding-right',
    'padding-left',
    'padding-bottom',
    'display',
    'visibility',
    'float',
    'clear',
    'overflow',
    'overflow-x',
    'overflow-y',
    'clip',
    'zoom',
    'flex-direction',
    'flex-order',
    'flex-pack',
    'flex-align',
    'box-sizing',
    'width',
    'min-width',
    'max-width',
    'height',
    'min-height',
    'max-height',
    'table-layout',
    'empty-cells',
    'caption-side',
    'border-spacing',
    'border-collapse',
    'list-style',
    'list-style-position',
    'list-style-type',
    'list-style-image',
    'font',
    'font-family',
    'font-size',
    'font-weight',
    'font-style',
    'font-variant',
    'font-size-adjust',
    'font-stretch',
    'font-effect',
    'font-emphasize',
    'font-emphasize-position',
    'font-emphasize-style',
    'font-smooth',
    'line-height',
    'text-align',
    'text-align-last',
    'vertical-align',
    'white-space',
    'text-decoration',
    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-style',
    'text-emphasis-position',
    'text-indent',
    'text-justify',
    'letter-spacing',
    'word-spacing',
    'text-outline',
    'text-transform',
    'text-wrap',
    'text-overflow',
    'text-overflow-ellipsis',
    'text-overflow-mode',
    'text-shadow',
    'word-wrap',
    'word-break',
    'tab-size',
    'hyphens',
    'cursor',
    'user-select',
    'pointer-events',
    'content',
    'quotes',
    'counter-reset',
    'counter-increment',
    'resize',
    'nav-index',
    'nav-up',
    'nav-right',
    'nav-down',
    'nav-left',
    'color',
    'background',
    'background-color',
    'background-image',
    'background-repeat',
    'background-attachment',
    'background-position',
    'background-position-x',
    'background-position-y',
    'background-clip',
    'background-origin',
    'background-size',
    'border',
    'border-width',
    'border-style',
    'border-color',
    'border-top',
    'border-top-width',
    'border-top-style',
    'border-top-color',
    'border-left',
    'border-left-width',
    'border-left-style',
    'border-left-color',
    'border-right',
    'border-right-width',
    'border-right-style',
    'border-right-color',
    'border-bottom',
    'border-bottom-width',
    'border-bottom-style',
    'border-bottom-color',
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
    'border-image',
    'border-image-source',
    'border-image-slice',
    'border-image-width',
    'border-image-outset',
    'border-image-repeat',
    'outline',
    'outline-width',
    'outline-style',
    'outline-color',
    'outline-offset',
    'opacity',
    'box-shadow',
    'box-decoration-break',
    'transition',
    'transition-duration',
    'transition-delay',
    'transition-timing-function',
    'transition-property',
    'transform',
    'transform-origin',
    'animation',
    'animation-name',
    'animation-duration',
    'animation-play-state',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'backface-visibility',
    'will-change',
];

const browsers = [
    'Android >= 4',
    'ChromeAndroid >= 35',
    'ExplorerMobile >= 11',
    'Firefox ESR',
    'iOS >= 7',
    'OperaMobile >= 37',
    'Samsung >=3',
    'last 2 versions',
].join(', ');

module.exports = {
    rules: {
        // Color
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'always-where-possible',
        // 'color-no-hex': true,
        'color-no-invalid-hex': true,
        // Font family
        'font-family-name-quotes': 'always-where-recommended',
        'font-family-no-duplicate-names': true,
        // Font weight
        'font-weight-notation': 'named-where-possible',
        // Function
        // 'function-blacklist': array|string,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        // 'function-comma-newline-before': 'always',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        // 'function-url-no-scheme-relative': true,
        'function-url-quotes': ['always', { except: ['empty'] }],
        // 'function-url-scheme-whitelist': 'array|string',
        // 'function-whitelist': array|string,
        'function-whitespace-after': 'always',
        // Number
        'number-leading-zero': 'always',
        'number-max-precision': 2,
        'number-no-trailing-zeros': true,
        // String
        'string-no-newline': true,
        'string-quotes': 'single',
        // Length
        'length-zero-no-unit': true,
        // Time
        // 'time-no-imperceptible': true,
        // Unit
        'unit-case': 'lower',
        'unit-no-unknown': true,
        // 'unit-blacklist': [],
        // 'unit-whitelist': [],
        // Value
        'value-keyword-case': 'lower',
        'value-no-vendor-prefix': true,
        // Value list
        'value-list-comma-newline-after': 'always-multi-line',
        // 'value-list-comma-newline-before': 'always',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        // Custom property
        'custom-property-empty-line-before': ['always', {
                except: [
                    'after-custom-property',
                    'first-nested',
                ],
                ignore: [
                    'after-comment',
                    'inside-single-line-block',
                ],
            }],
        // 'custom-property-pattern': regex|string,
        // Shorthand property
        'shorthand-property-no-redundant-values': true,
        // Property
        // 'property-blacklist': array|string,
        'property-case': 'lower',
        'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
        'property-no-vendor-prefix': true,
        // 'property-whitelist': array|string,
        // Keyframe declaration
        'keyframe-declaration-no-important': true,
        // Declaration
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': ['always', {
                except: [
                    'after-declaration',
                    'first-nested',
                ],
                ignore: [
                    'after-comment',
                    'inside-single-line-block',
                ],
            }],
        'declaration-no-important': true,
        // 'declaration-property-unit-blacklist': {},
        // 'declaration-property-unit-whitelist': {},
        // 'declaration-property-value-blacklist': {},
        // 'declaration-property-value-whitelist': {},
        // Declaration block
        'declaration-block-no-duplicate-properties': [true, {
                ignore: ['consecutive-duplicates-with-different-values'],
            }],
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'order/properties-order': propertiesOrder,
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        // 'declaration-block-semicolon-newline-before': 'always',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        // Block
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        // 'block-closing-brace-space-after': 'always',
        'block-closing-brace-space-before': 'always-single-line',
        'block-no-empty': true,
        // 'block-no-single-line': true,
        'block-opening-brace-newline-after': 'always-multi-line',
        // 'block-opening-brace-newline-before': 'always',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        // Selector
        'selector-attribute-brackets-space-inside': 'never',
        // 'selector-attribute-operator-blacklist': 'array|string,
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        // 'selector-attribute-operator-whitelist': array|string,
        // 'selector-attribute-quotes': 'always|never',
        'selector-class-pattern': ['^[_a-z0-9]+(?:-[_a-z0-9]+)*(?:--[_a-z0-9]+(?:-[_a-z0-9]+)?)*$', { resolveNestedSelectors: true }],
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        // 'selector-id-pattern': regex|string,
        'selector-max-compound-selectors': 3,
        'selector-max-specificity': '0,4,0',
        // 'selector-nested-pattern': regex|string,
        // 'selector-no-attribute': true,
        // 'selector-no-combinator': true,
        // 'selector-no-empty': true,
        // 'selector-no-id': true,
        'selector-no-qualifying-type': null,
        'selector-no-vendor-prefix': true,
        // 'selector-pseudo-class-blacklist': array|string|regex,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': [
            true,
            {
              "ignorePseudoClasses": ["global"]
            }
          ],
        'selector-pseudo-class-parentheses-space-inside': 'never',
        // 'selector-pseudo-class-whitelist': array|string|regex,
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'selector-max-empty-lines': 0,
        // Selector list
        'selector-list-comma-newline-after': 'always',
        // 'selector-list-comma-newline-before': 'string',
        // 'selector-list-comma-space-after': string,
        'selector-list-comma-space-before': 'never',
        // Root rule
        // 'root-no-standard-properties': true,
        // Media feature
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        // 'media-feature-name-blacklist': array|string|regex,
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': true,
        'media-feature-name-no-vendor-prefix': true,
        // 'media-feature-name-whitelist' ,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        // Custom media
        // 'custom-media-pattern': regex|string,
        // Media query list
        'media-query-list-comma-newline-after': 'always-multi-line',
        // 'media-query-list-comma-newline-before': 'always',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        // At-rule
        // 'at-rule-blacklist', ,
        // 'at-rule-blacklist' ,
        'at-rule-name-case': 'lower',
        // 'at-rule-name-newline-after': ,
        'at-rule-name-space-after': 'always-single-line',
        // 'at-rule-no-unknown': ,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-empty-line-before': ['always', {
                except: [
                    'blockless-after-same-name-blockless',
                    'first-nested',
                ],
                ignore: ['after-comment'],
            }],
        // Stylelint-disable comment
        // '': string,
        // Comment
        'comment-empty-line-before': null,
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': ['TODO', 'FIXME'],
        // General / Sheet
        'indentation': 2,
        'max-empty-lines': 1,
        'max-line-length': 120,
        'max-nesting-depth': 3,
        // 'no-browser-hacks': true,
        // 'no-descending-specificity': true,
        // 'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        // 'no-indistinguishable-colors': true,
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
    },
    'plugins': [
        'stylelint-order'
    ]
};
