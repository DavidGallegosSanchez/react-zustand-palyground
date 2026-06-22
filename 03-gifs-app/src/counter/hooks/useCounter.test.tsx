import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should initizalize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test("should initizalize with value 20", () => {
    const initialVaule = 20;
    const { result } = renderHook(() => useCounter(initialVaule));

    expect(result.current.counter).toBe(initialVaule);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });

  test("should decrement counter when handleSubtract is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(9);
  });

  test("should reset counter when handleReset is called ", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd(); // Ahora vale 11
    });

    expect(result.current.counter).toBe(11);

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });

  test("should reset counter when handleReset is called with default value", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
