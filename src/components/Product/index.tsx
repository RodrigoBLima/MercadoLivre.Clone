import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import SellerInfo from "../SellerInfo";

import {
  Container,
  Section,
  Panel,
  Row,
  Column,
  Gallery,
  Description,
} from "./styles";
import ProductAction from "../ProductAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="http://">Compartilhar</a>
        <a href="http://">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          {" "}
          {/* LEFT */}
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          {" "}
          {/* RIGTH  */}
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Jaqueta Masculina Plus Sizetecido leve como corta vento.
      <br /> <br />
      <br />
      <br /> <br />
      Jaqueta confeccionada em tecido sintético levecom forro xadrez,
      sintético,manga longa, fechamento por zíper, bolsos frontais, gola alta
      com bolso interno no forro.
      <br /> <br />
      Clássica e atemporal, o modelo é ideal para usar com calça de sarja e
      camisa.
      <br /> <br />É ideal para compor lookbem aquecidos e confortáveis nos dias
      mais frios
      <br /> <br />
      <br /> <br />
      Composição: 100% Poliéster
      <br /> <br />
      <br /> <br />
      Medidas Plus
      <br /> <br />P PLUS torax 67cm manga 65 cm comprimento total 67 cm.
      <br /> <br />M PLUStorax 69cm manga 67 cm comprimento total 68,5cm.
      <br /> <br />G PLUStorax71cm manga 68 cm comprimento total 70cm.
      <br /> <br />
      GG PLUStorax 73cm manga 69cm comprimento total 71,5cm.
      <br /> <br />
      GG1torax 75cm manga 70cm comprimento total 73cm.
      <br />
    </p>
  </Description>
);

export default Product;
