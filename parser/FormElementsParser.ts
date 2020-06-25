export default class FormElementsParser {
  private _value = {};
  constructor(form: HTMLFormElement, obj: any) {
    if (form && form.elements) {
      const list: HTMLFormControlsCollection = form.elements;
      for (const el of <any>list) {
        const name = el['name'];
        const value = el['value'];
        if (obj[name]) {
          switch (obj[name].type) {
            case "text":
              this._value[name] = value;
              break;
            case "checkbox":
              const checked = el['checked'];
              this._value[name] = checked;
              break;
            case "textarea":
              this._value[name] = value;
              break;
          }
        }
        // console.group();
        // console.log(name, value);
        // console.dir(el);
        // console.groupEnd();
      }
    } else {
      throw new Error('입력값이 없습니다.');
    }
  }
  getValue() {
    return this._value;
  }
}
