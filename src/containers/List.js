import React from 'react';

import Card from '../components/card/Card';

//console.log(process.env.API);

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=e6db1a5';

//const API = process.env.API;

class List extends React.Component{

  constructor(){
    super();
    this.state = {
      data:[],
      searchTerm: '',
      error: '',
      loading: true
    };
  }
  
  async componentDidMount(){
  // const res = await fetch('../../assets/data.json')
  const res = await fetch(`${API}&s=batman`)
   const resJSON = await res.json();  
   this.setState({data: resJSON.Search, loading: false});
  }

  async handleSubmit(e){
    e.preventDefault();
    if(!this.state.searchTerm){
      return this.setState({error: 'Place write a valid text'})
    }

    const res = await fetch(`${API}&s=${this.state.searchTerm}`)
    const data = await res.json(); 

    if(!data.Search){
      return this.setState({error: 'there are no results'});
    }


    this.setState({data: data.Search, error: '', searchTerm: ''}); 
  }

  render() {

    const {data, loading} = this.state;
    if(loading){
      return <h3 className="text-light">loading...</h3>
    }


    return(
      <>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="search"
                    onChange={e => this.setState({searchTerm: e.target.value})}
                    value={this.state.searchTerm}
                    autoFocus
                     />
                  </form>
                  <p className="text-white">{this.state.error ? this.state.error : ''}</p>
                </div>
            </div>
            <div className="row">
              {           
                    data.map((movie, i) => {
                    return <Card movie={movie} key={i}/>;
                  })         
              }
          </div>  
      </>
    )
  }
}

export default List; 