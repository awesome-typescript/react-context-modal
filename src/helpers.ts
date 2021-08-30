export const omit = (
  obj: { [key: number]: object },
  prop: number,
): { [p: number]: object } => {
  const { [prop]: modal, ...res } = obj

  return res
}
