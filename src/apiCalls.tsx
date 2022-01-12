export const fetchHomeArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${
    process.env.REACT_APP_API_KEY
  }`)
  .then(response => {
    checkResponse(response);
    return response.json();
  })
  .then(data => data.results)
}

export const fetchArticles = (sectionName: string) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${
    process.env.REACT_APP_API_KEY
  }`)
  .then(response => {
    checkResponse(response);
    return response.json();
  })
  .then(data => data.results)
}

const checkResponse = (response: Response) => {
  if (!response.ok) {
    console.log(response)
    if (response.status === 422 || response.status === 403) {
      throw new Error('Sorry, we can\'t find an account with these credentials. Please try again.')
    } else if (response.status === 404) {
      throw new Error('The page you are looking for doesn\'t exist')
    } else if (response.status >= 500) {
      throw new Error('We\'re having issues on our end. Please try again later.')
    } else {
      throw new Error('Please check your network connection')
    }
  }
}
