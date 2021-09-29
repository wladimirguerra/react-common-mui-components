import { fireEvent, render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useConfirmDialog } from "./useConfirmDialog";
import { capitalize } from "@mui/material";

test("Dialog is null if showDialog has not been called", () => {
  const { result } = renderHook(useConfirmDialog);

  expect(result.current.Dialog()).toBeNull();
});
test("Correct render when showDialog is called", async () => {
  const { result } = renderHook(useConfirmDialog);
  const message = "---Really, Really want to delete?---";
  const title = "---!!Delete!!---";
  const onConfirm = jest.fn();
  act(() => {
    result.current.showDialog(title, message, onConfirm);
  });

  expect(result.current.Dialog).not.toBeNull();

  const { queryByText, getByText } = render(<result.current.Dialog />);

  expect(queryByText(message)).toBeDefined();
  expect(queryByText(title)).toBeDefined();
  expect(onConfirm).not.toHaveBeenCalled();

  const messageContainerClassName = queryByText(message)?.className;
  const titleContainerClassName = queryByText(title)?.className;
  expect(messageContainerClassName).toContain("MuiDialogContentText-root");
  expect(titleContainerClassName).toContain("MuiDialogTitle-root");

  const yesButton = getByText("Yes");
  fireEvent.click(yesButton);
  expect(onConfirm).toHaveBeenCalledTimes(1);
});

test("Correct render labels", () => {
  const { result } = renderHook(useConfirmDialog);
  const yesLabel = "__!YES!__";
  const noLabel = "__!NO!__";
  const yesColor = "info";
  const noColor = "warning";
  act(() => {
    result.current.showDialog("title", "message", () => {}, {
      labels: {
        yes: { label: yesLabel, color: yesColor },
        no: { label: noLabel, color: noColor },
      },
    });
  });

  const { queryByText } = render(<result.current.Dialog />);

  const yesButton = queryByText(yesLabel);
  const noButton = queryByText(noLabel);
  expect(yesButton).not.toBeNull();
  expect(yesButton!.className).toContain(
    `MuiButton-text${capitalize(yesColor)}`
  );
  expect(queryByText("YES")).toBeNull();
  expect(noButton).not.toBeNull();
  expect(noButton!.className).toContain(`MuiButton-text${capitalize(noColor)}`);
  expect(queryByText("NO")).toBeNull();
});
