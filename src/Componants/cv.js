import React from 'react'
import { useRef, useEffect, useState } from 'react'

const Cv = () => {

  const firstRef = useRef();
  const secondRef = useRef();
  const [elelmentIsVisable, setElmentIsVisable] = useState()


useEffect(() => {
  const observer = new IntersectionObserver( (entries) => {
  const entry1 = entries[0]

  setElmentIsVisable(entry1.isIntersecting)
  
})
observer.observe(firstRef.current)

  }, [])

  

    


  return (
    <div className='main-container'>

        <div className='cv-box'>
           

        

            <div className={`basic-info ${elelmentIsVisable ? 'shown' : 'hidden'}`}>
            <h1> Basic info</h1>

            <section>
                <h3>名前</h3> Christian Milsoe Granberg Rasmussen
                <h3>誕生日</h3> １２月１０日平成元年
                <br></br>
                
                
            </section>
            
            </div>

            <div className={`education-info ${elelmentIsVisable ? 'shown' : 'hidden'}`}>
            
              <h1> 教育</h1>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <div ref={firstRef} className='edu-writing'>
                <h3>高校:</h3> ニュボーグ高校, デンマーク (2006-2009)
              </div>

              <br></br>

              <div className='edu-writing'>
                <h3>大学: </h3> <div >オーフス大学, デンマーク (2010-2016) 専攻：日本学　　副専攻： ビジネス経済</div>
              </div>

              <br></br>

              <div className='edu-writing'>
                <h3>奨学金:</h3> 長崎大学, (2015-2016) 科目： 日本語と国際ビジネス
              </div>

          
            </div>


              
            <div className= "work-info">
            <h1> 職務経験</h1>
            <section>
                <h3>2018-2023</h3> ジェットプログラムのALT：北海道札幌東商業高校
                <h3>2016-2018</h3> 保育園先生：ヴァルハラ保育園　
            </section>
            </div>


            <div className="other-experience">
            <h1>ボランティア活動</h1>
            <section>
                <h3>2005-2018</h3> ニュボーグ空手部、デンマーク
                <h3>2013-2014</h3> 札幌協働福祉会、あいの里、北海道

            </section>


            </div>
            
            <div className={`skills-info ${elelmentIsVisable ? 'shown' : 'hidden'}`}>
              <h1> その他 </h1>
              <section>

              <h3>- 日本社会と国際環境の知識 </h3>
              <h3>- 様々な人と働き、把握する能力 </h3> 
              <h3>- 問題解決能力と反省能力</h3> 

              </section>
            </div>


            <div ref={secondRef} className='something-else'>
              
            <h1> 言語</h1>
            <section>
                <h3>英語</h3> 
                <h3>日本語</h3> 
                <h3>デンマーク語</h3> 
            </section>

            <h1> IT</h1>
            <section>
                <h3>Python</h3> 
                <h3>Django</h3> 
                <h3>React</h3> 
            </section>
            </div>
           
            
        </div>
    </div>
  )
}

export default Cv