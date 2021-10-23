import { useField } from 'formik';

export const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
