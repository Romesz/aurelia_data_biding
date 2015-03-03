//https://github.com/aurelia/framework/issues

export class GetName 
{
  constructor()
  {
    this.firstName  = 'Romano';
    this.lastName   = 'Firtermaiszter';
    //this.url        = '1';
    //this.isSomething  = true;
    /*
    this.customers  = [
      {name:'John'},
      {name:'Jessie'}
    ];
    */
  }
  
  get fullName()
  {
    return `${this.firstName} ${this.lastName}`;
  }
  
  formSubmitted()
  {
    alert(`Welcome, ${this.fullName}!`);
  }
}
