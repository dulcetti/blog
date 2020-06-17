import React, { useState } from 'react';

import { Icons } from '../index';
import * as S from './styles';

export default function Share({ permalink, title }) {
  const [showMenu, changeMenu] = useState(false);

  const rotateMenu = () => changeMenu(!showMenu);

  return (
    <>
      <S.ButtonShare title="Compartilhar artigo" onClick={rotateMenu}>
        <Icons name="share" />
        <S.LabelShare></S.LabelShare>
      </S.ButtonShare>

      <S.ShareList className={showMenu && '-opened'}>
        <S.ShareItem>
          <S.ShareLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${permalink}&amp;text=${title}`}
            aria-label="Facebook"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="facebook" />
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem>
          <S.ShareLink
            href={`https://twitter.com/share?url=${permalink}&amp;text=${title}&amp;via=papodebar_`}
            aria-label="Twitter"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="twitter" />
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem>
          <S.ShareLink
            href={`https://www.linkedin.com/cws/share?token&amp;isFramed=false&amp;url=${permalink}`}
            aria-label="Linkedin"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="linkedin" />
          </S.ShareLink>
        </S.ShareItem>
        <S.ShareItem>
          <S.ShareLink
            href={`https://api.whatsapp.com/send?text=${permalink}`}
            aria-label="Whatsapp"
            rel="noopener noreferrer"
            target="_blank">
            <Icons name="whatsapp" />
          </S.ShareLink>
        </S.ShareItem>
      </S.ShareList>
    </>
  );
}
