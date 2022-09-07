import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Start } from "./components/Start/Start";
import { Universe } from "./components/Universe/Universe";
import { Curtain } from "./components/Curtain/Curtain";

function App() {
  const [hide, setHide] = React.useState(true);

  return (
    <>
      <Curtain>
        {hide && <Start setHide={setHide} hide={hide} />}
        {!hide && <Universe setHide={setHide} hide={hide} />}
      </Curtain>
    </>
  );
}

export default App;
