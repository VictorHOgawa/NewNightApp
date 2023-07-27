import { Tab } from "./styles";

interface TabProps extends React.ComponentProps<typeof Tab> {
  active: boolean;
}

export function Tabs({ active, ...rest }: TabProps) {
  return <Tab active={active} {...rest} />;
}
