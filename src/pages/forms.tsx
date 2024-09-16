import { useCallback, useState } from 'react'
import { Button, Card, FormContainer, Input } from '@components'
import { useOnChange } from '@utils/handleOnChange'

export const Forms = () => {
  const [formData, setFormData] = useState<any>({
    'input-password': 'option1',
    'input-text-checkbox': ['option1', 'option2'],
    'input-text-radio': 'option2',
    'input-text-toggle': ['option1', 'option2'],
    'input-text-select': 'option1',
    'input-text-select-multiple': ['option1', 'option3'],
  })

  const { handleOnChange, handleOnChangeMultiple } = useOnChange<typeof formData>(formData, setFormData)

  const reset = useCallback(() => {
    setFormData({
      'input-password': null,
      'input-text-checkbox': null,
      'input-text-radio': null,
      'input-text-toggle': null,
      'input-text-select': null,
      'input-text-select-multiple': null,
    })
  }, [formData])

  return (
    <Card>
      <FormContainer>
        <Input
          name="input-text"
          label="Field text"
          placeholder='Field with HTML props support'
          helpText="This component support all HTML Input proporties of native HTML 5"
        />

        <Input
          name="input-text-error"
          label="Field text with error validation"
          placeholder='Field with error'
          helpText="Error validation message"
          error
        />

        <div className="grid grid-cols-2 gap-6">
          <Input
            name="input-text-date"
            label="Date field"
            type='date'
          />

          <Input
            name="input-textdatetime"
            label="Date Time field"
            type='datetime-local'
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            name="input-password"
            label="Password"
            type='password'
            value={formData['input-password']}
            onChange={(e) => handleOnChange('input-password', e)}
          />

          <Input
            name="input-upload"
            label="File upload field"
            type='file'
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Input
            name="input-text-checkbox"
            label="Checkbox field"
            type='checkbox'
            value={formData['input-text-checkbox']}
            onChange={(e) => handleOnChangeMultiple('input-text-checkbox', e)}
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
          />

          <Input
            name="input-text-radio"
            label="Radio field"
            type='radio'
            value={formData['input-text-radio']}
            onChange={(e) => handleOnChange('input-text-radio', e)}
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
          />

          <Input
            name="input-text-toggle"
            label="Toggle"
            type='toggle'
            value={formData['input-text-toggle']}
            onChange={(e) => handleOnChangeMultiple('input-text-toggle', e)}
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
          />
        </div>

        <Input
          name="input-textarea"
          label="Textarea"
          placeholder="Textarea with support all attributes of HTML 5"
          helpText="Rows=4 - All inputs support optional help text and labels (titles)"
          type='textarea'
          rows={4}
        />

        <Input
          name="input-textarea-errors"
          label="Textarea with error"
          placeholder="Textarea with support all attributes of HTML 5"
          helpText="Textarea with support all attributes of HTML 5"
          type='textarea'
          error
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            name="input-text-select"
            label="Select"
            type='select'
            value={formData['input-text-select']}
            onChange={(e) => handleOnChange('input-text-select', e)}
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
            helpText="Select single"
          />

          <Input
            name="input-text-select-multiple"
            label="Select multiple"
            type='select'
            error
            value={formData['input-text-select-multiple']}
            onChange={(e) => handleOnChangeMultiple('input-text-select-multiple', e)}
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            isMulti
            helpText="Select multiple"
          />
        </div>

        <div>
          <Button>Confirm button</Button>
          <Button type="reset" color="bg-gray-600" onClick={reset}>Reset button</Button>
        </div>
      </FormContainer>
    </Card>
  )
}
