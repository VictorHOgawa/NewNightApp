import { GlobalButton } from "@/components/Global/Button";
import { useCart } from "@/context/cart";
import { AuthPostAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import ActionSheet from "actionsheet-react";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { CardContainer, CardDetails, NightAppCard } from "../styles";
import { Container, Item } from "./styles";

interface InstallmentsProps {
  formData: any;
}
export function Installments({ formData }: InstallmentsProps) {
  const [total, setTotal] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { cart } = useCart();
  const [installment, setInstallment] = useState({
    installmentNumber: 0,
    value: 0,
  });
  const [installments, setInstallments] = useState<any>([]);
  const ref = useRef<any>();
  const handleOpen = () => {
    ref.current.open();
  };
  const handleClose = (item: any) => {
    setInstallment(item);
    ref.current.close();
  };
  async function handleCart() {
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
    setTotal(connect.body);
    setInstallments(connect.body.payment.installments);
    setLoading(false);
  }

  useEffect(() => {
    if (cart) {
      handleCart();
    }
  }, [cart]);

  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
          <CardContainer>
            <NightAppCard
              src="/Checkout/blankCard.svg"
              width={1000}
              height={500}
              alt=""
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "30%",
                marginTop: "15%",
              }}
            >
              <CardDetails>
                {formData.cardName === ""
                  ? "Nome no Cartão "
                  : formData.cardName}
              </CardDetails>
              <CardDetails>
                {formData.cardNumber === ""
                  ? "Número do Cartão"
                  : formData.cardNumber}
              </CardDetails>
            </div>
          </CardContainer>
          <br />
          <GlobalButton
            content={
              installment.installmentNumber === 0
                ? "Selecione as Parcelas"
                : `${installment.installmentNumber} x R$ ${installment.value}`
            }
            background={`${Theme.color.secondary_100}`}
            color={`${Theme.color.gray_10}`}
            onClick={handleOpen}
            width="90%"
            height="auto"
            style={{ alignSelf: "center" }}
          />
          <br />
          <ActionSheet
            ref={ref}
            sheetStyle={{
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              background: Theme.color.secondary_100,
              padding: 20,
            }}
            bgStyle={{
              background: "rgba(1, 1, 1, 0.8)",
            }}
          >
            {installments.map(
              (item: {
                installmentNumber: SetStateAction<number>;
                value: any;
              }) => (
                <Item onClick={() => handleClose(item)}>
                  {item.installmentNumber} x{" "}
                  {Number(item.value).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Item>
              )
            )}
          </ActionSheet>
          {/* <Button>
            <Toggle
              style={{
                color: `${Theme.color.gray_10}`,
                background: `${Theme.color.primary_60}`,
                border: 0,
                width: "100%",
              }}
            >
              Número de Parcelas
            </Toggle>
            <Menu style={{ width: "100%" }}>
              <ItemText> Parcela(s)</ItemText>
              {total.payment.installments.map((item: any) => (
                <Item
                  key={item.installmentNumber}
                  onClick={(e: any) => {
                    () => setInstallment(e.target.value);
                  }}
                >
                  {item.installmentNumber}
                </Item>
              ))}
            </Menu>
          </Button> */}
        </>
      )}
    </Container>
  );
}
