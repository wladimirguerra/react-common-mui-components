import Button from "@mui/material/Button";
import { useState } from "react";
import { ConfirmDialog, useConfirmDialog } from "react-common-mui-components";

const App = () => {
  const [show, setShow] = useState(false);
  const { Dialog, showDialog } = useConfirmDialog();
  return (
    <div>
      <Button onClick={() => setShow(true)}>Show</Button>
      <ConfirmDialog
        show={show}
        onClose={() => setShow(false)}
        message={"Delete address 0001?"}
        title={"Address"}
      />
      <Button
        onClick={() =>
          showDialog("Delete?", "Dialog from Hook", () => {}, {
            labels: { yes: { label: "Sim", color: "secondary" } },
          })
        }
      >
        Show Confirm Dialog Hook
      </Button>
      <Dialog />
    </div>
  );
};

export default App;
