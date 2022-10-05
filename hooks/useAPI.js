import axios from 'axios'

export async function GetProducts() {
  const data = axios.post('https://dev.pricepally.com/api/GetRecommendedProducts', {
    user_id: 'nothing',
    offset: '0',
  }, {
    headers: {
      'region': 'LG',
    }
  }
  )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return await data;

}