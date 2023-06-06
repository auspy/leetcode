function isValid(s: string): boolean {
let mp = {
    ")":"(",
    "]":"[",
    "}":"{"
}
let stack = []
for(const i of s ){
    // if start of parantheses
    if(Object.values(mp).includes(i))
        stack.push(i)
    else
    // if ending parantheses
    {
        // if dont have starting index then not valid else remove the index
        if(stack.pop()!= mp[i]) return false
    }
}
return stack.length==0
};