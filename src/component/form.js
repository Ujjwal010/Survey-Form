import React from "react"
import "./form.css"
function Form(){
       const[formdata,setformdata]=React.useState({firstname:"",
                                                   lastname:"",
                                                   email:"",
                                                   comment:"",
                                                   isFriendly:true,
                                                   employed:"",
                                                   favColor:""})

       function change(event){
           const {type,name,value,checked}=event.target
           setformdata(
               prev=>{return(
               {...prev,
                [name]:type==="checkbox"?checked:value}
                )
            })
       }

       
       
       function handleSubmit(event){
           event.preventDefault()
           console.log(formdata)
       }

    return(
        <div className="form">

            <form onSubmit={handleSubmit} >
                <h3>Survey Form</h3>
                <input type="text"
                       placeholder="First-Name"
                       onChange={change}
                       name="firstname"
                       value={formdata.firstname}/>
                
                <br />

                <input type="text"
                       placeholder="Last-Name"
                       onChange={change}
                       name="lastname"
                       value={formdata.lastname}/>

                <br/>

                <input type="text"
                       placeholder="Email"
                       onChange={change}
                       name="email"
                       value={formdata.email}/>
                
                <br/>

                <textarea  type="text"
                           placeholder="About you.."
                           onChange={change}
                           name="comment"
                           value={formdata.comment}/>
                
                <br/>

                <input  type="checkbox"
                        id="isFriendly"
                        onChange={change}
                        name="isFriendly"
                        checked={formdata.isFriendly}/> 
                
                <label htmlFor="isFriendly">isFriendly</label>

                <br/>

                <fieldset>

                    <legend>Current employment status</legend>

                    <input type="radio"
                           id="unemployed"
                           name="employed"
                           value="unemployed"
                           onChange={change}
                           checked={formdata.employed==="unemployed"}/>
                    
                    <label htmlFor="unemployed">unemployed</label>
                    
                    <br/>

                    <input type="radio"
                           id="full-time"
                           name="employed"
                           value="full-time"
                           onChange={change}
                           checked={formdata.employed==="full-time"}/>
                    
                    <label htmlFor="full-time">full-time</label>
                    
                    <br/>

                    <input type="radio"
                           id="part-time"
                           name="employed"
                           value="part-time"
                           onChange={change}
                           checked={formdata.employed==="part-time"}/>
                    
                    <label htmlFor="part-time" id='par'>part-time</label>
                    
                    <br/>

                </fieldset>

                <select 
                        id="favColor"
                        value={formdata.favColor}
                        onChange={change}
                        name="favColor" >

                <option value="">-- Interest --</option>
                <option value="Python">Python</option>
                <option value="Javascript">Javascript</option>
                <option value="Java">Java</option>
                <option value="C">C</option>
                <option value="C++">C++</option>
                <option value="php">php</option>
                <option value="Kotlin">Kotlin</option>
            </select>
            
            <br/>
            <br/>

            <button>Submit</button>

            </form>

        </div>
    )
}
export default Form;