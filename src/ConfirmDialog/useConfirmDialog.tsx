import { ReactNode, useState } from "react";
import ConfirmDialog, { ConfirmDialogProps } from "./ConfirmDialog";

/**
 * This hook handle the {@link ConfirmDialog}'s show state and provides an
 * imperative method to display the dialog.
 */
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
