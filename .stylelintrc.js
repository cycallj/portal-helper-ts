module.exports = {
  extends: ['stylelint-config-standard'],
  // 使用的插件
  plugins: ['stylelint-scss'],
  // 需要忽略掉的一些检测文件类型
  ignoreFiles: [
    '/node_modules/**/*.scss',
    '/dist',
    '/**/*.md',
    '/**/*.ts',
    '/**/*.tsx',
    '/**/*.js',
  ],
  rules: {
    indentation: 2,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'no-missing-end-of-source-newline': null,
  },
}
