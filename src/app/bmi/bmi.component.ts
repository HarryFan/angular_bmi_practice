import { Component } from '@angular/core'; // 導入 Component



@Component({
  selector: 'app-bmi', // 定義組件的選擇器
  templateUrl: './bmi.component.html',// 指定組件的模板文件
  styleUrls: ['./bmi.component.css']// 指定組件的樣式文件
})
export class BmiComponent { // 定義組件的類別
  height: number=0;  // 定義身高屬性
  weight: number=0; // 定義體重屬性
  bmi: number | null = null; // 定義 BMI 屬性
  heightInMeters: number=0; // 定義身高米數屬性

  calculateBMI(event:Event) { // 定義計算 BMI 的方法
    event.preventDefault(); // 阻止表單提交

    if (this.height && this.weight) { // 如果身高和體重都有值
      this.heightInMeters = this.height / 100; // 將身高公分數除以100，得到身高米數
      this.bmi = this.weight / (this.heightInMeters * this.heightInMeters); // 計算 BMI
    }
  }
}



