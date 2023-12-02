
export interface dataType{
    _id:string
    fname:string,
    lname:string,
    DOB:string,
    id1:string,
    id2:string,
    status:string,
}

export interface formType{
    fname:string,
    lname:string,
    DOB:string,
    id1:string,
    id2:string,
}

export interface StatusType {
    status: string[];
}

export const proof=['pan','adhar','passport'];