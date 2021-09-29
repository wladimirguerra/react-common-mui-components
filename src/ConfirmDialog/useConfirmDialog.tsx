import { ReactNode, useState } from "react";
import ConfirmDialog, { ConfirmDialogProps } from "./ConfirmDialog";

export function useConfirmDialog() {
  const [dialogProps, setDialogProps] =
    useState<Omit<ConfirmDialogProps, "onClose">>();

  return {
    Dialog: () =>
      dialogProps ? (
        <ConfirmDialog
          onClose={() =>
            setDialogProps(
              (dialogProps) => dialogProps && { ...dialogProps, show: false }
            )
          }
          {...dialogProps}
        />
      ) : null,
    showDialog(
      title: ReactNode,
      message: ReactNode,
      onConfirm: () => void,
      options?: Omit<
        ConfirmDialogProps,
        "onConfirm" | "onClose" | "message" | "title" | "show"
      >
    ) {
      setDialogProps({
        ...options,
        message,
        title,
        onConfirm,
        show: true,
      });
    },
  };
}
