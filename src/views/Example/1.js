import React from 'react';
import Childcomponent from './child';
import AddComponent from './AddComponent';
class Mycomponent extends React.Component{
    state = {
        kynang: [
            {id: '1', name: 'php', salary: '7'},
            {id: '2', name: 'html', salary: '9'}, 
            {id: '3', name: 'css', salary: '5'}
        ]
    }

    addNewJob = (job) => {
        console.log('>>> Check: ', job)
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
        
    }

 
    

    render(){
        console.log('>>> Call render: ', this.state)
        return(
            <>
                {/* <div>Xin chào tôi tên là: {this.state['name']}</div>
                <div><b>Chuyên ngành:</b> {this.state.nganh}</div><br/> */}
                <AddComponent addNewJob={this.addNewJob}/>
               
                <Childcomponent kynang={this.state.kynang}/>
            </>
            
        )
    }
}
export default Mycomponent;