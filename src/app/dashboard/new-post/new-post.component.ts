import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';


declare var tinymce: any;

@Component({
    selector: 'simple-tiny',
    templateUrl: './new-post.component.html'  
})


export class NewPostComponent implements AfterViewInit, OnDestroy {
  // @Input() elementId: String;
  // @Output() onEditorKeyup = new EventEmitter<any>();

  // editor;

  ngAfterViewInit() {
    // tinymce.init({
    //   selector: '#' + this.elementId,
    //   plugins: ['link', 'paste', 'table'],
    //   height: '80vh',
    //   skin_url: 'assets/skins/lightgray',
    //   setup: editor => {
    //     this.editor = editor;
    //     editor.on('keyup', () => {
    //       const content = editor.getContent();
    //       this.onEditorKeyup.emit(content);
    //     });
    //   },
    // });
  }

  ngOnDestroy() {
    // tinymce.remove(this.editor);
  }
}

