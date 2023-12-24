import React from 'react';

class Childcomponent extends React.Component
{
    state = {
        showkynang: false
    }

    handleShowHiden = () =>
    {
        this.setState(
            {
                showkynang: !this.state.showkynang
            }
        )
    }

    render ()
    {
        // console.log( '>>> check pops: ', this.props )
        // let name = this.props.name;
        // let age = this.props.age;

        // khai báo nhanh
        let {kynang } = this.props;
        let { showkynang } = this.state;
        let check = showkynang === true ? 'showkynang = true' : 'showkynang = false';
        console.log( '>>> check status: ', check)
        return (
            <>
                <br/>
                { showkynang === false ?
                    <div><button style={{backgroundColor: 'yellow', borderRadius: '1rem', border: 'none', marginTop: '1rem'}} onClick={ () => this.handleShowHiden() }>Hiện</button></div>
                    :
                    <>
                        <br/>
                        <div>Kỹ năng:
                            {
                                kynang.map( ( item, index ) =>
                                {
                                    if ( +item.salary >=7 )
                                    {
                                        return (
                                            <div key={ item.id }>
                                                { item.id } - { item.name } 
                                            </div>
                                        )
                                    }
                                } )
                            }
                        </div>
                        <div><button style={{backgroundColor: 'blue', borderRadius: '1rem', border: 'none', marginTop: '1rem'}} onClick={ () => this.handleShowHiden() }>Ẩn</button></div>
                    </>
                }
            </>
        )
    }
}


// Cách 2
// const Childcomponent = (props) =>{
//     // khai báo nhanh
//     let {kynang} = props;
//     return (
//         <>
//             <div>Kỹ năng: 
//                 {
//                     kynang.map((item, index) => {
//                         return(
//                             <div key={item.id}>
//                                 {item.id} - {item.tenkn}
//                             </div>
//                         )

//                     })
//                 }
//             </div>
//         </>

//     )

// }
export default Childcomponent;