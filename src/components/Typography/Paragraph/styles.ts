import { css, Interpolation, Theme } from '@emotion/react';
import { getColor, LightColorType, DarkColorType, ThemeMode } from '../../../styles';
import { EllipsisOptions } from './Paragraph';

const createStyle = (
  color?: LightColorType | DarkColorType,
  ellipsis?: boolean | EllipsisOptions,
  disabled?: boolean,
) => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  // color
  const primaryColor = getColor(theme, color, disabled, 'gray5');

  // default
  const defaultStyle = css`
    color: ${primaryColor};
    overflow-wrap: break-word;
    margin-bottom: 1em;

    ${disabled &&
    `
      cursor: not-allowed !important;
      color: ${getColor(theme, 'gray6')} !important;
      background: none !important;
      text-shadow: none !important;
      box-shadow: none !important;
    `}
  `;

  // ellipsis
  const getEllipsis = () => {
    if ((ellipsis as EllipsisOptions).rows >= 2) {
      return css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${(ellipsis as EllipsisOptions).rows}; //원하는 라인수
        -webkit-box-orient: vertical;
      `;
    }
    if (ellipsis) {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
    }
    return css``;
  };

  return [defaultStyle, getEllipsis()];
};

// mark
export const markStyle = () => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  return css`
    background-color: ${getColor(theme, 'gold3')};
  `;
};

// code
export const codeStyle = () => (theme: Theme = { mode: ThemeMode.LIGHT }): Interpolation<Theme> => {
  if (theme.mode === ThemeMode.DARK)
    return css`
      /* PrismJS 1.25.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+agda+al+antlr4+apacheconf+apex+apl+applescript+aql+arduino+arff+asciidoc+aspnet+asm6502+asmatmel+autohotkey+autoit+avisynth+avro-idl+bash+basic+batch+bbcode+bicep+birb+bison+bnf+brainfuck+brightscript+bro+bsl+c+csharp+cpp+cfscript+chaiscript+cil+clojure+cmake+cobol+coffeescript+concurnas+csp+coq+crystal+css-extras+csv+cypher+d+dart+dataweave+dax+dhall+diff+django+dns-zone-file+docker+dot+ebnf+editorconfig+eiffel+ejs+elixir+elm+etlua+erb+erlang+excel-formula+fsharp+factor+false+firestore-security-rules+flow+fortran+ftl+gml+gap+gcode+gdscript+gedcom+gherkin+git+glsl+gn+go+graphql+groovy+haml+handlebars+haskell+haxe+hcl+hlsl+hoon+http+hpkp+hsts+ichigojam+icon+icu-message-format+idris+ignore+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jexl+jolie+jq+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+julia+keepalived+keyman+kotlin+kumir+kusto+latex+latte+less+lilypond+liquid+lisp+livescript+llvm+log+lolcode+lua+magma+makefile+markdown+markup-templating+matlab+maxscript+mel+mermaid+mizar+mongodb+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+naniscript+nasm+neon+nevod+nginx+nim+nix+nsis+objectivec+ocaml+opencl+openqasm+oz+parigp+parser+pascal+pascaligo+psl+pcaxis+peoplecode+perl+php+phpdoc+php-extras+plsql+powerquery+powershell+processing+prolog+promql+properties+protobuf+pug+puppet+pure+purebasic+purescript+python+qsharp+q+qml+qore+r+racket+cshtml+jsx+tsx+reason+regex+rego+renpy+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smali+smalltalk+smarty+sml+solidity+solution-file+soy+sparql+splunk-spl+sqf+sql+squirrel+stan+iecst+stylus+swift+systemd+t4-templating+t4-cs+t4-vb+tap+tcl+tt2+textile+toml+tremor+turtle+twig+typescript+typoscript+unrealscript+uri+v+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+warpscript+wasm+web-idl+wiki+wolfram+wren+xeora+xml-doc+xojo+xquery+yaml+yang+zig */
      code[class*='language-'],
      pre[class*='language-'] {
        color: #f8f8f2;
        background: 0 0;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }
      pre[class*='language-'] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
        border-radius: 0.3em;
      }
      :not(pre) > code[class*='language-'],
      pre[class*='language-'] {
        background: #272822;
      }
      :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
      }
      .token.cdata,
      .token.comment,
      .token.doctype,
      .token.prolog {
        color: #8292a2;
      }
      .token.punctuation {
        color: #f8f8f2;
      }
      .token.namespace {
        opacity: 0.7;
      }
      .token.constant,
      .token.deleted,
      .token.property,
      .token.symbol,
      .token.tag {
        color: #f92672;
      }
      .token.boolean,
      .token.number {
        color: #ae81ff;
      }
      .token.attr-name,
      .token.builtin,
      .token.char,
      .token.inserted,
      .token.selector,
      .token.string {
        color: #a6e22e;
      }
      .language-css .token.string,
      .style .token.string,
      .token.entity,
      .token.operator,
      .token.url,
      .token.variable {
        color: #f8f8f2;
      }
      .token.atrule,
      .token.attr-value,
      .token.class-name,
      .token.function {
        color: #e6db74;
      }
      .token.keyword {
        color: #66d9ef;
      }
      .token.important,
      .token.regex {
        color: #fd971f;
      }
      .token.bold,
      .token.important {
        font-weight: 700;
      }
      .token.italic {
        font-style: italic;
      }
      .token.entity {
        cursor: help;
      }
    `;

  return css`
    /**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

    code[class*='language-'],
    pre[class*='language-'] {
      color: black;
      background: none;
      text-shadow: 0 1px white;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    pre[class*='language-']::-moz-selection,
    pre[class*='language-'] ::-moz-selection,
    code[class*='language-']::-moz-selection,
    code[class*='language-'] ::-moz-selection {
      text-shadow: none;
      background: #b3d4fc;
    }

    pre[class*='language-']::selection,
    pre[class*='language-'] ::selection,
    code[class*='language-']::selection,
    code[class*='language-'] ::selection {
      text-shadow: none;
      background: #b3d4fc;
    }

    @media print {
      code[class*='language-'],
      pre[class*='language-'] {
        text-shadow: none;
      }
    }

    /* Code blocks */
    pre[class*='language-'] {
      padding: 1em;
      margin: 0.5em 0;
      overflow: auto;
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      background: #f5f2f0;
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: slategray;
    }

    .token.punctuation {
      color: #999;
    }

    .token.namespace {
      opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #905;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #690;
    }

    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: #9a6e3a;
      /* This background color was intended by the author of this theme. */
      background: hsla(0, 0%, 100%, 0.5);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #07a;
    }

    .token.function,
    .token.class-name {
      color: #dd4a68;
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: #e90;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
  `;
};

export default createStyle;
