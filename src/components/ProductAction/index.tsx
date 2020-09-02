import React from "react";

import {
  Container,
  DispatchTag,
  InstallmentsInfo,
  Actions,
  Benefits,
  CheckIcon,
  Condition,
  HeartIcon,
  Button,
  PriceCard,
  PriceRow,
  MethodCard,
  Row,
  ShieldIcon,
  StockStatus,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 80 vendidos</Condition>
      <Row>
        <h1>Jaqueta Masculina Plus Corta Vento 27454</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>
      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">78</span>
          <span className="cents">88</span>
        </PriceRow>
        <InstallmentsInfo>em até 12x de R$ 6,57</InstallmentsInfo>
      </PriceCard>
      <StockStatus>Estoque disponível</StockStatus>
      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete grátis </span>
          <span className="details">benefícil Lorem Ipsun </span>
          <a href="" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>
      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          Devolução grátis. Você tem 30 dias a partir da data de recebimento.
        </li>
        <li>
          <ShieldIcon />
          Compra Garantida, receba o produto que está esperando ou devolvemos o
          dinheiro.
        </li>
        <li>
          <ShieldIcon />
          Mercado Pontos. Você acumula 26 pontos.
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
