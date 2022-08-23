import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { SENDDATA } from "../../action/action"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Quetions = () => {

  const InitialData = {
    id: "",
    question: "",
    options: [],
    answerkey: ""
  }

  const [allData, setAllData] = useState(InitialData);

  const [ datacheck, setDatacheck ] = useState()

  const { question, answerkey } = allData

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [opt1, setopt1] = useState({
    id: "",
    optionData: ""
  });

  const [opt2, setopt2] = useState({
    id: "",
    optionData: ""
  });

  const [opt3, setopt3] = useState({
    id: "",
    optionData: ""
  });

  const [opt4, setopt4] = useState({
    id: "",
    optionData: ""
  });


  const handleChange = (e) => {
    setAllData({ ...allData, id: uuidv4(), [e.target.name]: e.target.value })
    
  }

  const handleopt1 = (e) => {
    setopt1({ ...opt1, id: uuidv4(), [e.target.name]: e.target.value })
  }

  const handleopt2 = (e) => {
    setopt2({ ...opt2, id: uuidv4(), [e.target.name]: e.target.value })
  }

  const handleopt3 = (e) => {
    setopt3({ ...opt3, id: uuidv4(), [e.target.name]: e.target.value })
  }

  const handleopt4 = (e) => {
    setopt4({ ...opt4, id: uuidv4(), [e.target.name]: e.target.value })
  }


  const allQueData = (e) => {
    e.preventDefault()
    const checkQue = question

    

    if (!checkQue) {
      toast.warning("please enter data")
    } else if (!answerkey) {
      toast.warning("please select right ans")
    } else {

      allData.options.push(opt1, opt2, opt3, opt4)
      dispatch(SENDDATA(allData))

      setAllData(InitialData)

      setopt1({
        id: "",
        optionData: ""
      })
      setopt2({
        id: "",
        optionData: ""
      })
      setopt3({
        id: "",
        optionData: ""
      })
      setopt4({
        id: "",
        optionData: ""
      })

      setDatacheck(false)

      setButton1(false)
      
      setButton2(false)
      setButton3(false)
      setButton4(false)

    }
  }






  // ....btn...

  const [button1, setButton1] = useState(false)
  const [button2, setButton2] = useState(false)
  const [button3, setButton3] = useState(false)
  const [button4, setButton4] = useState(false)

  const colorechange1 = () => {
    setButton1(!button1)
  }

  const colorechange2 = () => {
    setButton2(!button2)
  }

  const colorechange3 = () => {
    setButton3(!button3)
  }

  const colorechange4 = () => {
    setButton4(!button4)
  }

  return (
    <>
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3">
              <div className="question-position mt-4">
                <div className="glass-background">
                  <h4 className='mb-4 quetion-title'>Add Quetions..</h4>
                  <form onSubmit={(e) => allQueData(e)}>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name='question' onChange={(e) => handleChange(e)} value={question} />
                      <label htmlFor="floatingInput">Quetion</label>
                    </div>
                    {/* ....option 1..... */}

                    <div className="optiondata my-3 option-flax">
                      <div className="d-inline-block">
                        <input type="radio" name='answerkey' id='option' value={opt1.id} onChange={(e) => handleChange(e)} onClick={colorechange1} checked={datacheck}/>
                      </div>
                      <div className="form-floating mb-3 col-6">
                        <input type="text" className={'form-control ' + (button1 ? 'toggle-cbtn' : '')} id="optionValue" name='optionData' placeholder="Option 1" value={opt1.optionData} onChange={(e) => handleopt1(e)} />
                        <label>Option 1</label>
                      </div>
                    </div>

                    {/* ....option 2..... */}

                    <div className="optiondata my-3 option-flax">
                      <div className="d-inline-block">
                        <input type="radio" name='answerkey' id='option' value={opt2.id} onChange={(e) => handleChange(e)} onClick={colorechange2} checked={datacheck}/>
                      </div>
                      <div className="form-floating mb-3 col-6">
                        <input type="text" className={'form-control ' + (button2 ? 'toggle-cbtn' : '')} id="optionValue" name='optionData' placeholder="Option 2" value={opt2.optionData} onChange={(e) => handleopt2(e)} />
                        <label>Option 2</label>
                      </div>
                    </div>

                    {/* ....option 3..... */}

                    <div className="optiondata my-3 option-flax">
                      <div className="d-inline-block">
                        <input type="radio" name='answerkey' id='option' value={opt3.id} onChange={(e) => handleChange(e)} onClick={colorechange3} checked={datacheck}/>
                      </div>
                      <div className="form-floating mb-3 col-6">
                        <input type="text" className={'form-control ' + (button3 ? 'toggle-cbtn' : '')} id="optionValue" name='optionData' placeholder="Option 3" value={opt3.optionData} onChange={(e) => handleopt3(e)} />
                        <label>Option 3</label>
                      </div>
                    </div>

                    {/* ....option 4..... */}

                    <div className="optiondata my-3 option-flax">
                      <div className="d-inline-block">
                        <input type="radio" name='answerkey' id='option' value={opt4.id} onChange={(e) => handleChange(e)} onClick={colorechange4} checked={datacheck}/>
                      </div>
                      <div className="form-floating mb-3 col-6">
                        <input type="text" className={'form-control ' + (button4 ? 'toggle-cbtn' : '')} id="optionValue" name='optionData' placeholder="Option 4" value={opt4.optionData} onChange={(e) => handleopt4(e)} />
                        <label>Option 4</label>
                      </div>
                    </div>

                    {/* .....btn.. */}

                    <div className="form-group form-btn">
                      <input type="submit" className='btn btn-block text-white px-5' style={{ backgroundColor: "#2E4053" }} />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quetions
