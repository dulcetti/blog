import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAge } from '../utils';

import { themes } from '../styles/themes';
import * as S from '../styles/pages/general';
import * as SA from '../styles/pages/about';

export default function AboutPage() {
  const { firstImage } = useStaticQuery(graphql`
    query imagesAboutQuery {
      firstImage: file(relativePath: { eq: "about/dulcetti-sorrindo.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 900, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Sobre" />
      <SA.PageFluid>
        <SA.AboutSection>
          <SA.ColumnContent>
            <S.PageTitle>Quenhé esse Bruno Dulcetti?</S.PageTitle>
            <S.PageSubTitle>Nome Completo:</S.PageSubTitle>
            <S.PageText>Bruno Rocha Dulcetti</S.PageText>
            <S.PageSubTitle>Atuação:</S.PageSubTitle>
            <S.PageText>Desenvolvimento / DevOps</S.PageText>
            <S.PageSubTitle>Idade: {getAge()} anos</S.PageSubTitle>
            <S.PageSubTitle>Localização:</S.PageSubTitle>
            <S.PageText>Rio de Janeiro/RJ - Brasil</S.PageText>
          </SA.ColumnContent>
          <SA.ColumnImage>
            <SA.AboutImage fluid={firstImage.childImageSharp.fluid} />
          </SA.ColumnImage>
        </SA.AboutSection>

        <SA.AboutSection>
          <SA.ColumnContent>
            <S.PageSubTitle>Formação:</S.PageSubTitle>
            <S.PageText>
              Graduado em Gestão e Criação de Ambientes Internet na Unesa e Pós-Graduado em
              Interface, Internet e Multimídia pela UFF
            </S.PageText>
            <S.PageSubTitle>Descrição:</S.PageSubTitle>
            <S.PageSubSubTitle>Diz pra gente Bruno. Em que área você atua?</S.PageSubSubTitle>
            <S.PageText>
              Nas peladas que rolam nos sábados eu atuo na Lateral Esquerda =D. Deixando a
              brincadeira ridícula de fora, eu atuo na área de webdesign, design gráfico, há mais de
              5 anos. Em todas as empresas em que trabalhei, fui o principal responsável pela
              criação de todos os tipos de mídias digitais e impressas, tais como websites,
              hotsites, folders, banners, outdoors, painéis, apresentações.
            </S.PageText>
            <S.PageSubSubTitle>Legal cara! E você estuda?</S.PageSubSubTitle>
            <S.PageText>
              Com certeza, todos os dias. Sou recém pós-graduado no curso de Interface, Internet e
              Multimídia pela UFF em Niterói. Logo após a conclusão do curso, eu arrumei novamente
              minhas malas (pra variar um pouco neh =P sou praticamente um nômade, um cigano =D)
              mais uma vez e voltei pro Rio, minha terra natal e que amo bastante apesar da
              violência, etc.
            </S.PageText>
          </SA.ColumnContent>
          <SA.ColumnImage>
            <SA.AboutImage fluid={firstImage.childImageSharp.fluid} />
          </SA.ColumnImage>
        </SA.AboutSection>

        <SA.AboutSection>
          <SA.ColumnContent>
            <S.PageSubSubTitle>
              Sucesso total! além de estudar, você também curte essa área de estudos né?
            </S.PageSubSubTitle>
            <S.PageText>
              Sim sim. Seja em fóruns, pelo meu blog, entre outros meios, gosto muito de ajudar os
              outros. Fui instrutor na Formação Webdesigner em Petrópolis, no curso DigiSerra
              Informática e este ano comecei a lecionar o módulo de Flash no curso iLearn. Gosto de
              dar aulas, relação com pessoas e transmitir conhecimentos.
            </S.PageText>
            <S.PageSubSubTitle>Show de bola. Então me ajuda numa parada aqui?</S.PageSubSubTitle>
            <S.PageText>
              Sem exageros ok? Não faço consultoria gratuíta. Eu ajudo e tal, mas como diz um velho
              dizer "Não entrego o peixe, eu ensino a pescar". Essa é minha teoria. Estude, corra
              atrás, não queira tudo na sua mão.
            </S.PageText>
            <S.PageSubSubTitle>Legal Brunão. Vou continuar vendo seu Portfóliio.</S.PageSubSubTitle>
            <S.PageText>
              Seja bem vindo ae e volte sempre. Tentarei manter esse portfólio atualizado, inclusive
              textos como esse. Qualquer coisa, entre em contato. ;]
            </S.PageText>
            <S.PageText>Aquele abraço.</S.PageText>
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
          <SA.ColumnImage>
            <SA.AboutImage fluid={firstImage.childImageSharp.fluid} />
          </SA.ColumnImage>
        </SA.AboutSection>
      </SA.PageFluid>
    </Layout>
  );
}
