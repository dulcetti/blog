import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Layout, SEO, Icons, MySkillCharts } from '../components';
import { getAge, isMobile } from '../utils';

import { themes } from '../styles/themes';
import * as S from '../styles/pages/general';
import * as Sa from '../styles/pages/about';

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

  typeof window !== 'undefined' && !isMobile() && document.addEventListener('scroll', updateImage);

  return (
    <Layout>
      <SEO
        description="Um cara curioso na área de tecnologia. Comecei na área de design gráfico e webdesign,
              mas acabei migrando, felizmente, para o desenvolvimento."
        image={secondImage.childImageSharp.fluid.src}
        title="Sobre o Bruno Dulcetti"
      />
      <Sa.PageFluid>
        <Sa.AboutSection>
          <Sa.ColumnContent>
            <Sa.TitleSection>"Quenhé" esse Bruno Dulcetti?</Sa.TitleSection>
            <S.PageText>
              Um cara curioso na área de tecnologia. Comecei na área de design gráfico e webdesign,
              mas acabei migrando, felizmente, para o desenvolvimento. Me especializei em Front-End,
              o principal foco do meu{' '}
              <AniLink
                className="link-animated"
                cover
                direction="left"
                bg={themes.bgTransition}
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
          </Sa.ColumnContent>
          <Sa.ColumnImage className={scroll < 700 && 'active'}>
            <Sa.TitleSectionImage>"Quenhé"?</Sa.TitleSectionImage>
            <Sa.AboutImage fluid={firstImage.childImageSharp.fluid} />
          </Sa.ColumnImage>
        </Sa.AboutSection>

        <Sa.AboutSection>
          <Sa.ColumnContent>
            <Sa.TitleSection>Um breve resumo</Sa.TitleSection>
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
              . E segue abaixo uma pequena lista mais atual, mas claro, não muito completa que dá
              pro gasto.
            </S.PageText>
            <Sa.CareerList>
              <Sa.CareerItem>
                <Sa.CareerCompany>
                  <Sa.IconWrapper>
                    <Icons name="developer" />
                  </Sa.IconWrapper>
                  Wooza
                </Sa.CareerCompany>
                <Sa.CareerTitle>Coordenador de desenvolvimento</Sa.CareerTitle>
                <Sa.CareerDates>Jul 2019 – Present</Sa.CareerDates>
                <Sa.CareerTitle>Arquiteto de soluções Front-End</Sa.CareerTitle>
                <Sa.CareerDates>Jan 2018 – Jul 2019</Sa.CareerDates>
                <Sa.CareerTitle>Desenvolvedor Front-End Sênior</Sa.CareerTitle>
                <Sa.CareerDates>Jun 2016 – Jan 2018</Sa.CareerDates>
              </Sa.CareerItem>
              <Sa.CareerItem>
                <Sa.CareerCompany>
                  <Sa.IconWrapper>
                    <Icons name="developer" />
                  </Sa.IconWrapper>
                  Videolog
                </Sa.CareerCompany>
                <Sa.CareerTitle>CTO</Sa.CareerTitle>
                <Sa.CareerDates>08/2013 – 01/15</Sa.CareerDates>
                <Sa.CareerTitle>Gerente de Projetos</Sa.CareerTitle>
                <Sa.CareerDates>04/2009 – 08/2013</Sa.CareerDates>
                <Sa.CareerTitle>Desenvolvedor Front-End Sênior</Sa.CareerTitle>
                <Sa.CareerDates>11/2005 – 04/2009</Sa.CareerDates>
              </Sa.CareerItem>
              <Sa.CareerItem>
                <Sa.CareerCompany>
                  <Sa.IconWrapper>
                    <Icons name="developer" />
                  </Sa.IconWrapper>
                  Mobicare
                </Sa.CareerCompany>
                <Sa.CareerTitle>Desenvolvedor Front-End Sênior</Sa.CareerTitle>
                <Sa.CareerDates>11/2014 – 02/2016</Sa.CareerDates>
              </Sa.CareerItem>
              <Sa.CareerItem>
                <Sa.CareerCompany>
                  <Sa.IconWrapper className="graduation">
                    <Icons name="graduation" />
                  </Sa.IconWrapper>
                  Faculdade CCAA
                </Sa.CareerCompany>
                <Sa.CareerTitle>Professor das matérias WebDesign I e II</Sa.CareerTitle>
                <Sa.CareerDates>08/2010 – 12/2014</Sa.CareerDates>
              </Sa.CareerItem>
              <Sa.CareerItem>
                <Sa.CareerCompany>
                  <Sa.IconWrapper>
                    <Icons name="developer" />
                  </Sa.IconWrapper>
                  Globo.com
                </Sa.CareerCompany>
                <Sa.CareerTitle>Desenvolvedor Front-End Sênior</Sa.CareerTitle>
                <Sa.CareerDates>11/2006 – 04/2009</Sa.CareerDates>
              </Sa.CareerItem>
              <Sa.CareerItem>
                <Sa.CareerCompany>
                  <Sa.IconWrapper className="graduation">
                    <Icons name="graduation" />
                  </Sa.IconWrapper>
                  UniverCidade
                </Sa.CareerCompany>
                <Sa.CareerTitle>Professor da matéria Interfaces Web</Sa.CareerTitle>
                <Sa.CareerDates>08/2008 – 07/2010</Sa.CareerDates>
              </Sa.CareerItem>
            </Sa.CareerList>
          </Sa.ColumnContent>
          <Sa.ColumnImage className={scroll >= 700 && scroll < 1500 && 'active'}>
            <Sa.TitleSectionImage>Resumo</Sa.TitleSectionImage>
            <Sa.AboutImage fluid={secondImage.childImageSharp.fluid} />
          </Sa.ColumnImage>
        </Sa.AboutSection>

        <Sa.AboutSection>
          <Sa.ColumnContent>
            <Sa.TitleSection>Um pouco das minhas Skills</Sa.TitleSection>
            <S.PageText>
              Aqui eu mostro algumas skills que possuo. Tirando o fodasse e beber, que eu gosto
              muito e acho que mando bem, consigo me dar bem em muitos outros assuntos que eu curto
              há muitos anos.
            </S.PageText>
            <MySkillCharts />
            <S.PageText>
              Mas claro, sou campeão em falar besteira e zoar. Fora as atividades musicais, dentre
              outras coisas nas horas vagas, fora do trabalho. Ficar fazendo site, blog, muito
              formal e sério não é comigo, tem que ter uma sacanagem, sempre.
            </S.PageText>
            <AniLink
              className="link-animated"
              cover
              direction="left"
              bg={themes.bgTransition}
              duration={0.6}
              to="/">
              &laquo; Voltar para o Blog
            </AniLink>
          </Sa.ColumnContent>
          <Sa.ColumnImage className={scroll >= 1500 && 'active'}>
            <Sa.TitleSectionImage>Skills</Sa.TitleSectionImage>
            <Sa.AboutImage fluid={thirdImage.childImageSharp.fluid} />
          </Sa.ColumnImage>
        </Sa.AboutSection>
      </Sa.PageFluid>
    </Layout>
  );
}
