class Api {

  fetchCurrencies = async () => {
    return await this.request({ url: '/api/currencies' });
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
