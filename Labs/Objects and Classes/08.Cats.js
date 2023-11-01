function solve(inputData){
    let cats =[];
    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let index = 0; index < inputData.length; index++) {
        let catData = inputData[index].split(' ');
        let name,age;
        [name,age] = [catData[0],catData[1]];
        cats.push(new Cat(name,age));
    }
    for (const cat of cats) {
        cat.meow();
    }
}
solve(['Mellow 2', 'Tom 5']);