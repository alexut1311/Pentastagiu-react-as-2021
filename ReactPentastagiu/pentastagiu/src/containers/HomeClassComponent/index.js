import React, { PureComponent } from 'react'
import Forms from '../../components/Forms';

class HomeClassComponent extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 0,
         name: ''
      }
   }
   componentDidMount() {

   }
   handleSave = (event) => {
      alert('Name '+this.state.name)
      event.preventDefault();
   }
   handleChangeName = (event) => {
      this.setState({ name: event.target.value })
   }

   render() {
      return (
         <div>
            Hello HomeClassComponent {this.state.count} {this.props?.name}
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            <Forms handleSave={this.handleSave} text={this.name} handleChange={this.handleChangeName} />

         </div>
      )
   };
}

export default HomeClassComponent;
