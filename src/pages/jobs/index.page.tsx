import { Header } from "@/components/Global/Header";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { GlobalTitle } from "@/components/Global/Title";
import { useRouter } from "next/router";
import { Container, Content, NightPremium } from "./styles";

export default function Jobs() {
  const router = useRouter();
  const Jobs = [
    // {
    //   id: 1,
    //   bannerLocation: "/premium.svg",
    //   title: "Portaria",
    //   type: "Portaria",
    // },
    {
      id: 2,
      bannerLocation: "/premium.svg",
      title: "Bar",
      type: "Bar",
    },
    {
      id: 3,
      bannerLocation: "/premium.svg",
      title: "Promoters",
      type: "Promoters",
    },
  ];
  return (
    <Container>
      <LoadingFull />
      <Header page="other" />
      <br />
      <Content>
        {Jobs.map((item) => (
          <>
            <GlobalTitle title={item.title} />
            <NightPremium
              src={item.bannerLocation}
              width={310}
              height={90}
              alt=""
              onClick={() => router.push(`/jobdetails/` + item.type)}
            />
            <br />
          </>
        ))}
      </Content>
    </Container>
  );
}
