export  const getList =()=>{
    if(localStorage.getItem('list')){
        return JSON.parse(<string>localStorage.getItem('list'))
    }
    return []
}
export  const setListItem =(userList:any)=>{
    localStorage.setItem('list',JSON.stringify(userList))
}
