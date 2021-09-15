export const addToLocalStorage =(value,key)=>{
    let item;
    if (localStorage.getItem(key)===null) {
        item = []
        item.push(value)

        localStorage.setItem(key,JSON.stringify(item))
    }else{
    //   item = JSON.parse(localStorage.getItem(key))
    return
    }

   

}