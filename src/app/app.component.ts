import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  //Component Communication
  //data to be passed to child componenet 
  public name = "Vishwas";

  public name2 = "Try out getters and setters";


  public message = "";
  
  // receivedMessage($event){
  //   this.message = $event;
  // }

  public share:String = "share";

  constructor(private sharedService:SharedServiceService){
    
  }

  onClick(){
    console.log("clicked");
    this.sharedService.shareEvent.emit(this.share);
    this.sharedService.shareEvent1.next();
    localStorage.setItem("key", "value");
    console.log(localStorage.getItem("key"));
  }

  
}

