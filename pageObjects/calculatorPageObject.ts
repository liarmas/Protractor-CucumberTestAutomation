import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class calculator {

    private _firstNumberTxtBox: ElementFinder;    
    private _secondNumberTxtBox: ElementFinder;    
    private _goBtn: ElementFinder;    
    private _getOperatorName: ElementFinder;    
    private _result: ElementFinder;    

    constructor() {

        this.firstNumberTxtBox = element(by.model("first"));
        this.secondNumberTxtBox = element(by.model("second"));
        this.goBtn = element(by.id("gobutton"));
        this.result = element(by.css("h2[class='ng-binding']"));
    }

    public getOperatorBy_operatorName(operator: string) : ElementFinder {

        return element(by.css("select[ng-model='operator'] option[value= "+ operator +"]"));
    }

    public getFirstResultTable() : ElementFinder {
        return element(by.repeater("result in memory")).element(
            by.css("td:nth-child(3)"));

    }

    //#region Properties

    public get firstNumberTxtBox(): ElementFinder {
        return this._firstNumberTxtBox;
    }
    public set firstNumberTxtBox(value: ElementFinder) {
        this._firstNumberTxtBox = value;
    }
    public get secondNumberTxtBox(): ElementFinder {
        return this._secondNumberTxtBox;
    }
    public set secondNumberTxtBox(value: ElementFinder) {
        this._secondNumberTxtBox = value;
    }
    public get goBtn(): ElementFinder {
        return this._goBtn;
    }
    public set goBtn(value: ElementFinder) {
        this._goBtn = value;
    }
    public get getOperatorName(): ElementFinder {
        return this._getOperatorName;
    }
    public set getOperatorName(value: ElementFinder) {
        this._getOperatorName = value;
    }    
    public get result(): ElementFinder {
        return this._result;
    }
    public set result(value: ElementFinder) {
        this._result = value;
    }

    //#endregion


}