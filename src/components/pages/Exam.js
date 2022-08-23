import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ANSWERKEY } from '../../action/action';
import { UPDATE_ANSWER } from '../../action/action';

const Exam = () => {

  const [examData, setExamData] = useState();
  const [indexCount, setIndexCount] = useState(0);

  const [previousValue, setPreviousValue] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialAns = {
    id: "",
    answerkey: ""
  }

  const [ansData, setAnsData] = useState(initialAns);

  const queData = async () => {
    const Data = await axios.get("http://localhost:7000/quizdata")
    const allData = getRandomArr(Data.data)

    const newAllData = allData.map((data) => {
      const newData = getRandomArr(data.options)
      data.options = newData
      return data;
    })
    
    setExamData(newAllData)
  }

  const getReduxData = useSelector((state) => state.answerReducer.answers)
  
  // ....rendom....

  const getRandomArr = (data) => {
    const rendomeValue = []
    const randomIndex = []
    for (let index = 0; index < data.length; index++) {
      const getRandom = getRandomIndex(data.length, randomIndex)
      const rendom = data[getRandom]
      randomIndex.push(getRandom)
      rendomeValue.push(rendom)
    }
    return rendomeValue
  }

  const getRandomIndex = (length, arr) => {
    const unique = Math.floor(Math.random() * length)
    if (arr.includes(unique)) {
      return getRandomIndex(length, arr)
    } else {
      return unique
    }
  }
  // console.log(examData);



  useEffect(() => {
    queData()
  }, []);

  

  const handleChange = (e) => {
    setAnsData({...ansData, id: examData[indexCount].id, [e.target.name]: e.target.value })
  }

  const Previous = () => {
    dispatch(UPDATE_ANSWER(ansData))
    setIndexCount(indexCount - 1)
    if (indexCount == 1) {
      setPreviousValue(false)
    }
  }


  const displayData = () => {
   
    console.log(getReduxData, '--->getReduxData');
    
    const QUESTIONS_ID = getReduxData.find((data) => data.id == ansData.id)
    const ANSWERS_KEY = getReduxData.find((data) => data.answerkey == ansData.answerkey)


    if (QUESTIONS_ID) {
      if (ANSWERS_KEY) {
      } else if (ansData.answerkey == "") {
        dispatch(ANSWERKEY({ ...ansData, id: examData[indexCount].id, answerkey: "" }))
      }
      else {
        console.log("hello");
        dispatch(UPDATE_ANSWER(ansData))
      }
    } else {
      dispatch(ANSWERKEY(ansData))
    }




    if (indexCount < examData.length - 1) {
      setIndexCount(indexCount + 1)
      setPreviousValue(true)
    } else {
      // console.log(false);
      navigate('/result')
    }
  }


 


  // .........previous....

  useEffect(() => {
    previousData()
  }, [indexCount])

  const previousData = () => {
    const PreQueId = examData == undefined ? "" : examData[indexCount].id
    const preAnsId = getReduxData.find((data) => data.id == PreQueId)
    if (preAnsId) {
      setAnsData(preAnsId)
    } else {
      setAnsData({
        id: PreQueId,
        answerkey: ""
      })
    }

    
  }



  

  return (
    <div className='background'>

      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className='question-position mt-4'>
              <div className='glass-background'>
                {examData == undefined ? "" :
                  <div>
                    <h4>{indexCount + 1}. {examData[indexCount].question}</h4>
                    {
                      examData[indexCount].options.map((data, index) => (

                        <label className="check-lable d-block rounded col-6" key={index}>
                          <div className="check-lable-sub">
                            <input type="radio" id="answerkey" name='answerkey' value={data.id} checked={data.id == ansData.answerkey ? true : false} onChange={(e) => handleChange(e)} />
                            <div className="lable-border">
                              <div className="lable-text">{data.optionData}</div>
                            </div>
                          </div>
                        </label>
                      ))
                    }
                  </div>

                }
                <div className='exam-btn'>
                  {previousValue ? <button type="click" className='btn btn-dark me-4 py-2 px-3' onClick={Previous}> Previous </button> : ""}
                  <button type='click' className='btn text-white px-5 py-2' style={{ backgroundColor: "#2E4053" }} onClick={displayData}>Save & Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exam
