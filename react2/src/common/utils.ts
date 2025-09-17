
export  const getList =()=>{
    if(localStorage.getItem('list')){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return JSON.parse(<string>localStorage.getItem('list'))
    }
    return []
}
