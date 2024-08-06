interface f1 {
 name:string 
    changeName()
}

class C1 implements f1{
    name="raj"
    changeName() {
        console.log(this.name)
    }
}

var c1 = new C1()
c1.changeName()
c1.name = "sneha"
c1.changeName()