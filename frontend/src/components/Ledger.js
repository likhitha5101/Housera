import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { tr, td} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';

import Header from './Header';

class Ledger extends Component{

  constructor(props){
    super(props)

    this.state={
      visitors : [],
      vehicles : []
    }
  }

  componentDidMount(){
    axios({
  	  method: 'get',
  	  url: 'visitor',
  	  baseURL: 'http://localhost:8082/',
  	}).then(res => {
  		this.setState({
  		  visitors: res.data
  		})
  	  })
  	  .catch(err =>{
  		console.log('Error from visitor');
  	  });

      axios({
    	  method: 'get',
    	  url: 'vehicle',
    	  baseURL: 'http://localhost:8082/',
    	}).then(res => {
    		this.setState({
    		  vehicles: res.data
    		})
    	  })
    	  .catch(err =>{
    		console.log('Error from vehicle');
    	  });
  }

  render(){
    //console.log(this.state.visitors);
    let visitors = this.state.visitors;
    let vehicles = this.state.vehicles;
    let visitorList ;
    let vehicleList ;
    let btn = <Link to= "/dashboard/ledger/add">
              <Button style={{display:'inline-block', float:'right', fontSize:'18px',marginRight : '10%'}} variant="warning"><b>+ Add Entries</b></Button>
              </Link>
    if (this.props.user.role === 'association'){
      btn = ""
    }
    if(visitors.length === 0)
      visitorList = <center><h2 style={{tdor:'gray'}}>There is no visitor record!</h2></center>
    else
      visitorList = visitors.map((v,i)=> <VisitorCard key={i} visitor={v} />)
    if(vehicles.length === 0)
      vehicleList = <center><h2 style={{tdor:'gray'}}>There is no vehicle record!</h2></center>
    else {
      vehicleList = vehicles.map((v,i)=> <VehicleCard key={i} vehicle={v} />)
    }
    return(
      <div>
        <Header />
        <div style = {{marginTop: '7%', tdor:'black'}}>
          <center><h1>Ledger</h1></center><br />
          <h2 style={{textAlign:'center', margin:'auto', marginLeft: '9%', display:'inline-block'}}>Visitors</h2>
          {btn}<br /><br />
          <div className="record" style={{margin:'auto', width:'85%', fontSize:'25px'}}>
          <Card className="w3-card-4" style={{backgroundtdor:'#600970', tdor:'white'}} >
          <tr style={{padding:'15px 10px'}} >
          <td>Visitor Name</td>
          <td>Mobile No.</td>
          <td>Temperature</td>
          <td>Date</td>
          <td>Time</td>
          <td>Visited</td>
          </tr>
          </Card></div><br/>
          <div className="record" style={{margin:'auto', width:'85%', fontSize:'22px'}}>
          {visitorList}</div>
          <br />
          <br />
          <h2 style={{marginLeft : '7%'}}>Vehicles</h2><br />
          <div className="record" style={{margin:'auto', width:'85%', fontSize:'25px'}}>
          <Card className="w3-card-4" style={{backgroundtdor:'#600970', tdor:'white'}} >
          <tr style={{padding:'15px 10px'}} >
          <td>Driver Name</td>
          <td>Vehicle No.</td>
          <td>Driver no.</td>
          <td>Date</td>
          <td>Time</td>
          <td>Visited</td>
          </tr>
          </Card></div><br/>
          <div className="record" style={{margin:'auto', width:'85%', fontSize:'22px'}}>
          {vehicleList}</div>
        </div>
        <br />
        <br />
      </div>
    )
  }
}

function VisitorCard(props){

  return(
    <Card className="w3-card-4" style={{marginBottom :'5px'}}>
    <tr style={{padding:'15px 10px'}} >
    <td>{props.visitor.first_name + " "+props.visitor.last_name}</td>
    <td>{props.visitor.mobile}</td>
    <td>{props.visitor.temperature} °F</td>
    <td>{dateFormat(props.visitor.visit_date, "mmm dS, yyyy")}</td>
    <td>{props.visitor.visit_time}</td>
    <td>{props.visitor.fname + " "+props.visitor.lname}</td>
    </tr>
    </Card>
);
}

function VehicleCard(props){

  return(
    <Card className="w3-card-4" style={{marginBottom :'5px'}}>
    <tr style={{padding:'15px 10px'}} >
    <td>{props.vehicle.drivername}</td>
    <td>{props.vehicle.vehicleno}</td>
    <td>{props.vehicle.driverno}</td>
    <td>{dateFormat(props.vehicle.visit_date, "mmm dS, yyyy")}</td>
    <td>{props.vehicle.visit_time}</td>
    <td>{props.vehicle.first_name + " "+props.vehicle.last_name}</td>
    </tr>
    </Card>
);
}
export default Ledger;
