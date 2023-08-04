import { Col, Row } from "react-bootstrap";
import { Container, FullTotal, IndividualTotal } from "./styles";
import { useState } from "react";

export function Total() {
  const Items = [
    {
      product: "Produto 1",
      cost: 20,
    },
    {
      product: "Produto 2",
      cost: 500,
    },
    {
      product: "Produto 1",
      cost: 220,
    },
    {
      product: "Produto 2",
      cost: 50240,
    },
    {
      product: "Produto 1",
      cost: 205,
    },
    {
      product: "Produto 2",
      cost: 5010,
    },
  ];

  const [seeAll, setSeeAll] = useState(false);

  return (
    <Container>
      {!seeAll ? (
        <></>
      ) : (
        <>
          {Items.map((item) =>
            item.cost === 0 ? (
              <></>
            ) : (
              <IndividualTotal>
                <Row
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                    }}
                  >
                    {item.product}
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {item.cost.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Col>
                </Row>
              </IndividualTotal>
            )
          )}
        </>
      )}
      <FullTotal>
        <Row
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Col style={{ display: "flex" }}>Total</Col>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <label>
              {Items.reduce((sum, item) => sum + item.cost, 0).toLocaleString(
                "pt-br",
                { style: "currency", currency: "BRL" }
              )}
            </label>
          </Col>
        </Row>
      </FullTotal>
      <a
        onClick={() => setSeeAll(!seeAll)}
        style={{
          textAlign: "center",
          marginTop: "5%",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Ver Detalhes
      </a>
    </Container>
  );
}
