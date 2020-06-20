import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import { Icons } from '../index';
import * as S from './styles';

export default function Share({ description, slug, title }) {
  const [showMenu, setMenu] = useState(false);
  const [showSubMenu, setSubMenu] = useState(false);
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );
  const permalink = encodeURI(`${site.siteMetadata.siteUrl}${slug}`);

  const rotateMenu = () => setSubMenu(!showSubMenu);

  const watchScroll = () => {
    window.scrollY > 300 ? setMenu(true) : setMenu(false);
  };

  typeof window !== 'undefined' && document.addEventListener('scroll', watchScroll, false);

  return (
    <S.ShareContainer className={showMenu && '-visible'}>
      <S.ShareTitle>Gostou? Compartilhe esse artigo ;)</S.ShareTitle>

      <S.ButtonShare onClick={rotateMenu}>
        <Icons name="share" className="share" />
        <S.LabelShare>
          <Icons name="text-share" className="text" />
        </S.LabelShare>
      </S.ButtonShare>

      <S.ShareList className={showSubMenu && '-opened'}>
        <S.ShareItem className="icons -facebook">
          <S.ShareLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${permalink}&text=${title}`}
            aria-label="Facebook"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="facebook" />
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className="icons -twitter">
          <S.ShareLink
            href={`https://twitter.com/share?url=${permalink}&text=${title}&via=dulcetti`}
            aria-label="Twitter"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="twitter" />
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className="icons -linkedin">
          <S.ShareLink
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${permalink}&title=${title}&summary=${title}&source=@dulcetti&text=${description}`}
            aria-label="Linkedin"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="linkedin" />
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem className="icons -whatsapp">
          <S.ShareLink
            href={`https://api.whatsapp.com/send?text=${permalink}`}
            aria-label="Whatsapp"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="whatsapp" />
          </S.ShareLink>
        </S.ShareItem>
      </S.ShareList>
    </S.ShareContainer>
  );
}

Share.propTypes = {
  description: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
