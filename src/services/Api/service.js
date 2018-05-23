import config from '../../config/app';

const { ratesSource } = config;
const { baseUrl, apiKey, base } = ratesSource;

class Api {

  fetchCurrencies = async () => {
    return await this.request({ url: '/api/currencies' });
  }

  fetchCurrencyRates = async () => {
    const response = await fetch(`${baseUrl}/${apiKey}/${base}`);
    const data = await response.json();
    if (data.result !== 'success') {
      throw new Error('Rates fetch failed');
    }
    return data;
  }

  request = async ({ url, method = 'GET', data, headers = {} }) => {

    const options = {
      method,
      headers: Object.assign({}, headers, {
        'content-type': 'application/json'
      })
    };

    if (method !== 'GET' && data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) throw new Error('Network problem')

    return await response.json();
  }

}

export default new Api();
