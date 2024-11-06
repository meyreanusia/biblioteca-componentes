import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.tipo == 'primario' ? '#eb9B00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbBotaoProps) =>
    props.tipo == 'primario' ? '#fff' : '#EB9B00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: AbBotaoProps) =>
    props.tipo == 'primario'
      ? css`
          &:hover {
            background: #bb7900;
            border: #bb7900 2px solid;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: #b87900 2px solid;
            color: #bb7900;
          }
        `};
`;
export const AbBotao = ({
  texto,
  onClick,
  tipo = 'primario',
}: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};
