const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const padWithZeroes = (num: number): string => {
  if (num < 10) {
    return "0" + num;
  }

  return "" + num;
}

export const formatDate = (dateString: string): string => {
  const dt = new Date(dateString)

  const year = dt.getFullYear()
  const month = months[dt.getMonth()]
  const dayOfMonth = padWithZeroes(dt.getDate())
  const hour = padWithZeroes(dt.getHours())
  const minute = padWithZeroes(dt.getMinutes())

  return `${year} ${month} ${dayOfMonth}  ${hour}:${minute}`
}

