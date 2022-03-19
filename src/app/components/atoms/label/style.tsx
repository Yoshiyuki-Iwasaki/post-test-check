import styled from 'styled-components';

export const Label = styled.p.attrs((props: any) => ({
  fs: '14px',
  cl: '#fff',
  fw: 400,
  lh: 1.4,
}))`
  font-size: ${(props: any) => props.fs};
  color: ${(props: any) => props.cl};
  font-weight: ${(props: any) => props.fw};
  line-height: ${(props: any) => props.lh};
`;
