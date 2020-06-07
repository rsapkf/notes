import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title='Hello'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '17px',
          padding: '15px',
        }}
      >
        <p>
          <h2>About</h2>
          <p>
            These are companion notes to my [
            <a href='https://github.com/rsapkf/dotfiles/'>dotfiles</a>] and [
            <a href='https://github.com/rsapkf/42/'>links</a>] where I keep
            short snippets of code, shell scripts, tricks and tips to remember
            stuff.
          </p>
          <i>
            This site was created using [
            <a href='https://v2.docusaurus.io/'>Docusaurus v2.0.0-alpha.564</a>
            ]. <br />
            Search powered by [
            <a href='https://github.com/algolia/docsearch/'>
              Algolia DocSearch
            </a>
            ].
          </i>
        </p>
      </div>
    </Layout>
  );
}

export default Hello;
