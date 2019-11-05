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




  (function() {
  onload = setInterval(function(){
  if (document.querySelectorAll(".timer")[1].firstElementChild.innerText === "00:00:00"){
      document.querySelectorAll(".floattopright")[2].click()}
   }, 1000);
  })();
