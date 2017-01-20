export const Rank = {
  value: undefined,
  get Responder (){
    this.value = 0; 
    return this.value;
  },
  get Manager(){
    this.value = 1; 
    return this.value;
  },
  get Director(){
    this.value = 2; 
    return this.value;
  },
  getValue() {
    return this.value;
  }
};
