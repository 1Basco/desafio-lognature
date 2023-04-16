import { translate } from "../../../configuration/i18n.configuration";
import Helmet from "../../../resources/components/helmet";

export default function TaskPage(): JSX.Element {
  return (
    <>
      <Helmet title={translate("app.login")} />
    </>
  );
}
