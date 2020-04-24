const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function About(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>About</h1>
        <p>These are companion notes to my [<a href="https://github.com/rsapkf/dotfiles">dotfiles</a>] and [<a href="https://github.com/rsapkf/42/">links</a>] where I keep short snippets of code, shell scripts, tricks and tips to remember stuff.</p>
        <i>This site was created using [<a href="https://docusaurus.io/">Docusaurus v1.14.4</a>]. <br />Search powered by [<a href="https://github.com/algolia/docsearch/">Algolia DocSearch</a>].</i>
      </Container>
    </div >
  );
}

module.exports = About;
