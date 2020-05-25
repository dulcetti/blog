import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Icons from '../components/icons';
import { getAge, isMobile } from '../utils';

import { themes } from '../styles/themes';
import * as S from '../styles/pages/general';
import * as SA from '../styles/pages/about';

export default function AboutPage() {
  const [scroll, setScroll] = useState(0);
  const { firstImage, secondImage, thirdImage } = useStaticQuery(graphql`
    query imagesAboutQuery {
      firstImage: file(relativePath: { eq: "about/dulcetti-hey-ho.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 900, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secondImage: file(relativePath: { eq: "about/dulcetti-sorrindo.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 900, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      thirdImage: file(relativePath: { eq: "about/dulcetti-fodasse.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 900, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const updateImage = () => {
    setScroll(window.scrollY);
  };

  typeof window !== 'undefined' &&
    !isMobile() &&
    window.addEventListener('scroll', updateImage, false);

  return (
    <Layout>
      <SEO
        description="Um cara curioso na área de tecnologia. Comecei na área de design gráfico e webdesign,
              mas acabei migrando, felizmente, para o desenvolvimento."
        image="/assets/images/about/dulcetti-rindo.jpg"
        title="Sobre o Bruno Dulcetti"
      />
      <SA.PageFluid>
        <SA.AboutSection>
          <SA.ColumnContent>
            <SA.TitleSection>"Quenhé" esse Bruno Dulcetti?</SA.TitleSection>
            <S.PageText>
              Um cara curioso na área de tecnologia. Comecei na área de design gráfico e webdesign,
              mas acabei migrando, felizmente, para o desenvolvimento. Me especializei em Front-End,
              o principal foco do meu{' '}
              <AniLink
                className="link-animated"
                cover
                direction="left"
                bg={themes.palette.general.bgTransition}
                duration={0.6}
                to="/">
                Blog
              </AniLink>
              .
            </S.PageText>
            <S.PageSubSubTitle>E qual a área de atuação desse cara?</S.PageSubSubTitle>
            <S.PageText>
              Atualmente atuo como Coordenador de Desenvolvimento na Wooza. Foi um belo desafio
              mudar drasticamente, pois um coordenador não pega, quer dizer, não deveria pegar, em
              código praticammente, mas sim cuidar dos times, Squads. Mas eu vou tentando, juro ;)
            </S.PageText>
            <S.PageText>
              Estou com {getAge()} anos e uma coisa que eu gostava muito de fazer era dar aulas. Dei
              aula na UniverCidade e na Faculdade CCAA, porém, ambas fecharam as portas. Estou sem
              dar aulas desde o final de 2014, porém, pretendo voltar num futuro, quem sabe próximo.
            </S.PageText>
            <S.PageText>
              Na Wooza eu tenho aprendido bastante, principalmente na área de DevOps e DevSecOps,
              sendo esta segunda uma área que estou responsável. Falarei mais sobre ela no meu Blog,
              tanto DevSecOps, quanto DevOps.
            </S.PageText>
            <S.PageSubSubTitle>E nas horas vagas, o que você faz?</S.PageSubSubTitle>
            <S.PageText>
              Sucesso! #brinks, adoro responder isso para os outros, a pergunta pede. Bom, muitos já
              sabem que eu também sou músico e toco em vários blocos de rua no carnaval carioca e
              também em São Paulo em algumas vezes. Vocês podem ver inclusive por causa da foto aqui
              nessa parte.
            </S.PageText>
            <S.PageText>
              Além disso, eu gosto muito de praia, tocar (na verdade estudar, pois não toco nada
              ainda) meu trompete. E toco meu violão também, assim como o Ukulele, um excelente
              instrumento para praticar. Fora ir pra praia, e claro, beber algumas cervejas.
            </S.PageText>
            <S.PageText>
              Falando em cerveja, dá uma olhada no{' '}
              <a
                href="https://www.papodebar.com"
                target="_blank"
                className="link-animated"
                rel="noopener noreferrer">
                Papo de Bar
              </a>
              , meu site de bebidas alcoólicas.
            </S.PageText>
          </SA.ColumnContent>
          <SA.ColumnImage className={scroll < 700 && 'active'}>
            <SA.TitleSectionImage>"Quenhé"?</SA.TitleSectionImage>
            <SA.AboutImage fluid={firstImage.childImageSharp.fluid} />
          </SA.ColumnImage>
        </SA.AboutSection>

        <SA.AboutSection>
          <SA.ColumnContent>
            <SA.TitleSection>Um breve resumo</SA.TitleSection>
            <S.PageSubSubTitle>Formação</S.PageSubSubTitle>
            <S.PageText>
              Bom, minha formação é num antigo curso chamado Gestão e Criação de Ambientes Internet,
              pela Estácio de Sá. E fiz minha Pós-Graduação em Interface, Internet e Multimídia,
              pela UFF. Tudo isso há um certo tempo, 2006 já estava pós-graduado.
            </S.PageText>
            <S.PageSubSubTitle>Por onde passou?</S.PageSubSubTitle>
            <S.PageText>
              Qualquer coisa dá uma passada no{' '}
              <a
                href="https://www.linkedin.com/in/dulcetti/"
                target="_blank"
                className="link-animated"
                rel="noopener noreferrer">
                meu Linkedin
              </a>
              . Mas segue abaixo uma pequena lista mais atual.
            </S.PageText>
            <SA.CareerList>
              <SA.CareerItem>
                <SA.CareerCompany>
                  <SA.IconWrapper>
                    <Icons name="developer" />
                  </SA.IconWrapper>
                  Wooza
                </SA.CareerCompany>
                <SA.CareerTitle>Coordenador de desenvolvimento</SA.CareerTitle>
                <SA.CareerDates>Jul 2019 – Present</SA.CareerDates>
                <SA.CareerTitle>Arquiteto de soluções Front-End</SA.CareerTitle>
                <SA.CareerDates>Jan 2018 – Jul 2019</SA.CareerDates>
                <SA.CareerTitle>Desenvolvedor Front-End Sênior</SA.CareerTitle>
                <SA.CareerDates>Jun 2016 – Jan 2018</SA.CareerDates>
              </SA.CareerItem>
              <SA.CareerItem>
                <SA.CareerCompany>
                  <SA.IconWrapper>
                    <Icons name="developer" />
                  </SA.IconWrapper>
                  Videolog
                </SA.CareerCompany>
                <SA.CareerTitle>CTO</SA.CareerTitle>
                <SA.CareerDates>08/2013 – 01/15</SA.CareerDates>
                <SA.CareerTitle>Gerente de Projetos</SA.CareerTitle>
                <SA.CareerDates>04/2009 – 08/2013</SA.CareerDates>
                <SA.CareerTitle>Desenvolvedor Front-End Sênior</SA.CareerTitle>
                <SA.CareerDates>11/2005 – 04/2009</SA.CareerDates>
              </SA.CareerItem>
              <SA.CareerItem>
                <SA.CareerCompany>
                  <SA.IconWrapper>
                    <Icons name="developer" />
                  </SA.IconWrapper>
                  Mobicare
                </SA.CareerCompany>
                <SA.CareerTitle>Desenvolvedor Front-End Sênior</SA.CareerTitle>
                <SA.CareerDates>11/2014 – 02/2016</SA.CareerDates>
              </SA.CareerItem>
              <SA.CareerItem>
                <SA.CareerCompany>
                  <SA.IconWrapper className="graduation">
                    <Icons name="graduation" />
                  </SA.IconWrapper>
                  Faculdade CCAA
                </SA.CareerCompany>
                <SA.CareerTitle>Professor das matérias WebDesign I e II</SA.CareerTitle>
                <SA.CareerDates>08/2010 – 12/2014</SA.CareerDates>
              </SA.CareerItem>
              <SA.CareerItem>
                <SA.CareerCompany>
                  <SA.IconWrapper>
                    <Icons name="developer" />
                  </SA.IconWrapper>
                  Globo.com
                </SA.CareerCompany>
                <SA.CareerTitle>Desenvolvedor Front-End Sênior</SA.CareerTitle>
                <SA.CareerDates>11/2006 – 04/2009</SA.CareerDates>
              </SA.CareerItem>
              <SA.CareerItem>
                <SA.CareerCompany>
                  <SA.IconWrapper className="graduation">
                    <Icons name="graduation" />
                  </SA.IconWrapper>
                  UniverCidade
                </SA.CareerCompany>
                <SA.CareerTitle>Professor da matéria Interfaces Web</SA.CareerTitle>
                <SA.CareerDates>08/2008 – 07/2010</SA.CareerDates>
              </SA.CareerItem>
            </SA.CareerList>
          </SA.ColumnContent>
          <SA.ColumnImage className={scroll >= 700 && scroll < 1500 && 'active'}>
            <SA.TitleSectionImage>Resumo</SA.TitleSectionImage>
            <SA.AboutImage fluid={secondImage.childImageSharp.fluid} />
          </SA.ColumnImage>
        </SA.AboutSection>

        <SA.AboutSection>
          <SA.ColumnContent>
            <SA.TitleSection>Um pouco das minhas Skills</SA.TitleSection>
            <AniLink
              className="link-animated"
              cover
              direction="left"
              bg={themes.palette.general.bgTransition}
              duration={0.6}
              to="/">
              Voltar para o Blog
            </AniLink>
          </SA.ColumnContent>
          <SA.ColumnImage className={scroll >= 1500 && 'active'}>
            <SA.TitleSectionImage>Skills</SA.TitleSectionImage>
            <SA.AboutImage fluid={thirdImage.childImageSharp.fluid} />
          </SA.ColumnImage>
        </SA.AboutSection>
      </SA.PageFluid>
    </Layout>
  );
}
