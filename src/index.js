//console.log('ok')//webpack-dev-server打包的main.js是在内存中，页面上看不到main.js，但是它在根目录中
//html-webpack-plugin  自动引入main.js文件


import React from 'react'
import ReactDOM from 'react-dom'


// const myh1 = React.createElement('h1',{id: 'myh1', title: 'this is a h1'}, '这是一个H1')
// const mydiv = React.createElement('div',null,'这是一个div元素',myh1)

//jsx语法就是满足xml语法的js，babel将标签转换成React.createElement  这个等价于上面2行
//  const mydiv = <div id="mydiv" title="div aaa">
//  这是一个div元素
//  <h1>这是一个大大的H1</h1>
//  </div>

// ReactDOM.render(mydiv,document.getElementById('app'))//mydiv是一个对象

let a = 10
let str = '哈哈哈哈'
let boo = true
let title = '666'
const h1 = <h1>这是h1</h1>
// const arr = [
//     <h2>这是h2</h2>,
//     <h3>这是h3</h3>
// ]
const strArr = ['三国演义','红楼梦','水浒传','西游记'] 
const newArr = []
 const m = strArr.forEach( item => {
 const temp = <h5 key={item}>{item}</h5>//新元素
 newArr.push(temp)
 })
 console.log(m)//undefined
//map()会分配内存空间存储新数组并返回，forEach()不会返回数据。
const n = strArr.map( item => {//数组的map中必须return
    return item + '--'
})
console.log(n)//["三国演义--", "红楼梦--", "水浒传--", "西游记--"]

// react中map,foreach,for里面要加key

function Hello() {
    return <div>这是一个Hello组件</div>
}

const dog = {
    name: '二哈',
    age: 3
}
ReactDOM.render(<div>
    {a+2}
    <hr/>
    123
    <hr/>
    {str}
    <hr/>
    {boo.toString()}
    <hr/>
    {boo ? '对' : '错'}
    <hr/>
    <p title="666">一个p标签</p>
    <p title={title}>一个p标签</p>
    <hr/>
    {h1}
    <hr/>
    {/* {arr} */}
    <hr/>
    {newArr}
    <hr/>
    {strArr.map(item => {
        return <h2 key={item}>{item}</h2>
    })}
    <hr/>
    {strArr.map(item => <h1 key={item}>{item}</h1> )}
    <hr/>
    <p className="hello">前端</p>
    <label htmlFor="world">学习</label>
    <hr/>
    <Hello name={dog.name} age={dog.age}></Hello>

</div>,
document.getElementById('app'))//strArr.map只有一句的时候可以去掉花括号{}和return


