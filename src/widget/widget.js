import { useState } from 'react'
import './widget.css'


const Widget = () => {

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState({
        email: '',
        name: '',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    })

    const makeAPICall = async (prof) => {

        const response = await fetch(`https://reqres.in/api/users/${prof}`)
        const responseData = await response.json()
        const temp = responseData.data
        setData({ email: temp.email, name: temp.first_name + ' ' + temp.last_name, avatar: temp.avatar })
    }

    const increaseCounter = async () => {
        if (counter <= 12) {
            setCounter(counter + 1)
            await makeAPICall(counter)
        }

    }

    const decreaseCounter = async () => {
        if (counter >= 0) {
            setCounter(counter - 1)
            await makeAPICall(counter)
        }
    }

    return (
        <section className='widget-container'>
            <div className='container'>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary"
                        disabled={counter <= 1 ? true : false}
                        onClick={decreaseCounter}
                    >Previous</button>
                    <button type="button" className="btn btn-primary">1</button>
                    <button type="button" className="btn btn-primary">2</button>
                    <button type="button" className="btn btn-primary">3</button>
                    <button type="button" className="btn btn-primary"
                        disabled={counter < 12 ? false : true}
                        onClick={increaseCounter}
                    >Next</button>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-5 col-md-6 col-sm-6'>
                        <div className='list-data'>
                            <ul>
                                <li>Email: <span>{data.email}</span></li>
                                <li>Name: <span>{data.name}</span></li>
                            </ul>
                        </div>
                        <div className='img-container'>
                            <img src={data.avatar} alt={data.name} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Widget