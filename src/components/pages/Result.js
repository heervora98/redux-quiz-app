import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Result = () => {

    const [totle, setTotle] = useState()
    const [score, setScore] = useState(0)
    const [ skipAns, setSkipAns ] = useState(0)
    

    const navigate = useNavigate()

    const getAnsData = useSelector((state) => state.answerReducer.answers)

    const [ansAllData, setAnsAllData] = useState(getAnsData);
    console.log(ansAllData, "----getAnsData");

    const data = async () => {
        const ApiData = await axios.get('http://localhost:7000/quizdata')
        

        if (ApiData.status == 200) {

            const ansData = ApiData.data
            
            setTotle(ansData.length)

            const first = []
            const skipQue = []
            const wAns = []

            for (let index = 0; index < ApiData.data.length; index++) {
                const ans = ansAllData[index].answerValue

                const secound = ApiData.data.find((data) => {
                    if (data.answerkey === ans) {
                        return first.push(data)
                    }else if (ans == "") {
                        return skipQue.push(data)
                    }
                })

            }
            console.log(first, "-----first");
            console.log('skipQue--->',skipQue);
            console.log("wAns ---> ", wAns);
            setScore(first.length)
            setSkipAns(skipQue.length)
            
        }
    }

    console.log(totle);
    console.log(score, "---score");

    useEffect(() => {
        if (ansAllData == "") {
            navigate(`/exam`)
        } else {
            (async () => {
                await data();
            }
            )()
        }

    }, [])



    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3 score-position">
                        <div className="glass-background">
                            <div>
                                <h5 className='text-center totle-text'>YOUR FINAL SCORE IS: <span className='totle-count'> {score} / {totle}</span></h5>
                                <hr />
                                <h5 className='text-center totle-text'>Wrong Ans: <span className='totle-count'> {totle - score}</span></h5>
                                <hr />
                                <h5 className='text-center totle-text'>Skip Ans: <span className='totle-count'> {skipAns}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
