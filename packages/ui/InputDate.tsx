interface DateProps {
  label: string
}

export const InputDate = ({label, ...rest}: DateProps) => (
  <input {...rest} type='date'/>
)