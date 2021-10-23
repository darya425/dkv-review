import { useField } from 'formik';

export const CustomTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea
        rows="5"
        className="text-input textarea"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
