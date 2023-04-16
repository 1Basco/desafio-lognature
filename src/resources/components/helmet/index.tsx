import { Helmet as HeadHelmet } from "react-helmet";

interface HelmetOptions {
  title: string;
}

const Helmet = ({ title }: HelmetOptions): JSX.Element => (
  <HeadHelmet>
    <title>{title}</title>
  </HeadHelmet>
);

export default Helmet;
