BMI 元件
------

此範例包含兩個文件：`bmi.component.ts` 和 `bmi.component.html`。

### bmi.component.ts

此文件包含 BMI 元件的 TypeScript 代碼。它具有以下屬性和方法：

*   `height`：一個數字屬性，用於存儲用戶的身高。
    
*   `weight`：一個數字屬性，用於存儲用戶的體重。
    
*   `bmi`：一個數字或 null 屬性，用於存儲用戶的 BMI 或 null（如果尚未計算）。
    
*   `heightInMeters`：一個數字屬性，用於存儲用戶的身高（以公尺為單位）。
    
*   `calculateBMI(event: Event)`：一個方法，它接受一個事件對象作為參數並阻止默認的表單提交行為。然後它檢查 `height` 和 `weight` 屬性是否為有效數字並使用公式計算 BMI：`bmi = weight / (height * height)`。然後它將結果分配給 `bmi` 屬性。
    

以下是 `bmi.component.ts` 的完整代碼：

```
import { Component } from '@angular/core';@Component({  selector: 'app-bmi',  templateUrl: './bmi.component.html',  styleUrls: \['./bmi.component.css'\]
})export class BmiComponent {  height: number = 0;  weight: number = 0;  bmi: number | null = null;  heightInMeters: number = 0;  calculateBMI(event: Event) {
    event.preventDefault();    if (this.height && this.weight) {      this.heightInMeters = this.height / 100;      this.bmi = this.weight / (this.heightInMeters * this.heightInMeters);
    }
  }
}
```

### bmi.component.html

此文件包含 BMI 元件的 HTML 代碼。它包含一個表單，用於輸入用戶的身高和體重，以及一個顯示用戶的 BMI 的段落。

以下是 `bmi.component.html` 的完整代碼：

```
<form (submit)="calculateBMI($event)">
  <div>
    <label for="height">Height (cm):</label>
    <input type="number" id="height" \[(ngModel)\]="height" name="height">
  </div>
  <div>
    <label for="weight">Weight (kg):</label>
    <input type="number" id="weight" \[(ngModel)\]="weight" name="weight">
  </div>
  <button type="submit">Calculate BMI</button></form><p *ngIf="bmi !== null">Your BMI is {{ bmi.toFixed(2) }}</p>
```

### app.module.ts

在 `app.module.ts` 文件中，我們需要將 `BmiComponent` 包含在 `declarations` 陣列中。此外，我們還需要導入 `FormsModule`