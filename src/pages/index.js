import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>About</>,
    imageUrl: '',
    description: (
      <>
        <p>
          These are companion notes to my [
          <a href='https://github.com/rsapkf/dotfiles/'>dotfiles</a>] and [
          <a href='https://github.com/rsapkf/42/'>links</a>] where I keep short
          snippets of code, shell scripts, tricks and tips to remember stuff.
        </p>
      </>
    ),
  },
  {
    title: <></>,
    imageUrl: 'img/undraw_taking_notes_tjaf.svg',
    description: <></>,
  },
  // {
  //   title: <>Powered by React</>,
  //   imageUrl: 'img/undraw_docusaurus_react.svg',
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              View Notes
            </Link>
            &nbsp;&nbsp;
            <a
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              href='https:/github.com/rsapkf/notes/'
            >
              GitHub
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
