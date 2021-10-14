import React, { useState } from "react";

import { FormattedMessage } from "react-intl";
function Footer() {
  const [setYear] = useState(new Date().getFullYear());

  return (
    <footer>
      <p>
        © {setYear} <FormattedMessage id="footer.copy" />
      </p>
    </footer>
  );
}

export default Footer;
