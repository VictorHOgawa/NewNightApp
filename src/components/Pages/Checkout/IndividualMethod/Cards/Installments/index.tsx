import { GlobalButton } from "@/components/Global/Button";
import { useCart } from "@/context/cart";
import { AuthPostAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import ActionSheet from "actionsheet-react";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { CardContainer, CardDetails, NightAppCard } from "../styles";
import { Container, Item } from "./styles";
import { Spinner } from "react-bootstrap";

interface InstallmentsProps {
  formData: any;
  installmentCount: number;
  setInstallmentCount: any;
  selected: string;
}
export function Installments({
  formData,
  installmentCount,
  setInstallmentCount,
  selected,
}: InstallmentsProps) {
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
    setInstallmentCount(item.installmentNumber);
    ref.current.close();
  };
  async function handleCart() {
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
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
        <Spinner
          animation="border"
          variant="primary"
          style={{ alignSelf: "center" }}
        />
      ) : (
        <>
          {selected !== "selected3" ? (
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
            </>
          )}
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
        </>
      )}
    </Container>
  );
}
