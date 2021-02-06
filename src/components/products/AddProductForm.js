import React from "react";
import { Formik } from "formik";
import {uuid} from 'uuidv4'
import * as Yup from "yup";
import { Button,Alert } from 'react-bootstrap';
import { Prompt, withRouter } from 'react-router';
import {connect} from "react-redux"
import {addProduct} from "../redux/actions/productActions"
//import {withRouter} from "react-router-dom"

const validationSchema = Yup.object({
  productName: Yup.string().required("Product Name is required"),
  quantity: Yup.number().required("Quantity is required"),
  price: Yup.number().required("Price is required"),
  manufacturer:Yup.string().required("Manufacturer details required"),
  description:Yup.string().required("Descriptopn Needed")
});

class AddProductForm extends React.Component {
  constructor(props) {
  super(props);
    this.state={
        isSubmitted : false,
        show:false
    }
  }

componentDidMount(){
  this.setState({isSubmitted:false});
  this.setState({show:false});
}

    render() {
      const errorStyle={"color":"red","fontWeight":"bold"}
    
    
    return (
        
      <Formik
        initialValues={{productName: "", quantity: "", price: "",manufacturer:"",description:"" }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}


        onSubmit={(value) => {
        this.setState({isSubmitted : true})
        this.setState({show:true});
        const values={...value,id:uuid(),uviews : 0}
        setTimeout(()=>{
          this.props.addProduct(values);
        this.props.history.push("/");
        },500)
        //this.props.addProduct(values);
        //this.props.history.push("/");
        }
    }
      >

        

        {({ handleSubmit, handleChange, values, errors,touched }) => (
          <form onSubmit={handleSubmit} style={{"margin": "0 auto" ,"width":"300px"}}>

        
            {<Prompt when={
            (values.productName !==""|| values.quantity !=="" || values.price !=="" || values.manufacturer !=="" || values.description !=="") && (this.state.isSubmitted===false) 
            } message="You have unsaved changes, are you sure you want to leave?"/>}

          <h4 style={{"display":"flex","justifyContent":"center","fontWeight":"bold"}}>Add Product</h4>
          <Alert show={this.state.show} variant='success'>Product Added successfully!!</Alert>
            <div className="form-group">
            <label htmlFor="name" >Name </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.productName}
              placeholder="Enter Product Name"
              name="productName"
              id="productName"
              className="form-control"
            />
            <span style={errorStyle}>{errors.productName}</span>
            </div>

            <div className="form-group">
            <label htmlFor="quantity" >Quantity </label>
            <input
              type="number"
              onChange={handleChange}
              value={values.quantity}
              placeholder="Enter Quantity"
              name="quantity"
              id="quantity"
              className="form-control"
            />
            <span style={errorStyle}>{errors.quantity}</span>
            </div>

            <div className="form-group">
            <label htmlFor="price" >Price  </label>
            <input
              type="number"
              step="1"
              onChange={handleChange}
              value={values.price}
              placeholder="Enter Price"
              name="price"
              id="price"
              className="form-control"
            />
            <span style={errorStyle}>{errors.price}</span>
            </div>

            <div className="form-group">
            <label htmlFor="description" >Description </label>
            <textarea
              type="text"
              onChange={handleChange}
              value={values.description}
              placeholder="Enter description"
              name="description"
              id="description"
              className="form-control"
            />
            <span style={errorStyle}>{errors.description}</span>
            </div>

            <div className="form-group">
            <label htmlFor="manufacturer" >Manufacturer </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.manufacturer}
              placeholder="Enter manufacturer"
              name="manufacturer"
              id="manufacturer"
              className="form-control"
            />
            <span style={errorStyle}>{errors.manufacturer}</span>
            </div>

            
            <div style={{"display":"flex","justifyContent":"center"}}><Button type="submit" style={{"fontWeight":"bold"}}>Submit</Button></div>
          </form>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addProduct : product=>dispatch(addProduct(product))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(AddProductForm));