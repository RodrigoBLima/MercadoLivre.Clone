import React from "react";

import {
  Container,
  Title,
  LocationCard,
  ClockIcon,
  LocationIcon,
  More,
  ReputationCard,
  SupportIcon,
  ReputationThermometer,
  ReputationRow,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>
      <LocationCard>
        <LocationIcon />
        <div>
          <p>Localização</p>
          <strong>Rio de Janeiro, RJ</strong>
        </div>
      </LocationCard>
      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>
        <ReputationRow>
          <div>
            <strong>511</strong>
            <span>Vendas nos últimos 6 meses</span>
          </div>

          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Vendas nos últimos 6 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>
      <More href="#">Ver mais informações sobre este vendedor</More>
    </Container>
  );
};

export default SellerInfo;
