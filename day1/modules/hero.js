import OrdinaryPerson from "./person.js";

class Hero extends OrdinaryPerson{
    title = "default title";
    firstname = "default firstname";
    lastname = "default lastname";
    #mission = "My private mission"; // indicate a private member
    static version = 1001;
    constructor(htitle, hfname, hlname, hpower){
        super(hpower)
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    }

    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
};

export { Hero }