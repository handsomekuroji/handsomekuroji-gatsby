import axios from 'axios'

export default async (url, callback) => {
  await axios
    .get(url)
    .then(res => {
      callback(res.data)
    })
    .catch(e => {
      console.log('Error occurred in API')
      console.log(e)
    })
}
