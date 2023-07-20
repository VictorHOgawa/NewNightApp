export const ConvertHour = (stringHour: string) => {

    const [hour, minute] = stringHour.split(':')
    const finalHour = minute != '00' ? Number(hour) + Number(minute) / 100 : Number(hour)
    return finalHour
}