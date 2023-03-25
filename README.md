# Angular BMI 元件範例

這是一個簡單的 Angular 元件範例，它根據用戶的身高和體重計算其身體質量指數（BMI）。

## 先決條件

要運行此範例，您需要安裝以下內容：

- Node.js 和 npm
- Angular CLI

## 安裝

要安裝此範例，請按照以下步驟操作：

1. 克隆此存儲庫或將源代碼下載為 zip 文件。
2. 導航到項目文件夾並運行 `npm install` 以安裝依賴項。
3. 運行 `ng serve` 以啟動開發服務器。
4. 打開您的瀏覽器並轉到 `http://localhost:4200` 以查看範例。

## 使用

要使用此範例，請按照以下步驟操作：

1. 在輸入字段中以米為單位輸入您的身高和以公斤為單位的體重。
2. 單擊“計算 BMI”按鈕提交表單。
3. 您將在表單下方看到您的 BMI。

## 代碼說明

此範例包含兩個文件：`bmi.component.ts` 和 `bmi.component.html`。

### bmi.component.ts

此文件包含 BMI 元件的 TypeScript 代碼。它具有以下屬性和方法：

- `height`：一個數字屬性，用於存儲用戶的身高。
- `weight`：一個數字屬性，用於存儲用戶的體重。
- `bmi`：一個數字或 null 屬性，用於存儲用戶的 BMI 或 null（如果尚未計算）。
- `calculateBMI(event: Event)`：一個方法，它接受一個事件對象作為參數並阻止默認的表單提交行為。然後它檢查 height 和 weight 屬性是否為有效數字並使用公式計算 BMI：`bmi = weight / (height * height)`。然後它將結果分配給 bmi 屬性。

### bmi.component.html
