import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  isFlag:boolean=true
  result!:number

  @HostListener('window:scroll')
  onScroll()
  {
    if(scrollY>this.result){
      this.isFlag=false

    }else{
      this.isFlag=true
    }
    
    
    this.result=scrollY
    
    
  }
}
