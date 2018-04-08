
//在未进行webpack 打包依赖模块之前 报错Uncaught SyntaxError: Unexpected identifier
//理应报错 Uncaught SyntaxError: Unexpected import

import a from './a';
import b from './b';
import c from './c';

a();
b();
c();


