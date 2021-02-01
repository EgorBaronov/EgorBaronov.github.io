
var calculator = {
  firstArray : [],

  one : function (){
   this.firstArray.push(1);
  },
  two : function (){
    this.firstArray.push(2);
  },
  three : function (){
    this.firstArray.push(3);
  },
  four : function (){
  this.firstArray.push(4);
  },
  five : function (){
  this.firstArray.push(5);
  },
  six : function (){
  this.firstArray.push(6);
  },
  seven : function (){
  this.firstArray.push(7);
  },
  eight : function (){
    this.firstArray.push(8);
  },
  nine : function (){
    this.firstArray.push(9);
  },
  zeero : function (){
    this.firstArray.push(0);
  },
  unionArray : function () {
    
    console.log(this.firstArray);
  },
  temporaryMultiply : false,
  temporarySplit : false,
  cClean : function () {
    this.firstArray = [];
    this.temporarySplit = 0;
    this.temporaryMultiply = 0;
    console.log(this.firstArray);
  },
  multiply : function () {
    var _a = this.firstArray.join('');
    this.cClean();
    var _multiplying = _a * 1;
    this.temporaryMultiply = _multiplying; 
    console.log(_a);
  },
 
  split : function () {
    var _a = this.firstArray.join('');
    this.cClean();
    var _splitting = _a * 1;
    this.temporarySplit = _splitting;
    console.log(_a);
    
  },
  equally : function () {
    if (this.temporaryMultiply) {
      var _a = this.firstArray.join('');
        var result = this.temporaryMultiply * _a;
            alert(result);
            this.cClean();
    } else if (this.temporarySplit) {
      var _a = this.firstArray.join('');
      if (_a == 0 ) {
        alert(" Error! Cannot be divided by 0");
      } else 
      var result = this.temporarySplit / _a;
            alert(result);
            this.cClean();
    } 
    else {
      var b = result / _a;
      alert ( " Error .");
      alert(b);
    }
  }
};
