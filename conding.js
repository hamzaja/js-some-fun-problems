class Abc extends Component{

  state={
    buttonPessed: false
  }

    render(){
      const {username} = this.props
      return(
        <div>
          <button onClick={()=> this.setState{buttonPessed: !this.state.buttonPessed} } ></button>
          {username}
          {this.state.greeting}
        </div>

      )
    }


}
<Abc username=“Peter” />
