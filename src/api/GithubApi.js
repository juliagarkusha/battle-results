class GithubApi {
  static URL = "https://api.github.com";

  static getUser (userName) {
    // return fetch(`${GithubApi.URL}/users/${userName}`)
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
