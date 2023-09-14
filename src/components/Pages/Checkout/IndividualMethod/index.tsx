import { CardMethod } from "./Cards";
import { PixMethod } from "./Pix";
import { Container } from "./styles";

interface IndividualMethodProps {
  selected: string;
  coupon: string;
  setCoupon: any;
  AddCoupon: any;
  loadingCoupon: boolean;
}
export function IndividualMethod({
  selected,
  coupon,
  setCoupon,
  AddCoupon,
  loadingCoupon,
}: IndividualMethodProps) {
  return (
    <Container>
      {selected === "Pix" ? (
        <PixMethod
          coupon={coupon}
          setCoupon={setCoupon}
          AddCoupon={AddCoupon}
          loadingCoupon={loadingCoupon}
        />
      ) : (
        <CardMethod
          coupon={coupon}
          setCoupon={setCoupon}
          AddCoupon={AddCoupon}
          loadingCoupon={loadingCoupon}
        />
      )}
    </Container>
  );
}
