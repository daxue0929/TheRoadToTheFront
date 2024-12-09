import React from 'react'
import { useState } from 'react';
import '../css/day01.css'

// 网页常用颜色查询
// https://www.ip138.com/yanse/common.htm

let container = {
    boxSizing: 'border-box',
};

let content2 = {
    boxSizing: 'border-box',
    marginLeft: '10px',
    width: '250px',
    border: '1px solid #CCCCCC',
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

function Panel({title, children, isActive, onShow}) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    显示
                </button>
            )}
        </section>
    );
}

export default () => {

    const [count, setCount] = useState(0)

    function handleClick(step) {
        setCount(count + step);
        console.log(count)
    }

    const [activeIndex, setActiveIndex] = useState(0);

    return <div style={container}>
        <div style={{borderBottom: '1px solid #CCCCCC'}}>
            <p style={{margin: 0, fontSize: "30px", fontWeight: "bold", textAlign: "center"}}>day01</p>
        </div>
        <div className="content-1" style={{boxSizing: 'border-box', borderBottom: '1px solid #CCCCCC'}}>
            <button onClick={handleClick.bind(null, -1)}>+</button>
            <span>{count}</span>
            <button onClick={handleClick.bind(null, 1)}>+</button>
            <br/>
            <MyButton count={count} onClick={handleClick.bind(null, -1)}/>
            <MyButton count={count} onClick={handleClick.bind(null, 1)}/>
            <br/>
            <br/>
            <div style={content2}>
                <h2>Almaty, Kazakhstan</h2>
                <Panel style={{boxSizing: 'border-box', border: '1px solid #CCCCCC'}}
                    title="关于"
                    isActive={activeIndex === 0}
                    onShow={() => setActiveIndex(0)}
                >
                    阿拉木图人口约200万，是哈萨克斯坦最大的城市。在1929年至1997年之间，它是该国首都。
                </Panel>
                <Panel
                    title="词源"
                    isActive={activeIndex === 1}
                    onShow={() => setActiveIndex(1)}
                >
                    这个名字源于哈萨克语 <span lang="kk-KZ">алма</span>，是“苹果”的意思，通常被翻译成“满是苹果”。事实上，阿拉木图周围的地区被认为是苹果的祖籍，
                    <i lang="la">Malus sieversii</i>被认为是目前本土苹果的祖先。
                </Panel>
            </div>


        </div>
    </div>
}