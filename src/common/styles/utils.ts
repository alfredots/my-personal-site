export const haveArrayProps = (props: string | string[], position: number) => {
  return props instanceof Array
    ? props[position] || props[props.length - 1]
    : props
}
