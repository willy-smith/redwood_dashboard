import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const GradeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.grade?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="letter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Letter
        </Label>
        <TextField
          name="letter"
          defaultValue={props.grade?.letter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="letter" className="rw-field-error" />

        <Label
          name="percent"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Percent
        </Label>
        <NumberField
          name="percent"
          defaultValue={props.grade?.percent}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="percent" className="rw-field-error" />

        <Label
          name="courseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Course id
        </Label>
        <NumberField
          name="courseId"
          defaultValue={props.grade?.courseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="courseId" className="rw-field-error" />

        <Label
          name="studentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Student id
        </Label>
        <NumberField
          name="studentId"
          defaultValue={props.grade?.studentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="studentId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default GradeForm
