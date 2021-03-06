/* @flow */
import Link from 'gatsby-link'
import React from 'react'
import css from 'styled-jsx/css'

import { Consumer } from '../contexts/SiteContext'
import BackButton from './BackButton'
import SocialList from './SocialList'
import PageActions from './PageActions'

/**
 * Props
 */

export type Props = {
  // If true, shows the back button
  back?: boolean,

  // Title of the page. (Home page doesn't have one)
  title?: string,

  // URL of this current page
  permalink?: ?string,

  // Path of the current page
  path?: string
}

export type ViewProps = Props & {
  // "devhints.io"
  brand: string
}

/**
 * Top navigation in most pages.
 *
 * @param {Object} props Properties
 * @param {boolean} props.back Shows back button if true
 * @param {string} props.title Title of the page
 *
 * @example
 *     <TopNav />
 */

export const TopNavView = ({
  back,
  title,
  brand,
  path,
  permalink
}: ViewProps) => {
  const isSheetPage = !!title

  return (
    <nav className="top-nav" data-js-no-preview role="navigation">
      <style jsx>{STYLE}</style>
      <div className="container">
        <div className="left">{back ? <BackButton /> : null}</div>

        <Link className="brand top-nav-brand" to="/">
          {brand}
        </Link>

        <div className="actions">
          <SocialList description={title} permalink={permalink} />

          {/* Don't show 'Edit on Github' for home page */}
          {isSheetPage ? <PageActions path={path} /> : null}
        </div>
      </div>
    </nav>
  )
}

/**
 * Connected view.
 * TODO: Move this to containers/
 */

export const TopNav = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => (
      <TopNavView
        {...props}
        brand={(CONTENT && CONTENT.topNav && CONTENT.topNav.title) || ''}
        permalink={
          (typeof window !== 'undefined' &&
            window.location &&
            window.location.href) ||
          null
        }
      />
    )}
  </Consumer>
)

/**
 * CSS
 */

export const STYLE = css`
  @import 'src/web/styles/common';

  .top-nav,
  .container {
    height: 64px;
    line-height: 64px;
    text-align: center;
    position: relative;
  }

  /* smaller on mobile */
  @media (max-width: 480px) {
    .container {
      height: 32px;
      line-height: 32px;
      margin-top: 8px;
    }

    .top-nav {
      height: calc(32px + 8px + 8px);
      padding: 8px 0;
      border-bottom: solid 1px var(--dark-line-color);
      margin-bottom: 8px;
    }
  }

  .container {
    @apply --gutter-padding-left;
    @apply --gutter-padding-right;
    max-width: var(--area-width);
    margin: 0 auto;
  }

  .container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .left {
    flex: 0 0 auto;
    line-height: 32px;
  }

  :global(.top-nav-brand) {
    flex: 1 1 auto;
  }

  .actions {
    flex: 0 0 auto;
    display: flex;
  }

  :global(.top-nav-brand) {
    @apply --font-size--1;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;

    &,
    &:visited {
      color: var(--text-body);
    }

    &:hover {
      color: var(--brand-a);
    }
  }

  /* mobile */
  @media (max-width: 480px) {
    :global(.top-nav-brand) {
      display: none;
    }

    .actions {
      margin-left: auto;
    }
  }

  /* desktop: absolute the actions */
  @media (min-width: 481px) {
    .actions {
      position: absolute;
      @apply --gutter-right;
      top: calc((64px - 32px) / 2);
      line-height: 1em;
    }

    .left {
      position: absolute;
      @apply --gutter-left;
      top: calc((64px - 32px) / 2);
    }
  }

  /* offset so it doesn't look misasligned */
  /* (min-width: var(--area-width)) */
  @media (min-width: 1232px) {
    .home {
      position: relative;
      left: -16px;
    }
  }
`

export default TopNav
