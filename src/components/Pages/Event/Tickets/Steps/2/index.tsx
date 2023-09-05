import { StaticImage } from "@/components/Global/StaticImg";
import { StaticImg } from "@/components/Global/StaticImg/styles";
import { GlobalTitle } from "@/components/Global/Title";
import { useCart } from "@/context/cart";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import {
  Counter,
  CounterArea,
  Item,
  ItemButton,
  Items,
  TicketTitle,
  TicketType,
  Title,
} from "../../styles";
import { Hoverable } from "@/components/Global/Hoverable";

interface StepTwoProps {
  product: {
    name: string;
    value: number;
    id: string;
    type: string;
    photo_location: string;
  }[];
  type: string;
  setType: any;
}
export function StepTwo({ product, type, setType }: StepTwoProps) {
  const [filteredProduct, setFilteredProduct] = useState<any>([]);
  const { cart, add } = useCart();
  const [moreProducts, setMoreProducts] = useState(false);

  function handleSelectType(type: string) {
    setFilteredProduct(product.filter((item) => item.type === type));
    setType(type);
  }

  const handleChange = (
    type: string,
    product: { name: string; value: number; id: string }
  ) => {
    const exists = cart.product.find(
      (item: { id: string }) => item.id === product.id
    );
    const products = cart.product.filter(
      (item: { id: string }) => item.id !== product.id
    );
    if (type === "increase") {
      const quantity = exists ? exists.quantity + 1 : 1;

      return add([...products, { ...product, quantity }], "product");
    }
    if (type === "decrease" && exists && exists.quantity > 1) {
      const quantity = exists.quantity - 1;
      return add([...products, { ...product, quantity }], "product");
    } else {
      return add(products, "product");
    }
  };

  function ticketQuantity(id: string) {
    const ticketExists = cart.product.find(
      (ticket: { id: string }) => ticket.id === id
    );
    return ticketExists ? ticketExists.quantity : 0;
  }

  const exists = product.find((item) => item.type === "COMBO");

  return (
    <>
      <GlobalTitle
        title="Produtos"
        style={{ marginTop: "15%", marginLeft: "2.5%" }}
      />
      {type === "" ? (
        <>
          <Items>
            {product.filter((item) => item.type === "VODKA").length > 0 ? (
              <ItemButton onClick={() => handleSelectType("VODKA")}>
                <Item src="/Events/Item1.svg" width={200} height={200} alt="" />
              </ItemButton>
            ) : (
              <></>
            )}
            {product.map((item) =>
              item.type === "WHISKEY" ? (
                <ItemButton onClick={() => handleSelectType("WHISKEY")}>
                  <Item
                    src="/Events/Item2.svg"
                    width={200}
                    height={200}
                    alt=""
                  />
                </ItemButton>
              ) : (
                <></>
              )
            )}
            {product.map((item) =>
              item.type === "BEER" ? (
                <ItemButton onClick={() => handleSelectType("BEER")}>
                  <Item
                    src="/Events/Item3.svg"
                    width={200}
                    height={200}
                    alt=""
                  />
                </ItemButton>
              ) : (
                <></>
              )
            )}
            {product.filter((item) => item.type === "COMBO").length > 0 ? (
              <ItemButton onClick={() => handleSelectType("COMBO")}>
                <Item src="/Events/Item4.svg" width={200} height={200} alt="" />
              </ItemButton>
            ) : (
              <></>
            )}
            {product.map((item) =>
              item.type === "ENERGÉTICOS" ? (
                <ItemButton onClick={() => handleSelectType("ENERGÉTICOS")}>
                  <Item
                    src="/Events/Item5.svg"
                    width={200}
                    height={200}
                    alt=""
                  />
                </ItemButton>
              ) : (
                <></>
              )
            )}
            {product.map((item) =>
              item.type === "OUTROS" ? (
                <ItemButton onClick={() => handleSelectType("OUTROS")}>
                  <Item
                    src="/Events/Item6.svg"
                    width={200}
                    height={200}
                    alt=""
                  />
                </ItemButton>
              ) : (
                <></>
              )
            )}
          </Items>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <input
              type="checkbox"
              id="more"
              onChange={() => setMoreProducts(!moreProducts)}
            />{" "}
            {""}
            <label htmlFor="more" style={{ color: "white", marginLeft: "2%" }}>
              {""} Não quero comprar Produtos
            </label>
          </div>
        </>
      ) : (
        filteredProduct.map((item: any) => (
          <>
            {filteredProduct.length === 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    width: 100,
                    height: 100,
                    background: "red",
                    color: "red",
                  }}
                >
                  test
                </div>
              </>
            ) : (
              <>
                <Title>{item.type}</Title>
                <Stack gap={2}>
                  <TicketType>
                    <StaticImage
                      src={item.photo_location}
                      width={40}
                      height={40}
                      alt=""
                    />
                    <TicketTitle>
                      <strong>{item.name}</strong>
                      <br />{" "}
                      {item.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TicketTitle>
                    <CounterArea>
                      <Hoverable>
                        <StaticImg
                          src="/Global/Icons/Minus.svg"
                          width={20}
                          height={20}
                          alt=""
                          onClick={() => handleChange("decrease", item)}
                        />
                      </Hoverable>
                      <Counter>{ticketQuantity(item.id)}</Counter>
                      <Hoverable>
                        <StaticImg
                          src="/Global/Icons/Plus.svg"
                          width={20}
                          height={20}
                          alt=""
                          onClick={() => handleChange("increase", item)}
                        />
                      </Hoverable>
                    </CounterArea>
                  </TicketType>
                </Stack>
              </>
            )}
          </>
        ))
      )}
    </>
  );
}
