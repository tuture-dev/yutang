export type Language = {
  // Formal human-readable name.
  name: string;

  // Aliases.
  aliases?: string[];

  // Possible file extensions.
  extensions?: string[];

  // The prism highlight code to use. Default to the `id` key.
  highlight?: string;

  // Filenames commonly associated with the language.
  filenames?: string[];
};

export const languages: { [id: string]: Language } = {
  abap: {
    name: 'ABAP',
    extensions: ['.abap'],
  },
  actionscript: {
    aliases: ['actionscript 3', 'actionscript3', 'as3'],
    name: 'ActionScript',
    extensions: ['.as'],
  },
  ada: {
    name: 'Ada',
    extensions: ['.ada', '.adb', '.ads'],
  },
  apacheconf: {
    aliases: ['aconf', 'apache'],
    name: 'Apache Configuration',
    extensions: ['.apacheconf', '.vhost'],
    filenames: ['.htaccess', 'apache2.conf', 'httpd.conf'],
  },
  apib: {
    name: 'API Blueprint',
    highlight: 'markdown',
    extensions: ['.apib'],
  },
  apl: {
    name: 'APL',
    extensions: ['.apl', '.dyalog'],
  },
  applescript: {
    aliases: ['osascript'],
    name: 'AppleScript',
    extensions: ['.applescript', '.scpt'],
  },
  asciidoc: {
    aliases: ['adoc'],
    name: 'AsciiDoc',
    extensions: ['.asciidoc', '.adoc', '.asc'],
  },
  aspnet: {
    aliases: ['asp', 'aspx', 'aspx-vb'],
    name: 'ASP.NET (C#)',
    extensions: ['.asp', '.asax', '.ascx', '.ashx', '.asmx', '.aspx', '.axd'],
  },
  basic: {
    aliases: ['vba', 'vb6', 'visual-basic'],
    name: 'BASIC',
    extensions: ['.bas', '.vba'],
  },
  batch: {
    aliases: ['bat', 'batchfile', 'dosbatch', 'winbatch'],
    name: 'Batch',
    extensions: ['.bat', '.cmd'],
  },
  bison: {
    name: 'Bison',
    extensions: ['.bison'],
  },
  c: {
    name: 'C',
    extensions: ['.c', '.cats', '.h', '.idc'],
  },
  csharp: {
    aliases: ['cs', 'dotnet'],
    name: 'C#',
    extensions: ['.cs', '.csx'],
  },
  cpp: {
    aliases: ['cplusplus'],
    name: 'C++',
    extensions: [
      '.cpp',
      '.c++',
      '.cc',
      '.cp',
      '.cxx',
      '.h',
      '.h++',
      '.hpp',
      '.hxx',
    ],
  },
  coffeescript: {
    aliases: ['coffee', 'coffee-script'],
    name: 'CoffeeScript',
    extensions: ['.coffee'],
  },
  cmake: {
    name: 'CMake',
    extensions: ['.cmake', '.cmake.in'],
    filenames: ['CMakeLists.txt'],
  },
  clojure: {
    name: 'Clojure',
    extensions: [
      '.clj',
      '.cl2',
      '.cljc',
      '.cljs',
      '.cljs.hl',
      '.cljscm',
      '.cljx',
    ],
    filenames: ['riemann.config'],
  },
  crystal: {
    name: 'Crystal',
    extensions: ['.cr'],
  },
  css: {
    name: 'CSS',
    extensions: ['.css'],
  },
  d: {
    name: 'D',
    extensions: ['.d', '.di'],
  },
  django: {
    aliases: ['jinja', 'jinja2'],
    name: 'Django/Jinja2',
    extensions: ['.jinja', '.jinja2'],
  },
  docker: {
    aliases: ['dockerfile'],
    name: 'Docker',
    extensions: ['.dockerfile'],
    filenames: ['Dockerfile'],
  },
  ejs: {
    aliases: ['eta'],
    name: 'EJS',
    extensions: ['.ejs'],
  },
  elixir: {
    name: 'Elixir',
    extensions: ['.ex', '.exs'],
  },
  elm: {
    name: 'Elm',
    extensions: ['.elm'],
  },
  ember: {
    name: 'Ember',
    highlight: 'coffeescript',
    extensions: ['.em', '.emberscript'],
  },
  erb: {
    name: 'Erb',
    extensions: ['.erb', '.erb.deface'],
  },
  erlang: {
    name: 'Erlang',
    extensions: ['.erl', '.es', '.escript', '.hrl', '.xrl', '.yrl'],
    filenames: ['Emakefile', 'rebar.config', 'rebar.config.lock', 'rebar.lock'],
  },
  fsharp: {
    name: 'F#',
    extensions: ['.fs', '.fsi', '.fsx'],
  },
  factor: {
    name: 'Factor',
    extensions: ['.factor'],
    filenames: ['.factor-boot-rc', '.factor-rc'],
  },
  fortran: {
    name: 'Fortran',
    extensions: ['.f90', '.f', '.f03', '.f08', '.f77', '.f95', '.for', '.fpp'],
  },
  gherkin: {
    aliases: ['cucumber'],
    name: 'Gherkin',
    extensions: ['.feature'],
  },
  go: {
    aliases: ['golang'],
    name: 'Go',
    extensions: ['.go'],
  },
  graphql: {
    name: 'GraphQL',
    extensions: ['.graphql', '.gql', '.graphqls'],
  },
  groovy: {
    name: 'Groovy',
    extensions: ['.groovy', '.grt', '.gtpl', '.gvy'],
    filenames: ['Jenkinsfile'],
  },
  haml: {
    name: 'Haml',
    extensions: ['.haml', '.haml.deface'],
  },
  handlebars: {
    aliases: ['hbs', 'htmlbars'],
    name: 'Handlebars',
    extensions: ['.handlebars', '.hbs'],
  },
  haskell: {
    aliases: ['hs'],
    name: 'Haskell',
    extensions: ['.hs', '.hs-boot', '.hsc'],
  },
  haxe: {
    name: 'Haxe',
    extensions: ['.hx', '.hxsl'],
  },
  hcl: {
    aliases: ['terraform'],
    name: 'HCL',
    extensions: ['.hcl', '.tf', '.tfvars', '.workflow'],
  },
  html: {
    aliases: ['xhtml'],
    name: 'HTML',
    extensions: ['.html', '.htm', '.html.hl', '.xht', '.xhtml'],
  },
  inform7: {
    aliases: ['i7'],
    name: 'Inform 7',
    extensions: ['.ni', '.i7x'],
  },
  ini: {
    aliases: ['dosini'],
    name: 'Ini',
    extensions: ['.ini', '.cfg', '.pro', '.properties'],
  },
  io: {
    name: 'Io',
    extensions: ['.io'],
  },
  j: {
    name: 'J',
    extensions: ['.ijs'],
  },
  java: {
    name: 'Java',
    extensions: ['.java'],
  },
  javascript: {
    aliases: ['js', 'node'],
    name: 'JavaScript',
    extensions: ['.js', '.cjs', '.es', '.es6'],
    filenames: ['Jakefile'],
  },
  jolie: {
    name: 'Jolie',
    extensions: ['.ol', '.iol'],
  },
  json: {
    name: 'JSON',
    extensions: ['.json'],
  },
  json5: {
    name: 'JSON5',
    extensions: ['.json5'],
  },
  jsx: {
    name: 'React JSX',
    extensions: ['.jsx'],
  },
  julia: {
    name: 'Julia',
    extensions: ['.jl'],
  },
  kotlin: {
    name: 'Kotlin',
    extensions: ['.kt', '.ktm', '.kts'],
  },
  latte: {
    name: 'Latte',
    extensions: ['.latte'],
  },
  less: {
    name: 'Less',
    extensions: ['.less'],
  },
  lilypond: {
    name: 'LilyPond',
    extensions: ['.ly', '.ily'],
  },
  liquid: {
    name: 'Liquid',
    extensions: ['.liquid'],
  },
  lisp: {
    aliases: ['emacs', 'elisp', 'emacs-lisp'],
    name: 'Lisp',
    extensions: ['.lisp', '.lsp', '.emacs', '.el'],
  },
  livescript: {
    aliases: ['ls', 'live-script'],
    name: 'LiveScript',
    extensions: ['.ls'],
    filenames: ['Slakefile'],
  },
  llvm: {
    name: 'LLVM IR',
    extensions: ['.ll'],
  },
  lolcode: {
    name: 'LOLCODE',
    extensions: ['.lol'],
  },
  lua: {
    name: 'Lua',
    extensions: ['.lua', '.fcgi', '.nse'],
    filenames: ['.luacheckrc'],
  },
  makefile: {
    aliases: ['make'],
    name: 'Makefile',
    extensions: ['.make'],
    filenames: ['Makefile'],
  },
  markdown: {
    aliases: ['md', 'pandoc'],
    name: 'Markdown',
    extensions: ['.md', '.markdown', '.mdx'],
  },
  matlab: {
    aliases: ['octave'],
    name: 'Matlab',
    extensions: ['.m', '.matlab'],
  },
  monkey: {
    name: 'Monkey',
    extensions: ['.monkey', '.monkey2'],
  },
  moonscript: {
    aliases: ['moon'],
    name: 'MoonScript',
    extensions: ['.moon'],
  },
  nasm: {
    aliases: ['asm', 'assembly'],
    name: 'NASM',
    extensions: ['.asm', '.nasm'],
  },
  nginx: {
    name: 'Nginx Configuration',
    filenames: ['nginx.conf'],
  },
  nsis: {
    name: 'NSIS',
    extensions: ['.nsi', '.nsh'],
  },
  objectivec: {
    aliases: ['objc', 'obj-c'],
    name: 'Objective-C',
    extensions: ['.m', '.h'],
  },
  ocaml: {
    name: 'OCaml',
    extensions: ['.ml'],
  },
  opencl: {
    name: 'OpenCL',
    extensions: ['.cl', '.opencl'],
  },
  oz: {
    name: 'Oz',
    extensions: ['.oz'],
  },
  pascal: {
    aliases: ['objectpascal'],
    name: 'Pascal',
    extensions: ['.pas', '.pascal'],
  },
  perl: {
    aliases: ['cperl'],
    name: 'Perl',
    extensions: ['.pl', '.ph'],
    filenames: ['cpanfile', 'Rexfile'],
  },
  php: {
    name: 'PHP',
    extensions: ['.php'],
  },
  plsql: {
    name: 'PL/SQL',
    extensions: ['.pls'],
  },
  postcss: {
    name: 'PostCSS',
    extensions: ['.pcss', '.postcss'],
  },
  powershell: {
    name: 'PowerShell',
    extensions: ['.ps1', '.psd1', '.psm1'],
  },
  processing: {
    name: 'Processing',
    extensions: ['.pde'],
  },
  prolog: {
    name: 'Prolog',
    extensions: ['.pl', '.pro', '.prolog'],
  },
  protobuf: {
    name: 'Protocol Buffers',
    extensions: ['.proto'],
  },
  pug: {
    aliases: ['jade'],
    name: 'Pug',
    extensions: ['.jade', '.pug'],
  },
  puppet: {
    name: 'Puppet',
    extensions: ['.pp'],
  },
  purebasic: {
    aliases: ['pbfasm'],
    name: 'PureBasic',
    extensions: ['.pb', '.pbi'],
  },
  python: {
    aliases: ['py'],
    name: 'Python',
    extensions: ['.py'],
  },
  qml: {
    name: 'QML',
    extensions: ['.qml', '.qbs'],
  },
  r: {
    aliases: ['rscript'],
    name: 'R',
    extensions: ['.r', '.rd', '.rsx'],
  },
  racket: {
    aliases: ['rkt'],
    name: 'Racket',
    extensions: ['.rkt', '.rktd', '.rktl'],
  },
  renpy: {
    name: "Ren'py",
    extensions: ['.rpy'],
  },
  reason: {
    name: 'Reason',
    extensions: ['.re', '.rei'],
  },
  regex: {
    aliases: ['regexp'],
    name: 'Regular Expression',
    extensions: ['.regex', '.regexp'],
  },
  rest: {
    aliases: ['rst'],
    name: 'reST (reStructuredText)',
    extensions: ['.rst', '.rest', '.rest.txt', '.rst.txt'],
  },
  robotframework: {
    aliases: ['robot'],
    name: 'Robot Framework',
    extensions: ['.robot'],
  },
  ruby: {
    aliases: ['rb', 'jruby', 'rake'],
    name: 'Ruby',
    extensions: ['.rb', '.ruby', '.mspec', '.rake', '.spec', '.gemspec'],
    filenames: [
      '.irbrc',
      '.pryrc',
      'Brewfile',
      'Buildfile',
      'Gemfile',
      'Gemfile.lock',
      'Mavenfile',
      'Puppetfile',
      'Rakefile',
      'Snapfile',
      'Vagrantfile',
    ],
  },
  rust: {
    name: 'Rust',
    extensions: ['.rs', '.rs.in'],
  },
  sas: {
    name: 'SAS',
    extensions: ['.sas'],
  },
  sass: {
    name: 'Sass',
    extensions: ['.sass'],
  },
  scss: {
    name: 'Scss',
    extensions: ['.scss'],
  },
  scala: {
    name: 'Scala',
    extensions: ['.scala', '.kojo', '.sbt', '.sc'],
  },
  scheme: {
    name: 'Scheme',
    extensions: ['.scm', '.sch', '.sld', '.sls', '.sps', '.ss'],
  },
  shell: {
    aliases: ['sh', 'bash', 'shell-script', 'zsh'],
    name: 'Bash',
    extensions: ['.sh', '.bash', '.zsh'],
  },
  'shell-session': {
    aliases: ['bash-session', 'console'],
    name: 'Shell Session',
    extensions: ['.sh-session'],
  },
  smalltalk: {
    name: 'Smalltalk',
    extensions: ['.st'],
  },
  smarty: {
    name: 'Smarty',
    extensions: ['.tpl'],
  },
  solidity: {
    name: 'Solidity (Ethereum)',
    extensions: ['.solidity'],
  },
  soy: {
    name: 'Soy (Closure Template)',
    extensions: ['.soy'],
  },
  sparql: {
    aliases: ['rq'],
    name: 'SPARQL',
    extensions: ['.sparql', '.rq'],
  },
  sqf: {
    name: 'SQF',
    extensions: ['.sqf', '.hqf'],
  },
  sql: {
    name: 'SQL',
    extensions: ['.sql', '.cql', '.ddl', '.mysql'],
  },
  svelte: {
    name: 'Svelte',
    highlight: 'html',
    extensions: ['.svelte'],
  },
  svg: {
    name: 'SVG',
    extensions: ['.svg'],
  },
  stylus: {
    name: 'Stylus',
    extensions: ['.styl'],
  },
  swift: {
    name: 'Swift',
    extensions: ['.swift'],
  },
  tcl: {
    name: 'Tcl',
    extensions: ['.tcl', '.adp', '.tm'],
  },
  tcsh: {
    name: 'Tcsh',
    highlight: 'shell',
    extensions: ['.tcsh', '.csh'],
  },
  tex: {
    aliases: ['latex', 'context'],
    name: 'TeX',
    extensions: ['.tex', '.aux', '.bbx'],
  },
  text: {
    name: 'Plain Text',
    extensions: ['.txt'],
  },
  textile: {
    name: 'Textile',
    extensions: ['.textile'],
  },
  toml: {
    name: 'TOML',
    extensions: ['.toml'],
  },
  tsx: {
    name: 'React TSX',
    extensions: ['.tsx'],
  },
  turtle: {
    aliases: ['trig'],
    name: 'Turtle',
    extensions: ['.ttl'],
  },
  twig: {
    name: 'Twig',
    extensions: ['.twig'],
  },
  typescript: {
    aliases: ['ts'],
    name: 'TypeScript',
    extensions: ['.ts'],
  },
  unrealscript: {
    aliases: ['uscript', 'uc'],
    name: 'UnrealScript',
    extensions: ['.uc'],
  },
  vala: {
    name: 'Vala',
    extensions: ['.vala', '.vapi'],
  },
  vbnet: {
    aliases: ['vb'],
    name: 'VB.Net',
    extensions: ['.vb', '.vbhtml'],
  },
  verilog: {
    name: 'Verilog',
    extensions: ['.v', '.veo'],
  },
  vhdl: {
    name: 'VHDL',
    extensions: [
      '.vhdl',
      '.vhd',
      '.vhf',
      '.vhi',
      '.vho',
      '.vhs',
      '.vht',
      '.vhw',
    ],
  },
  vim: {
    name: 'Vim Script',
    extensions: ['.vim'],
    filenames: ['.vimrc', 'vimrc'],
  },
  vue: {
    name: 'Vue',
    highlight: 'html',
    extensions: ['.vue'],
  },
  wasm: {
    aliases: ['wast', 'webassembly'],
    name: 'WebAssembly',
    extensions: ['.wast', '.wat'],
  },
  wiki: {
    aliases: ['mediawiki'],
    name: 'Wiki Markup',
    extensions: ['.wiki', '.mediawiki'],
  },
  xml: {
    aliases: ['rss', 'xsd', 'wsdl'],
    name: 'XML',
    extensions: ['.xml', '.ant'],
    filenames: [
      '.classpath',
      '.cproject',
      '.project',
      'App.config',
      'NuGet.config',
      'Settings.StyleCop',
      'Web.Debug.config',
      'Web.Release.config',
      'Web.config',
      'packages.config',
    ],
  },
  xojo: {
    name: 'Xojo',
    extensions: [
      '.xojo_code',
      '.xojo_menu',
      '.xojo_report',
      '.xojo_script',
      '.xojo_toolbar',
      '.xojo_window',
    ],
  },
  xquery: {
    name: 'XQuery',
    extensions: ['.xquery', '.xq', '.xql', '.xqm', '.xqy'],
  },
  yaml: {
    aliases: ['yml'],
    name: 'YAML',
    extensions: ['.yml', '.yaml'],
    filenames: [
      '.clang-format',
      '.clang-tidy',
      '.gemrc',
      'glide.lock',
      'yarn.lock',
    ],
  },
  zig: {
    name: 'Zig',
    extensions: ['.zig'],
  },
};
