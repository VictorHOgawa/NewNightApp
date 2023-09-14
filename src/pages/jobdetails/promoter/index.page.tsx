import { Ad } from "@/components/Global/Ad";
import { GlobalButton } from "@/components/Global/Button";
import { Header } from "@/components/Global/Header";
import { More } from "@/components/Global/More";
import { GlobalTitle } from "@/components/Global/Title";
import Theme from "@/styles/themes";
import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { Container, Content, Help, Icon, Img, JobCard, Text } from "./styles";
import { AuthPostAPI, AuthPutAPI, authGetAPI } from "@/lib/axios";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import moment from "moment";
import "moment/locale/pt-br";
import { useRouter } from "next/router";

export default function JobDetails() {
  const router = useRouter();
  const [jobs, setJobs] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  async function getDetails() {
    setLoading(true);
    const connect = await authGetAPI("/user/promoter");
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading(false);
    }
    setJobs(connect.body.userEventPromoter);
    return setLoading(false);
  }

  async function handleStatus(item: any, index: number) {
    setCurrentIndex(index);
    setLoading1(true);
    const connect = await AuthPutAPI(`/user/promoter/${item.id}`, {
      status: item.status,
    });
    console.log("connect: ", connect);
    if (connect.status !== 200) {
      alert(connect.body);
      return setLoading1(false);
    }
    router.reload();
    return setLoading1(false);
  }

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <Container>
      <Header />
      <Ad />
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <br />
          <br />
          <Content>
            <GlobalTitle title="Jobs - Promoter" />
            {jobs.map((item: any, index: number) => (
              <JobCard>
                <Stack direction="horizontal" style={{ alignItems: "center" }}>
                  <Img
                    src={item.event_promoter.event.photo_location}
                    width={50}
                    height={50}
                    alt=""
                  />
                  <Stack style={{ marginLeft: "5%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      {item.event_promoter.event.name}
                    </Text>
                    <Text>
                      <Icon
                        src="/Global/Icons/Clock.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                      {""}
                      <Text style={{ fontWeight: "bold" }}>
                        {""}{" "}
                        {moment(item.event_promoter.event.date).format(
                          "DD/MM/YYYY"
                        )}
                      </Text>{" "}
                      às{" "}
                      {moment(item.event_promoter.event.date).format("HH:mm")}
                    </Text>
                    <Text>
                      <Icon
                        src="/Global/Icons/LocationPin.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                      <Text style={{ fontWeight: "bold" }}>
                        {""} {item.event_promoter.event.local}
                      </Text>{" "}
                      {item.event_promoter.event.city.name} /{" "}
                      {item.event_promoter.event.city.state}
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="horizontal" style={{ alignItems: "center" }}>
                  <Stack>
                    <Stack direction="horizontal">
                      <Icon
                        src="/Global/Icons/Promotion.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                      {""}
                      <Text>
                        {""} <strong>Código:</strong> {item.code}
                      </Text>
                    </Stack>
                    <Stack direction="horizontal">
                      <Icon
                        src="/Global/Icons/sell.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                      {""}
                      <Text>
                        <strong>Vendas:</strong>{" "}
                        {item.user_event_product.length +
                          item.user_ticket.length}
                      </Text>
                    </Stack>
                  </Stack>

                  <GlobalButton
                    content={item.status === "ACTIVE" ? "Desativar" : "Ativar"}
                    background={
                      item.status === "ACTIVE"
                        ? Theme.color.red_60
                        : Theme.color.confirmation
                    }
                    color={
                      item.status === "ACTIVE"
                        ? Theme.color.gray_10
                        : Theme.color.background
                    }
                    width="auto"
                    height="auto"
                    fontSize={12}
                    style={{ alignSelf: "center" }}
                    onClick={() => handleStatus(item, index)}
                    loading={loading1 && currentIndex === index}
                  />
                </Stack>
              </JobCard>
            ))}
          </Content>
          <Help>
            <Icon src="/Checkout/Video.svg" width={12} height={12} alt="" />
            {""}Dúvidas? Veja esse Rápido Vídeo
          </Help>

          <More type={"promoter"} />
        </>
      )}
    </Container>
  );
}
