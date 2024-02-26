import React,{useState} from 'react'
import '../component/style/careers.css'
import axios from 'axios';
const ApplyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [coverletter, setCoverLetter] = useState('');
    const [role, setRole] = useState('');
    const [res, setRes] = useState(true);
    
  
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,email,phone,address,education,experience,coverletter,role);
        const data={
            Name:name,
            Email:email,
            Phone:phone,
            Address:address,
            Education:education,
            Role:role,
            Exprience:experience,
            Cover_Letter:coverletter 
        }
        axios.post('https://sheet.best/api/sheets/45d87860-184d-4ffa-859f-a840a73c9c7d',data).then((response)=>{
                setName('')
                setEmail('')
                setPhone('')
                setAddress('')
                setEducation('')
                setRole('')
                setExperience('')
                setCoverLetter('')
                setRes(false)
        })
    }
  return (
    <>
    <div className="apply-form my-4" >
         
    <div className="responsive-container-block container">
      <form className="form-box" autoComplete='off' onSubmit={handleSubmit}>
        <p className="text-blk contact-head">
          Apply Here
        </p>
        <p className="text-blk contact-subhead">
        Fill this form Correctlly. 
        </p>
        <div className="container-block form-wrapper">
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-4">
              <input className="input" id="ijowk-4" name="Name" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)} value={name} required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <input className="input" id="ipmgh-4" name="Email" placeholder='Enter your Email Address' onChange={(e)=>setEmail(e.target.value)} value={email} type='email' required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <input className="input" id="imgis-4" name="PhoneNumber" placeholder='Contact Number'onChange={(e)=>setPhone(e.target.value)} value={phone} required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <input className="input" id="imgis-4" name="education" placeholder='Enter Your Education'onChange={(e)=>setEducation(e.target.value)} value={education} required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <input className="input" id="imgis-4" name="address" placeholder='Enter Current Address'onChange={(e)=>setAddress(e.target.value)} value={address} required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <select name="role" id="role" onChange={event => setRole(event.target.value)} required>
                    <option>Select Role Here</option>
                    <option value="Web developer">Web developer</option>
                    <option value="Content Writer">Content Writer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Digital Marketing Executive">Digital Marketing Executive</option>
                    <option value="SEO">SEO</option>
                  </select>
                  <select name="experience" id="role" onChange={event => setExperience(event.target.value)} required>
                    <option>Experience Level</option>
                    <option value="Freshar">Freshar</option>
                    <option value="Less then 1">Less then 1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-4">
              <textarea className="textinput input" id="i5vyy-4" name='coverletter' placeholder="Write Cover Letter Here" onChange={(e)=>setCoverLetter(e.target.value)} value={coverletter} required></textarea>
            </div>
          </div>
          <button className="submit-btn" type='submit'>
            Apply
          </button>
        </div>
      </form>
      <h2 className={res?'response-hide':'response'}>You Data Submitted SuccessFully!</h2>
      </div>
      </div> 

    </>
  )
}

export default ApplyForm