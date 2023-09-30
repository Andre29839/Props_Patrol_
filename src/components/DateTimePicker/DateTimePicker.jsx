import 'react-datepicker/dist/react-datepicker.css';
import { format, isValid } from 'date-fns';
import { useField, useFormikContext } from 'formik';
import { StyledDateTime, IconStyled } from './DateTimePicker.styled';
import DatePicker from 'react-datepicker';

const DateTimePicker = ({ name }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <StyledDateTime>
      <DatePicker
        inputProps={{ readOnly: true }}
        selected={field.value ? new Date(field.value) : null}
        closeOnSelect={true}
        onChange={values => {
          if (isValid(values)) {
            setFieldValue(field.name, values, format(values, 'dd-MM-yyyy'));
          }
        }}
      />
      <IconStyled />
    </StyledDateTime>
  );
};

export default DateTimePicker;
