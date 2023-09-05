import { useCart } from "@/context/cart";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Container, FullTotal, IndividualTotal } from "./styles";
import { AuthPostAPI } from "@/lib/axios";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";

interface TotalProps {
  selected: string;
}
export function Total({ selected }: TotalProps) {
  const [total, setTotal] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { cart } = useCart();
  async function handleCart() {
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
    console.log("connect: ", connect);
    setTotal(connect.body);
    setLoading(false);
  }

  useEffect(() => {
    if (cart) {
      handleCart();
    }
  }, [cart]);

  const [seeAll, setSeeAll] = useState(false);

  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
          {!seeAll ? (
            <></>
          ) : (
            <>
              {total.product.map((item: any) =>
                item.length === 0 ? (
                  <></>
                ) : (
                  <IndividualTotal>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "2px 5px",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {item.productName}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        x {item.quantity}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {item.value.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                    </div>
                  </IndividualTotal>
                )
              )}
              {total.ticket.map((item: any) =>
                item.length === 0 ? (
                  <></>
                ) : (
                  <IndividualTotal>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "2px 5px",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {item.ticketName}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        x {item.quantity}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {item.value.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                    </div>
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
                  {/* {selected === "Pix"
                    ? total.payment.pix.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : total.payment.creditValue.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })} */}
                  ""
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
        </>
      )}
    </Container>
  );
}
