/*
 * Copyright (c) 2021 by Wladimir Guerra. All rights reserved.
 */
import { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export type LabelType = {
  label: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
};

export interface LabelsType {
  yes?: LabelType;
  no?: LabelType;
}

export interface ConfirmDialogProps {
  onConfirm?: () => void;
  onClose?: () => void;
  show: boolean;
  title: ReactNode;
  message: ReactNode;
  labels?: LabelsType;
}

/**
 * Basic confirm dialog where it displays a title, a question message, and two
 * buttons(Yes and No).
 *
 * The button's labels text and colors are customizable.
 *
 * @param props
 * @constructor
 */
export const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  const { onClose, message, onConfirm, show, title, labels } = props;
  return (
    <div>
      <Dialog open={show} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="text"
            onClick={onClose}
            color={labels?.no?.color ?? "primary"}
          >
            {labels?.no?.label ?? "No"}
          </Button>
          <Button
            variant="text"
            color={labels?.yes?.color ?? "primary"}
            onClick={() => {
              onClose?.();
              onConfirm?.();
            }}
          >
            {labels?.yes?.label ?? "Yes"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
