import styled from 'styled-components';
import { Link } from 'gatsby';
import { themes } from '../../styles/themes';

export const Sidebar = styled.aside`
  background-color: ${themes.palette.sidebar.bg};
  box-shadow: 0 1px 6px 0px #ccc;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${themes.grid.maxWidth};
  padding: 10px 0;
`;

export const LogoLink = styled(Link)`
  display: block;
  position: relative;
`;

export const Title = styled.h1`
  height: 0px;
  overflow: hidden;
  width: 0;
`;
