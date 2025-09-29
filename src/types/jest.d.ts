import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R = void> {
      // Jest matchers
      toHaveBeenCalled(): R;
      toHaveBeenCalledTimes(expected: number): R;
      toHaveBeenCalledWith(...params: unknown[]): R;
      toHaveBeenLastCalledWith(...params: unknown[]): R;
      toHaveBeenNthCalledWith(n: number, ...params: unknown[]): R;
      toHaveReturned(): R;
      toHaveReturnedTimes(expected: number): R;
      toHaveReturnedWith(expected: unknown): R;
      toHaveLastReturnedWith(expected: unknown): R;
      toHaveNthReturnedWith(n: number, expected: unknown): R;
      toHaveLength(expected: number): R;
      toHaveProperty(keyPath: string | string[], value?: unknown): R;
      toMatch(expected: string | RegExp): R;
      toMatchObject(expected: Record<string, unknown>): R;
      toMatchSnapshot(propertyMatchers?: unknown, hint?: string): R;
      toMatchInlineSnapshot(propertyMatchers?: unknown, snapshot?: string): R;
      toStrictEqual(expected: unknown): R;
      toThrow(error?: string | RegExp | Error | typeof Error): R;
      toThrowError(error?: string | RegExp | Error | typeof Error): R;
      toThrowErrorMatchingSnapshot(hint?: string): R;
      toThrowErrorMatchingInlineSnapshot(snapshot?: string): R;

      // @testing-library/jest-dom matchers
      toBeInTheDocument(): R;
      toHaveValue(value: string | number | string[] | undefined): R;
      toBeChecked(): R;
      toBeRequired(): R;
      toHaveAttribute(attr: string, value?: string | RegExp): R;
      toHaveClass(...classNames: string[]): R;
      toHaveFocus(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeEmpty(): R;
      toBeEmptyDOMElement(): R;
      toBeInvalid(): R;
      toBeValid(): R;
      toBeVisible(): R;
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(html: string): R;
      toHaveAccessibleDescription(description?: string | RegExp): R;
      toHaveAccessibleName(name?: string | RegExp): R;
      toHaveDisplayValue(value: string | string[] | RegExp | RegExp[]): R;
      toHaveErrorMessage(message?: string | RegExp): R;
      toHaveFormValues(values: Record<string, unknown>): R;
      toHaveStyle(css: string | Record<string, unknown>): R;
      toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
      toBePartiallyChecked(): R;
    }
  }

  interface ExpectStatic {
    any(classType: unknown): unknown;
    anything(): unknown;
    arrayContaining(array: unknown[]): unknown;
    objectContaining(object: Record<string, unknown>): unknown;
    stringContaining(string: string): unknown;
    stringMatching(regexp: RegExp | string): unknown;
  }
}
