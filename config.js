/**
 * Raw content
 */

export const CONTENT = {
  home: {
    title: 'Devhints.io — TL;DR for developer documentation',
    description: 'A ridiculous collection of web development cheatsheets',
    recentlyUpdated: 'Recently updated',
    updatedLabel: 'Updated'
  },

  // Home page banner (SiteHeader)
  siteHeader: {
    title: "Rico's cheatsheets",
    tagline: `Hey! I'm <a href='https://ricostacruz.com'>@rstacruz</a> and this is a modest collection of cheatsheets I've written.`
  },

  // Top navigation (TopNav)
  topNav: {
    title: 'Devhints.io',
    edit: 'Edit',
    editOnGithub: 'Edit this page on GitHub'
  },

  sheet: {
    suffix: 'cheatsheet'
  },

  // Callout at the bottom of the sheets
  relatedPostsCallout: {
    description: 'Over SIZE curated cheatsheets, by developers for developers.',
    link: 'Devhints home'
  },

  // Search form in the home page
  searchForm: {
    defaultPlaceholder: 'Search SIZE+ cheatsheets',
    homePlaceholder: 'Search...',
    prefix: 'devhints.io'
  },

  // Comments area in the sheets
  commentsArea: {
    suffix: 'for this cheatsheet.',
    link: 'Write yours!'
  },

  // 404 page
  notFound: {
    title: 'Not found',
    description:
      "Sorry, we don't have a cheatsheet for this yet. Try searching!",
    home: 'Back to home'
  }
}

/**
 * Google Analytics integration (TODO)
 */

export const GOOGLE_ANALYTICS = {
  hostname: 'devhints.io',
  id: 'UA-106902774-1'
}

/**
 * Disqus integration (TODO)
 * @name DISQUS
 */

export const DISQUS = {
  enabled: true,
  host: 'devhints.disqus.com'
}

/**
 * Codefund.io integration (TODO)
 * @name CODEFUND
 */

export const CODEFUND = {
  enabled: true,
  token: 'c2c8bc62-c275-4c7a-a304-74335c5a1cd0'
}

/**
 * Assets. No trailing slash please!
 * @name ASSETS
 */

export const ASSETS = {
  preview_host: 'https://assets.devhints.io/previews'
}

/**
 * GitHub (TODO)
 * @name GITHUB
 */

export const GITHUB = {
  repo: 'https://github.com/rstacruz/cheatsheets',
  branch: 'master'
}
