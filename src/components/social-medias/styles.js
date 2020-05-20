import styled from 'styled-components';

export const SocialMediasList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Media = styled.li`
  height: 32px;
  margin: 0 5px;
  width: 32px;

  > a {
    display: inline-block;
    height: inherit;
    width: inherit;

    > svg {
      height: inherit;
      width: inherit;
    }
  }
`;
