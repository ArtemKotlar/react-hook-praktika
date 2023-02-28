import { Field, Form, Formik } from 'formik';

export const MaterialForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', avatar: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">
            Ім'я
            <Field name="name" type="text" />
          </label>
          <label htmlFor="avatar">
            Аватар
            <Field name="avatar" type="text" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Додати інформацію
          </button>
        </Form>
      )}
    </Formik>
  );
};
