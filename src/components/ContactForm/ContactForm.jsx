import { addContact } from 'redux/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts } from 'redux/selector';
import * as yup from 'yup'

export function ContactForm() {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        number: '',
    };
    
    const handleSubmit = (values, { resetForm }) => {  
        const newContact = {
            ...values,
        };

        if (
            contacts.find(
                ({ name }) =>
                    name.toLowerCase()===newContact.name.trim().toLowerCase()
            )
        ) {
            alert(`${newContact.name} is already here`);
            resetForm();
            return;
        }

        dispatch(addContact(newContact));
        resetForm();
    };

    const schema = yup.object({
    name: yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('This field is required'),
    number: yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
        'Phone number must be digits'
      )
      .required('This field is required'),
  });
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit = {handleSubmit}
        >
    
            <div className='ContactForm'>
       
                <Form
                    className='inputButton'>
    
                    <h2>Name</h2>
                    <label>
                        <Field className='InputField' 
                            type="text"
                            name="name"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required                      
                        /></label> 
                    <ErrorMessage name = 'name'/>
        
                    <h2>Number</h2>
                    <label>
                        <Field
            
                            type="tel"
                            name="number"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        /></label>   
                    <ErrorMessage name = 'number'/>
             
        
                    <button 
            
                        className='Button'
            
                        type='submit'>Add contact
        
                    </button>
        
                </Form>

    
            </div>
        </Formik>
    )
};
