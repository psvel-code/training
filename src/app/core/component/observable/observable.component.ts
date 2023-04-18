import { Component } from '@angular/core';
import { Observable, Subscription, filter, generate, map, observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  data!: Observable<any>;
  sus!: Subscription
  datasubscription!: Subscription;
  ngOnInit() {
    this.data = new Observable(sus => {
      sus.next(1);
      sus.next(2);
      sus.next(3);
      sus.next(4);
      sus.next(5);
      sus.next(6);
    });
    this.datasubscription = this.GetObservable().subscribe({
      next:
        (res) => {
          console.log("next", res);
        },
      error:
        (err) => {
          console.log("next", err);
        },
      complete:
        () => {
          console.log("complete");
        }
    })
    
    this.data.subscribe(res => console.log("response", res));
    this.data.pipe(map(x => x * 2)).subscribe(res => console.log("map", res))
    this.data.pipe(filter(x => x > 3)).subscribe(res => console.log("filter", res))
  }

  GetObservable(): Observable<any> {
    return new Observable(sus => {
      setInterval(() => sus.next(1), 100)
    });
  }

  ngOnDestroy() {
    this.datasubscription.unsubscribe();
  }
}
