import { languages } from './languages';

export type PrismLangRecord = {
  key: string;
  value: string[];
};

export const prismLangArr: PrismLangRecord[] = [
  { key: 'text', value: ['text'] },
  { key: 'bash', value: ['bash', 'shell'] },
  { key: 'basic', value: ['basic'] },
  { key: 'c', value: ['c'] },
  { key: 'cpp', value: ['cpp'] },
  { key: 'csharp', value: ['csharp', 'cs', 'dotnet'] },
  { key: 'css', value: ['css'] },
  { key: 'dart', value: ['dart'] },
  { key: 'diff', value: ['diff'] },
  { key: 'django', value: ['django'] },
  { key: 'dockerfile', value: ['dockerfile', 'docker'] },
  { key: 'erlang', value: ['erlang'] },
  { key: 'git', value: ['git'] },
  { key: 'go', value: ['go'] },
  { key: 'graphql', value: ['graphql'] },
  { key: 'groovy', value: ['groovy'] },
  { key: 'html', value: ['html', 'xml', 'svg', 'markup', 'mathml'] },
  { key: 'http', value: ['http'] },
  { key: 'java', value: ['java'] },
  { key: 'javascript', value: ['javascript', 'js'] },
  { key: 'jinja2', value: ['jinja2'] },
  { key: 'json', value: ['json'] },
  { key: 'jsx', value: ['jsx'] },
  { key: 'kotlin', value: ['kotlin'] },
  { key: 'less', value: ['less'] },
  { key: 'makefile', value: ['makefile'] },
  { key: 'markdown', value: ['markdown', 'md'] },
  { key: 'matlab', value: ['matlab'] },
  { key: 'nginx', value: ['nginx'] },
  { key: 'objectivec', value: ['objectivec'] },
  { key: 'pascal', value: ['pascal', 'objectpascal'] },
  { key: 'perl', value: ['perl'] },
  { key: 'php', value: ['php'] },
  { key: 'powershell', value: ['powershell'] },
  { key: 'protobuf', value: ['protobuf'] },
  { key: 'python', value: ['python', 'py'] },
  { key: 'r', value: ['r'] },
  { key: 'ruby', value: ['ruby', 'rb'] },
  { key: 'rust', value: ['rust'] },
  { key: 'scala', value: ['scala'] },
  { key: 'shell', value: ['shell'] },
  { key: 'sql', value: ['sql'] },
  { key: 'plsql', value: ['plsql'] },
  { key: 'swift', value: ['swift'] },
  { key: 'tsx', value: ['tsx'] },
  { key: 'typescript', value: ['typescript', 'ts'] },
  { key: 'vbnet', value: ['vbnet'] },
  { key: 'velocity', value: ['velocity'] },
  { key: 'xml', value: ['xml'] },
  { key: 'yaml', value: ['yaml', 'yml'] },
  { key: 'latex', value: ['latex', 'tex', 'context'] },
  { key: 'tcl', value: ['tcl'] },
  { key: 'verilog', value: ['verilog'] },
  { key: 'lua', value: ['lua'] },
];

export const enumPrismLangToLanguage: Record<string, string> = {};

const bimapPrismLangandLanguage = (
  prismLangObj: PrismLangRecord,
  index: number,
) => {
  const language = languages[index];

  enumPrismLangToLanguage[language] = prismLangObj.key;
  prismLangObj.value.forEach((prismLang) => {
    enumPrismLangToLanguage[prismLang] = language;
  });
};

prismLangArr.forEach(bimapPrismLangandLanguage);
