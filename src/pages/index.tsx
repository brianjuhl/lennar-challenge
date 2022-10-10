import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Landing.module.scss';
import { Page } from '../components/Page/Page';
import { NavBar } from '../components/NavBar/NavBar';
import { NoticeBar } from '../components/NoticeBar/NoticeBar';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;

const Landing: NextPage = () => {
  const [createUser, { data, loading }] = useMutation(CREATE_USER);
  const [email, setEmail] = useState<string>();

  const navItems = [
    {
      label: 'Product',
      href: '#',
    },
    {
      label: 'Features',
      href: '#',
    },
    {
      label: 'Marketplace',
      href: '#',
    },
    {
      label: 'Company',
      href: '#',
    },
  ];

  return (
    <>
      <Head>
        <title>Lennar Code Challenge</title>
      </Head>
      <Page>
        <NavBar
          items={navItems}
          onFreeTrialClick={() => {
            try {
              document.getElementsByTagName('input')[0].focus();
            } catch (e) {}
          }}
        />
        <section className={styles.hero}>
          <NoticeBar
            notice="WE'RE HIRING"
            callToAction="Visit our careers page"
            onClick={() => {}}
          />
          <div className={styles['hero-text']}>
            <h1>
              A better way to<span>ship web apps</span>
            </h1>
          </div>
          <p className={styles['entry-text']}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>

          <div className={styles['form-container']}>
            {data ? (
              <p>Free trial started! Please check your email.</p>
            ) : (
              <>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await createUser({
                      variables: {
                        input: {
                          email,
                          name: 'Jon Snow',
                          username: 'jon_snow',
                        },
                      },
                    });
                  }}
                >
                  <Input
                    type="email"
                    required
                    disabled={loading}
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Button kind="primary" type="submit" loading={loading}>
                    Start Free Trial
                  </Button>
                </form>
                <p className={styles['legal-text']}>
                  Start your free 14-day trial, no credit card necessary. By
                  providing your email, you agree to our{' '}
                  <a href="#">terms or service</a>.
                </p>
              </>
            )}
          </div>
        </section>
        <img
          className={styles.illustration}
          src="/illustration.svg"
          alt="illustration"
        />
      </Page>
    </>
  );
};

export default Landing;
