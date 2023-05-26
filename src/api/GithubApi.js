class GithubApi {
  static URL = "https://api.github.com";

  static async getPopularRepos (language) {
    return fetch(`${GithubApi.URL}/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        throw new Error(`Can not fetch user repos from server`);
      })
  }

  static getUser (userName) {
    return fetch(`${GithubApi.URL}/users/${userName}`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        throw new Error(`Can not fetch user ${userName} from server`);
      })
  }

  static getRepos (userName) {
    return fetch(`${GithubApi.URL}/users/${userName}/repos?per_page=100`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        throw new Error(`Can not fetch user repos from server`);
      })
  }

  static async getUsers (usersNames) {
    const users = await Promise.all(usersNames.map(user => {
      return this.getUser(user);
    }))

    return { users };
  }

  static async getPlayersRepos (userNames) {
    const repos = await Promise.all(userNames.map(user => {
      return this.getRepos(user);
    }))

    return { repos };
  }
}

export default GithubApi;
