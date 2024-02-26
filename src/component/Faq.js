import React,{useState} from 'react'
import "./style/faq.css";
const Faq = () => {

    const [selected, setSelected] = useState(null);
    const data=[{question:'Which Company Gives Best Digital Marketing services?',answer:' The effectiveness of digital marketing services can vary depending on your specific business needs and goals. Its essential to consider factors like industry expertise, client reviews, and case studies when selecting a digital marketing company. Researching and reaching out to potential providers can help you find the best fit for your requirements'},{question:'How can we get in touch with you?',answer:'You can easily get in touch with us by visiting our website and using the contact form or contact details provided there. We are also available through email and phone, and our team is ready to assist you with any inquiries or requests you may have.'},{question:'Is the cost of your digital marketing services high?',answer:'Our digital marketing services are competitively priced, and we offer customized packages to suit various budgets. The cost can vary depending on the specific services and scope of the project. We work closely with clients to ensure our services align with their budget while delivering effective results.'},{question:'Why choose Digital Whopper as a Digital Marketing Company in Jaipur over others?',answer:'Digital Whopper stands out as a leading digital marketing company in Jaipur due to our commitment to delivering innovative solutions, a proven track record of success, and a team of experienced professionals. We prioritize client satisfaction, tailor strategies to individual needs, and stay up-to-date with industry trends to ensure our clients receive the best possible services.'}];

    const toggle=(i)=>{
        if(i===selected){
           return setSelected(null);
        }
        setSelected(i);
    }
  return (
    <div className='container my-5'>
        <h3 className='faq-t1'>FAQs</h3>
        <h2 className='faq-t2'>Frequently Asked Questions</h2>
        <div className="accodian">
        {data.map((item,i)=>(
            <div className="item" key={i}>                
                <div className={selected===i?'item-title active-accodian':'item-title '} onClick={()=>toggle(i)}>
                <h2 >{item.question}</h2> <span>{selected===i?'-':'+'}</span>
                </div>
                <div className={selected===i?'ans':'ans show-acodian'}><p>{item.answer}</p></div>
            </div>

        ))}
        </div>
    </div>
  )
}

export default Faq