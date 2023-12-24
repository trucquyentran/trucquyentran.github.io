import React from 'react';

class AddComponent extends React.Component
{
    state = {
        name: '',
        salary: ''
    }

    handleOnChangeName = (event) =>{
        // console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        this.setState({
            name: event.target.value
           
        })
    }

    handleOnChangeSalary = (event) =>{
        // console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        this.setState({
            salary: event.target.value
           
        })
    }

    handleClickButton = (event) =>{
        event.preventDefault()
        console.log('>>> Check data input: ', this.state)
        // alert('Cick me!')
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            name: this.state.name,
            salary: this.state.salary
            
        })

        
    }

   

    render ()
    {
        // console.log( '>>> check pops: ', this.props )
        // let name = this.props.name;
        // let age = this.props.age;

        // khai báo nhanh
        // let { name, age, kynang } = this.props;
        // let { showkynang } = this.state;
        // let check = showkynang === true ? 'showkynang = true' : 'showkynang = false';
        // console.log( '>>> check status: ', check )
        return (
            <>
            <form>
                    <label>Họ tên:</label><br/>
                    <input type = "text" value={this.state.name} onChange={(event)=>this.handleOnChangeName(event)}></input> <br/>
                    <label>Chuyên ngành:</label><br/>
                    <input type = "text" value={this.state.salary} onChange={(event)=>this.handleOnChangeSalary(event)}></input><br/>
                    <div >
                        <button style={{backgroundColor: 'pink', borderRadius: '1rem', border: 'none', marginTop: '1rem'}} onClick={(event) => this.handleClickButton(event)}>Button</button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddComponent;