// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

// @Pipe({
//   name: 'highlight'
// })
// export class HighlightPipe implements PipeTransform {


//   // constructor(private sanitizer: DomSanitizer) { }

//   // transform(value: any, args: any): any {
//   //   console.log("value:", value);
//   //   console.log("args:", args);

//   //   if (!args) {
//   //     console.log("if not Args");
//   //     return value;
//   //   }
//   //   // Match in a case insensitive maneer
//   //   const re = new RegExp(args, 'gi');
//   //   const match = value.match(re);

//   //   console.log("re:", re);
//   //   console.log("match:", match);

//   //   // If there's no match, just return the original value.
//   //   if (!match) {
//   //     console.log("if not match");
//   //     return value;
//   //   }

//   //   const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
//   //   return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
//   // }
// }
