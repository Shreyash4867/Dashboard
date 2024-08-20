import React from 'react'
import 
{ BsCloud, BsClipboard2CheckFill, BsPeopleFill, BsFillBellFill, BsFillImageFill, BsShieldFillCheck, BsPlusCircleFill  }
 from 'react-icons/bs';
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>CSPM EXECUTIVE DASHBOARD</h3>
        </div>
        
        

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Cloud Accounts</h5>
                    <BsCloud className='card_icon'/>
                </div>
                <h6>300</h6>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Cloud Account Risk Assessment</h5>
                    <BsClipboard2CheckFill className='card_icon'/>
                </div>
                <h6>12</h6>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h6></h6>
                    <BsPlusCircleFill  className='card_icon'/>
                </div>
                <h6>Add widget</h6>
            </div>
            </div> 

          <div className='main-title'>
            <h3>CWPP DASHBOARD</h3>
            </div> 
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Top 5 Namespaces Specific Alerts</h5>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h6>33</h6>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Workload Alerts</h5>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h6>42</h6>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h6></h6>
                    <BsPlusCircleFill  className='card_icon'/>
                </div>
                <h6>Add widget</h6>
            </div>
        </div>

        <div className='main-title'>
            <h3>REGISTRY SCAN</h3>
            </div> 
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Image Risk Assessment</h5>
                    <BsFillImageFill className='card_icon'/>
                </div>
                <h6>33</h6>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Image Security Issues</h5>
                    <BsShieldFillCheck className='card_icon'/>
                </div>
                <h6>42</h6>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h6></h6>
                    <BsPlusCircleFill  className='card_icon'/>
                </div>
                <h6>Add widget</h6>
            </div>
        </div>
       

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home