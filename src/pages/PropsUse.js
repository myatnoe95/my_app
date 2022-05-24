
import React, { useState } from 'react';
import PropsUseFunction from './PropsUseFunction';
import Compo from '../components/component';

class PropsUse extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Mg Mg',
            age: 25
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
      this.setState({
          name: 'Ma Ma',
          age: 30
      });
    }

    render(){
        return(
            <div>
                <PropsUseFunction 
                    name = {this.state.name}
                    age= {this.state.age}
                />
                <Compo changeAction={this.handleChange}/>
            </div>
            

        )
    }
}

// const HomePage = (props) => {

//     const [name, setName] = useState('Mg Mg');

//     const handleChange = () => {
//         setName('Ma Ma');
//     }

//     return(
//             <div>
//                 <h1> Welcome {name} !! </h1>
//                 <button onClick={handleChange}>Change</button>
//             </div>
//     )
// }


export default PropsUse;