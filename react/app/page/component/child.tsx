function Page(props:any){
    function setParentData(){
        let count = props.index;
        props.setIndex(count+1)
    }
    return (
    <div>这是子组件{props.index}&nbsp;&nbsp;
        <span onClick={setParentData}>操作</span>
    </div>)
}
export default Page