export const hasuraClient = {
  async query(query: string, variables?: any) {
    const response = await fetch('https://starter-flutter.hasura.app/v1/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // "x-hasura-admin-secret": '',
        'x-hasura-role': 'guest',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    return await response.json()
  },
}
