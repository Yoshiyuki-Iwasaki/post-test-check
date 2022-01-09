// functionをexportして使用する場合
export function addCalcFun(baseValue: number, addValue: number): number {
  return baseValue + addValue;
}

// classをexportして使用する場合
export class Calc {
  private baseValue: number;

  constructor(baseValue: number) {
    this.baseValue = baseValue;
  }

  add(addValue: number) {
    return this.baseValue + addValue;
  }
}

// 非同期処理のテスト
export async function addCalcAsyncFun(
  baseValue: number,
  addValue: number
): Promise<number> {
  return baseValue + addValue;
}

// エラーの発生を確認するテスト
export function callErrorFun(): void {
  throw new Error("error");
}

export async function callErrorAsyncFun(): Promise<void> {
  throw new Error("asyncError");
}

// 処理が呼ばれたかどうか確認するためのテスト
export function callConsoleLog(logMessage: string): void {
  console.log(logMessage);
}