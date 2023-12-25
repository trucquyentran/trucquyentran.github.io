import React from 'react';
import Childcomponent from './child';
import AddComponent from './AddComponent';
class Mycomponent extends React.Component{
    state = {
        kynang: [
            {id: '1', name: 'php', salary: '700'},
            {id: '2', name: 'html', salary: '900'}, 
            {id: '3', name: 'css', salary: '500'}
        ]
    }

    addNewJob = (job) => {
        console.log('>>> Check: ', job)
        let curenkynang = this.state.kynang;
        curenkynang.push(job)
        this.setState({
            // kynang: [...this.state.kynang, job]
            kynang: curenkynang
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