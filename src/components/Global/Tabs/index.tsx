import { Tab } from "./styles";

interface TabProps {
  active: boolean;
}

export function Tabs({ active }: TabProps) {
  return <Tab active={active}></Tab>;
}
