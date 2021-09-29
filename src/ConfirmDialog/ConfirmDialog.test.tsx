import { fireEvent, render } from "@testing-library/react";
import ConfirmDialog from "./ConfirmDialog";

const message = "---!!!Should delete?!!!---";
const title = "??Delete??";

test("message and title is rendered", () => {
  const { queryByText } = render(
    <ConfirmDialog show={true} title={title} message={message} />
  );
  expect(queryByText(message)).toBeDefined();
  expect(queryByText(title)).toBeDefined();
});

test("label yes is rendered", () => {
  const labelYes = "___!!Yes!!___";
  const { queryByText } = render(
    <ConfirmDialog
      show={true}
      title={title}
      message={message}
      labels={{ yes: { label: labelYes } }}
    />
  );
  expect(queryByText(labelYes)).toBeDefined();
  expect(queryByText("Yes")).toBeNull();
  expect(queryByText("No")).toBeDefined();
});

test("label no is rendered", () => {
  const labelNo = "___!!No!!___";
  const { queryByText } = render(
    <ConfirmDialog
      show={true}
      title={title}
      message={message}
      labels={{ no: { label: labelNo } }}
    />
  );
  expect(queryByText(labelNo)).toBeDefined();
  expect(queryByText("Yes")).toBeDefined();
  expect(queryByText("No")).toBeNull();
});

test("yes button fires proper callback", () => {
  const onConfirm = jest.fn();
  const onClose = jest.fn();

  const { getByText } = render(
    <ConfirmDialog
      show={true}
      title={"Delete?"}
      message={"Do you want to delete?"}
      onConfirm={onConfirm}
      onClose={onClose}
    />
  );
  const yesButton = getByText("Yes");
  fireEvent.click(yesButton);
  expect(onConfirm).toHaveBeenCalledTimes(1);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("no button fires proper callback", () => {
  const onConfirm = jest.fn();
  const onClose = jest.fn();

  const { getByText } = render(
    <ConfirmDialog
      show={true}
      title={"Delete?"}
      message={"Do you want to delete?"}
      onConfirm={onConfirm}
      onClose={onClose}
    />
  );
  const noButton = getByText("No");
  fireEvent.click(noButton);
  expect(onConfirm).not.toHaveBeenCalled();
  expect(onClose).toHaveBeenCalledTimes(1);
});
