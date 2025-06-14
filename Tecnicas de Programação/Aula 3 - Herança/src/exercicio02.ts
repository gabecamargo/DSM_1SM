class X {
    um(): void {
        console.log("um");
    }
}

class Y extends X {
    dois(): void {
        this.um();
        console.log("dois");
    }
}

class Z extends Y {
    tres(): void {
        this.dois();
        console.log("três");
    }
}

const z = new Z();
z.tres();
