import { ConfirmDialog, useConfirmDialog } from "./";

describe("index export all components", () => {
  test("ConfirmDialog and its utilities are exported", () => {
    expect(ConfirmDialog).toBeDefined();
    expect(useConfirmDialog).toBeDefined();
  });
});
