/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    // const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return (
      baseUrl +
      // + (language ? `${language}/` : '')
      doc
    );
  }

  render() {
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width='66'
                height='58'
              />
            )}
          </a>
          <div>
            <h5>Links</h5>
            <a href={this.docUrl('linux.html', this.props.language)}>Linux</a>
            <a href={this.docUrl('vim.html', this.props.language)}>Vim</a>
            <a href={this.docUrl('tmux.html', this.props.language)}>Tmux</a>
          </div>
          <div>
            <h5>Categories</h5>
            <a href={this.docUrl('linux.html', this.props.language)}>Linux</a>
            <a href={this.docUrl('python.html', this.props.language)}>
              Programming
            </a>
            <a href={this.docUrl('martin-gardner.html', this.props.language)}>
              Puzzles
            </a>
            {/* <a
              href='https://stackoverflow.com/questions/tagged/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Stack Overflow
            </a> */}
            {/* <a href='https://discordapp.com/'>Project Chat</a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Twitter
            </a> */}
          </div>
          <div>
            <h5></h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a href={this.pageUrl('docs/linux.html', this.props.language)}>
              View All Notes
            </a>
            <a href='https://github.com/rsapkf/notes'>GitHub</a>
            <a
              className='github-button'
              href={this.props.config.repoUrl}
              data-icon='octicon-star'
              // data-show-count='true'
              aria-label='Star this project on GitHub'
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className='social'>
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className='twitter-follow-button'
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className='social'>
                <div
                  className='fb-like'
                  data-href={this.props.config.url}
                  data-colorscheme='dark'
                  data-layout='standard'
                  data-share='true'
                  data-width='225'
                  data-show-faces='false'
                />
              </div>
            )}
          </div>
        </section>

        <section className='copyright'>{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
