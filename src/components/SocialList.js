// @flow
import React from 'react'
import { facebook, twitter } from 'devhints-icons'

/**
 * Props
 */

export type Props = {
  className?: string,

  // Page description; not available for home page
  description?: string,

  // URL of the current page
  permalink?: ?string
}

/**
 * List of social media links (Facebook, Twitter).
 *
 * @example
 *     <SocialList
 *       permalink='https://my.page.com/'
 *       description='Vim' />
 */

export const SocialList = ({ className, description, permalink }: Props) => {
  const e = encodeURIComponent
  const url = permalink

  // Don't draw anything in server-side rendering
  if (!url) return null

  if (!description) description = 'The ultimate search tool'

  const tweetText = `${description} ${url}`

  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`
  const twitterURL = `https://www.twitter.com/intent/tweet?text=${e(tweetText)}`

  return (
    <ul className={`social-list ${className || ''}`}>
      <li className='facebook link hint--bottom' data-hint='Share on Facebook'>
        <a href={facebookURL} target='share'>
          <i className='icon' dangerouslySetInnerHTML={{ __html: facebook }} />
          <span className='text'>Facebook</span>
        </a>
      </li>
      <li className='twitter link hint--bottom' data-hint='Share on Twitter'>
        <a href={twitterURL} target='share'>
          <i className='icon' dangerouslySetInnerHTML={{ __html: twitter }} />
          <span className='text'>Twitter</span>
        </a>
      </li>
    </ul>
  )
}

export default SocialList